import { NextRequest } from 'next/server'
import { addToWaitlist } from '@/backend/waitlist'
import { z } from 'zod'

const waitlistSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  email: z.string().email('Invalid email address'),
  role: z.string().min(1, 'Role is required'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = waitlistSchema.parse(body)
    const entry = await addToWaitlist(validated)
    return Response.json({ success: true, entry }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    console.error('Waitlist submission error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
