import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-900/12">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-yellow-800/85 md:flex-row">
        <div>
          {new Date().getFullYear()} {profile.name}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-yellow-950"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-yellow-950"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-yellow-950"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
