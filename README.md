# VitalPath Health App (MVP)

A landing page, waitlist, and registration system for **VitalPath** — a health app that helps patients take control of their blood pressure, blood sugar, and weight by staying connected with their care team.

**Frontend:** Next.js 16, React 19, Tailwind CSS, shadcn/ui
**Backend:** Python FastAPI, Pydantic, Gmail SMTP

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| **Node.js** | 18.18+ | [nodejs.org](https://nodejs.org/) |
| **pnpm** | 9+ | `npm install -g pnpm` |
| **Python** | 3.10–3.12 | [python.org](https://www.python.org/) |
| **Git** | any | [git-scm.com](https://git-scm.com/) |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/taffy707/Health-app-mvp.git
cd Health-app-mvp
```

### 2. Frontend — Install & run

```bash
pnpm install
pnpm dev
```

Frontend starts at **http://localhost:3000** (Turbopack).

### 3. Backend — Install & run

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

Backend starts at **http://0.0.0.0:8000**.

> **Note:** Both frontend and backend must be running at the same time for the waitlist and registration to work.

---

## Project Structure

```
Health-app-mvp/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles
│   └── registration/
│       └── page.tsx            # Registration form page (token-based)
├── components/
│   ├── navbar.tsx              # Top navigation bar
│   ├── hero.tsx                # Hero section with CTAs
│   ├── problem-section.tsx     # Problem statement
│   ├── how-it-works.tsx        # How it works steps
│   ├── features-section.tsx    # Feature highlights
│   ├── care-team.tsx           # Care team section
│   ├── integrations-section.tsx# Integrations
│   ├── faq-section.tsx         # FAQ accordion
│   ├── waitlist-section.tsx    # Waitlist signup form with localStorage status
│   ├── footer.tsx              # Footer
│   └── ui/                     # shadcn/ui components
├── backend/
│   ├── main.py                 # FastAPI app entry point with CORS config
│   ├── requirements.txt        # Python dependencies
│   ├── controllers/
│   │   └── waitlist.py         # API endpoints (join, verify-token, update-registration)
│   ├── services/
│   │   └── waitlist_service.py # Business logic, email sending, token generation
│   ├── models/
│   │   └── waitlist.py         # WaitlistEntry Pydantic model
│   ├── config/
│   │   └── settings.py         # Email credentials, file paths
│   ├── db/
│   │   └── connection.py       # Database connection (future use)
│   └── data/
│       └── waitlist.json       # Local JSON storage (gitignored)
├── hooks/                      # Custom React hooks
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Frontend dependencies and scripts
```

---

## Waitlist & Registration Flow

1. User fills in the **waitlist form** (firstName, email, role) on the landing page
2. Backend saves the entry to `backend/data/waitlist.json` and generates a unique token
3. A **confirmation email** is sent to the user with a link to the Typeform registration form
4. The page shows a **"You're on the Waitlist!"** confirmation that persists across page refreshes (via localStorage)
5. User clicks the email link and completes the full registration on Typeform

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/waitlist` | Join the waitlist |
| `GET` | `/api/waitlist/verify-token?token=...` | Verify a registration token |
| `POST` | `/api/waitlist/update-registration` | Update registration details |
| `GET` | `/api/waitlist` | List all waitlist entries |
| `GET` | `/config` | Returns current server IP |

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start frontend dev server with Turbopack |
| `pnpm build` | Create production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |

---

## Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React

### Backend
- **Framework:** FastAPI (Python)
- **Validation:** Pydantic v2
- **Email:** Gmail SMTP (smtplib + SSL)
- **Storage:** JSON file (`backend/data/waitlist.json`)
- **Token generation:** `secrets.token_urlsafe(32)`

---

## Environment & Configuration

Backend email credentials are set in `backend/config/settings.py`:

```python
EMAIL_USER = "your-email@gmail.com"
EMAIL_PASSWORD = "your-gmail-app-password"
```

> Use a **Gmail App Password** (not your account password). Generate one at: Google Account > Security > 2-Step Verification > App passwords.

The backend automatically detects the current network IP for registration email links using `socket`.

The frontend automatically uses `window.location.hostname` for API calls — no hardcoded IPs needed.

---

## Landing Page Sections

1. **Navbar** — Navigation with brand logo
2. **Hero** — Headline, subheading, and waitlist CTA
3. **Problem** — Why current health tracking falls short
4. **How It Works** — Step-by-step user flow
5. **Features** — Key feature highlights
6. **Care Team** — Doctors, pharmacists, dieticians, fitness consultants
7. **Integrations** — Device and platform integrations
8. **FAQ** — Frequently asked questions
9. **Waitlist** — Signup form with role selection and confirmation state
10. **Footer** — Links and legal

---

## Deployment

### Frontend — Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com/) and import the repo
3. Vercel auto-detects Next.js — click **Deploy**

### Backend — any Python host (Railway, Render, etc.)
1. Set environment variables for email credentials
2. Run: `uvicorn main:app --host 0.0.0.0 --port 8000`

---

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push taffy master`
5. Open a Pull Request on GitHub

---

## Team

Built by **Joseph Kaseke** and the **Pulse** team.
