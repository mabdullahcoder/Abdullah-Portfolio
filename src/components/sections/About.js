"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data";

const icons = {
  code: Code2,
  cloud: Cloud,
  users: Users,
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-black py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            {about.eyebrow}
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Engineering products that are{" "}
            <span className="text-red-500">fast, reliable</span> and built to
            scale
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Portrait */}
          <Reveal direction="right">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="relative aspect-[6/5] overflow-hidden rounded-3xl border border-white/10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(239,68,68,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.2) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              >
                <Image
                  src="https://picsum.photos/seed/abdullah-about/700/900"
                  alt="Portrait of Abdullah"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              </div>

              {/* Corner accent */}
              <span className="pointer-events-none absolute -left-2 -top-2 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-red-500" />

              {/* Floating role card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-4 backdrop-blur-md sm:left-auto sm:w-auto"
              >
                <div>
                  <p className="font-heading text-sm font-semibold text-white">
                    Abdullah
                  </p>
                  <p className="mt-0.5 whitespace-nowrap text-xs text-zinc-500">
                    Full-Stack Software Engineer
                  </p>
                </div>
                <span className="flex items-center gap-2 text-[11px] font-medium text-zinc-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  Open
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal direction="left">
              <div className="space-y-4">
                {about.paragraphs.map((text) => (
                  <p
                    key={text}
                    className="text-sm leading-relaxed text-zinc-400 sm:text-base"
                  >
                    {text}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {about.highlights.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-5"
                    >
                      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.01] sm:w-auto"
                >
                  Let&apos;s work together
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  View my work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
