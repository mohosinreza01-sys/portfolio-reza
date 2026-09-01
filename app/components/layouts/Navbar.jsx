"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    ArrowUpRight,
    Code2,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4">
                <nav
                    className="
            mx-auto flex max-w-7xl items-center justify-between
            rounded-2xl border border-white/10
            bg-[#071313]/85 px-5 py-3
            shadow-[0_10px_50px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3"
                    >
                        <div
                            className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-cyan-400/30
                bg-cyan-400/10
                text-cyan-300
                transition-all duration-300
                group-hover:border-cyan-300/60
                group-hover:bg-cyan-400/20
                group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              "
                        >
                            <Code2 size={21} />
                        </div>

                        <div className="leading-none">
                            <h1 className="text-[15px] font-bold tracking-wide text-white">
                                Mohosin<span className="text-cyan-400">.</span>
                            </h1>

                            <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                                Developer
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                  relative rounded-xl px-4 py-2.5
                  text-sm transition-all duration-300
                  ${index === 0
                                        ? "text-cyan-300"
                                        : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                                    }
                `}
                            >
                                {link.name}

                                {index === 0 && (
                                    <span
                                        className="
                      absolute bottom-1 left-1/2
                      h-1 w-1 -translate-x-1/2
                      rounded-full bg-cyan-400
                      shadow-[0_0_10px_rgba(34,211,238,0.8)]
                    "
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        className="
              hidden items-center gap-2 rounded-xl
              border border-emerald-400/30
              bg-emerald-400/10
              px-4 py-2.5
              text-sm font-medium text-emerald-300
              transition-all duration-300
              hover:border-emerald-300/60
              hover:bg-emerald-400/20
              hover:text-emerald-200
              hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]
              md:flex
            "
                    >
                        Let's Talk
                        <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="
              flex h-10 w-10 items-center justify-center
              rounded-xl border border-white/10
              bg-white/[0.04]
              text-gray-300
              transition hover:border-cyan-400/30
              hover:text-cyan-300
              md:hidden
            "
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`
            mx-auto mt-2 max-w-7xl overflow-hidden
            rounded-2xl border border-white/10
            bg-[#071313]/95
            backdrop-blur-xl
            transition-all duration-300 md:hidden
            ${open
                            ? "max-h-[500px] translate-y-0 opacity-100"
                            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
                        }
          `}
                >
                    <div className="p-3">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`
                  flex items-center justify-between
                  rounded-xl px-4 py-3.5
                  text-sm transition
                  ${index === 0
                                        ? "bg-cyan-400/10 text-cyan-300"
                                        : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                                    }
                `}
                            >
                                {link.name}

                                {index === 0 && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                )}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="
                mt-2 flex items-center justify-center
                gap-2 rounded-xl
                bg-emerald-400 px-4 py-3.5
                text-sm font-semibold text-[#03100d]
                transition hover:bg-emerald-300
              "
                        >
                            Let's Talk
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}