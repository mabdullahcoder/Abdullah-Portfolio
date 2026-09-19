"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-black"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239,68,68,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 70% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 70% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-red-700/30 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 pb-40 pt-16 sm:px-8 sm:pt-24 sm:pb-20 lg:grid-cols-2 lg:gap-0 lg:pb-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[12ch] text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:max-w-none sm:text-5xl lg:text-6xl"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              scalable
            </span>{" "}
            architecture for modern{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              enterprises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[18rem] text-base text-zinc-400 sm:max-w-lg sm:text-lg"
          >
            Full-Stack Software Engineer specializing in performant React
            applications, robust Node.js backend systems, and cloud
            optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-col gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.01] sm:w-auto"
            >
              Let&apos;s Talk
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:hidden"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src="/portrait.png"
              alt="Portrait of Abdullah"
              fill
              priority
              sizes="384px"
              className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(220,38,38,0.35)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] max-w-2xl lg:block"
      >
        <Image
          src="/portrait.png"
          alt="Portrait of Abdullah"
          fill
          priority
          sizes="44vw"
          className="object-contain object-right-bottom drop-shadow-[0_30px_60px_rgba(220,38,38,0.35)]"
        />
      </motion.div>
    </section>
  );
}
