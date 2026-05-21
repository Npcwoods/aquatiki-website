"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Split by word (default) or character */
  by?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** If true, animate immediately on mount instead of waiting for viewport */
  immediate?: boolean;
}

export function RevealText({
  children,
  className = "",
  delay = 0,
  stagger = 0.06,
  by = "word",
  as: Tag = "h2",
  immediate = false,
}: RevealTextProps) {
  if (typeof children !== "string") {
    return (
      <Tag className={className}>{children}</Tag>
    );
  }

  const pieces = by === "word" ? children.split(" ") : children.split("");
  const sep = by === "word" ? " " : "";

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const item = {
    hidden: { y: "115%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        {...(immediate
          ? { animate: "show" }
          : { whileInView: "show", viewport: { once: true, amount: 0.2 } })}
        style={{ display: "inline" }}
      >
        {pieces.map((p, i) => (
          <span key={i}>
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                lineHeight: "0.95em",
              }}
            >
              <motion.span variants={item} style={{ display: "inline-block" }}>
                {p}
              </motion.span>
            </span>
            {i < pieces.length - 1 && sep}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
