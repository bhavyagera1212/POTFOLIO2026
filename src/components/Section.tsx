import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section
      id={id}
      className="container-x relative py-24 md:py-32 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="mb-12 max-w-3xl"
      >
        {eyebrow && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-900/15 bg-white/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-yellow-800">
            <span className="size-1.5 rounded-full bg-yellow-600 pulse-dot" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight text-yellow-950 md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-yellow-800/85 md:text-lg">
            {description}
          </p>
        )}
      </motion.div>
      {children}
    </section>
  );
}
