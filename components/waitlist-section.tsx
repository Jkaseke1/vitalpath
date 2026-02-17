"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Early Access</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Be the first to try it
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
            {"Join our waitlist and we'll notify you when VitalPath launches."}
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-card p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">{"You're on the list!"}</h3>
            <p className="text-sm text-muted-foreground">
              {"We'll be in touch when VitalPath is ready. Keep an eye on your inbox."}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-lg"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstName" className="text-foreground">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  placeholder="Your first name"
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-foreground">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="role" className="text-foreground">
                  I am a... <span className="text-destructive">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="role" className="bg-background">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="pharmacist">Pharmacist</SelectItem>
                    <SelectItem value="dietician">Dietician</SelectItem>
                    <SelectItem value="fitness">Fitness Consultant</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                I agree to receive launch updates. You keep control — we never share your health data without your consent.
              </p>

              <Button type="submit" size="lg" className="w-full text-base">
                Join the Waitlist
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
