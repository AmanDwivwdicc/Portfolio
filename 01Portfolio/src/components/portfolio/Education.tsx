import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";
import { aboutParagraphs, certificates, education, stats } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  return (
    <div className="px-5 py-20 sm:px-6 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="Academic Journey"
          title={
            <>
              Education & <span className="text-gradient-signal">Certifications</span>
            </>
          }
        />

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="min-w-0 space-y-5 text-base leading-relaxed text-foreground/80 md:space-y-6 md:text-lg"
          >
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="grid grid-cols-3 gap-2 pt-4 sm:gap-3">
              {stats.map((s) => (
                <div key={s.label} className="glass-panel min-w-0 rounded-2xl p-3 sm:p-4 md:p-5">
                  <p className="font-display text-2xl font-bold text-gradient-signal sm:text-3xl md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground sm:text-xs md:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.ol
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="relative ml-4 min-w-0 space-y-5 border-l border-border pl-8 md:ml-4"
          >
            {education.map((e) => (
              <li key={e.title} className="glass-panel relative rounded-2xl p-5 md:p-6">
                <span className="absolute -left-[2.6rem] top-6 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <p className="eyebrow">{e.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground md:text-2xl">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">{e.place}</p>
              </li>
            ))}
          </motion.ol>
        </div>

        {/* Certifications */}
        <div className="mt-20 md:mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-3xl font-bold text-foreground md:text-4xl">Certifications</h3>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground md:text-xs md:tracking-[0.2em]">
              Adding only a few of them · tap to view full size
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 md:gap-6 lg:grid-cols-3">
            {certificates.map((c, i) => (
              <motion.a
                key={c.image}
                href={c.image}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="group glass-panel relative block overflow-hidden rounded-3xl p-2 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-foreground">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-3">
                  <span className="text-sm font-medium text-foreground">{c.title}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
