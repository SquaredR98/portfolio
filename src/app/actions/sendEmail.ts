'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the email schema for validation
const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type EmailFormData = z.infer<typeof emailSchema>;

export async function sendEmail(formData: EmailFormData) {
  try {
    // Validate the form data
    const validatedData = emailSchema.parse(formData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'your-email@example.com',
      subject: `Portfolio Contact: ${validatedData.subject}`,
      replyTo: validatedData.email,
      text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message };
    }
    console.error('Error in sendEmail:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
} 