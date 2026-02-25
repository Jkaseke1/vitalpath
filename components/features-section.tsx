import {
  Activity,
  TrendingUp,
  Timer,
  Bell,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Self-Monitor",
    description:
      "Enter BP, glucose and weight. View past readings at a glance. Spot patterns before problems.",
  },
  {
    icon: TrendingUp,
    title: "See Your Trends",
    description:
      "See how your body responds over time. Small changes matter — we show you the trend, not just the number.",
  },
  {
    icon: Timer,
    title: "Built for Consistency",
    description:
      "Every prescription prompts you to pick consistent dosing times. The app keeps you on track — every day.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "If your doctor flags a follow-up, you're notified. If readings cross critical limits, you're alerted.",
  },
  {
    icon: CalendarCheck,
    title: "Never Miss a Follow-Up",
    description:
      "Book, reschedule and track appointments inside the app. Automatic reminders. Everything in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Your Data. Your Code.",
    description:
      "Every patient gets a personal health code. You decide who sees your information — no sharing without consent.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Features</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Everything you need to feel in control
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Designed specifically for people managing blood pressure, blood sugar and weight.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
