"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ProjectDetail({ project, prev, next, position, total }) {
  return (
    <article className="bg-black">
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(239,68,68,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.25) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 80% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 80% 0%, black 30%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 pb-7 pt-7 sm:px-8 sm:pt-8">
          <Reveal className="flex items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to projects
            </Link>
            {position && total && (
              <span className="font-mono text-xs text-zinc-600">
                {String(position).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            )}
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Case Study
            </p>
            <h1 className="mt-1.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {project.overview}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 sm:grid-cols-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Role
                </p>
                <p className="mt-1.5 text-sm font-medium text-white">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Year
                </p>
                <p className="mt-1.5 text-sm font-medium text-white">
                  {project.year}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Stack
                </p>
                <p className="mt-1.5 text-sm font-medium text-white">
                  {project.tags.join(", ")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-9">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Key Outcomes
          </p>
          <h2 className="mt-1.5 text-lg font-semibold text-white sm:text-xl">
            What shipped &amp; what it moved
          </h2>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {project.highlights.map((point, i) => (
            <Reveal key={point} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-zinc-950 p-5 transition-colors duration-300 hover:border-red-500/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600/15 text-[11px] font-semibold text-red-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[13px] leading-relaxed text-zinc-300">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-900/40 via-black to-black px-6 py-6 text-center sm:px-10">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-700/30 blur-[110px]" />
            <h3 className="relative text-lg font-semibold text-white sm:text-xl">
              Have a similar problem to solve?
            </h3>
            <p className="relative mx-auto mt-2 max-w-md text-sm text-zinc-400">
              Let&apos;s talk through the architecture and scope it together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative mt-5 inline-block"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-950 p-5 transition-colors hover:border-red-500/40"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                <ArrowLeft
                  size={13}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Previous
              </span>
              <span className="mt-2 text-sm font-semibold text-white">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end rounded-2xl border border-white/10 bg-zinc-950 p-5 text-right transition-colors hover:border-red-500/40"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Next
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
              <span className="mt-2 text-sm font-semibold text-white">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}
