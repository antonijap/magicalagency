export interface IntakeFormData {
  restaurantName: string;
  vibe: string;
  signatureDish: string;
  location: string;
  hours: string;
}

export interface GeneratedBrief {
  heroHeadline: string;
  heroSubheadline: string;
  aboutParagraphs: string[];
  colorPalette: { hex: string; name: string }[];
  sections: { title: string; description: string; content: string }[];
  voiceTone: string;
}

export interface StoredBrief {
  formData: IntakeFormData;
  brief: GeneratedBrief;
  createdAt: string;
}
