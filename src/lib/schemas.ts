import { z } from "zod";

export const intakeFormSchema = z.object({
  restaurantName: z.string().min(1, "Every great spot needs a name").max(100),
  vibe: z.string().min(1, "Pick a vibe — we'll match the design to it"),
  signatureDish: z.string().min(1, "What's the star of the menu?").max(200),
  location: z.string().min(1, "Where can hungry people find you?").max(300),
  hours: z.string().min(1, "When are the doors open?").max(200),
});

export const generatedBriefSchema = z.object({
  heroHeadline: z.string(),
  heroSubheadline: z.string(),
  tagline: z.string(),
  aboutParagraphs: z.array(z.string()).min(2).max(4),
  colorPalette: z
    .array(z.object({ hex: z.string(), name: z.string() }))
    .min(3)
    .max(6),
  sections: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        content: z.string(),
      })
    )
    .min(3)
    .max(4),
  menu: z.array(
    z.object({
      category: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          price: z.string(),
          tag: z.string().optional(),
        })
      ),
    })
  ),
  testimonials: z.array(
    z.object({
      name: z.string(),
      text: z.string(),
      rating: z.number(),
    })
  ),
  voiceTone: z.string(),
});
