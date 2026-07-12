import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useMotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Check,
  ChevronDown,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Instagram,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  PenTool,
  Phone,
  Quote,
  Rocket,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Users,
  X,
  ChevronUp,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

import logoAsset from "@/assets/kgano-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

const logo = "/favicon.png";

const WA_NUMBER = "27793212561";
const WA_MESSAGE = encodeURIComponent(
  "Hello KGANO Brand Studio, I visited your website and would like to discuss my project."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const PHONE_LINK = "tel:+27793212561";
const EMAIL_LINK = "mailto:KganoBrandStudio@gmail.com";
const FB_LINK = "https://www.facebook.com/abednigokhwere.mokalapa";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function KganoSite() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <PremiumLoader />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main id="home">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <ClientTypes />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

/* -------------------------- Premium loader & cursor ----------------------- */

function PremiumLoader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1400);
    const t2 = setTimeout(() => setGone(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (gone) return null;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-deep"
      aria-hidden
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-emerald/20 blur-3xl" />
        <div
          className="animate-blob absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-7">
        <div className="relative flex items-center justify-center">
          <motion.span
            aria-hidden
            className="absolute -inset-x-16 -inset-y-10 rounded-full bg-gradient-to-r from-emerald/25 via-gold/15 to-emerald/25 blur-3xl"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="relative flex items-baseline gap-[0.15em] font-display text-5xl font-light tracking-[0.18em] text-white sm:text-6xl">
            {"KGANO".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="ml-1 inline-block h-2 w-2 translate-y-[-0.15em] rounded-full bg-gradient-to-br from-emerald-glow to-gold shadow-[0_0_20px_rgba(140,220,180,0.9)]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[10px] font-semibold uppercase tracking-[0.55em] text-white/60"
          >
            Brand Studio
          </motion.p>
          <div className="relative h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-glow to-transparent"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        "a,button,[role='button'],input,textarea,select,summary,label,[data-cursor='hover']"
      );
      setHovering(interactive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <style>{`@media (pointer: fine){html,body,a,button{cursor:none !important;}}`}</style>
      <motion.div
        style={{ x: ringX, y: ringY }}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.6 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="h-9 w-9 rounded-full border border-emerald-glow/70 mix-blend-difference"
        />
      </motion.div>
      <motion.div
        style={{ x: dotX, y: dotY }}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[201] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-1.5 w-1.5 rounded-full bg-emerald-glow shadow-[0_0_12px_rgba(120,220,180,0.9)]"
        />
      </motion.div>
    </>
  );
}

/* ------------------------------- Shared bits ------------------------------ */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-emerald via-gold to-emerald-glow"
    />
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
      {children}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------- Header -------------------------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
              scrolled ? "glass-dark shadow-luxe" : "bg-transparent"
            }`}
          >
            <a href="#home" className="flex items-center gap-2.5 cursor-pointer" aria-label="KGANO Brand Studio home">
              <img
                src={logo}
                alt=""
                width={44}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-white/70 transition hover:text-white hover:bg-white/5 cursor-pointer"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-emerald-glow hover:text-white cursor-pointer"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-navy-deep text-white"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="KGANO Brand Studio" width={44} height={44} className="h-10 w-auto object-contain" />
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 pt-6">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl"
                >
                  {n.label}
                  <ArrowUpRight className="h-6 w-6 text-emerald-glow" />
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 px-6">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-navy-deep"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ----------------------------------- Hero --------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-navy-deep text-white"
    >
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/70 to-navy-deep" />
      </motion.div>

      {/* Floating blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-emerald/25 blur-3xl" />
        <div
          className="animate-blob absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-gold/15 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      {/* Grid */}
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-[0.12]" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40"
      >
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-emerald-glow" />
                A South African Creative Studio
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-balance font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.95] tracking-[-0.03em]">
                Building <em className="font-normal italic gradient-text">Brands.</em>
                <br />
                Inspiring{" "}
                <em className="font-normal italic gradient-text">Success.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-lg text-white/70 md:text-xl">
                We help ambitious businesses establish powerful brands through strategy,
                creativity and innovative digital solutions.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-emerald-glow hover:text-white"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" style={{ color: "#25D366" }} />
                  WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pt-16">
            <Reveal delay={0.4}>
              <div className="glass-dark rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Trusted craft</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  From logo to launch — we design brands that look world-class and grow
                  confidently. Affordable. Strategic. Beautifully executed.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-navy-deep bg-gradient-to-br from-emerald to-gold"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex text-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-white/60">Rated by 120+ clients</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
            <Stat value={5} suffix="+" label="Years Experience" />
            <Stat value={120} suffix="+" label="Projects Delivered" />
            <Stat value={98} suffix="%" label="Happy Clients" />
            <Stat value={24} suffix="+" label="Creative Solutions" />
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const dur = 1400;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-light md:text-5xl">
        {n}
        <span className="text-emerald-glow">{suffix}</span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">{label}</div>
    </div>
  );
}

/* --------------------------------- Marquee -------------------------------- */

function Marquee() {
  const words = [
    "Strategy",
    "Identity",
    "Web",
    "Marketing",
    "Print",
    "Architecture",
    "Content",
    "Growth",
  ];
  const line = (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {words.map((w) => (
        <span
          key={w}
          className="flex items-center gap-16 font-display text-4xl font-light italic text-navy/70 md:text-6xl"
        >
          {w}
          <span className="h-2 w-2 rounded-full bg-emerald" />
        </span>
      ))}
    </div>
  );
  return (
    <section aria-hidden className="border-y border-border/60 bg-secondary/40 py-8 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {line}
        {line}
      </div>
    </section>
  );
}

/* ---------------------------------- About --------------------------------- */

function About() {
  const values = [
    "Creativity",
    "Innovation",
    "Professionalism",
    "Integrity",
    "Customer Satisfaction",
    "Excellence",
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow>About the studio</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-navy-deep md:text-6xl">
                A studio for brands
                <br />
                that mean <em className="italic text-emerald">business.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-muted-foreground">
                KGANO Brand Studio is a premium South African creative agency helping
                startups, entrepreneurs and established businesses build strong,
                memorable brands — combining strategy, design and business development
                under one roof.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.25}>
                <div className="rounded-2xl border border-border/70 bg-card p-6">
                  <Compass className="h-6 w-6 text-emerald" />
                  <h3 className="mt-4 font-display text-xl">Our Vision</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Become one of South Africa's leading branding agencies — delivering
                    world-class creative and innovative business solutions.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="rounded-2xl border border-border/70 bg-card p-6">
                  <Rocket className="h-6 w-6 text-emerald" />
                  <h3 className="mt-4 font-display text-xl">Our Mission</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Deliver affordable, creative and high-quality branding and
                    development services that help businesses grow sustainably.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Core Values
                </p>
                <div className="flex flex-wrap gap-2">
                  {values.map((v) => (
                    <span
                      key={v}
                      className="rounded-full border border-border/70 bg-secondary/50 px-3.5 py-1.5 text-sm text-navy-deep"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-luxe">
                  <img
                    src={aboutPortrait}
                    alt="Creative director at KGANO Brand Studio"
                    className="h-[560px] w-full object-cover"
                    width={900}
                    height={1200}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl bg-navy-deep p-6 text-white shadow-luxe sm:block">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-glow">
                    Est. 2020
                  </p>
                  <p className="mt-2 font-display text-lg leading-tight">
                    Crafted from South Africa, delivered for the world.
                  </p>
                </div>
                <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border/70 bg-background p-5 shadow-luxe md:block">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-gold" />
                    <div>
                      <p className="text-sm font-semibold">120+ Brands</p>
                      <p className="text-xs text-muted-foreground">Successfully launched</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Services ------------------------------- */

const SERVICE_GROUPS = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Distinctive identities that make businesses instantly recognisable.",
    items: ["Logo Design", "Brand Identity", "Business Cards", "Corporate Stationery"],
  },
  {
    icon: Globe,
    title: "Web & Digital",
    desc: "Fast, elegant websites and digital experiences that convert.",
    items: [
      "Website Design",
      "Website Development",
      "Social Media Branding",
      "Social Media Management",
    ],
  },
  {
    icon: FileText,
    title: "Business Development",
    desc: "Documents and strategy that open doors and win contracts.",
    items: [
      "Business Profiles",
      "Business Proposal Writing",
      "Business Plan Development",
      "Company Registration Assistance",
    ],
  },
  {
    icon: Layers,
    title: "Marketing & Print",
    desc: "On-brand campaigns and print assets that get seen.",
    items: ["Marketing Strategy", "Poster Design", "Flyer Design", "Banner Design"],
  },
  {
    icon: Building2,
    title: "Architecture & Interiors",
    desc: "Considered spaces, drawn to build and live in.",
    items: ["House Plans", "Architectural Designs", "Interior Design Concepts"],
  },
  {
    icon: PenTool,
    title: "Content & Personal",
    desc: "Words and moments crafted with care.",
    items: ["Content Writing", "CV Revamping", "Wedding Invitations", "Funeral Invitations"],
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionEyebrow>What we do</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-6xl">
                Services designed to <em className="italic text-emerald">grow you</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-muted-foreground">
              Six core disciplines, one focused team. From your first logo to your next
              launch — we cover the entire brand journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_GROUPS.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: typeof Palette;
  title: string;
  desc: string;
  items: string[];
}) {
  const message = encodeURIComponent(
    `Hello KGANO Brand Studio,\n\nI'm interested in your "${title}" service.\n\nSpecifically, I'd like help with:\n${items.map((i) => `- ${i}`).join("\n")}\n\nCould you share more details on timelines and pricing?\n\nThank you.`
  );
  const href = `https://wa.me/${WA_NUMBER}?text=${message}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Enquire about ${title} on WhatsApp`}
      className="group relative block h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe cursor-pointer"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-deep to-navy text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 font-display text-2xl text-navy-deep">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <ul className="mt-5 space-y-2">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2 text-sm text-navy-deep/80">
              <Check className="h-3.5 w-3.5 text-emerald" />
              {it}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-emerald transition-transform group-hover:translate-x-1">
          Enquire on WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </a>
  );
}

