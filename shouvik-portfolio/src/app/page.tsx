"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, GraduationCap, Briefcase, Code2, Cpu, Brain, Rocket } from "lucide-react";


// --- Profile Data (edit these!) ---
const PROFILE = {
  name: "Shouvik Seth",
  tagline: "AI Engineering • Surgical Robotics • Embedded Systems",
  location: "New Brunswick, NJ",
  summary:
    "M.S. Computer Science (AI) candidate at Rutgers with 3+ years of software engineering experience at Infosys and hands-on medical robotics engineering at KARL STORZ (formerly Asensus Surgical), spanning EtherCAT firmware, DDS-driven software, real-time 3D visualization, and AI-assisted test automation.",
  email: "shouvikseth372@gmail.com",
  phone: "+1 (919) 309-6249",
  resumeUrl: "/Shouvik_Seth_Resume_2026.pdf",
  links: {
    github: "https://github.com/shouvikseth",
    linkedin: "https://www.linkedin.com/in/shouvik-seth-94914b227/",
  },
};

const SKILLS = [
  { name: "Python", level: 5, group: "Languages" },
  { name: "C++", level: 4, group: "Languages" },
  { name: "Java", level: 4, group: "Languages" },
  { name: "JavaScript / TypeScript", level: 4, group: "Languages" },
  { name: "SQL", level: 4, group: "Languages" },
  { name: "PyTorch / TensorFlow", level: 4, group: "AI/ML" },
  { name: "OpenCV / Computer Vision", level: 4, group: "AI/ML" },
  { name: "LLMs / RAG / DeepEval", level: 5, group: "AI/ML" },
  { name: "Django / Flask", level: 4, group: "Frameworks" },
  { name: "React / Angular / Node.js", level: 4, group: "Frameworks" },
  { name: "EtherCAT / CoE / EEPROM", level: 4, group: "Embedded" },
  { name: "DDS / Real-time Systems", level: 4, group: "Robotics" },
  { name: "ROS / LiDAR / RViz", level: 4, group: "Robotics" },
  { name: "Docker / Kubernetes / CI/CD", level: 4, group: "Cloud" },
  { name: "Selenium / Test Automation", level: 5, group: "Automation" },
];

const PROJECTS = [
  {
    title: "Surgical Handle Tracking Visualization",
    blurb:
      "Built a Rerun-based real-time and replay 3D visualization pipeline for surgical handle tracking data across CSV, MCAP, mock, and live DDS modes, surfacing pose, motion trails, latency, jitter, and dropout diagnostics.",
    tags: ["Robotics", "Real-time", "Perception"],
  },
  {
    title: "EtherCAT Firmware Device Information",
    blurb:
      "Implemented a new CoE 0x2200 device-information object in surgical-handle firmware by extending the SSC object dictionary and ESI definition, with EEPROM persistence for vendor, model, serial, revision, and device metadata.",
    tags: ["Firmware", "Embedded", "Robotics"],
  },
  {
    title: "DDS-Driven Robot Console Update Mode",
    blurb:
      "Delivered a firmware-flashing Update Mode for the Robot Console with DDS-backed event handling, application state management, and a fullscreen operator UI that reports progress, success, failure, and device-specific status.",
    tags: ["Robotics", "Real-time", "Full-stack"],
  },
  {
    title: "Multi-Agent Unit Test Automation",
    blurb:
      "Designed a conductor/implementer/reviewer agent workflow with an approval gate and persistent audit trail to generate and validate C++ unit tests for safety-critical software and support IEC 62304 Class B/C development workflows.",
    tags: ["AI", "Automation", "Embedded"],
  },
  {
    title: "Applied AI Platform for Quality Engineering",
    blurb:
      "Helped architect and deliver GPT-4 and Llama-powered enterprise QA automation across 12 client accounts, including asynchronous API pipelines, DOM extraction, multi-agent workflows, and large-scale automated test execution.",
    tags: ["AI", "Automation", "Backend"],
  },
  {
    title: "AI Assurance Platform",
    blurb:
      "Engineered an LLM evaluation framework integrating DeepEval and Botpress APIs for Relevancy, Completeness, and Retention metrics, with a Django and Angular analytics dashboard for model-quality analysis.",
    tags: ["AI", "NLP", "Full-stack"],
  },
  {
    title: "Cloud-Based LLM Evaluation System",
    blurb:
      "Architected a Kubernetes-orchestrated microservice platform for scalable LLM benchmarking, integrating DeepEval metrics and custom explainability modules to surface actionable model-quality insights.",
    tags: ["AI", "Cloud", "Backend"],
  },
  {
    title: "Room Mapping Robot",
    blurb:
      "Developed an autonomous environment-mapping robot using ROS Noetic, LiDAR sensing, and Arduino-based actuation, validating perception and navigation behavior in RViz and MATLAB before hardware deployment.",
    tags: ["Robotics", "Embedded", "Perception"],
  },
  {
    title: "This Bot is on Fire",
    blurb:
      "Designed an intelligent navigation agent combining A* search and probabilistic reasoning to plan under uncertainty in stochastic fire-spread grid environments.",
    tags: ["AI", "Algorithms"],
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    org: "KARL STORZ (formerly Asensus Surgical)",
    date: "May 2026 — Aug 2026",
    points: [
      "Delivered firmware, real-time visualization, and AI-assisted QA tooling for a Class B/C surgical robotics platform",
      "Built a Rerun visualization pipeline supporting CSV, MCAP, mock, and live DDS handle-tracking inputs",
      "Implemented an EtherCAT CoE device-information object with SSC/ESI integration and EEPROM persistence",
      "Delivered a DDS-driven Robot Console Update Mode for firmware-flashing status and device-specific feedback",
      "Designed a multi-agent unit-test generation workflow with approval gates and audit-ready traceability",
    ],
  },
  {
    role: "Software Engineer — AI & QA Automation",
    org: "Infosys India Pvt. Ltd.",
    date: "Sep 2021 — Dec 2024",
    points: [
      "Delivered AI-powered enterprise platforms across 12 clients and helped reduce QA and release-cycle effort",
      "Built GPT-4 and Llama-powered automation workflows, asynchronous APIs, DOM extraction pipelines, and multi-agent tooling",
      "Engineered LLM evaluation systems using DeepEval, Botpress, Django, and Angular",
      "Worked across Python, Java, JavaScript, SQL, Selenium, cloud infrastructure, and CI/CD",
    ],
  },
  {
    role: "M.S. in Computer Science (AI)",
    org: "Rutgers University–New Brunswick",
    date: "Jan 2025 — Present",
    points: [
      "Graduate study spanning artificial intelligence, algorithms, robotics, computer vision, and computer systems",
      "Academic projects include probabilistic navigation, visual perception, robotics, and memory-constrained algorithms",
    ],
  },
];

