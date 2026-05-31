import Section from "./Section";
import { projects } from "../data";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Selected Projects"
      title={
        <>
          Things I've built — <span className="text-gradient">end to end</span>.
        </>
      }
      description="A mix of multimodal AI, medical imaging, and computer vision — each shipped with a working demo and measurable accuracy."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group glass card-hover hover:[&]:card-hover-on relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
          >
            <div
              aria-hidden
              className="absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(220px 160px at var(--x,50%) var(--y,50%), rgba(202,138,4,0.20), transparent 70%)",
              }}
            />

            {p.highlight && (
              <div className="mb-3 inline-flex w-fit items-center gap-1 rounded-full border border-amber-500/45 bg-amber-400/35 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-900">
                <Star size={10} /> {p.highlight}
              </div>
            )}

            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-yellow-950">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-yellow-900/85">{p.blurb}</p>

            <ul className="mt-4 space-y-2">
              {p.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="relative pl-4 text-[13px] leading-relaxed text-yellow-900/80"
                >
                  <span className="absolute left-0 top-2 size-1 rounded-full bg-amber-600" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-yellow-900/15 bg-white/55 px-2 py-0.5 font-mono text-[11px] text-yellow-900/85"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-yellow-900/12 pt-4">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-yellow-900 transition-colors hover:text-yellow-950"
                >
                  <Github size={14} /> Source
                </a>
              ) : (
                <span className="text-sm text-yellow-800/70">Coming soon</span>
              )}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-8 place-items-center rounded-lg border border-yellow-900/15 bg-white/55 text-yellow-900 transition-all hover:-translate-y-0.5 hover:border-yellow-900/35 hover:bg-white hover:text-yellow-950"
                  aria-label="Open project"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
