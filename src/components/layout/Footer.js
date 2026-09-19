"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data";

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedinIn },
  { label: "X", href: "https://twitter.com", Icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between"
        >
          <div className="max-w-xl">
            <Link href="/" aria-label="Abdullah — home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              Full-Stack Software Engineer building scalable, production-grade
              systems for modern enterprises.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
              {navLinks.map((link, i) => (
                <Fragment key={link.href}>
                  {i > 0 && (
                    <li
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-red-500"
                    />
                  )}
                  <li>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>

          <div className="sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Connect
            </p>
            <a
              href="mailto:mabdullah13954@gmail.com"
              className="mt-4 block break-all text-lg font-medium text-zinc-300 transition-colors hover:text-white sm:text-xl"
            >
              mabdullah13954@gmail.com
            </a>
            <div className="mt-4 flex gap-2.5 sm:justify-end">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-red-500 hover:text-red-500"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-14 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Abdullah. All rights reserved.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="select-none px-5 pb-4 text-center leading-none"
      >
        <span
          className="inline-block cursor-default whitespace-nowrap font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)] transition-[-webkit-text-stroke-color,filter] duration-500 hover:[-webkit-text-stroke-color:#ef4444] hover:[filter:drop-shadow(0_0_24px_rgba(239,68,68,0.35))]"
          style={{
            fontFamily: "var(--font-poppins)",
            fontSize: "clamp(3rem, 15vw, 11rem)",
          }}
        >
          Abdullah
        </span>
      </motion.div>
    </footer>
  );
}
