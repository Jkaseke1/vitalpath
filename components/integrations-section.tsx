import { Bike, Calendar, FlaskConical, Users } from "lucide-react"

const integrations = [
  {
    icon: Bike,
    title: "Strava",
    description: "Connect Strava and see how exercise impacts your BP and glucose readings.",
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Add appointments to Google Calendar or iCal with one tap.",
  },
  {
    icon: FlaskConical,
    title: "Lab Results",
    description: "Receive e-reports and see lab values alongside your daily readings.",
  },
  {
    icon: Users,
    title: "Communities",
    description: "Join condition-based communities. Learn from others managing BP and diabetes.",
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Integrations</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Your Movement Counts. So Does Everything Else.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Connect activity, labs, calendars and communities — all in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-7 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
