"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Shield, Palette } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
        <span className="text-xl font-bold tracking-tighter text-gray-900">
          magical<span className="text-primary">.</span>
        </span>
        <Link
          href="/intake"
          className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center px-6">
        <div className="max-w-3xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            >
              <Sparkles size={14} />
              Free in 60 seconds. No strings attached.
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-[0.95] mb-6">
              Your restaurant
              <br />
              deserves a website
              <br />
              <span className="text-primary">as good as</span>
              <br />
              your food.
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Answer 4 quick questions about your place. We&apos;ll generate a
              custom homepage draft while you wait.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/intake"
                className="inline-flex items-center gap-3 bg-primary text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Start the Chef&apos;s Intake
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-gray-300"
            >
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                60-second draft
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} />
                No payment needed
              </span>
              <span className="flex items-center gap-1.5">
                <Palette size={14} />
                AI-powered design
              </span>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer hint */}
      <div className="px-6 py-8 text-center">
        <p className="text-xs text-gray-200">
          Trusted by 200+ restaurants. Powered by AI.
        </p>
      </div>
    </div>
  );
}
