import Section from "./Section";
import { publications } from "../data";
import { BookOpen } from "lucide-react";

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="04 · Research"
      title={
        <>
          Currently writing — <span className="text-gradient">Pansharpening with Attention</span>.
        </>
      }
      description="An ongoing research effort on enhancing multispectral satellite imagery using a custom attention mechanism in PyTorch."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {publications.map((p) => (
          <article
            key={p.title}
            className="glass card-hover hover:[&]:card-hover-on relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-yellow-400/40 blur-3xl" />
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-yellow-700">
                <BookOpen size={16} />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  Research Paper
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/45 bg-amber-400/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-900">
                <span className="size-1.5 rounded-full bg-amber-600 pulse-dot" />
                {p.status}
              </span>
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-yellow-950">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-yellow-900/85">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-yellow-900/15 bg-white/55 px-2 py-0.5 font-mono text-[11px] text-yellow-900/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
