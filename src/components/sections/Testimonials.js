"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data";

const AUTO_ADVANCE_MS = 1500;
const STEP = 280;

function Card({ person }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
    >
      <Image
        src={person.image}
        alt={person.name}
        fill
        sizes="224px"
        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-semibold text-white">{person.name}</p>
        <p className="text-xs text-zinc-400">{person.role}</p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const loop = [...testimonials, ...testimonials];

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const setWidth = track.scrollWidth / 2;
    let target = track.scrollLeft + dir * STEP;

    if (target >= setWidth) {
      track.scrollLeft -= setWidth;
      target -= setWidth;
    } else if (target < 0) {
      track.scrollLeft += setWidth;
      target += setWidth;
    }

    track.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scroll(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="impact" className="border-b border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
              Impact
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineering Impact &amp; Client Feedback
            </h2>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((person, i) => (
            <Reveal
              key={person.name}
              delay={i * 0.06}
              className="w-56 shrink-0 snap-start"
            >
              <Card person={person} />
            </Reveal>
          ))}
          {loop.slice(testimonials.length).map((person, i) => (
            <div
              key={`${person.name}-dup-${i}`}
              aria-hidden="true"
              className="w-56 shrink-0 snap-start"
            >
              <Card person={person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