/* -------------------------------- Portfolio ------------------------------- */

const PORTFOLIO = [
  { cat: "Identity", title: "Ubuntu Coffee Co.", tone: "from-emerald to-navy", img: portfolio1 },
  { cat: "Web", title: "Sable & Stone", tone: "from-gold/70 to-navy-deep", img: portfolio2 },
  { cat: "Print", title: "Kganya Church", tone: "from-navy to-emerald", img: portfolio3 },
  { cat: "Identity", title: "Motho Wellness", tone: "from-emerald-glow to-navy-deep", img: portfolio4 },
  { cat: "Marketing", title: "Rise Academy", tone: "from-navy-deep to-gold/60", img: portfolio5 },
  { cat: "Architecture", title: "Karoo House", tone: "from-navy to-emerald-glow", img: portfolio6 },
  { cat: "Web", title: "Fynbos Retail", tone: "from-emerald to-gold/70", img: portfolio7 },
  { cat: "Identity", title: "Legacy Legal", tone: "from-navy-deep to-navy", img: portfolio8 },
];
const CATS = ["All", "Identity", "Web", "Print", "Marketing", "Architecture"];

function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof PORTFOLIO)[number]>(null);
  const items = useMemo(
    () => (active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === active)),
    [active]
  );

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionEyebrow>Selected work</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-6xl">
                Work we're <em className="italic text-emerald">proud of</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-1.5 rounded-full border border-border/70 bg-card p-1">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active === c
                      ? "bg-navy-deep text-white"
                      : "text-navy-deep/70 hover:text-navy-deep"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => {
            const tall = i % 5 === 0 || i % 5 === 3;
            return (
              <Reveal key={p.title} delay={0.04 * i}>
                <button
                  onClick={() => setLightbox(p)}
                  className={`group relative block w-full overflow-hidden rounded-3xl text-left ${
                    tall ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                  } cursor-pointer`}
                >
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.cat} project`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent`}
                  />
                  <div className="absolute inset-0 flex items-end justify-between p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                        {p.cat}
                      </p>
                      <p className="mt-1 font-display text-2xl text-white">{p.title}</p>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Portfolio images are placeholders — client case studies coming soon.
          </p>
        </Reveal>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-navy-deep/90 p-6 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  {lightbox.cat}
                </p>
                <p className="font-display text-4xl">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------------------------- Why us -------------------------------- */

