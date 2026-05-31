import Section from "./Section";
import { achievements, volunteer } from "../data";
import { Trophy, HeartHandshake } from "lucide-react";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="06 · Honors & Community"
      title={
        <>
          Recognised, and <span className="text-gradient">giving back</span>.
        </>
      }
      description="A snapshot of national-level recognition and the communities I've been lucky to be part of."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-yellow-950">
            <Trophy size={16} className="text-amber-700" /> Honors & Awards
          </div>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li
                key={a.title}
                className="glass card-hover hover:[&]:card-hover-on flex items-start gap-3 rounded-xl p-4"
              >
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-md border border-amber-500/45 bg-amber-400/35 text-amber-800">
                  <Trophy size={13} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-yellow-950">{a.title}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-yellow-900/85">
                    {a.detail}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-yellow-950">
            <HeartHandshake size={16} className="text-yellow-700" /> Volunteer
          </div>
          <ul className="space-y-3">
            {volunteer.map((v) => (
              <li
                key={v.org}
                className="glass card-hover hover:[&]:card-hover-on rounded-xl p-4"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-sm font-semibold text-yellow-950">{v.org}</h4>
                  <span className="font-mono text-[11px] text-yellow-800/70">{v.period}</span>
                </div>
                <div className="mt-0.5 text-xs font-medium text-yellow-700">{v.role}</div>
                <div className="mt-1 text-xs leading-relaxed text-yellow-800/85">{v.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
