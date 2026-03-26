import { NextRequest, NextResponse } from "next/server";
import { intakeFormSchema, generatedBriefSchema } from "@/lib/schemas";
import { generateBrief } from "@/lib/gemini";
import { saveBrief } from "@/lib/redis";
import { StoredBrief } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const parsed = intakeFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // Generate brief via Gemini
    const rawBrief = await generateBrief(parsed.data);

    // Validate Gemini output
    const briefParsed = generatedBriefSchema.safeParse(rawBrief);
    if (!briefParsed.success) {
      console.error("Gemini output validation failed:", briefParsed.error);
      return NextResponse.json(
        { error: "Generation produced unexpected results. Please try again." },
        { status: 500 }
      );
    }

    // Generate unique ID
    const id = crypto.randomUUID().split("-")[0]; // Short 8-char ID

    // Store in Redis
    const storedData: StoredBrief = {
      formData: parsed.data,
      brief: briefParsed.data,
      createdAt: new Date().toISOString(),
    };

    await saveBrief(id, storedData);

    return NextResponse.json({ id });
  } catch (error) {
    console.error("Generate brief error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
