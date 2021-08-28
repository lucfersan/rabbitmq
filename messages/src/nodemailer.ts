import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer'

type Params = {
  name: string
  email: string
}

export const sendMail = async ({ name, email }: Params): Promise<void> => {
  const { smtp, user, pass } = await createTestAccount()
  const transporter = createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: {
      user,
      pass
    }
  })
  const message = await transporter.sendMail({
    from: '<lfs@rabbitmq.com>',
    to: email,
    subject: 'Welcome to our platform!',
    text: `We're happy to welcome you ${name}!`
  })
  console.log('Message sent: %s', message.messageId);
  console.log('Preview URL: %s', getTestMessageUrl(message));
}