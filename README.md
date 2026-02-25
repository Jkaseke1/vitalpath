# VitalPath Health App (MVP)

A landing page and waitlist for **VitalPath** — a health app that helps patients take control of their blood pressure, blood sugar, and weight by staying connected with their care team.

Built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **shadcn/ui**.

---

## Prerequisites

Make sure you have the following installed before getting started:

| Tool | Version | Install |
|------|---------|---------|
| **Node.js** | 18.18+ | [nodejs.org](https://nodejs.org/) |
| **pnpm** | 9+ | `npm install -g pnpm` |
| **Git** | any | [git-scm.com](https://git-scm.com/) |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/taffy707/Health-app-mvp.git
cd Health-app-mvp
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the dev server

```bash
pnpm dev
```

The app will start at **http://localhost:3000** (with Turbopack for fast refresh).

### 4. Build for production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
Health-app-mvp/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Top navigation bar
│   ├── hero.tsx            # Hero section with CTAs
│   ├── problem-section.tsx # Problem statement
│   ├── how-it-works.tsx    # How it works steps
│   ├── features-section.tsx# Feature highlights
│   ├── care-team.tsx       # Care team section
│   ├── integrations-section.tsx # Integrations
│   ├── faq-section.tsx     # FAQ accordion
│   ├── waitlist-section.tsx# Waitlist signup form
│   ├── footer.tsx          # Footer
│   └── ui/                 # shadcn/ui components (button, input, card, etc.)
├── hooks/                  # Custom React hooks
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── styles/
│   └── globals.css         # Additional global styles
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Create production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **UI Components:** shadcn/ui + Radix UI primitives
- **Fonts:** Inter + DM Sans (via `next/font`)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts (ready for dashboard phase)

---

## Landing Page Sections

The MVP landing page includes these sections in order:

1. **Navbar** — Navigation with brand logo
2. **Hero** — Headline, subheading, and waitlist CTA
3. **Problem** — Why current health tracking falls short
4. **How It Works** — Step-by-step user flow
5. **Features** — Key feature highlights
6. **Care Team** — Doctors, pharmacists, dieticians, fitness consultants
7. **Integrations** — Device and platform integrations
8. **FAQ** — Frequently asked questions
9. **Waitlist** — Email signup form (patient, doctor, pharmacist, dietician, fitness consultant)
10. **Footer** — Links and legal

---

## Adding Images

The hero section expects a dashboard image at:

```
public/images/hero-dashboard.jpg
```

Create a `public/images/` directory and add the image there. Next.js serves everything in `public/` at the root path.

---

## Deployment

The app is ready to deploy on **Vercel**:

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com/) and import the repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. Your site will be live at a `.vercel.app` URL

For custom domains, configure them in the Vercel dashboard under **Settings > Domains**.

---

## Environment Variables

No environment variables are required for the current MVP. When backend services are added (database, auth, email), create a `.env.local` file:

```bash
cp .env.example .env.local
```

`.env.local` is gitignored and will not be committed.

---

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request on GitHub

---

## Team

Built by **Joseph** and the **Pulse** team.
