import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 5000)

app.use(cors())
app.use(express.json())

const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS']

function ensureEnvConfigured() {
  const missing = requiredEnvVars.filter((key) => !process.env[key])
  if (missing.length > 0) {
    return `Missing environment variables: ${missing.join(', ')}`
  }
  return null
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'contact-mail-api' })
})

app.post('/api/contact', async (req, res) => {
  const envError = ensureEnvConfigured()
  if (envError) {
    return res.status(500).json({ error: `${envError}. Please configure .env before sending mail.` })
  }

  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const receiver = process.env.CONTACT_RECEIVER || process.env.SMTP_USER
  const transporter = createTransporter()

  const mailOptions = {
    from: `Asvix Contact Form <${process.env.SMTP_USER}>`,
    to: receiver,
    subject: `[Asvix] ${subject}`,
    replyTo: email,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ ok: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Mail error:', error.message)
    return res.status(500).json({ error: 'Could not send your message right now.' })
  }
})

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`)
})
