import express from 'express'
import { sendMail } from './nodemailer'
import amqp from 'amqplib'

const app = express()

app.use(express.json())

const main = async (): Promise<void> => {
  const connection = await amqp.connect('amqp://admin:admin@localhost:5672')
  const channel = await connection.createChannel()

  await channel.assertQueue('user_created', { durable: false })
  await channel.consume('user_created', async msg => {
    if (msg) {
      const { name, email } = JSON.parse(msg.content.toString())
      await sendMail({ name, email })
    }
  }, { noAck: true })
  app.listen(3334, () => console.log('Server running on port 3334 🔥'))
}

main().catch(console.error)
