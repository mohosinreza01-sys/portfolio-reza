"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
    Layers3,
    Sparkles,
} from "lucide-react";

const projects = [
    {
        id: "01",
        title: "Cloud Bazar",
        subtitle: "Commerce / Digital Store",
        description:
            "A modern commerce experience engineered for speed, clarity and effortless product discovery.",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90",
        technologies: ["Next.js", "React", "Node.js"],
        year: "2026",
    },
    {
        id: "02",
        title: "DailyHaat",
        subtitle: "Marketplace / Platform",
        description:
            "A scalable marketplace interface combining intuitive browsing with a powerful backend architecture.",
        image:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1800&q=90",
        technologies: ["React", "Laravel", "MySQL"],
        year: "2026",
    },
    {
        id: "03",
        title: "My Portfolio",
        subtitle: "Personal / Digital Identity",
        description:
            "A cinematic developer portfolio focused on interaction, performance and a distinctive digital identity.",
        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=90",
        technologies: ["Next.js", "Framer Motion", "Tailwind"],
        year: "2026",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#030909] py-24 text-white sm:py-32 lg:py-40"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.045] blur-[140px]" />

                <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-400/[0.04] blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

                {/* =====================================================
            HEADER
        ====================================================== */}

                <div className="mb-20 flex flex-col gap-8 sm:mb-28 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 flex items-center gap-3"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.04]">
                                <Sparkles size={14} className="text-cyan-300" />
                            </span>

                            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                                Selected Work
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em]"
                        >
                            Built to be
                            <span className="block text-white/25">
                                remembered.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-sm text-sm leading-7 text-white/35 sm:text-base"
                    >
                        Digital products where engineering meets visual
                        storytelling, performance and thoughtful interaction.
                    </motion.p>
                </div>

                {/* =====================================================
            PROJECT VAULT
        ====================================================== */}

                <div className="space-y-24 sm:space-y-32">

                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 70,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.12,
                            }}
                            transition={{
                                duration: 0.85,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group relative"
                        >
                            {/* Project number */}
                            <div className="absolute -top-7 left-0 z-30 flex items-center gap-3 sm:-top-9">
                                <span className="text-xs font-medium tracking-[0.2em] text-cyan-300">
                                    {project.id}
                                </span>

                                <span className="h-px w-8 bg-cyan-300/30" />
                            </div>

                            {/* Main shell */}
                            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#071010] sm:rounded-[38px]">

                                {/* top line */}
                                <div className="absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

                                {/* =================================================
                    IMAGE
                ================================================== */}

                                <div className="relative overflow-hidden">
                                    <div className="aspect-[1.25/1] sm:aspect-[1.8/1] lg:aspect-[2.05/1]">

                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.045]"
                                        />

                                        {/* image darkening */}
                                        <div className="absolute inset-0 bg-black/35 transition duration-700 group-hover:bg-black/15" />

                                        {/* cinematic bottom */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071010] to-transparent" />

                                        {/* spotlight */}
                                        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                                            <div className="absolute left-[40%] top-[35%] h-40 w-40 rounded-full bg-cyan-300/10 blur-[70px]" />
                                        </div>
                                    </div>

                                    {/* =================================================
                      FLOATING PROJECT LABEL
                  ================================================== */}

                                    <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
                                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-xl">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.8)]" />
                                            Live Experience
                                        </div>
                                    </div>

                                    {/* =================================================
                      FLOATING YEAR
                  ================================================== */}

                                    <div className="absolute right-5 top-5 sm:right-8 sm:top-8">
                                        <span className="text-xs tracking-[0.15em] text-white/35">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* =================================================
                      DESKTOP TITLE OVER IMAGE
                  ================================================== */}

                                    <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-12 lg:left-12 lg:right-12">
                                        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                                            <div>
                                                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                                                    {project.subtitle}
                                                </p>

                                                <h3 className="text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-none tracking-[-0.06em]">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            {/* Round action */}
                                            <motion.a
                                                href="#"
                                                whileHover={{
                                                    scale: 1.08,
                                                }}
                                                className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-black transition sm:flex"
                                            >
                                                <ArrowUpRight size={24} />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* =================================================
                    BOTTOM INFO
                ================================================== */}

                                <div className="grid border-t border-white/[0.07] lg:grid-cols-[1fr_auto]">

                                    {/* description */}
                                    <div className="p-6 sm:p-9 lg:p-11">
                                        <div className="flex items-start gap-4">
                                            <Layers3
                                                size={18}
                                                className="mt-1 shrink-0 text-cyan-300/60"
                                            />

                                            <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* technologies */}
                                    <div className="border-t border-white/[0.07] p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-11">
                                        <div className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/25">
                                            Built with
                                        </div>

                                        <div className="flex flex-wrap gap-2 lg:max-w-[300px]">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-white/45 transition duration-300 group-hover:border-cyan-300/20 group-hover:text-white/65"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* =================================================
                    MOBILE CTA
                ================================================== */}

                                <div className="border-t border-white/[0.07] p-6 sm:hidden">
                                    <a
                                        href="#"
                                        className="flex items-center justify-between rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] px-5 py-4 text-sm font-medium text-cyan-200"
                                    >
                                        <span>View Live Project</span>

                                        <ExternalLink size={17} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-28 border-t border-white/[0.08] pt-8 sm:mt-36"
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                                More experiments
                            </span>
                        </div>

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 text-sm text-white/50 transition hover:text-cyan-300"
                        >
                            Let's build something different

                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-cyan-300/30">
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}