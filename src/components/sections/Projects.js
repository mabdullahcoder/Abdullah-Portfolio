"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
            Work
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Solutions &amp; Projects
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-white/10">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={i * 0.06}
              className="border-b border-white/10"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col gap-5 py-7 outline-none transition-colors duration-300 focus-visible:bg-white/[0.03] lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:py-8"
              >
                {/* Left: index + title block */}
                <div className="flex gap-4 sm:gap-6 lg:flex-1">
                  <span className="pt-1 font-mono text-xs text-zinc-600 transition-colors duration-300 group-hover:text-red-500 sm:pt-1.5 sm:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-extrabold uppercase leading-[1.1] tracking-tight text-white transition-colors duration-300 group-hover:text-red-500 sm:text-2xl lg:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {project.role} <span className="mx-1 text-red-500">·</span>{" "}
                      {project.year}
                    </p>
                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Right: tags + arrow */}
                <div className="flex items-center justify-between gap-6 pl-9 sm:pl-12 lg:-mt-[7px] lg:max-w-[28rem] lg:justify-end lg:pl-0">
                  <ul className="flex flex-wrap gap-2 lg:justify-end">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400 transition-colors duration-300 group-hover:border-red-500/50 group-hover:text-red-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-600 sm:h-12 sm:w-12">
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-rotate-45"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
