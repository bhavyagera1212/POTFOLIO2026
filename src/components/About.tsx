import Section from "./Section";
import { education, stats } from "../data";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title={
        <>
          A builder who lives at the seam of <span className="text-gradient">research</span> and{" "}
          <span className="text-gradient">production</span>.
        </>
      }
      description="From training BERT-based Punjabi sentiment models to fixing reranker logic in production RAG systems — I enjoy the full arc of taking ideas from a notebook to a deployed service."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass card-hover hover:[&]:card-hover-on rounded-xl p-4"
              >
                <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-yellow-950">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-yellow-800/70">
                  {s.label}
                </div>
                <div className="mt-0.5 text-xs text-yellow-900/75">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-yellow-900/90">
            <p>
              I'm a final-year Computer Science student at Thapar Institute (CGPA{" "}
              <span className="font-semibold text-yellow-950">10.0/10.0</span>) and currently a Member of
              Technical Staff Intern at <span className="font-semibold text-yellow-950">Nutanix</span>,
              where I work on Agentic AI evaluation, LLM observability, and the RAG retrieval stack.
            </p>
            <p>
              My favourite problems sit between ML research and real systems: building robust eval
              pipelines with <span className="font-mono text-yellow-700">Langfuse</span>, fixing
              context-window timeouts on production LLMs, exploring{" "}
              <span className="font-mono text-yellow-700">DataRobot</span>'s AI lifecycle platform,
              and shipping React 19 + FastAPI tooling around it.
            </p>
            <p>
              Outside Nutanix, I publish and prototype — currently writing a paper on a custom
              attention-based pansharpening model and consistently placing in national hackathons.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-yellow-950">
              <GraduationCap size={18} className="text-yellow-700" /> Education
            </div>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.school} className="relative pl-5">
                  <span className="absolute left-0 top-2 size-2.5 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h4 className="text-sm font-semibold text-yellow-950">{e.school}</h4>
                    <span className="font-mono text-[11px] text-yellow-800/70">{e.period}</span>
                  </div>
                  <div className="text-sm text-yellow-900/85">{e.degree}</div>
                  <div className="mt-0.5 text-xs text-yellow-800/85">
                    {e.location} · <span className="font-semibold text-amber-700">{e.score}</span>
                  </div>
                  <div className="mt-1.5 text-xs leading-relaxed text-yellow-800/75">{e.notes}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
