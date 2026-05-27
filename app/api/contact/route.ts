import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  // Remove potentially dangerous characters but keep basic formatting
  return input
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/javascript:/gi, "") // Remove javascript: URLs
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim()
    .slice(0, 5000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, projectType, message, website } = body;

    // Honeypot check - if website field is filled, it's likely a bot
    if (website) {
      // Silent success to trick bots
      return NextResponse.json(
        { success: true, message: "Thank you for your message!" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : "",
      projectType: projectType ? sanitizeInput(projectType) : "",
      message: sanitizeInput(message),
    };

    // Log the contact request (in production, this would send an email or save to database)
    console.log("Contact form submission:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! We'll be in touch soon.",
        data: {
          name: sanitizedData.name,
          email: sanitizedData.email,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean up every 5 minutes