"use client";

import { useState, useCallback } from "react";
import { GeneratedBrief, IntakeFormData, MenuItem } from "@/types";

export interface EditableContent {
  restaurantName: string;
  heroHeadline: string;
  heroSubheadline: string;
  tagline: string;
  aboutParagraphs: string[];
  menu: { category: string; items: MenuItem[] }[];
  testimonials: { name: string; text: string; rating: number }[];
}

export function useEditableBrief(formData: IntakeFormData, brief: GeneratedBrief) {
  const [content, setContent] = useState<EditableContent>({
    restaurantName: formData.restaurantName,
    heroHeadline: brief.heroHeadline,
    heroSubheadline: brief.heroSubheadline,
    tagline: brief.tagline || "",
    aboutParagraphs: [...brief.aboutParagraphs],
    menu: brief.menu.map((c) => ({
      category: c.category,
      items: c.items.map((i) => ({ ...i })),
    })),
    testimonials: brief.testimonials.map((t) => ({ ...t })),
  });

  const set = useCallback(<K extends keyof EditableContent>(key: K, value: EditableContent[K]) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  }, []);

  const setAboutParagraph = useCallback((index: number, value: string) => {
    setContent((prev) => {
      const updated = [...prev.aboutParagraphs];
      updated[index] = value;
      return { ...prev, aboutParagraphs: updated };
    });
  }, []);

  const setMenuItem = useCallback(
    (catIndex: number, itemIndex: number, field: keyof MenuItem, value: string) => {
      setContent((prev) => {
        const menu = prev.menu.map((c, ci) => {
          if (ci !== catIndex) return c;
          return {
            ...c,
            items: c.items.map((item, ii) => {
              if (ii !== itemIndex) return item;
              return { ...item, [field]: value };
            }),
          };
        });
        return { ...prev, menu };
      });
    },
    []
  );

  const setMenuCategory = useCallback((catIndex: number, value: string) => {
    setContent((prev) => {
      const menu = prev.menu.map((c, ci) =>
        ci === catIndex ? { ...c, category: value } : c
      );
      return { ...prev, menu };
    });
  }, []);

  const setTestimonial = useCallback(
    (index: number, field: "name" | "text", value: string) => {
      setContent((prev) => {
        const testimonials = prev.testimonials.map((t, i) =>
          i === index ? { ...t, [field]: value } : t
        );
        return { ...prev, testimonials };
      });
    },
    []
  );

  return {
    content,
    set,
    setAboutParagraph,
    setMenuItem,
    setMenuCategory,
    setTestimonial,
  };
}
