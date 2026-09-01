import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#061111]">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-300">
                                M
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-white">
                                    Mohosin<span className="text-cyan-400">.</span>
                                </h2>

                                <p className="text-xs text-gray-500">
                                    Full Stack Developer
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Building modern, scalable and high-performance
                            digital experiences with clean code and thoughtful design.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                            Navigation
                        </h3>

                        <div className="grid grid-cols-2 gap-y-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group flex items-center gap-1 text-sm text-gray-400 transition hover:text-cyan-300"
                                >
                                    {link.name}

                                    <ArrowUpRight
                                        size={13}
                                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                            Have a project?
                        </h3>

                        <p className="text-sm leading-6 text-gray-400">
                            Let's build something modern and impactful together.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-emerald-400/20"
                        >
                            Start a Project
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Mohosin Reza. All rights reserved.
                    </p>

                    <p className="flex items-center gap-1.5">
                        Crafted with
                        <Heart
                            size={13}
                            className="fill-emerald-400 text-emerald-400"
                        />
                        clean code.
                    </p>
                </div>

            </div>
        </footer>
    );
}