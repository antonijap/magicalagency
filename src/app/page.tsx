"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav — Notion-style: thin, quiet, lots of air */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-3xl mx-auto w-full">
        <span className="text-sm font-medium text-gray-900 tracking-tight">
          magical<span className="text-primary">.</span>
        </span>
        <Link
          href="/intake"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Get started &rarr;
        </Link>
      </nav>

      <div className="w-full max-w-3xl mx-auto px-6">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Hero — stripped back, Notion-minimal */}
      <main className="flex-1 flex items-center px-6">
        <div className="max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm text-gray-400 mb-6">
              Free &middot; 60 seconds &middot; No signup
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-5">
              Your restaurant deserves a website as good as your food.
            </h1>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Answer 4 quick questions about your place. We&apos;ll generate a
              custom homepage draft while you wait.
            </p>

            {/* CTA — clean, no shadow, Notion-style */}
            <Link
              href="/intake"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Start the Chef&apos;s Intake
              <ArrowRight size={14} />
            </Link>

            {/* Subtle trust line */}
            <p className="text-xs text-gray-300 mt-6">
              No payment needed &middot; AI-powered &middot; Shareable link
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
