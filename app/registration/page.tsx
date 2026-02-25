"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegistrationPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState<any>({})
  const [submitLoading, setSubmitLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (token) {
      fetch(`http://${window.location.hostname}:8000/api/waitlist/verify-token?token=${token}`)
        .then(res => res.json())
        .then(data => {
          if (data.user) {
            setUser(data.user)
            setFormData({ role: data.user.role })
          } else {
            setError("Invalid or expired link")
          }
        })
        .catch(() => setError("Failed to load user data"))
        .finally(() => setLoading(false))
    } else {
      setError("No token provided")
      setLoading(false)
    }
  }, [token])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitLoading(true)
    try {
      const response = await fetch(`http://${window.location.hostname}:8000/api/waitlist/update-registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, ...formData }),
      })
      if (response.ok) {
        setSuccess(true)
      } else {
        setError("Failed to update registration")
      }
    } catch {
      setError("Network error")
    } finally {
      setSubmitLoading(false)
    }
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  if (success) return <div className="min-h-screen flex items-center justify-center text-green-500">Registration completed successfully!</div>
  if (!user) return <div className="min-h-screen flex items-center justify-center">User not found</div>

  return (
    <div className="min-h-screen bg-secondary/50 py-20">
      <div className="mx-auto max-w-xl px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Complete Your Registration</h1>
          <p className="text-muted-foreground mt-2">Hi {user.firstName}, please provide additional details for your {user.role} registration.</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          {/* Conditional fields based on role */}
          {user.role === "patient" && (
            <>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="age">Age *</Label>
                <Input id="age" type="number" placeholder="Your age" required value={formData.age || ""} onChange={(e) => handleInputChange("age", e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="gender">Gender *</Label>
                <Select required value={formData.gender || ""} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="conditions">Medical Conditions (optional)</Label>
                <Input id="conditions" placeholder="e.g., Diabetes, Hypertension" value={formData.conditions || ""} onChange={(e) => handleInputChange("conditions", e.target.value)} />
              </div>
            </>
          )}

          {user.role === "doctor" && (
            <>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="specialty">Specialty *</Label>
                <Input id="specialty" placeholder="e.g., Cardiology, General Practice" required value={formData.specialty || ""} onChange={(e) => handleInputChange("specialty", e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input id="experience" type="number" placeholder="Years of experience" required value={formData.experience || ""} onChange={(e) => handleInputChange("experience", e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="hospital">Hospital/Clinic (optional)</Label>
                <Input id="hospital" placeholder="Hospital or clinic name" value={formData.hospital || ""} onChange={(e) => handleInputChange("hospital", e.target.value)} />
              </div>
            </>
          )}

          {user.role === "pharmacist" && (
            <>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="licenseNumber">License Number *</Label>
                <Input id="licenseNumber" placeholder="Pharmacy license number" required value={formData.licenseNumber || ""} onChange={(e) => handleInputChange("licenseNumber", e.target.value)} />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <Label htmlFor="pharmacyName">Pharmacy Name *</Label>
                <Input id="pharmacyName" placeholder="Name of pharmacy" required value={formData.pharmacyName || ""} onChange={(e) => handleInputChange("pharmacyName", e.target.value)} />
              </div>
            </>
          )}

          {user.role === "dietician" && (
            <div className="flex flex-col gap-2 mb-4">
              <Label htmlFor="dieticianCert">Certification (optional)</Label>
              <Input id="dieticianCert" placeholder="Dietician certification details" value={formData.dieticianCert || ""} onChange={(e) => handleInputChange("dieticianCert", e.target.value)} />
            </div>
          )}

          {user.role === "fitness" && (
            <div className="flex flex-col gap-2 mb-4">
              <Label htmlFor="fitnessCert">Certification (optional)</Label>
              <Input id="fitnessCert" placeholder="Fitness consultant certification" value={formData.fitnessCert || ""} onChange={(e) => handleInputChange("fitnessCert", e.target.value)} />
            </div>
          )}

          <Button type="submit" size="lg" className="w-full mt-6" disabled={submitLoading}>
            {submitLoading ? "Submitting..." : "Complete Registration"}
          </Button>
        </form>
      </div>
    </div>
  )
}
