import { Stethoscope, Pill, Apple, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  {
    icon: Stethoscope,
    title: "Doctors",
    subtitle: "Give Better Care Between Visits",
    points: [
      "Enter prescription, dose & target numbers",
      "Flag follow-up needed on lab results",
      "Review patient trends at a glance",
      "Prompt patients for appointments",
    ],
  },
  {
    icon: Pill,
    title: "Pharmacists",
    subtitle: "Clear Dosing. No Confusion.",
    points: [
      "Specify exact dosing hours & instructions",
      "Add counselling notes to patient timeline",
      "Ensure medication consistency",
      "Coordinate with prescribing doctor",
    ],
  },
  {
    icon: Apple,
    title: "Dieticians",
    subtitle: "Nutrition That Aligns With Treatment",
    points: [
      "Design meal plans for BP & diabetes",
      "Track dietary compliance",
      "Align nutrition with medication",
      "Share guidance in patient timeline",
    ],
  },
  {
    icon: Dumbbell,
    title: "Fitness Consultants",
    subtitle: "Movement That Supports Recovery",
    points: [
      "Create safe exercise programmes",
      "Monitor activity via Strava integration",
      "See how movement impacts readings",
      "Coordinate with care team",
    ],
  },
]

export function CareTeam() {
  return (
    <section id="care-team" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Your Care Team</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Whole-Body Support From Every Angle
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Clinicians, pharmacists and lifestyle specialists use the same dashboard — so your medication, counselling and activity sync into one plan.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <role.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{role.title}</h3>
              <p className="mt-1 text-sm text-primary font-medium">{role.subtitle}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {role.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-8 py-5 text-center">
            <p className="text-sm text-muted-foreground">Are you a clinician or health professional?</p>
            <Button className="mt-3" asChild>
              <a href="#waitlist">Request a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
