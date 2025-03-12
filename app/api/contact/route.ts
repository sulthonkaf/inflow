import { NextResponse } from "next/server"
import { z } from "zod"

// Define schema for validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  company: z.string().optional(),
  phone: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data
    const result = contactSchema.safeParse(body)

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

    const { name, email, subject, message, company, phone } = result.data

    // In a real implementation, you would:
    // 1. Store the contact request in your database
    // 2. Send an email notification to your team
    // 3. Send a confirmation email to the user

    // For now, we'll simulate a successful contact submission
    // await sendContactEmail({ name, email, subject, message, company, phone })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!",
    })
  } catch (error) {
    console.error("Contact form error:", error)

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

