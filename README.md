# Asvix — Portfolio Website

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create env file for backend mail
copy .env.example .env

# 3. Run frontend + backend together
npm run dev:full
```

Then open http://localhost:5173 in your browser.

## Contact Form (End-to-End)

The contact page is available at:

- `/contact`

It submits to backend endpoint:

- `POST /api/contact`

Backend runs on port `5000` and Vite proxies `/api/*` to it in development.

### Required `.env` values

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER=hello@asvix.com
```

If you use Gmail, generate an app password and use it as `SMTP_PASS`.

## How To Add MediBot / DigiLab Pictures

Project preview images are loaded from:

- `public/projects/medibot-ai.svg`
- `public/projects/digilab.svg`

Replace those files with your real screenshots. You can keep the same names and use `.svg`, `.jpg`, `.jpeg`, `.png`, or `.webp`.

If you change file names or extension, update these paths in:

- `src/components/Projects.jsx`

Example:

```js
imagePath: '/projects/medibot-ai.png'
```

## Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS** (dark/light mode via class strategy)
- **Express + Nodemailer** (contact email backend)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** — Syne (display) + DM Sans (body)

## Features
- 🌙 Dark (Space Blue) / ☀️ Light (White) theme toggle
- Animated starfield canvas in hero
- Scroll-triggered project reveals
- Responsive across all screen sizes
- Browser mockups for each project
- Stats, services & CTA sections