const TAGS = ["All", "Robotics", "Firmware", "Embedded", "Real-time", "Perception", "AI", "Automation", "Full-stack", "NLP", "Cloud", "Backend", "Algorithms"] as const;

type Tag = (typeof TAGS)[number];

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm"><span>{name}</span><span className="tabular-nums">{level}/5</span></div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div className="h-2 rounded-full bg-primary" style={{ width: `${(level / 5) * 100}%` }} />
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
  return (
    <motion.div variants={fadeIn}>
      <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Code2 className="size-4" /> {p.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <p className="text-muted-foreground">{p.blurb}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
            ))}
          </div>
          {/* <div className="flex gap-3 pt-1">
            {p.links?.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">
                <ExternalLink className="size-4" /> {l.label}
              </a>
            ))}
          </div> */}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<Tag>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PROJECTS.filter((p) =>
      (tag === "All" || p.tags.includes(tag)) &&
      (p.title.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q))
    );
  }, [query, tag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              <Rocket className="size-3.5" /> Open to AI, software & robotics opportunities
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {PROFILE.name}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              {PROFILE.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="size-4" /> {PROFILE.location}</span>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:underline"><Mail className="size-4" /> {PROFILE.email}</a>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Linkedin className="size-4" /> LinkedIn</a>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline"><Github className="size-4" /> GitHub</a>
            </div>
            <div className="flex gap-3 pt-1">
              <Button asChild className="rounded-2xl">
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" download>
                  <Download className="mr-2 size-4" /> Download Résumé
                </a>
              </Button>
              {/* <Button variant="outline" asChild className="rounded-2xl">
                <a href={`mailto:${PROFILE.email}`}>Contact Me</a>
              </Button> */}
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Brain className="size-5" /> Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="font-medium flex items-center gap-2"><GraduationCap className="size-4" /> Rutgers — M.S. Computer Science</div>
                <div className="text-muted-foreground">Jan 2025 — Present</div>
                <div className="font-medium flex items-center gap-2 pt-2"><Briefcase className="size-4" /> Asensus — Software Dev Intern</div>
                <div className="text-muted-foreground">May 2026 — Aug 2026</div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Software Engineering", level: 5 },
                  { name: "Robotics / C++", level: 4 },
                  { name: "AI / Automation", level: 4 },
                ].map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-12">
        {/* Skills */}
        <section>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Cpu className="size-5" /> Skills
          </motion.h2>
          <Card className="rounded-2xl">
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {SKILLS.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section id="projects">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code2 className="size-5" /> Projects
          </motion.h2>
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
                <Input placeholder="Search projects…" value={query} onChange={(e) => setQuery(e.target.value)} className="md:max-w-sm" />
                <Tabs value={tag} onValueChange={(v) => setTag(v as Tag)} className="w-full md:w-auto">
                  <TabsList className="rounded-2xl">
                    {TAGS.map((t) => (
                      <TabsTrigger key={t} value={t} className="rounded-2xl">{t}</TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              <Separator />
              <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <ProjectCard key={p.title} p={p} />
                ))}
                {filtered.length === 0 && (
                  <div className="text-muted-foreground text-sm">No projects match your search.</div>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </section>

        {/* Experience / Education */}
        <section>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="size-5" /> Experience & Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {EXPERIENCE.map((e) => (
              <Card key={e.role} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base">{e.role}</CardTitle>
                  <div className="text-sm text-muted-foreground">{e.org} • {e.date}</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-muted-foreground">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="inline-flex items-center gap-1 hover:underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer"><Linkedin className="size-4" /> LinkedIn</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={PROFILE.links.github} target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${PROFILE.email}`}><Mail className="size-4" /> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}