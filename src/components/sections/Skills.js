"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Server, Cloud, BrainCircuit } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/data";

const icons = {
  layout: LayoutDashboard,
  server: Server,
  cloud: Cloud,
  brain: BrainCircuit,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-white/10 bg-black py-24"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Skills
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tools &amp; technologies I build with
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={(i % 2) * 0.1} className="group/skill">
                {/* Hairline that draws in red */}
                {/* The observed element is the static track; only the child scales.
                    (Observing a 1px element that is scaled to 0 made it flicker.) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: "some" }}
                  className="relative h-px bg-white/10"
                >
                  <motion.span
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: {
                        scaleX: 1,
                        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="absolute inset-y-0 left-0 w-24 origin-left bg-red-500 transition-[width] duration-500 group-hover/skill:w-full"
                  />
                </motion.div>

                <div className="mt-8 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                      {group.title}
                    </h3>
                  </div>
                  <span
                    className="select-none font-heading text-5xl font-extrabold leading-none text-transparent transition-[-webkit-text-stroke-color] duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.14)] group-hover/skill:[-webkit-text-stroke-color:#ef4444]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
                  {group.description}
                </p>

                <ul className="mt-8 space-y-6">
                  {group.items.map((skill, j) => {
                    return (
                      <li key={skill.name} className="group/row">
                        <div className="mb-2.5 flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium text-zinc-200 transition-colors group-hover/row:text-white">
                            {skill.name}
                          </span>
                          <span className="font-heading text-sm font-semibold text-red-500 transition-colors group-hover/row:text-red-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="h-1.5 rounded-full bg-white/10"
                          aria-hidden="true"
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: false, amount: 0.8 }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + j * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-red-700 to-red-500"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/5 pt-6 text-xs font-medium text-zinc-500">
                  {group.tools.map((tool, t) => (
                    <span key={tool} className="flex items-center gap-3">
                      {t > 0 && (
                        <span className="h-1 w-1 rounded-full bg-red-500/70" />
                      )}
                      <span className="transition-colors group-hover/skill:text-zinc-300">
                        {tool}
                      </span>
                    </span>
                  ))}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
