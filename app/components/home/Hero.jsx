"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ArrowDown,
    Code2,
    Sparkles,
    Terminal,
    Braces,
    Database,
    Globe2,
} from "lucide-react";

const codeLines = [
    "const developer = {",
    "  name: 'Mohosin Reza',",
    "  role: 'Full Stack Developer',",
    "  stack: ['Next.js', 'React', 'Node'],",
    "  passion: 'Building great products',",
    "};",
];

const floatingCode = [
    {
        code: "<Next.js />",
        x: "7%",
        y: "24%",
        delay: 0,
    },
    {
        code: "const App = () => {}",
        x: "72%",
        y: "18%",
        delay: 1.5,
    },
    {
        code: "npm run build",
        x: "79%",
        y: "67%",
        delay: 2.5,
    },
    {
        code: "{ clean: true }",
        x: "10%",
        y: "72%",
        delay: 3.5,
    },
];

const reveal = {
    hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(12px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#040b0b] pt-24">

            {/* =====================================================
          PREMIUM CODE BACKGROUND
      ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Main cyan glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.08, 0.14, 0.08],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute left-1/2 top-[35%]
            h-[550px] w-[550px]
            -translate-x-1/2
            rounded-full
            bg-cyan-400
            blur-[180px]
          "
                />

                {/* Green glow */}
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
            absolute right-[-10%] top-[40%]
            h-[420px] w-[420px]
            rounded-full
            bg-emerald-400/[0.07]
            blur-[140px]
          "
                />

                {/* Grid */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0px 0px", "70px 70px"],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
                />

                {/* =================================================
            FLOATING CODE
        ================================================== */}

                {floatingCode.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: [0.15, 0.38, 0.15],
                            y: [0, -12, 0],
                        }}
                        transition={{
                            opacity: {
                                duration: 5,
                                repeat: Infinity,
                                delay: item.delay,
                            },
                            y: {
                                duration: 6,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut",
                            },
                        }}
                        style={{
                            left: item.x,
                            top: item.y,
                        }}
                        className="
              absolute hidden
              rounded-lg
              border border-cyan-400/10
              bg-cyan-400/[0.025]
              px-3 py-2
              font-mono
              text-[10px]
              text-cyan-300/40
              backdrop-blur-sm
              lg:block
            "
                    >
                        {item.code}
                    </motion.div>
                ))}

                {/* =================================================
            ANIMATED CODE STREAM
        ================================================== */}

                <div className="absolute left-0 right-0 top-0 h-full overflow-hidden opacity-[0.035]">

                    <motion.div
                        animate={{
                            y: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
              mx-auto
              max-w-5xl
              whitespace-pre
              font-mono
              text-[11px]
              leading-8
              text-cyan-300
            "
                    >
                        {`
import React from "react";
import { motion } from "framer-motion";

const developer = {
  name: "Mohosin Reza",
  role: "Full Stack Developer",
  stack: ["Next.js", "React", "Node.js"],
};

function buildExperience() {
  return {
    performance: "high",
    design: "thoughtful",
    code: "clean",
  };
}

export default function Portfolio() {
  return <Developer />;
}

const projects = await getProjects();

if (projects.length > 0) {
  render(projects);
}

const future = {
  build: true,
  learn: true,
  create: true,
};
`.repeat(3)}
                    </motion.div>
                </div>

                {/* Scan line */}
                <motion.div
                    animate={{
                        y: ["-10vh", "110vh"],
                        opacity: [0, 0.35, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="
            absolute left-0 right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400/30
            to-transparent
          "
                />

            </div>

            {/* =====================================================
          CONTENT
      ====================================================== */}

            <div className="
        relative mx-auto
        flex min-h-[calc(100vh-6rem)]
        max-w-7xl items-center
        px-5 sm:px-6 lg:px-8
      ">

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="w-full py-16 lg:py-20"
                >

                    {/* Badge */}
                    <motion.div variants={reveal}>
                        <div className="
              mb-8 inline-flex
              items-center gap-2
              rounded-full
              border border-cyan-400/15
              bg-cyan-400/[0.04]
              px-4 py-2
              backdrop-blur-md
            ">
                            <Sparkles
                                size={13}
                                className="text-cyan-400"
                            />

                            <span className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-cyan-300/80
                sm:text-xs
              ">
                                Mohosin Reza · Developer
                            </span>
                        </div>
                    </motion.div>

                    {/* =================================================
              HEADING
          ================================================== */}

                    <motion.h1
                        variants={reveal}
                        className="
              max-w-6xl
              text-[3.25rem]
              font-semibold
              leading-[0.93]
              tracking-[-0.055em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[7.4rem]
          "
                    >
                        I turn ideas into
                        <br />

                        <span className="relative inline-block text-cyan-400">

                            digital experiences

                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    delay: 1.4,
                                    duration: 1.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.7)]
                "
                            />

                        </span>

                        <br />

                        <span className="text-gray-500">
                            built to perform.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        variants={reveal}
                        className="mt-9"
                    >
                        <p className="
              max-w-2xl
              text-[15px]
              leading-7
              text-gray-400
              sm:text-lg
              sm:leading-8
            ">
                            Full Stack Developer focused on building
                            fast, scalable and visually refined web
                            applications using modern technologies.
                        </p>
                    </motion.div>

                    {/* =================================================
              CTA
          ================================================== */}

                    <motion.div
                        variants={reveal}
                        className="
              mt-8
              flex flex-col
              gap-3
              sm:flex-row
            "
                    >

                        <Link href="/projects">

                            <motion.div
                                whileHover={{
                                    y: -4,
                                    scale: 1.02,
                                }}
                                whileTap={{
                                    scale: 0.98,
                                }}
                                className="
                  group
                  flex items-center
                  justify-center gap-3
                  rounded-xl
                  bg-cyan-400
                  px-6 py-3.5
                  text-sm font-semibold
                  text-[#031010]
                  shadow-[0_10px_40px_rgba(34,211,238,0.1)]
                  transition-all
                  hover:bg-cyan-300
                  hover:shadow-[0_15px_55px_rgba(34,211,238,0.25)]
                "
                            >
                                View Projects

                                <span className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded-full
                  bg-black/10
                ">
                                    <ArrowUpRight
                                        size={15}
                                        className="
                      transition-transform
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                                    />
                                </span>
                            </motion.div>

                        </Link>

                        <Link href="/contact">

                            <motion.div
                                whileHover={{
                                    y: -4,
                                }}
                                className="
                  flex items-center
                  justify-center gap-2
                  rounded-xl
                  border border-white/10
                  bg-white/[0.025]
                  px-6 py-3.5
                  text-sm font-medium
                  text-gray-300
                  backdrop-blur-md
                  transition-all
                  hover:border-emerald-400/30
                  hover:bg-emerald-400/[0.05]
                  hover:text-emerald-300
                "
                            >
                                Let's Talk
                                <ArrowUpRight size={16} />
                            </motion.div>

                        </Link>

                    </motion.div>

                    {/* =================================================
              TERMINAL CARD
          ================================================== */}

                    <motion.div
                        variants={reveal}
                        className="
              mt-14
              max-w-2xl
              overflow-hidden
              rounded-2xl
              border border-white/[0.08]
              bg-[#071111]/80
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
            "
                    >

                        {/* Terminal Header */}
                        <div className="
              flex items-center
              justify-between
              border-b border-white/[0.07]
              px-4 py-3
            ">

                            <div className="flex items-center gap-2">

                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
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
                                mohosin.dev
                            </div>

                        </div>

                        {/* Code */}
                        <div className="p-5 font-mono text-[11px] leading-6 sm:text-xs">

                            {codeLines.map((line, index) => (

                                <motion.div
                                    key={line}
                                    initial={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        delay: 1.3 + index * 0.12,
                                        duration: 0.5,
                                    }}
                                    className="flex"
                                >

                                    <span className="mr-5 w-4 select-none text-gray-700">
                                        {index + 1}
                                    </span>

                                    <span
                                        className={
                                            index === 0
                                                ? "text-cyan-300"
                                                : index === 1
                                                    ? "text-emerald-300"
                                                    : "text-gray-500"
                                        }
                                    >
                                        {line}
                                    </span>

                                </motion.div>

                            ))}

                            <motion.div
                                animate={{
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                                className="mt-1 ml-9 h-4 w-[2px] bg-cyan-400"
                            />

                        </div>

                    </motion.div>

                    {/* =================================================
              SERVICES MINI ROW
          ================================================== */}

                    <motion.div
                        variants={reveal}
                        className="
              mt-10
              grid max-w-2xl
              grid-cols-2
              gap-3
              sm:grid-cols-4
            "
                    >

                        <MiniItem
                            icon={<Code2 size={15} />}
                            text="Development"
                        />

                        <MiniItem
                            icon={<Globe2 size={15} />}
                            text="Web Apps"
                        />

                        <MiniItem
                            icon={<Database size={15} />}
                            text="Backend"
                        />

                        <MiniItem
                            icon={<Braces size={15} />}
                            text="Clean Code"
                        />

                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          sm:flex
        "
            >
                <span className="
          text-[9px]
          uppercase
          tracking-[0.35em]
          text-gray-600
        ">
                    Explore
                </span>

                <motion.div
                    animate={{
                        y: [0, 5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown
                        size={14}
                        className="text-cyan-400"
                    />
                </motion.div>
            </motion.div>

        </section>
    );
}

function MiniItem({ icon, text }) {
    return (
        <div className="
      flex items-center
      gap-2
      rounded-lg
      border border-white/[0.07]
      bg-white/[0.02]
      px-3 py-2.5
      text-xs
      text-gray-500
      transition-all
      hover:border-cyan-400/20
      hover:text-cyan-300
    ">
            <span className="text-cyan-400/70">
                {icon}
            </span>

            {text}
        </div>
    );
}