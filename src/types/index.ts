export interface IntakeFormData {
  restaurantName: string;
  vibe: string;
  signatureDish: string;
  location: string;
  hours: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface GeneratedBrief {
  heroHeadline: string;
  heroSubheadline: string;
  aboutParagraphs: string[];
  colorPalette: { hex: string; name: string }[];
  sections: { title: string; description: string; content: string }[];
  voiceTone: string;
  menu: MenuCategory[];
  testimonials: Testimonial[];
  tagline: string;
}

export interface StoredBrief {
  formData: IntakeFormData;
  brief: GeneratedBrief;
  createdAt: string;
}
