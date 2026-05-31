import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-yellow-900/12 bg-[color:var(--color-bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-yellow-950"
        >
          <span className="relative grid size-8 place-items-center overflow-hidden rounded-lg border border-yellow-900/20 bg-gradient-to-br from-yellow-400 to-amber-400 text-[12px] font-extrabold text-yellow-950 shadow-[0_4px_16px_-4px_rgba(202,138,4,0.5)]">
            {profile.initials}
          </span>
          <span className="hidden sm:block">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                active === l.id
                  ? "text-yellow-950"
                  : "text-yellow-800/85 hover:text-yellow-950"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-md border border-yellow-900/15 bg-yellow-400/25"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            className="rounded-md bg-gradient-to-br from-yellow-500 to-amber-500 px-3.5 py-1.5 text-sm font-semibold text-yellow-950 shadow-[0_0_24px_-8px_rgba(202,138,4,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="grid size-9 place-items-center rounded-md border border-yellow-900/15 bg-white/70 text-yellow-950 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-yellow-900/12 bg-[color:var(--color-bg)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col py-3">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-yellow-900 hover:bg-yellow-400/15 hover:text-yellow-950"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2 px-1">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md bg-gradient-to-br from-yellow-500 to-amber-500 px-3 py-2 text-center text-sm font-semibold text-yellow-950"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
