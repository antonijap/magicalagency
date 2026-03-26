import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magical — Restaurant Website Generator",
  description:
    "Answer 4 questions. Get a free homepage draft for your restaurant in 60 seconds. No tech skills needed.",
  openGraph: {
    title: "Magical — Restaurant Website Generator",
    description:
      "Your restaurant deserves a website as good as your food. Get a free draft in 60 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
