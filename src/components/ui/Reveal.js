"use client";

import { motion } from "framer-motion";

const directions = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { y: 0, x: 36 },
  right: { y: 0, x: -36 },
};

const tags = { div: motion.div, li: motion.li };

export default function Reveal({
  as = "div",
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.2,
  ...rest
}) {
  const offset = directions[direction] ?? directions.up;

  const Tag = tags[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
