import { KeyRound, ClipboardList, Share2 } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: KeyRound,
    title: "Sign Up With Your Personal Code",
    description:
      "You own your data. Get a unique health code that only you control — decide who sees your information.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Log Measurements & Medication Times",
    description:
      "Enter BP, glucose and weight readings. Set consistent medication schedules and get automatic reminders.",
  },
  {
    step: "03",
    icon: Share2,
    title: "Share With Your Clinician & Act",
    description:
      "Your doctor reviews trends, flags follow-ups, and you get guided to the right care — no confusion.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Simple. Structured. Effective.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Three steps to take control of your chronic health management.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-14 left-[calc(50%+40px)] hidden h-0.5 w-[calc(100%-80px)] bg-border md:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
