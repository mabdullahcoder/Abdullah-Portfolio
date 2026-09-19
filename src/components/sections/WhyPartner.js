"use client";

import { motion } from "framer-motion";
import { Shield, Gauge, Cloud, Target } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { whyPartner } from "@/data";

const icons = {
  shield: Shield,
  gauge: Gauge,
  cloud: Cloud,
  target: Target,
};

export default function WhyPartner() {
  return (
    <section id="why" className="border-b border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Why Partner With Me
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why Partner With Me Today And Always?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {whyPartner.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-700/20 blur-3xl"
                  />
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
