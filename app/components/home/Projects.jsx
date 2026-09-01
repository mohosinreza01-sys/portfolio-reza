"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Cloud Bazar",
        type: "E-Commerce",
        year: "2026",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=90",
    },
    {
        title: "DailyHaat",
        type: "Marketplace",
        year: "2026",
        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=90",
    },
    {
        title: "Digital Identity",
        type: "Portfolio",
        year: "2026",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=90",
    },
    {
        title: "Nexus",
        type: "SaaS Platform",
        year: "2026",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
    },
];

export default function Projects() {
    const [active, setActive] = useState(0);

    // Auto carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % projects.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const getOffset = (index) => {
        let offset = index - active;

        if (offset > projects.length / 2) {
            offset -= projects.length;
        }

        if (offset < -projects.length / 2) {
            offset += projects.length;
        }

        return offset;
    };

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#030909] py-24 text-white sm:py-32"
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                {/* HEADER */}
                <div className="mb-12 flex items-end justify-between sm:mb-16">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-cyan-300/60" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-300/60">
                                Selected Work
                            </span>
                        </div>

                        <h2 className="text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                            Featured
                            <br />
                            <span className="text-white/25">projects.</span>
                        </h2>
                    </div>

                    <div className="hidden text-right sm:block">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                            04 Projects
                        </p>

                        <p className="mt-2 text-sm text-white/30">
                            Digital experiences
                        </p>
                    </div>
                </div>

                {/* CAROUSEL */}
                <div className="relative h-[440px] sm:h-[570px] lg:h-[620px]">

                    {projects.map((project, index) => {
                        const offset = getOffset(index);
                        const activeCard = offset === 0;

                        // Mobile positioning
                        const mobileX = offset * 92;

                        // Desktop positioning
                        const desktopX = offset * 64;

                        return (
                            <motion.div
                                key={project.title}
                                animate={{
                                    x: `${mobileX}%`,
                                    scale: activeCard ? 1 : 0.82,
                                    opacity: Math.abs(offset) > 1 ? 0 : activeCard ? 1 : 0.42,
                                    zIndex: activeCard ? 30 : 10,
                                    rotateY: offset * -5,
                                }}
                                whileInView={{
                                    x: `${mobileX}%`,
                                }}
                                transition={{
                                    duration: 0.75,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute left-1/2 top-0 h-full w-[88%] -translate-x-1/2 sm:w-[70%] lg:w-[52%]"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div className="group relative h-full overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#071010] shadow-[0_35px_100px_rgba(0,0,0,0.55)] sm:rounded-[38px]">

                                    {/* IMAGE */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="eager"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    {/* DARK OVERLAY */}
                                    <div className="absolute inset-0 bg-black/10" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020606] via-black/20 to-transparent" />

                                    {/* TOP */}
                                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">

                                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-xl">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />

                                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/70">
                                                {project.type}
                                            </span>
                                        </div>

                                        <span className="font-mono text-[10px] text-white/40">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">

                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/70">
                                                0{index + 1}
                                            </span>

                                            <span className="h-px w-8 bg-white/20" />
                                        </div>

                                        <div className="flex items-end justify-between gap-4">

                                            <div>
                                                <h3 className="text-[2.5rem] font-semibold leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                                                    {project.title}
                                                </h3>

                                                <div className="mt-5 flex gap-1.5">
                                                    {projects.map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className={`h-[2px] rounded-full transition-all duration-500 ${i === active
                                                                    ? "w-8 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,.6)]"
                                                                    : "w-2 bg-white/20"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Arrow */}
                                            <button
                                                aria-label={`View ${project.title}`}
                                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 sm:h-14 sm:w-14"
                                            >
                                                <ArrowUpRight size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Shine */}
                                    <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[50%] skew-x-[-20deg] bg-white/[0.04] transition-all duration-1000 group-hover:left-[130%]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* BOTTOM */}
                <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">

                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-cyan-300">
                            {String(active + 1).padStart(2, "0")}
                        </span>

                        <div className="h-px w-12 bg-white/10" />

                        <span className="font-mono text-xs text-white/20">
                            {String(projects.length).padStart(2, "0")}
                        </span>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                        Auto Showcase
                    </span>
                </div>
            </div>
        </section>
    );
}