function WhyUs() {
  const items = [
    {
      icon: Sparkles,
      title: "Strategy-led design",
      desc: "Every visual decision is anchored to your business goals — not trends.",
    },
    {
      icon: Users,
      title: "One team, end-to-end",
      desc: "From brand strategy to launch — no hand-offs, no lost details.",
    },
    {
      icon: Award,
      title: "Studio-quality craft",
      desc: "The polish of an international studio, priced for African businesses.",
    },
    {
      icon: Rocket,
      title: "Built to scale",
      desc: "Systems, not one-offs. Brands that grow with you for years.",
    },
  ];
  return (
    <section id="why" className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-emerald/20 blur-3xl" />
        <div
          className="animate-blob absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow>Why KGANO</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light leading-tight md:text-6xl">
                A partner, not just a{" "}
                <em className="italic gradient-text">vendor</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-white/70">
                We invest in your brand like it's our own — because reputation, ours and
                yours, is everything.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="font-display text-3xl gradient-text">98%</div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  Retention
                </p>
              </div>
              <div>
                <div className="font-display text-3xl gradient-text">7 days</div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  Avg. logo
                </p>
              </div>
              <div>
                <div className="font-display text-3xl gradient-text">24/7</div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                  Support
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it, i) => (
                <Reveal key={it.title} delay={0.05 * i}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-glow/50 hover:bg-white/[0.06]">
                    <it.icon className="h-6 w-6 text-emerald-glow" />
                    <h3 className="mt-5 font-display text-xl">{it.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Process ------------------------------- */

const STEPS = [
  { n: "01", title: "Discovery", desc: "Immersive workshops, market research, deep audit." },
  { n: "02", title: "Strategy", desc: "Positioning, messaging and brand architecture." },
  { n: "03", title: "Design", desc: "Identity, systems, applications — crafted meticulously." },
  { n: "04", title: "Development", desc: "Websites, print and digital assets — built to last." },
  { n: "05", title: "Launch", desc: "Go-live, guidelines and ongoing growth support." },
];

function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionEyebrow>How we work</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-6xl">
              A proven process, <em className="italic text-emerald">refined.</em>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid gap-8 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <li className="relative">
                  <div className="relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-full border border-border bg-background font-display text-sm text-emerald">
                    {s.n}
                  </div>
                  <div className="mt-6 rounded-2xl border border-border/70 bg-card p-6 text-center">
                    <h3 className="font-display text-xl text-navy-deep">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Client types ----------------------------- */

const CLIENTS = [
  { icon: Rocket, label: "Startups" },
  { icon: Heart, label: "Churches" },
  { icon: GraduationCap, label: "Schools" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Building2, label: "Construction" },
  { icon: Users, label: "NGOs" },
  { icon: Sparkles, label: "Entrepreneurs" },
  { icon: Store, label: "SMEs" },
];

function ClientTypes() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionEyebrow>Who we serve</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-5xl">
                Trusted by ambitious teams.
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.label} delay={0.03 * i}>
              <div className="group flex flex-col items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:border-emerald/50">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-deep text-white transition group-hover:bg-emerald">
                  <c.icon className="h-5 w-5" />
                </div>
                <p className="font-display text-lg text-navy-deep">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Testimonials ----------------------------- */

const TESTIMONIALS = [
  {
    q: "KGANO transformed how our business is perceived. The logo, website and pitch deck all feel like they belong to a much bigger brand.",
    n: "Thabo M.",
    r: "Founder, Sable & Stone",
  },
  {
    q: "They understood our church community before designing anything. Every touch-point feels warm and intentional.",
    n: "Pastor L.",
    r: "Kganya Church",
  },
  {
    q: "Fast, professional and genuinely creative. Our new brand paid for itself in the first month.",
    n: "Naledi K.",
    r: "CEO, Rise Academy",
  },
  {
    q: "Working with KGANO felt like adding a senior creative director to our team. Highly recommended.",
    n: "Sipho D.",
    r: "MD, Fynbos Retail",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <SectionEyebrow>Kind words</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-6xl">
              What clients <em className="italic text-emerald">say</em>.
            </h2>
          </Reveal>
        </div>
        <div className="relative mt-14">
          <Quote className="absolute -left-2 -top-6 h-16 w-16 text-emerald/15" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-border/70 bg-card p-10 text-center shadow-luxe md:p-14"
            >
              <div className="mx-auto mb-5 inline-flex text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mx-auto max-w-3xl font-display text-2xl font-light leading-relaxed text-navy-deep md:text-3xl">
                "{t.q}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-emerald to-navy" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-navy-deep">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-emerald" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------ FAQ --------------------------------- */

const FAQS = [
  {
    q: "How long does a branding project take?",
    a: "A full brand identity typically takes 2–4 weeks, depending on scope and revisions. A logo-only sprint can be delivered in about a week.",
  },
  {
    q: "Do you work with clients outside South Africa?",
    a: "Absolutely. We work with clients across Africa and globally — everything is delivered remotely with clear milestones.",
  },
  {
    q: "What does a typical project cost?",
    a: "Every brand is different. Share your goals via the contact form or WhatsApp and we'll send a tailored proposal within 24 hours.",
  },
  {
    q: "Can you help register my company?",
    a: "Yes — we offer company registration assistance alongside business profiles, plans and proposals to help you launch confidently.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We provide retainers for social media management, content, and iterative design work post-launch.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <SectionEyebrow>Questions</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-6xl">
              Frequently <em className="italic text-emerald">asked</em>.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`i-${i}`}
                className="rounded-2xl border border-border/70 bg-card px-6"
              >
                <AccordionTrigger className="text-left font-display text-lg text-navy-deep">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- CTA banner ----------------------------- */

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald/25 blur-3xl" />
        <div
          className="animate-blob absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-5xl font-light leading-[1] tracking-tight md:text-7xl">
            Ready to build a brand
            <br />
            <em className="italic gradient-text">worth remembering?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Tell us about your business. We'll come back within 24 hours with a
            tailored plan.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-emerald-glow hover:text-white"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 cursor-pointer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" style={{ color: "#25D366" }} />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Contact ------------------------------- */

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  email: z.string().trim().email("Enter a valid email").max(200),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});
type ContactValues = z.infer<typeof contactSchema>;

function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      business: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const service = watch("service");
  const budget = watch("budget");

  const onSubmit = async (v: ContactValues) => {
    await new Promise((r) => setTimeout(r, 600));
    const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      `New enquiry from ${v.name}\nBusiness: ${v.business || "-"}\nEmail: ${v.email}\nPhone: ${v.phone}\nService: ${v.service}\nBudget: ${v.budget}\n\n${v.message}`
    )}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    toast.success("Message ready to send via WhatsApp");
    reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionEyebrow>Get in touch</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-light tracking-tight text-navy-deep md:text-6xl">
                Let's build <em className="italic text-emerald">something great</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted-foreground">
                Prefer to talk directly? Reach out on any channel below — we usually
                reply within a few hours.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              <ContactCard
                href={PHONE_LINK}
                icon={Phone}
                label="Call us"
                value="+27 79 321 2561"
              />
              <ContactCard
                href={WA_LINK}
                icon={MessageCircle}
                label="WhatsApp"
                value="+27 79 321 2561"
                external
                brand="whatsapp"
              />
              <ContactCard
                href={EMAIL_LINK}
                icon={Mail}
                label="Email"
                value="KganoBrandStudio@gmail.com"
              />
              <ContactCard
                href={FB_LINK}
                icon={Mail}
                label="Facebook"
                value="Abednigo Khwere Mokalapa"
                external
                brand="facebook"
              />
              <a
                href="https://www.google.com/maps/place/59+Clarke+St,+Rynfield,+Benoni,+1501,+South+Africa/@-26.1511409,28.3365272,17z"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 transition hover:border-emerald/50 cursor-pointer"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-navy-deep text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Based in
                  </p>
                  <p className="text-sm font-semibold text-navy-deep">
                    59 Clarke St, Rynfield, Benoni, 1501, South Africa
                  </p>
                </div>
              </a>

              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-luxe">
                <iframe
                  title="KGANO Brand Studio location"
                  src="https://www.google.com/maps?q=59+Clarke+St,+Rynfield,+Benoni,+1501,+South+Africa&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-3xl border border-border/70 bg-card p-6 shadow-luxe md:p-10"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <Input {...register("name")} placeholder="Your full name" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <Input {...register("phone")} placeholder="+27 …" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <Input type="email" {...register("email")} placeholder="you@company.com" />
                  </Field>
                  <Field label="Business name" error={errors.business?.message}>
                    <Input {...register("business")} placeholder="Optional" />
                  </Field>
                  <Field label="Service needed" error={errors.service?.message}>
                    <Select value={service} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICE_GROUPS.flatMap((g) => g.items).map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Budget" error={errors.budget?.message}>
                    <Select value={budget} onValueChange={(v) => setValue("budget", v, { shouldValidate: true })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Under R5,000", "R5,000 – R15,000", "R15,000 – R50,000", "R50,000+"].map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field className="mt-5" label="Message" error={errors.message?.message}>
                  <Textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project…"
                  />
                </Field>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 h-12 w-full rounded-full bg-navy-deep text-base font-semibold text-white hover:bg-emerald"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send enquiry
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  By sending, you agree to be contacted about your enquiry.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  external,
  brand,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  value: string;
  external?: boolean;
  brand?: "whatsapp" | "facebook";
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 transition hover:-translate-y-0.5 hover:border-emerald/50 hover:shadow-luxe cursor-pointer"
    >
      <div
        className="grid h-11 w-11 place-items-center rounded-xl text-white transition"
        style={{
          background:
            brand === "whatsapp" ? "#25D366" : brand === "facebook" ? "#1877F2" : undefined,
        }}
      >
        <span className={brand ? "" : "grid h-11 w-11 place-items-center rounded-xl bg-navy-deep"}>
          {brand === "whatsapp" ? (
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
          ) : brand === "facebook" ? (
            <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
          ) : (
            <Icon className="h-5 w-5" />
          )}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-semibold text-navy-deep">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-emerald group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
        <div className="grid-lines absolute inset-0 opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="KGANO Brand Studio" width={56} height={56} className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-6 max-w-md text-sm text-white/60">
              A premium South African creative branding agency helping ambitious
              businesses look professional and grow confidently.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={FB_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition cursor-pointer hover:border-transparent"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1877F2")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition cursor-pointer hover:border-transparent"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
              </a>
              <a
                href={EMAIL_LINK}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={PHONE_LINK}
                aria-label="Phone"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:bg-white/10 cursor-pointer"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Quick links</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/70 transition hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Services</p>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 text-sm">
              {[
                "Logo Design",
                "Brand Identity",
                "Website Design",
                "Marketing Strategy",
                "Business Profiles",
                "Social Media",
                "Business Plans",
                "Architectural Design",
              ].map((s) => (
                <li key={s} className="text-white/70">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/70">
              <p className="font-semibold text-white">Say hello</p>
              <p className="mt-1">KganoBrandStudio@gmail.com</p>
              <p>+27 79 321 2561</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} KGANO Brand Studio. All rights reserved.</p>
          <p>Building Brands. Inspiring Success.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ Floating buttons -------------------------- */

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 cursor-pointer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
    </a>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-navy-deep shadow-luxe hover:bg-secondary"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Unused imports helper - keep tree-shaking friendly (referenced above)
export const __icons = { Instagram };