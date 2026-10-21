import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const ids = navItems.map((n) => n.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 md:px-6">
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-signal"
        style={{ scaleX: progress }}
      />
      <nav
        className={`mx-auto mt-3 flex w-full max-w-6xl items-center justify-between gap-3 rounded-full py-2 pl-2.5 pr-2 transition-all duration-500 lg:px-6 lg:py-2.5 ${
          scrolled || menuOpen ? "glass-panel-strong shadow-card" : "border border-transparent"
        }`}
        aria-label="Main"
      >
        <a href="#about" className="group flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-signal font-display text-sm font-bold text-primary-foreground">
            AD
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-wide text-foreground sm:text-base">
            AMAN DWIVEDI
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative isolate whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 lg:block">
          <Button asChild variant="glass" size="sm" className="h-9 px-4">
            <a href={profile.resume} download>
              <Download /> Resume
            </a>
          </Button>
        </div>

        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-surface-strong lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-popover p-2 shadow-card lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-2xl px-5 py-3.5 text-base font-medium transition-colors ${
                  active === item.id ? "bg-primary/15 text-primary" : "text-foreground hover:bg-surface-strong"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-2xl px-5 py-3.5 text-base font-medium text-primary hover:bg-surface-strong"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
