import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp, ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const rows = [
    { Icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { Icon: FaLinkedin, label: "LinkedIn", value: "Aman Kumar Dwivedi", href: socials.linkedinContact, external: true },
    { Icon: FaGithub, label: "GitHub", value: "AmanDwivwdicc", href: socials.github, external: true },
  ];

  return (
    <div className="px-5 pb-10 pt-20 sm:px-6 md:px-10 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Let's Connect"
          align="center"
          title={
            <>
              Got an idea? <span className="text-gradient-signal">Let's build it.</span>
            </>
          }
          intro="Feel free to connect with me for your custom works."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel mx-auto mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-[1.75rem] shadow-card md:mt-16 md:rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="relative flex min-w-0 flex-col items-center justify-center gap-4 border-b border-border p-8 md:gap-5 md:p-10 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-gradient-signal opacity-10" />
            <div className="relative rounded-full bg-gradient-signal p-[3px]">
              <img
                src={profile.contactImage}
                alt="Aman"
                loading="lazy"
                className="h-28 w-28 rounded-full bg-surface-strong object-cover object-top md:h-36 md:w-36"
              />
            </div>
            <div className="relative text-center">
              <h3 className="text-2xl font-bold text-foreground">{profile.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
            </div>
          </div>

          <ul className="min-w-0 divide-y divide-border">
            {rows.map(({ Icon, label, value, href, external }) => (
              <li key={label} className="flex items-center">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex min-w-0 flex-1 items-center gap-3 px-4 py-4 transition-colors hover:bg-surface-strong sm:gap-4 sm:px-6 sm:py-5 md:px-8"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center sm:h-11 sm:w-11 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium sm:text-base text-foreground transition-colors group-hover:text-primary">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-muted-foreground transition-all sm:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
                {label === "Email" && (
                  <button
                    onClick={copyEmail}
                    className="mr-3 grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface-strong hover:text-primary md:mr-6"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <footer className="mt-20 flex text-center md:mt-28 flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Aman Dwivedi. Built with curiosity.</p>
          <a href="#about" className="flex items-center gap-2 transition-colors hover:text-primary">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </footer>
      </div>
    </div>
  );
}
