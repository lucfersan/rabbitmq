import { Router } from 'express'
import { prisma } from '../prisma/client'
import bcrypt from 'bcrypt'
import amqp from 'amqplib'

const usersRouter = Router()

const main = async (): Promise<void> => {
  const connection = await amqp.connect('amqp://admin:admin@localhost:5672')
  const channel = await connection.createChannel()

  usersRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body
    const exists = await prisma.user.findUnique({ where: { email }})
    if (exists) {
      return res.status(400).json({ error: 'User already exists.'})
    }
    const hash = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: { 
        name, 
        email, 
        password: hash
      }
    })

    const sendMessageParams = JSON.stringify({ name, email })
    channel.sendToQueue('user_created', Buffer.from(sendMessageParams))
    return res.json(user)
  })
}

main().catch(console.error)

export { usersRouter }