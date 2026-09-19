"use client";

import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiRedis,
  SiNextdotjs,
  SiGraphql,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiApachekafka,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { techStack } from "@/data";

const icons = {
  nodejs: SiNodedotjs,
  redis: SiRedis,
  nextjs: SiNextdotjs,
  aws: FaAws,
  graphql: SiGraphql,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  docker: SiDocker,
  kafka: SiApachekafka,
};

export default function TechMarquee() {
  const loop = [...techStack, ...techStack];

  return (
    <div id="stack" className="border-b border-white/10 bg-black py-8">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <motion.div
          className="flex w-max items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((tech, i) => {
            const Icon = icons[tech.icon];
            return (
              <span
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 whitespace-nowrap text-xl font-semibold uppercase tracking-widest text-zinc-600 transition-colors hover:text-red-500"
              >
                <Icon size={22} />
                {tech.name}
              </span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
