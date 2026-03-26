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

  const prompt = `You are a world-class restaurant branding expert AND menu consultant. A restaurant owner has shared details about their place. Generate a COMPLETE website — copy, branding, menu, and testimonials — that would make them say "YES, that's exactly us!"

RESTAURANT DETAILS:
- Name: "${formData.restaurantName}"
- Vibe/Personality: ${vibeDesc}
- Signature Dish: "${formData.signatureDish}"
- Location: "${formData.location}"
- Hours: "${formData.hours}"

Generate a JSON object with EXACTLY this structure:
{
  "heroHeadline": "A powerful, emotional headline (max 8 words) that captures the restaurant's soul. SPECIFIC to this restaurant.",
  "heroSubheadline": "A compelling sub-headline (max 20 words) that makes people want to visit RIGHT NOW.",
  "tagline": "A short 3-5 word tagline/motto for the restaurant (e.g. 'Where flavor meets soul')",
  "aboutParagraphs": [
    "First paragraph: The origin story (2-3 sentences).",
    "Second paragraph: The experience (2-3 sentences).",
    "Third paragraph: The invitation (2-3 sentences)."
  ],
  "colorPalette": [
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"},
    {"hex": "#HEXCODE", "name": "Color Name"}
  ],
  "sections": [
    {"title": "Creative Section Title", "description": "What it's about", "content": "The copy (2-3 sentences)"},
    {"title": "Creative Section Title", "description": "What it's about", "content": "The copy (2-3 sentences)"},
    {"title": "Creative Section Title", "description": "What it's about", "content": "The copy (2-3 sentences)"}
  ],
  "menu": [
    {
      "category": "Starters",
      "items": [
        {"name": "Dish Name", "description": "Short appetizing description", "price": "$12", "tag": "Popular"},
        {"name": "Dish Name", "description": "Short appetizing description", "price": "$10"},
        {"name": "Dish Name", "description": "Short appetizing description", "price": "$14"}
      ]
    },
    {
      "category": "Mains",
      "items": [
        {"name": "${formData.signatureDish}", "description": "Mouth-watering description of their signature dish", "price": "$24", "tag": "Signature"},
        {"name": "Dish Name", "description": "Short appetizing description", "price": "$22"},
        {"name": "Dish Name", "description": "Short appetizing description", "price": "$26"},
        {"name": "Dish Name", "description": "Short appetizing description", "price": "$20"}
      ]
    },
    {
      "category": "Desserts",
      "items": [
        {"name": "Dessert Name", "description": "Short appetizing description", "price": "$10"},
        {"name": "Dessert Name", "description": "Short appetizing description", "price": "$12"}
      ]
    },
    {
      "category": "Drinks",
      "items": [
        {"name": "Drink Name", "description": "Short description", "price": "$8"},
        {"name": "Drink Name", "description": "Short description", "price": "$12"},
        {"name": "Drink Name", "description": "Short description", "price": "$6"}
      ]
    }
  ],
  "testimonials": [
    {"name": "First Name L.", "text": "A genuine, specific review mentioning real details about the food and experience. 1-2 sentences.", "rating": 5},
    {"name": "First Name L.", "text": "Another genuine review. 1-2 sentences.", "rating": 5},
    {"name": "First Name L.", "text": "Another genuine review mentioning the signature dish. 1-2 sentences.", "rating": 4}
  ],
  "voiceTone": "A one-line description of the brand voice"
}

RULES:
- MENU: Create realistic, appetizing dishes that match the cuisine implied by the restaurant name, vibe, and signature dish. Prices should be realistic for the vibe (casual=$10-20, formal=$25-50, trendy=$15-30, traditional=$12-25). The signature dish MUST be in Mains with the tag "Signature".
- TESTIMONIALS: Write reviews that sound like real Google/Yelp reviews — specific, personal, mention actual dishes. Use first names with last initial.
- COLOR PALETTE: Match the vibe (warm for traditional, bold for trendy, muted for formal, bright for casual). First color = primary brand color.
- COPY: Write like a human. No corporate speak. Tone must match: ${vibeDesc}.
- TAGLINE: Short, memorable, could go on a t-shirt.
- Make "${formData.signatureDish}" the star everywhere — hero copy, menu, at least one testimonial.`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return JSON.parse(text);
}
