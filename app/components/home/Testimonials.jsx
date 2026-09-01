"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        name: "Arif Hasan",
        role: "Founder · Cloud Bazar",
        text: "Mohosin turned our idea into a clean and premium digital experience.",
        initials: "AH",
    },
    {
        name: "Sabbir Rahman",
        role: "Business Owner",
        text: "Modern design, smooth communication and excellent attention to detail.",
        initials: "SR",
    },
    {
        name: "Nafis Ahmed",
        role: "Product Manager",
        text: "Everything felt intentional, polished and professional from start to finish.",
        initials: "NA",
    },
    {
        name: "Tanvir Hossain",
        role: "Entrepreneur",
        text: "Our website finally feels like a real brand instead of just another website.",
        initials: "TH",
    },
];

function Card({ item }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative w-[270px] shrink-0 overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#081010] p-5 shadow-xl sm:w-[320px]"
        >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/[0.06] blur-2xl" />

            <div className="relative flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold text-cyan-200">
                    {item.initials}
                </div>

                <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-wider text-white/25">
                    <CheckCircle2 size={12} className="text-cyan-300/60" />
                    Verified
                </div>
            </div>

            <Quote
                size={21}
                strokeWidth={1.2}
                className="mt-6 text-cyan-300/30"
            />

            <p className="mt-3 min-h-[82px] text-[13px] leading-6 text-white/55 sm:text-sm">
                “{item.text}”
            </p>

            <div className="mt-5 border-t border-white/[0.06] pt-4">
                <p className="text-xs font-medium text-white">
                    {item.name}
                </p>

                <p className="mt-1 text-[9px] text-white/25">
                    {item.role}
                </p>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const row = [...testimonials, ...testimonials];

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-[#030909] py-20 sm:py-28"
        >
            {/* Heading */}
            <div className="mx-auto mb-10 max-w-7xl px-5 sm:mb-14">
                <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-cyan-300/60">
                    Client Stories
                </p>

                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    Words from{" "}
                    <span className="text-white/20">clients.</span>
                </h2>
            </div>

            {/* Marquee */}
            <div className="overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex w-max gap-4 px-5"
                >
                    {row.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Edge fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#030909] to-transparent sm:w-24" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#030909] to-transparent sm:w-24" />
        </section>
    );
}