import { GoogleGenerativeAI } from "@google/generative-ai";
import { IntakeFormData } from "@/types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateBrief(formData: IntakeFormData) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.8,
      maxOutputTokens: 8192,
    },
  });

  const vibeDescriptions: Record<string, string> = {
    casual: "laid-back, friendly, approachable",
    formal: "elegant, sophisticated, refined",
    trendy: "bold, energetic, modern",
    traditional: "warm, nostalgic, authentic",
  };

  const vibeDesc = vibeDescriptions[formData.vibe] || formData.vibe;

  const prompt = `You are a world-class restaurant branding expert. A restaurant owner has shared details about their place. Generate website copy and branding that would make them say "YES, that's exactly us!"

RESTAURANT DETAILS:
- Name: "${formData.restaurantName}"
- Vibe/Personality: ${vibeDesc}
- Signature Dish: "${formData.signatureDish}"
- Location: "${formData.location}"
- Hours: "${formData.hours}"

Generate a JSON object with EXACTLY this structure:
{
  "heroHeadline": "A powerful, emotional headline (max 8 words) that captures the restaurant's soul. Not generic — make it SPECIFIC to this restaurant.",
  "heroSubheadline": "A compelling sub-headline (max 20 words) that makes people want to visit RIGHT NOW.",
  "aboutParagraphs": [
    "First paragraph: The origin story — why this place exists, written in the restaurant's voice (${vibeDesc}). 2-3 sentences.",
    "Second paragraph: What makes the experience special — the atmosphere, the people, the feeling. 2-3 sentences.",
    "Third paragraph: The invitation — why someone should come in TODAY. Create urgency without being pushy. 2-3 sentences."
  ],
  "colorPalette": [
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"}
  ],
  "sections": [
    {"title": "Section 1 Title", "description": "What this section is about", "content": "The actual copy for this section (2-3 sentences)"},
    {"title": "Section 2 Title", "description": "What this section is about", "content": "The actual copy for this section (2-3 sentences)"},
    {"title": "Section 3 Title", "description": "What this section is about", "content": "The actual copy for this section (2-3 sentences)"}
  ],
  "voiceTone": "A one-line description of the brand voice to use consistently"
}

RULES:
- The color palette should MATCH the vibe (warm tones for traditional, bold for trendy, muted for formal, bright for casual)
- The first color should be the primary brand color — something distinctive, not generic
- Section titles should be creative, not generic ("Our Story" is boring, "How It All Started Over a Burnt Risotto" is great)
- Make the signature dish "${formData.signatureDish}" the HERO — mention it prominently
- Write like a human, not a robot. No corporate speak. No "Welcome to our establishment."
- The tone must match the vibe: ${vibeDesc}`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return JSON.parse(text);
}
