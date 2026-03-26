export interface VibeTheme {
  // Fonts
  headingFont: string; // Tailwind class
  // Backgrounds
  pageBg: string;
  heroBg: string;
  heroOverlay: string;
  sectionAltBg: string;
  menuBg: string;
  footerBg: string;
  ctaBg: string;
  // Text colors
  headingColor: string;
  bodyColor: string;
  mutedColor: string;
  heroTextColor: string;
  // Borders & shapes
  borderRadius: string;
  cardRadius: string;
  buttonRadius: string;
  buttonStyle: "outline" | "filled" | "rounded";
  // Spacing
  sectionPadding: string;
  // Hero
  heroHeight: string;
  heroAlign: "center" | "left";
  // Menu style
  menuAlign: "center" | "left";
  // Nav style
  navStyle: "centered" | "left" | "minimal";
  // Label style
  labelTracking: string;
  // Overall mood
  mood: "warm" | "dark" | "bright" | "bold";
}

export const vibeThemes: Record<string, VibeTheme> = {
  casual: {
    headingFont: "font-sans",
    pageBg: "#FFFFFF",
    heroBg: "#f8f5f0",
    heroOverlay: "bg-black/20",
    sectionAltBg: "#faf8f5",
    menuBg: "#2c2c2c",
    footerBg: "#1a1a1a",
    ctaBg: "#f8f5f0",
    headingColor: "text-gray-900",
    bodyColor: "text-gray-500",
    mutedColor: "text-gray-400",
    heroTextColor: "text-white",
    borderRadius: "rounded-2xl",
    cardRadius: "rounded-xl",
    buttonRadius: "rounded-full",
    buttonStyle: "rounded",
    sectionPadding: "py-24 md:py-32",
    heroHeight: "h-[80vh] min-h-[500px]",
    heroAlign: "center",
    menuAlign: "left",
    navStyle: "left",
    labelTracking: "tracking-[0.15em]",
    mood: "warm",
  },

  formal: {
    headingFont: "font-serif",
    pageBg: "#0f0f0f",
    heroBg: "#0a0a0a",
    heroOverlay: "bg-black/50",
    sectionAltBg: "#141414",
    menuBg: "#0a0a0a",
    footerBg: "#050505",
    ctaBg: "#141414",
    headingColor: "text-white",
    bodyColor: "text-gray-400",
    mutedColor: "text-gray-600",
    heroTextColor: "text-white",
    borderRadius: "rounded-none",
    cardRadius: "rounded-none",
    buttonRadius: "rounded-none",
    buttonStyle: "outline",
    sectionPadding: "py-32 md:py-44",
    heroHeight: "h-screen min-h-[700px]",
    heroAlign: "center",
    menuAlign: "center",
    navStyle: "centered",
    labelTracking: "tracking-[0.35em]",
    mood: "dark",
  },

  trendy: {
    headingFont: "font-sans",
    pageBg: "#FFFFFF",
    heroBg: "#111111",
    heroOverlay: "bg-black/30",
    sectionAltBg: "#f5f5f5",
    menuBg: "#111111",
    footerBg: "#111111",
    ctaBg: "#f5f5f5",
    headingColor: "text-gray-900",
    bodyColor: "text-gray-500",
    mutedColor: "text-gray-400",
    heroTextColor: "text-white",
    borderRadius: "rounded-lg",
    cardRadius: "rounded-lg",
    buttonRadius: "rounded-lg",
    buttonStyle: "filled",
    sectionPadding: "py-24 md:py-32",
    heroHeight: "h-[85vh] min-h-[600px]",
    heroAlign: "left",
    menuAlign: "left",
    navStyle: "left",
    labelTracking: "tracking-[0.2em]",
    mood: "bold",
  },

  traditional: {
    headingFont: "font-serif",
    pageBg: "#FAF7F2",
    heroBg: "#1a1a1a",
    heroOverlay: "bg-black/40",
    sectionAltBg: "#f4efe8",
    menuBg: "#141414",
    footerBg: "#0f0f0f",
    ctaBg: "#f4efe8",
    headingColor: "text-gray-900",
    bodyColor: "text-gray-500",
    mutedColor: "text-gray-400",
    heroTextColor: "text-white",
    borderRadius: "rounded-none",
    cardRadius: "rounded-sm",
    buttonRadius: "rounded-none",
    buttonStyle: "outline",
    sectionPadding: "py-32 md:py-40",
    heroHeight: "h-[90vh] min-h-[600px]",
    heroAlign: "center",
    menuAlign: "center",
    navStyle: "centered",
    labelTracking: "tracking-[0.3em]",
    mood: "warm",
  },
};

export function getTheme(vibe: string): VibeTheme {
  return vibeThemes[vibe] || vibeThemes.traditional;
}
