import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            Coming Soon — Join the Waitlist
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance max-w-4xl">
            Take control of your blood pressure, blood sugar & weight
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Track readings, follow prescriptions, and stay connected with your care team. Your data, your code, your plan.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-base" asChild>
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base" asChild>
              <a href="#how-it-works">Learn How It Works</a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground max-w-lg">
            A secure app for patients managing BP, diabetes & obesity — with doctors, pharmacists & specialists.
          </p>

          {/* Hero visual */}
          <div className="mt-16 w-full max-w-4xl">
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/5">
              <img
                src="https://via.placeholder.com/800x400/cccccc/666666?text=Dashboard+Mockup"
                alt="VitalPath health app showing patient monitoring dashboard with BP, glucose and weight tracking"
                className="w-full rounded-xl"
              />
              {/* Floating metric cards */}
              <div className="absolute -left-4 bottom-12 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
                <p className="text-xs text-muted-foreground">Blood Pressure</p>
                <p className="font-heading text-2xl font-bold text-foreground">120/80</p>
                <p className="text-xs text-primary font-medium">Normal</p>
              </div>
              <div className="absolute -right-4 bottom-12 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
                <p className="text-xs text-muted-foreground">Glucose</p>
                <p className="font-heading text-2xl font-bold text-foreground">5.4 mmol/L</p>
                <p className="text-xs text-primary font-medium">In Range</p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
