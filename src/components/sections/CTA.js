"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-900/40 via-black to-black px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-700/30 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-700/20 blur-[120px]" />

            <h2 className="relative text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something scalable.
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm text-zinc-400 sm:text-base">
              Drop your email — I reply within one business day.
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-red-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500"
              >
                {sent ? (
                  <>
                    Sent <Check size={16} />
                  </>
                ) : (
                  <>
                    Let&apos;s Talk <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
