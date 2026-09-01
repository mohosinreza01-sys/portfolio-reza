"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Layers3,
    Rocket,
    Sparkles,
    Terminal,
} from "lucide-react";
import Link from "next/link";

const reveal = {
    hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050d0d] py-24 sm:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-[130px]" />
                <div className="absolute right-[-10%] bottom-[10%] h-80 w-80 rounded-full bg-emerald-400/[0.05] blur-[140px]" />

                <div
                    className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* Section heading */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        variants={reveal}
                        className="mb-5 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-cyan-400" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-400 sm:text-xs">
                            About Me
                        </span>

                        <span className="text-xs text-gray-700">
                            / 01
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={reveal}
                        className="
              max-w-4xl
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              md:text-6xl
            "
                    >
                        Building with curiosity.
                        <br />

                        <span className="text-gray-500">
                            Designing with purpose.
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Main content */}
                <div className="mt-16 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

                    {/* LEFT */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <motion.p
                            variants={reveal}
                            className="
                max-w-2xl
                text-[16px]
                leading-8
                text-gray-400
                sm:text-lg
              "
                        >
                            I'm{" "}
                            <span className="font-medium text-white">
                                Mohosin Reza
                            </span>
                            , a Full Stack Developer passionate about
                            turning ideas into modern digital products.
                        </motion.p>

                        <motion.p
                            variants={reveal}
                            className="
                mt-5
                max-w-2xl
                text-[15px]
                leading-7
                text-gray-500
                sm:text-base
              "
                        >
                            I focus on creating interfaces that feel simple,
                            intuitive and intentional while building the
                            engineering underneath them to be fast, scalable
                            and maintainable.
                        </motion.p>

                        {/* Skills */}
                        <motion.div
                            variants={reveal}
                            className="mt-9 flex flex-wrap gap-2"
                        >
                            {[
                                "Next.js",
                                "React",
                                "JavaScript",
                                "Node.js",
                                "Laravel",
                                "MySQL",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="
                    rounded-lg
                    border border-white/[0.08]
                    bg-white/[0.025]
                    px-3 py-2
                    text-xs
                    text-gray-400
                    transition-all
                    hover:border-cyan-400/25
                    hover:bg-cyan-400/[0.05]
                    hover:text-cyan-300
                  "
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            variants={reveal}
                            className="mt-9"
                        >
                            <Link
                                href="/about"
                                className="
                  group inline-flex
                  items-center gap-2
                  text-sm
                  font-medium
                  text-cyan-400
                "
                            >
                                More about me

                                <ArrowUpRight
                                    size={16}
                                    className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT - CODE CARD */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                            filter: "blur(12px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative"
                    >
                        {/* Glow behind card */}
                        <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/[0.04] blur-2xl" />

                        <div
                            className="
                relative
                overflow-hidden
                rounded-2xl
                border border-white/[0.08]
                bg-[#071111]/90
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
              "
                        >
                            {/* Terminal header */}
                            <div className="
                flex items-center
                justify-between
                border-b border-white/[0.07]
                px-5 py-4
              ">
                                <div className="flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                                </div>

                                <div className="
                  flex items-center
                  gap-2
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-gray-600
                ">
                                    <Terminal size={12} />
                                    about.js
                                </div>
                            </div>

                            {/* Code */}
                            <div className="p-6 font-mono text-[11px] leading-7 sm:text-xs">

                                <CodeLine
                                    number="01"
                                    text="const developer = {"
                                    color="cyan"
                                    delay={0.2}
                                />

                                <CodeLine
                                    number="02"
                                    text="  name: 'Mohosin Reza',"
                                    delay={0.35}
                                />

                                <CodeLine
                                    number="03"
                                    text="  role: 'Full Stack Developer',"
                                    delay={0.5}
                                />

                                <CodeLine
                                    number="04"
                                    text="  mindset: 'Build. Learn. Improve.',"
                                    color="green"
                                    delay={0.65}
                                />

                                <CodeLine
                                    number="05"
                                    text="  focus: ['UI', 'Performance', 'Scale'],"
                                    delay={0.8}
                                />

                                <CodeLine
                                    number="06"
                                    text="  coffee: true,"
                                    delay={0.95}
                                />

                                <CodeLine
                                    number="07"
                                    text="};"
                                    color="cyan"
                                    delay={1.1}
                                />

                                {/* Cursor */}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                    }}
                                    className="ml-10 inline-block h-4 w-[2px] bg-cyan-400 align-middle"
                                />
                            </div>

                            {/* Bottom card */}
                            <div className="
                grid grid-cols-3
                border-t border-white/[0.07]
              ">

                                <Stat
                                    icon={<Code2 size={15} />}
                                    value="20+"
                                    label="Projects"
                                />

                                <Stat
                                    icon={<Layers3 size={15} />}
                                    value="6+"
                                    label="Technologies"
                                />

                                <Stat
                                    icon={<Rocket size={15} />}
                                    value="100%"
                                    label="Curiosity"
                                />

                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom philosophy */}
                <motion.div
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
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="
            mt-20
            flex flex-col
            gap-5
            border-t border-white/[0.08]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
                >
                    <div className="flex items-center gap-3">
                        <Sparkles
                            size={16}
                            className="text-emerald-400"
                        />

                        <span className="text-sm text-gray-500">
                            Always learning. Always building.
                        </span>
                    </div>

                    <span className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-gray-700
          ">
                        Design × Code × Performance
                    </span>
                </motion.div>

            </div>
        </section>
    );
}


/* =========================================================
   CODE LINE
========================================================= */

function CodeLine({
    number,
    text,
    color,
    delay,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -10,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.45,
                delay,
            }}
            className="flex"
        >
            <span className="mr-5 w-5 select-none text-gray-700">
                {number}
            </span>

            <span
                className={
                    color === "cyan"
                        ? "text-cyan-300"
                        : color === "green"
                            ? "text-emerald-300"
                            : "text-gray-500"
                }
            >
                {text}
            </span>
        </motion.div>
    );
}


/* =========================================================
   STAT
========================================================= */

function Stat({ icon, value, label }) {
    return (
        <div className="border-r border-white/[0.07] px-4 py-5 last:border-r-0 sm:px-5">

            <div className="flex items-center gap-2 text-cyan-400">
                {icon}

                <span className="text-base font-semibold text-white">
                    {value}
                </span>
            </div>

            <p className="mt-1 text-[10px] text-gray-600">
                {label}
            </p>

        </div>
    );
}