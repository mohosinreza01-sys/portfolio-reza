
"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Layers3,
    Palette,
    Rocket,
    ShoppingBag,
    Server,
    Sparkles,
} from "lucide-react";

const services = [
    {
        number: "01",
        icon: Code2,
        title: "Web Development",
        short: "Fast. Modern. Scalable.",
        description:
            "High-performance websites and web applications with clean architecture, responsive layouts and polished interactions.",
        stack: ["Next.js", "React", "JavaScript"],
    },
    {
        number: "02",
        icon: Palette,
        title: "UI / UX Design",
        short: "Interfaces with intention.",
        description:
            "Clean, modern interfaces designed around usability, visual hierarchy and a memorable user experience.",
        stack: ["Figma", "UI Systems", "Responsive"],
    },
    {
        number: "03",
        icon: ShoppingBag,
        title: "E-Commerce",
        short: "Built to convert.",
        description:
            "Premium online stores with smooth product discovery, responsive shopping experiences and scalable foundations.",
        stack: ["Next.js", "WooCommerce", "Laravel"],
    },
    {
        number: "04",
        icon: Server,
        title: "Backend & API",
        short: "Logic behind the experience.",
        description:
            "Secure and maintainable APIs, authentication systems and backend architecture built for real-world products.",
        stack: ["Node.js", "Express", "Laravel"],
    },
    {
        number: "05",
        icon: Layers3,
        title: "Full-Stack Development",
        short: "From idea to production.",
        description:
            "Complete digital products connecting frontend, backend, database and deployment into one seamless system.",
        stack: ["Next.js", "Node.js", "MySQL"],
    },
    {
        number: "06",
        icon: Rocket,
        title: "Performance & SEO",
        short: "Faster experiences. Better reach.",
        description:
            "Performance optimization, technical SEO and Core Web Vitals improvements for a faster and more discoverable website.",
        stack: ["SEO", "Core Web Vitals", "Analytics"],
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#030909] py-20 text-white sm:py-28 lg:py-36"
        >
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.022]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="pointer-events-none absolute -left-32 top-[15%] h-[380px] w-[380px] rounded-full bg-cyan-400/[0.045] blur-[120px]" />

            <div className="pointer-events-none absolute -right-32 bottom-[5%] h-[380px] w-[380px] rounded-full bg-emerald-400/[0.04] blur-[120px]" />

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

                {/* =====================================================
            HEADER
        ====================================================== */}

                <div className="mb-16 sm:mb-24 lg:mb-28">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.05]">
                            <Sparkles
                                size={15}
                                className="text-cyan-300"
                            />
                        </span>

                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                            Services
                        </span>
                    </motion.div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">

                        <motion.h2
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="max-w-5xl text-[clamp(3.1rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
                        >
                            Digital work,
                            <span className="block text-white/25">
                                done properly.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-sm border-l border-white/10 pl-5 text-sm leading-7 text-white/40 sm:pl-6 sm:text-base"
                        >
                            I combine thoughtful design, modern engineering
                            and performance to turn ideas into useful digital
                            products.
                        </motion.p>
                    </div>
                </div>

                {/* =====================================================
            DESKTOP SERVICES
        ====================================================== */}

                <div className="hidden border-t border-white/[0.08] md:block">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.number}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.04,
                                }}
                                className="group relative border-b border-white/[0.08]"
                            >
                                <div className="absolute inset-0 bg-white/[0.018] opacity-0 transition duration-500 group-hover:opacity-100" />

                                <div className="relative grid grid-cols-[70px_70px_1fr_auto] items-center gap-7 py-10 lg:grid-cols-[90px_80px_1fr_300px_auto] lg:gap-8 lg:py-12">

                                    {/* number */}
                                    <span className="text-xs font-medium tracking-[0.2em] text-cyan-300/60">
                                        {service.number}
                                    </span>

                                    {/* icon */}
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-white/40 transition-all duration-500 group-hover:border-cyan-300/25 group-hover:bg-cyan-300/[0.05] group-hover:text-cyan-300">
                                        <Icon
                                            size={22}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* title */}
                                    <div>
                                        <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-cyan-300/50">
                                            {service.short}
                                        </div>

                                        <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white transition duration-300 lg:text-[2.3rem] group-hover:text-cyan-50">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/35 lg:text-base">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* stack */}
                                    <div className="hidden lg:block">
                                        <div className="mb-3 text-[9px] uppercase tracking-[0.25em] text-white/20">
                                            Technologies
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {service.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px] text-white/35 transition group-hover:border-cyan-300/15 group-hover:text-white/60"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* arrow */}
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/25 transition duration-500 group-hover:border-cyan-300/30 group-hover:text-cyan-300">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* =====================================================
            MOBILE SERVICES
        ====================================================== */}

                <div className="space-y-4 md:hidden">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.number}
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.04,
                                }}
                                className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#071010] p-5 sm:rounded-[28px] sm:p-7"
                            >
                                {/* top accent */}
                                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/30 to-emerald-300/0" />

                                {/* Header */}
                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/[0.08] bg-white/[0.025] text-cyan-300">
                                            <Icon
                                                size={20}
                                                strokeWidth={1.6}
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-[9px] uppercase tracking-[0.2em] text-cyan-300/60">
                                                Service {service.number}
                                            </span>

                                            <span className="mt-1 block text-xs text-white/25">
                                                {service.short}
                                            </span>
                                        </div>
                                    </div>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/25">
                                        <ArrowUpRight size={15} />
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mt-7 text-[1.75rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-[14px] leading-7 text-white/40 sm:text-base">
                                    {service.description}
                                </p>

                                {/* Stack */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {service.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] text-white/35"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom line */}
                                <div className="mt-6 flex items-center gap-3">
                                    <span className="h-px flex-1 bg-white/[0.07]" />

                                    <span className="text-[9px] uppercase tracking-[0.22em] text-white/20">
                                        Build / Design / Scale
                                    </span>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* =====================================================
            PROCESS
        ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 border-t border-white/[0.08] pt-10 sm:mt-28 sm:pt-12"
                >

                    <div className="grid gap-8 sm:grid-cols-3">

                        {[
                            ["01", "Discover", "Understand the idea, goals and users."],
                            ["02", "Build", "Design and engineer the experience."],
                            ["03", "Launch", "Optimize, refine and ship it properly."],
                        ].map(([number, title, text]) => (
                            <div
                                key={number}
                                className="group"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-cyan-300/60">
                                        {number}
                                    </span>

                                    <span className="h-px flex-1 bg-white/[0.07]" />
                                </div>

                                <h4 className="mt-5 text-lg font-medium text-white sm:text-xl">
                                    {title}
                                </h4>

                                <p className="mt-2 max-w-xs text-sm leading-6 text-white/30">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* =====================================================
            CTA
        ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p className="text-sm text-white/30">
                        Have something worth building?
                    </p>

                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] hover:text-cyan-300"
                    >
                        Start a conversation

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
