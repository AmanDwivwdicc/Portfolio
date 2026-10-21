import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

/** Types each phrase, pauses ~2s, deletes, then moves to the next — loops forever. */
function useTypewriter(words: string[], pause = 2000) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 30 : 60,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, pause]);

  return text;
}

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: socials.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <div className="relative flex min-h-svh items-center px-5 pb-20 pt-24 sm:px-6 md:px-10 md:pb-24 md:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="order-2 min-w-0 text-center md:order-1 md:text-left"
        >
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for custom work
          </span>

          <p className="mt-6 text-base text-muted-foreground md:mt-8 md:text-xl">Hello, I'm</p>
          <h1 className="mt-2 text-[2.9rem] font-extrabold leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-gradient-signal">AMAN</span>
            <br />
            <span className="text-foreground">DWIVEDI</span>
          </h1>

          <p className="mt-5 text-base text-foreground/85 sm:text-lg md:mt-6 md:text-xl">{profile.title}</p>

          <p className="mt-3 min-h-8 font-mono text-base font-medium text-primary sm:text-xl md:min-h-9 md:text-2xl" aria-live="polite">
            <span className="text-muted-foreground">&gt; </span>
            {typed}
            <span className="caret-blink ml-0.5 inline-block h-5 w-[2px] translate-y-1 bg-primary md:h-6" />
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:mt-10 md:justify-start">
            <Button asChild variant="hero" size="xl">
              <a href={profile.resume} download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#projects">
                View Projects <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 md:mt-10 md:justify-start">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass-panel grid h-12 w-12 place-items-center rounded-full text-xl text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-signal opacity-40 blur-3xl md:-inset-6" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-full bg-gradient-signal p-[3px] shadow-glow"
            >
              <img
                src={profile.heroImage}
                alt="Aman Dwivedi"
                width={900}
                height={1048}
                className="aspect-square h-auto w-48 max-w-full rounded-full bg-surface-strong object-cover object-top sm:w-64 md:w-72 lg:w-96"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#education"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        Scroll Down
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </div>
  );
}
