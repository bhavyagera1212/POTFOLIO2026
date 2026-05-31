import Section from "./Section";
import { profile } from "../data";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="07 · Contact"
      title={
        <>
          Let's build <span className="text-gradient">something good</span>.
        </>
      }
      description="Open to research collaborations, full-time AI/ML roles starting mid-2026, and interesting side-projects. The fastest way to reach me is email."
    >
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-yellow-400/45 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-amber-400/35 blur-3xl" />
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-yellow-700">
              Say hello
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-yellow-950 md:text-4xl">
              Have an idea, a research problem, or an opportunity?
              <span className="block text-yellow-900/70">I'd love to hear it.</span>
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 px-5 py-3 text-sm font-semibold text-yellow-950 shadow-[0_10px_40px_-10px_rgba(202,138,4,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-5">
          <ContactRow
            icon={<Mail size={16} />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactRow
            icon={<Phone size={16} />}
            label="Phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/[^+0-9]/g, "")}`}
          />
          <ContactRow
            icon={<Linkedin size={16} />}
            label="LinkedIn"
            value="/in/bhavya-gera"
            href={profile.links.linkedin}
          />
          <ContactRow
            icon={<Github size={16} />}
            label="GitHub"
            value="bhavyagera1212"
            href={profile.links.github}
          />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass card-hover hover:[&]:card-hover-on group flex items-center justify-between gap-4 rounded-xl p-4"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg border border-yellow-500/45 bg-yellow-400/30 text-yellow-800">
          {icon}
        </span>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-yellow-800/70">
            {label}
          </div>
          <div className="text-sm font-medium text-yellow-950">{value}</div>
        </div>
      </div>
      <ArrowUpRight
        size={16}
        className="text-yellow-800/65 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-yellow-950"
      />
    </a>
  );
}
