"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-10">
        <motion.header
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="space-y-3"
        >
          <h1 className="text-3xl font-semibold tracking-tight">Let’s Connect</h1>
          <p className="text-muted-foreground max-w-2xl">
            Whether you’re a recruiter, collaborator, or just curious about my projects,
            I’d love to hear from you. Reach out for internships, research, or building
            something cool together.
          </p>
        </motion.header>

        {/* Quick contact cards */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Mail className="size-4" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <a
                href="mailto:shouvikseth372@gmail.com"
                className="hover:underline"
              >
                shouvikseth372@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Linkedin className="size-4" /> LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <a
                href="https://www.linkedin.com/in/shouvik-seth-94914b227/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Connect on LinkedIn
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Github className="size-4" /> GitHub
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <a
                href="https://github.com/shouvikseth"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github.com/shouvikseth
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <MapPin className="size-4" /> Location
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">New Brunswick, NJ</CardContent>
          </Card>
        </motion.section>

        {/* Contact form (Formspree example) */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1fr_0.9fr] gap-8"
        >
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace <your-form-id> with your Formspree ID: https://formspree.io */}
              <form
                action="https://formspree.io/f/<your-form-id>"
                method="POST"
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                {/* Plain textarea styled to match shadcn Input */}
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  suppressHydrationWarning
                  className="w-full min-h-[140px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring placeholder:text-muted-foreground"
                />

                <div className="flex items-center gap-3">
                  <Button type="submit" className="rounded-2xl">
                    Send Message
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href="mailto:shouvikseth372@gmail.com">Email instead</a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Extras: resume + quick links */}
          <div className="space-y-4">
            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Résumé</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Button asChild className="rounded-2xl">
                  <a
                    href="/resume_Shouvik_Seth.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    <Download className="mr-2 size-4" />
                    Download Résumé
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Updated: {new Date().getFullYear()}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Other links</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div>
                  Portfolio Home → <a href="/" className="hover:underline">/</a>
                </div>
                <div>
                  Projects → <a href="/#projects" className="hover:underline">/#projects</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
