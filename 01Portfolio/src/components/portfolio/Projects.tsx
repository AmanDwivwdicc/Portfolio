import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <div className="px-5 py-20 sm:px-6 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title={
            <>
              <span className="text-gradient-signal">Projects</span> I've shipped
            </>
          }
          intro="Live builds across web, computer vision and creative coding — each one is a click away."
        />

        <div className="mt-12 space-y-16 md:mt-20 md:space-y-32">
          {projects.map((project, index) => {
            const reversed = index % 2 !== 0;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease }}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-14"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className={`group glass-panel relative block overflow-hidden rounded-3xl p-2 shadow-card transition-all duration-500 hover:border-primary/50 hover:shadow-glow ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-surface-strong">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </a>

                <div className={`min-w-0 ${reversed ? "md:order-1" : ""}`}>
                  <p className="font-mono text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                    <span className="text-muted-foreground"> / {String(projects.length).padStart(2, "0")}</span>
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl md:mt-4 md:text-4xl">{project.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:mt-4 md:text-lg">
                    {project.description}
                  </p>
                  <Button asChild variant="hero" size="xl" className="mt-6 w-full sm:w-auto md:mt-8">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
