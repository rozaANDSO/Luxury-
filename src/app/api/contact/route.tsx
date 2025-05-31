import { z, ZodError } from "zod";
import { NextResponse } from "next/server";
// Define schema for validation
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const data = ContactSchema.parse(body);

    // Example: send email
    // await sendEmail(data);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
