import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 10000

app.use(cors())
app.use(express.json())

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')))

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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
