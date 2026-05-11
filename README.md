# Rosi Apriyanto Architect Consultant Website

A complete Next.js App Router landing page for a professional architect and construction consultant. It includes:

- Hero section
- About section
- Services
- Selected projects
- Past clients
- Work process
- Testimonials
- Articles
- Vertical project inquiry form above the footer
- API route for form submission
- Responsive CSS styling

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build Locally

```bash
npm run build
npm run start
```

## Deploy to Vercel with GitHub

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Log in to Vercel.
4. Click **Add New > Project**.
5. Import your GitHub repository.
6. Keep the default Next.js settings.
7. Click **Deploy**.

## Deploy to Vercel with CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

## Contact Form Notes

The form posts to `/api/contact`. Currently, it validates the fields and logs the submission in the server terminal.

For real email delivery, connect an email provider such as Resend, SendGrid, or Nodemailer inside `app/api/contact/route.ts`.
