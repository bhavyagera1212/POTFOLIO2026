import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data";

type Tok = { t: string; c: string };

const codeBlock: Tok[][] = [
  [
    { t: "const ", c: "text-yellow-700" },
    { t: "bhavya", c: "text-orange-700" },
    { t: " = {", c: "text-yellow-900" },
  ],
  [
    { t: "  role: ", c: "text-yellow-900/80" },
    { t: '"Developer"', c: "text-emerald-700" },
    { t: ",", c: "text-yellow-900/80" },
  ],
  [
    { t: "  build: [", c: "text-yellow-900/80" },
  ],
  [
    { t: "    ", c: "text-yellow-900/80" },
    { t: '"Evaluation Frameworks"', c: "text-emerald-700" },
    { t: ",", c: "text-yellow-900/80" },
  ],
  [
    { t: "    ", c: "text-yellow-900/80" },
    { t: '"LLM Observability"', c: "text-emerald-700" },
    { t: ",", c: "text-yellow-900/80" },
  ],
  [
    { t: "    ", c: "text-yellow-900/80" },
    { t: '"Prod API"', c: "text-emerald-700" },
    { t: ",", c: "text-yellow-900/80" },
  ],
  [
    { t: "    ", c: "text-yellow-900/80" },
    { t: '"Deep Learning Models"', c: "text-emerald-700" },
    { t: ",", c: "text-yellow-900/80" },
  ],
  [
    { t: "  ],", c: "text-yellow-900/80" },
  ],
  [
    { t: "  status: ", c: "text-yellow-900/80" },
    { t: '"shipping @ Nutanix"', c: "text-emerald-700" },
    { t: ",", c: "text-yellow-900/80" },
  ],
  [{ t: "};", c: "text-yellow-900" }],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center pt-28 md:pt-24"
    >
      <div className="container-x grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-800"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available · MTS Intern @ Nutanix
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
          >
            <span className="block text-yellow-950">Hi, I'm</span>
            <span className="block text-gradient">{profile.name}.</span>
            <span className="mt-2 block text-2xl font-medium text-yellow-900/80 md:text-3xl">
              I build the <span className="shimmer-text">frontend &amp; the brains</span> of AI products.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-yellow-900/85 md:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 px-5 py-3 text-sm font-semibold text-yellow-950 shadow-[0_10px_40px_-10px_rgba(202,138,4,0.6)] transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-yellow-900/15 bg-white/60 px-5 py-3 text-sm font-semibold text-yellow-950 transition-colors hover:border-yellow-900/35 hover:bg-white/90"
            >
              <Mail size={16} /> Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-yellow-800/85"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-yellow-950"
            >
              <Github size={14} /> github.com/bhavyagera1212
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-yellow-950"
            >
              <Linkedin size={14} /> /in/bhavya-gera
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              className="absolute inset-0 rounded-[28px] opacity-60 blur-3xl"
              style={{
                background:
                  "conic-gradient(from 90deg, #ca8a04, #facc15, #f59e0b, #ca8a04)",
                animation: "spin 14s linear infinite",
              }}
            />
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-yellow-900/15 bg-white/85 shadow-[0_30px_80px_-30px_rgba(202,138,4,0.35)] backdrop-blur-xl">
              <div className="flex items-center gap-1.5 border-b border-yellow-900/12 bg-amber-50/80 px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-500" />
                <span className="ml-3 font-mono text-[11px] tracking-wide text-yellow-800/65">
                  ~/bhavya/profile.ts
                </span>
              </div>
              <pre className="flex-1 overflow-hidden p-5 font-mono text-[12.5px] leading-7 text-yellow-900">
                <code>
                  {codeBlock.map((line, lineIdx) => (
                    <div key={lineIdx} className="flex">
                      <span className="mr-4 w-5 shrink-0 select-none text-right text-yellow-800/40">
                        {lineIdx + 1}
                      </span>
                      <span className="flex-1 whitespace-pre">
                        {line.map((tok, tokIdx) => (
                          <span key={tokIdx} className={tok.c}>
                            {tok.t}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
