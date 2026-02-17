import { Layers, Clock, EyeOff } from "lucide-react"

const problems = [
  {
    icon: Layers,
    title: "Scattered Information",
    description:
      "BP readings in one place, prescriptions in another, lab results somewhere else. Managing chronic health feels like chaos.",
  },
  {
    icon: Clock,
    title: "Missed Medications & Follow-ups",
    description:
      "Without consistent reminders, medications are skipped and follow-up appointments slip through the cracks.",
  },
  {
    icon: EyeOff,
    title: "Silent Progression",
    description:
      "Without visibility into trends, small changes go unnoticed until they become urgent problems.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">The Problem</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {"Managing chronic health shouldn't feel overwhelming"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Everyone deserves clear, simple tools to manage their health — but the reality is fragmented and confusing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
