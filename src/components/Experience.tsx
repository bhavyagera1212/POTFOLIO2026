import Section from "./Section";
import { experiences } from "../data";
import { Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title={
        <>
          Currently shipping at <span className="text-gradient">Nutanix</span>.
        </>
      }
      description="Working across Agentic AI, LLM evaluation, and the RAG stack — turning observability traces into measurable improvements in retrieval and reasoning quality."
    >
      <ol className="relative space-y-8 border-l border-yellow-900/15 pl-6 md:pl-10">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[33px] top-2 grid size-6 place-items-center rounded-full border border-yellow-900/15 bg-[color:var(--color-bg)] md:-left-[49px] md:size-9">
              <Briefcase size={14} className="text-yellow-700" />
            </span>

            <div className="glass card-hover hover:[&]:card-hover-on rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-yellow-950 md:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="mt-0.5 text-sm font-medium text-yellow-700">
                    {exp.company}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-yellow-800/80">{exp.period}</div>
                  {exp.location && (
                    <div className="font-mono text-[11px] text-yellow-800/60">{exp.location}</div>
                  )}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-full border border-yellow-500/45 bg-yellow-400/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-yellow-900"
                  >
                    <Sparkles size={10} /> {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-3">
                {exp.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 text-sm leading-relaxed text-yellow-900/90"
                  >
                    <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-yellow-900/12 pt-4">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-yellow-900/15 bg-white/55 px-2 py-0.5 font-mono text-[11px] text-yellow-900/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
