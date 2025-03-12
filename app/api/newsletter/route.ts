import { NextResponse } from "next/server"
import { z } from "zod"

// Define schema for validation
const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to receive emails",
  }),
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data
    const result = newsletterSchema.safeParse(body)

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const { email, name, consent } = result.data

    // In a real implementation, you would:
    // 1. Check if the email already exists in your database
    // 2. Add the email to your newsletter service (e.g., Mailchimp, ConvertKit)
    // 3. Store the user's consent for GDPR compliance

    // For now, we'll simulate a successful subscription
    // await subscribeToNewsletter(email, name)

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to the newsletter",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
      },
      { status: 500 },
    )
  }
}

