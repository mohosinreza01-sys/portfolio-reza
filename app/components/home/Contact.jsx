"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Send,
    Sparkles,
} from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#030909] px-5 py-24 text-white sm:py-32 lg:py-40"
        >
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[150px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* TOP LABEL */}
                <div className="mb-10 flex items-center gap-3">
                    <span className="h-px w-10 bg-cyan-300/60" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
                        Contact
                    </span>
                </div>

                <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="max-w-4xl text-[3.5rem] font-semibold leading-[.88] tracking-[-.07em] sm:text-6xl lg:text-[7rem]">
                            Have an idea?
                            <br />
                            <span className="text-white/20">Let's build it.</span>
                        </h2>

                        <p className="mt-8 max-w-lg text-base leading-8 text-white/40 sm:text-lg">
                            Whether it's a new product, website or digital experience,
                            let's turn the idea into something people remember.
                        </p>

                        {/* EMAIL */}
                        <a
                            href="mailto:hello@example.com"
                            className="group mt-9 inline-flex items-center gap-4"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan-300 transition-all group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.06]">
                                <Mail size={18} />
                            </span>

                            <span className="text-sm text-white/60 transition-colors group-hover:text-white sm:text-base">
                                hello@example.com
                            </span>

                            <ArrowUpRight
                                size={17}
                                className="text-white/25 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                            />
                        </a>

                        <div className="mt-5 flex items-center gap-3 text-xs text-white/25">
                            <MapPin size={14} />
                            Available worldwide
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Glow behind form */}
                        <div className="absolute -inset-4 rounded-[35px] bg-cyan-300/[0.025] blur-2xl" />

                        <div className="relative rounded-[30px] border border-white/[0.09] bg-[#071010]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-8">

                            {/* Form top */}
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={15} className="text-cyan-300" />
                                        <span className="text-xs font-medium text-white/70">
                                            Start a project
                                        </span>
                                    </div>

                                    <p className="mt-2 text-[11px] text-white/25">
                                        Tell me a little about your idea.
                                    </p>
                                </div>

                                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,.9)]" />
                            </div>

                            <form className="space-y-4">

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-cyan-300/[0.025]"
                                />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-cyan-300/[0.025]"
                                />

                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-cyan-300/[0.025]"
                                />

                                <button
                                    type="submit"
                                    className="group flex h-14 w-full items-center justify-between rounded-2xl bg-white px-5 text-sm font-medium text-black transition-all duration-300 hover:bg-cyan-300"
                                >
                                    <span>Send message</span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                                        <Send size={15} />
                                    </span>
                                </button>

                            </form>

                            <p className="mt-5 text-center text-[9px] uppercase tracking-[0.2em] text-white/15">
                                Usually replies within 24 hours
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* FINAL LINE */}
                <div className="mt-20 border-t border-white/[0.07] pt-6">
                    <div className="flex flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-white/20 sm:flex-row">
                        <span>Let's make something meaningful.</span>
                        <span>© 2026 Mohosin Reza</span>
                    </div>
                </div>
            </div>
        </section>
    );
}