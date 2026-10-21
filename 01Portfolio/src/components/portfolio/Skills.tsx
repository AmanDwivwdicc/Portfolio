import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <div className="px-5 py-20 sm:px-6 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Toolbox"
          title={
            <>
              <span className="text-gradient-signal">Skills</span> I work with
            </>
          }
        />

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="glass-panel rounded-3xl p-5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{group.label}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-border bg-surface-strong px-3.5 py-1.5 text-sm font-medium text-foreground transition-all sm:px-4 sm:py-2 duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
