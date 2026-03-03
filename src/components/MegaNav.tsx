"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Shield, Server, Cpu, Radio, Network, Cloud,
    ChevronDown, Menu, X, Terminal, Lock
} from "lucide-react";

const solutions = [
    { label: "NIS2-Ready Healthcheck", href: "/solutions#healthcheck", desc: "10-day fixed-fee, 15 devices", icon: Shield },
    { label: "Core IoT Audit", href: "/solutions#core", desc: "Full-stack 2–3 week assessment", icon: Cpu },
    { label: "Hardening & Validation", href: "/solutions#hardening", desc: "'Before/After' risk evidence", icon: Lock },
    { label: "Managed Retainers", href: "/solutions#retainers", desc: "Bronze / Silver / Gold tiers", icon: Server },
];

const navLinks = [
    { label: "Solutions", href: "/solutions", hasMega: true },
    { label: "Technology", href: "/technology" },
    { label: "Our Approach", href: "/approach" },
    { label: "Compliance", href: "/compliance" },
    { label: "Who We Are", href: "/who-we-are" },
];

export default function MegaNav() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMobileOpen(false); setMegaOpen(false); }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/95 backdrop-blur-xl border-b border-emerald-500/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-8 h-8 border-2 border-emerald-500 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            <div className="absolute inset-0 w-8 h-8 bg-emerald-500/10 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                        <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-white font-bold tracking-[0.15em] text-sm uppercase">
                            Maxamin
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${pathname.startsWith(link.href) && link.href !== "/"
                                        ? "text-emerald-400"
                                        : "text-slate-300 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {link.hasMega && (
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                                    )}
                                </Link>

                                {/* Mega Dropdown */}
                                {link.hasMega && (
                                    <AnimatePresence>
                                        {megaOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scaleY: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                                                exit={{ opacity: 0, y: 8, scaleY: 0.95 }}
                                                transition={{ duration: 0.18 }}
                                                style={{ transformOrigin: "top" }}
                                                className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md"
                                            >
                                                <div className="p-2">
                                                    {solutions.map((s) => (
                                                        <Link
                                                            key={s.label}
                                                            href={s.href}
                                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all group"
                                                        >
                                                            <div className="mt-0.5 p-1.5 bg-slate-800 rounded-md group-hover:bg-emerald-500/20 transition-colors">
                                                                <s.icon className="w-3.5 h-3.5 text-emerald-500" />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">{s.label}</div>
                                                                <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="border-t border-slate-800 p-3 bg-slate-950/50">
                                                    <Link href="/intake" className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 font-mono font-bold">
                                                        <Terminal className="w-3 h-3" /> INITIATE AUDIT INTAKE →
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/intake"
                            className="px-5 py-2.5 text-sm font-bold font-mono bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                        >
                            AUDIT INTAKE →
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-slate-300 hover:text-white"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-40 bg-slate-950 pt-16 px-6 flex flex-col gap-4 overflow-y-auto"
                    >
                        {[...navLinks, { label: "Audit Intake", href: "/intake" }].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="py-4 border-b border-slate-800 text-lg font-semibold text-slate-200 hover:text-emerald-400 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
