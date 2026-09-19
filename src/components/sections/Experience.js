"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section className="border-b border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Experience
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Professional milestones &amp; impact
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <Reveal direction="right">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            >
              <Image
                src="https://picsum.photos/seed/abdullah-exp/700/900"
                alt="Portrait of Abdullah at work"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
          </Reveal>

          <div className="relative flex flex-col gap-10 border-l border-white/10 pl-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.1} className="relative">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  className="absolute -left-[2.55rem] top-1.5 h-3 w-3"
                >
                  <motion.span
                    variants={{
                      hidden: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: { duration: 0.4, delay: i * 0.1 },
                      },
                    }}
                    className="block h-full w-full rounded-full bg-red-600 ring-4 ring-red-600/20"
                  />
                </motion.span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                  {job.company}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{job.period}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
