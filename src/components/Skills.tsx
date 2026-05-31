import Section from "./Section";
import { skills } from "../data";
import {
  Code2,
  Brain,
  Server,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const iconFor: Record<string, typeof Code2> = {
  Languages: Code2,
  "ML / DL": Brain,
  "Backend & Web": Server,
  "Tools & Infra": Wrench,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="05 · Tech Stack"
      title={
        <>
          The tools I <span className="text-gradient">reach for</span> daily.
        </>
      }
      description="From training loops to API contracts to docker-compose — comfortable across the stack."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group, gi) => {
          const Icon = iconFor[group.category] ?? Code2;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.06 }}
              className="glass card-hover hover:[&]:card-hover-on rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-lg border border-yellow-500/45 bg-yellow-400/30 text-yellow-800">
                  <Icon size={16} />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-yellow-950">
                  {group.category}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-yellow-900/15 bg-white/60 px-2.5 py-1 font-mono text-[11px] text-yellow-900 transition-colors hover:border-yellow-700/45 hover:bg-white hover:text-yellow-950"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
