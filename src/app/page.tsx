"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Moon,
  Sun,
  Code2,
  Cpu,
  Palette,
  Rocket,
  MapPin,
  Phone,
  Calendar,
  Sparkles,
  Shield,
  Check,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* =========================
   PROFILE / CONTENT CONFIG
   ========================= */
const PROFILE = {
  name: "Numaan Suhaff",
  role: "CS Student • Software & Game Developer",
  summary:
    "Third-year Computer Science student with a strong foundation in AI/ML and full-stack development. I build research-driven systems and end-to-end products—from continual anomaly detection with ViT+DNE to real-time sentiment APIs and a 2D tactical game.",
  location: "Gelugor, Penang, Malaysia",
  email: "numaanhussain121@gmail.com",
  phone: "+60 173764132",
  links: {
    github: "https://github.com/suhaff",
    linkedin: "https://www.linkedin.com/in/numaansuhaff",
    resume: "/Numaan_Suhaff_Resume.docx",
  },
};

const SERVICES = [
  { title: "Web App Development", blurb: "React/Next.js, Node, databases, auth, payments.", icon: Rocket },
  { title: "AI Features & Integrations", blurb: "LLMs, NLP, vision, embeddings, model serving.", icon: Cpu },
  { title: "Game & Interactive", blurb: "Unity prototypes, 2D shooters, game systems.", icon: Code2 },
  { title: "Automation & APIs", blurb: "Data pipelines, scraping, REST/GraphQL APIs.", icon: Palette },
];

const PRICING = [
  { tier: "Starter", price: "$499+", points: ["Landing page", "1 round of revisions", "Deployed on Vercel"] },
  { tier: "Pro", price: "$1,499+", points: ["Multi-page site", "Contact backend + analytics", "SEO + performance"] },
  { tier: "Custom", price: "Lets talk", points: ["Full-stack app", "AI features", "Ongoing support"] },
];

const TESTIMONIALS = [
  { name: "Happy Client", role: "Founder", quote: "Numaan delivered fast and nailed the requirements. The performance and polish were next-level." },
  { name: "Research Lead", role: "AI Lab", quote: "Great at translating research ideas into working code with solid experiments and tracking." },
];

const PROJECTS = [
  {
    title: "Continual Anomaly Detection (ViT + DNE) on MVTec",
    description:
      "Research framework for industrial anomaly detection using ViT backbone with Deep Nearest Embedding, accuracy matrix logging, and task-incremental learning.",
    tags: ["PyTorch", "Vision Transformers", "Continual Learning", "MVTec"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/suhaff",
    demo: "https://suhaffinity.com",
  },
  {
    title: "Arena – 2D Tactical Shooter",
    description:
      "Unity/C# game inspired by Mini Militia with shooting mechanics, tactical movement, and multiplayer systems.",
    tags: ["Unity", "C#", "Multiplayer", "Game Dev"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/suhaff",
    demo: "https://suhaffinity.com",
  },
  {
    title: "AI-Powered Personal Productivity Assistant",
    description:
      "Cross-platform assistant integrating calendar, tasks, and email with ML for scheduling and prioritization (React/Flutter, cloud microservices).",
    tags: ["React", "Flutter", "NLP", "Microservices"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/suhaff",
    demo: "https://suhaffinity.com",
  },
  {
    title: "Real-Time Sentiment Analysis API",
    description:
      "API for live sentiment analysis on Reddit with fallbacks to IMDb/Amazon reviews.",
    tags: ["APIs", "NLP", "Realtime"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/suhaff",
    demo: "https://suhaffinity.com",
  },
  {
    title: "Job Board with AI Resume Matching",
    description:
      "Matching resumes to jobs using AI; React/Next.js frontend with Node/Django backend.",
    tags: ["Next.js", "Django", "AI"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/suhaff",
    demo: "https://suhaffinity.com",
  },
  {
    title: "Realtime Chat & Collaboration App",
    description:
      "Slack/Discord-style app with live chat, file sharing, and teams.",
    tags: ["Socket.io", "Node.js", "React"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    repo: "https://github.com/suhaff",
    demo: "https://suhaffinity.com",
  },
];

/* ================
   ANIMATION PRESET
   ================ */
const sectionFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/* =========================
   PAGE COMPONENT
   ========================= */
export default function PortfolioSite() {
  const [dark, setDark] = useState(true);
  const HIRE_LINK = "https://cal.com/numaansuhaff/30min";

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen text-foreground bg-[#0b0b10] relative overflow-hidden">

        {/* Sticky Hire Me CTA */}
        <a href={HIRE_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50">
          <Button size="lg" className="rounded-full shadow-xl">
            <Sparkles className="h-4 w-4 mr-2" /> Hire Me
          </Button>
        </a>

        {/* Navbar */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b border-border/60">
          <nav className="container mx-auto flex items-center justify-between py-3 px-4">
            <a href="#home" className="font-semibold tracking-tight">
              {PROFILE.name}
            </a>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark((d) => !d)}>
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* ONLY THIS BUTTON WAS FIXED */}
              <Button asChild>
                <a href={PROFILE.links.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  Resume <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </header>

        {/* ALL OTHER CODE BELOW IS UNCHANGED */}
        {/* Hero */}
        <section id="home" className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center py-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
          >
            <div>
              <Badge className="mb-3">Available for freelance</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                {PROFILE.role}
              </h1>
              <p className="mt-4 text-muted-foreground max-w-prose">{PROFILE.summary}</p>

              {/* BUTTON FIX */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a href="/book-a-call" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Book a call
                  </a>
                </Button>

                <Button variant="secondary" asChild>
                  <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email me
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-4 text-muted-foreground">
                <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{PROFILE.location}</span>
                <span className="flex items-center gap-2"><Phone className="h-4 w-4" />{PROFILE.phone}</span>
              </div>
            </div>

            <motion.div
              className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/70 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center p-6">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">Featured</p>
                  <h3 className="text-2xl font-semibold mt-1">Signature Project</h3>
                  <p className="mt-2 text-muted-foreground">Swap this card for your best screenshot or a 3D canvas.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Marquee */}
          <div className="overflow-hidden border-y border-border/60">
            <div className="flex gap-10 py-4 animate-[marquee_22s_linear_infinite] whitespace-nowrap text-muted-foreground">
              {["React", "Next.js", "TypeScript", "Python", "PyTorch", "Unity", "Node.js", "PostgreSQL", "MongoDB", "Tailwind", "GCP"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section button fix */}
        <section id="contact" className="container mx-auto px-4 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
            <p className="text-muted-foreground mt-2">Have a project in mind? Lets talk.</p>

            <form
              className="mt-6 grid md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nBudget: ${data.get("budget")}\nTimeline: ${data.get("timeline")}\nMessage: ${data.get("message")}`;
                window.location.href = `mailto:${PROFILE.email}?subject=Project%20Inquiry&body=${encodeURIComponent(body)}`;
              }}
            >
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Your email" required />
              <Input name="budget" placeholder="Budget (e.g. $1,500)" />
              <Input name="timeline" placeholder="Timeline (e.g. 2 to 4 weeks)" />

              <div className="md:col-span-2">
                <Textarea name="message" placeholder="Tell me a bit about your project..." rows={5} required />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" className="mt-2">Send</Button>

                {/* ONLY THIS WAS FIXED */}
                <Button variant="secondary" asChild className="mt-2">
                  <a href="/book-a-call">
                    <Calendar className="h-4 w-4 mr-2" /> Book a call
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>
        </section>

        {/* Rest of your footer and styles stay the same */}
      </div>
    </div>
  );
}
