import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ index, eyebrow, title, intro, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p className={`eyebrow flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-8 bg-primary/60" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[2.15rem] font-bold leading-[1.05] text-foreground sm:text-5xl md:mt-5 md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-5 md:text-lg">{intro}</p>
      )}
    </motion.div>
  );
}
