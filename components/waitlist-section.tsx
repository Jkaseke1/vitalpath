"use client"

import { useState, useEffect } from "react"
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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [hasJoined, setHasJoined] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    role: "",
  })

  useEffect(() => {
    setMounted(true)
    const joined = localStorage.getItem("waitlist_joined")
    if (joined === "true") {
      setHasJoined(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`https://vitalpath-backend.onrender.com/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await response.json()
        localStorage.setItem("waitlist_joined", "true")
        setHasJoined(true)
        setSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.detail || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Could not connect to server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

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

        {hasJoined || submitted ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-card p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">{"You're on the Waitlist!"}</h3>
            <p className="text-sm text-muted-foreground">
              {"Thank you for joining! Please complete your registration below."}
            </p>
            <a
              href="https://form.typeform.com/to/i71YU2CD"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Complete Your Registration
            </a>
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
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="role" className="text-foreground">
                  I am a... <span className="text-destructive">*</span>
                </Label>
                <Select
                  required
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
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

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <p className="text-xs text-muted-foreground leading-relaxed">
                I agree to receive launch updates. You keep control — we never share your health data without your consent.
              </p>

              <Button type="submit" size="lg" className="w-full text-base" disabled={loading}>
                {loading ? "Joining..." : "Join the Waitlist"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
