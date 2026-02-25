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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`http://${window.location.hostname}:8000/api/waitlist`, {
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
        const errorData = await response.json()
        setError(errorData.detail || "Failed to join waitlist")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-secondary/50">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Join the VitalPath Waitlist
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Be among the first to experience the future of healthcare. Join our waitlist for exclusive early access.
        </p>

        {hasJoined ? (
          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                You're on the Waitlist!
              </h3>
              <p className="text-muted-foreground mb-4">
                Thank you for joining VitalPath. We'll notify you when we launch and send you exclusive updates.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your email for the registration completion link to provide additional details.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  localStorage.removeItem("waitlist_joined")
                  setHasJoined(false)
                }}
              >
                Clear and Test Again
              </Button>
            </div>
          </div>
        ) : (
          <>
            {submitted && (
              <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Welcome to VitalPath!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for joining our waitlist. Check your email for the registration completion link.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll send you updates and early access when we launch.
                  </p>
                </div>
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      disabled={loading}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-background"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <Label htmlFor="role" className="text-foreground">
                    I am a <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.role}
                    onValueChange={(value) => handleInputChange("role", value)}
                    disabled={loading}
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
                  <div className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                  I agree to receive launch updates. You keep control — we never share your health data without your consent.
                </p>

                <Button type="submit" size="lg" className="mt-6 w-full text-base" disabled={loading}>
                  {loading ? "Joining..." : "Join the Waitlist"}
                </Button>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  )
}
