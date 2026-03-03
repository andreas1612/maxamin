"use client";

import Link from "next/link";

const footerCols = [
    {
        head: "SOLUTIONS",
        links: [
            { label: "NIS2 Healthcheck", href: "/solutions#healthcheck" },
            { label: "Core IoT Audit", href: "/solutions#core" },
            { label: "Hardening & Validation", href: "/solutions#hardening" },
            { label: "Managed Retainers", href: "/solutions#retainers" },
        ],
    },
    {
        head: "COMPANY",
        links: [
            { label: "Who We Are", href: "/who-we-are" },
            { label: "Technology", href: "/technology" },
            { label: "Compliance", href: "/compliance" },
            { label: "Our Approach", href: "/approach" },
        ],
    },
    {
        head: "LEGAL & TRUST",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Security Charter", href: "/security" },
            { label: "CVD Policy", href: "/cvd" },
            { label: "Audit Intake", href: "/intake" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="w-6 h-6 border-2 border-emerald-500 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            <span className="font-mono font-bold text-emerald-500 tracking-[0.15em] text-sm">MAXAMIN</span>
                        </Link>
                        <p className="text-xs font-mono text-slate-500 leading-relaxed">
                            Sovereign IoT Security Audits.<br />Nicosia, Cyprus.
                        </p>
                    </div>
                    {footerCols.map((col) => (
                        <div key={col.head}>
                            <div className="text-[10px] font-mono text-slate-600 tracking-widest mb-3">{col.head}</div>
                            <ul className="space-y-2">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link href={l.href} className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs font-mono text-slate-600">© 2026 Maxamin Ltd. All rights reserved. Nicosia, Cyprus.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="text-xs font-mono text-slate-700 hover:text-emerald-500 transition-colors">Privacy</Link>
                        <Link href="/security" className="text-xs font-mono text-slate-700 hover:text-emerald-500 transition-colors">Security</Link>
                        <Link href="/cvd" className="text-xs font-mono text-slate-700 hover:text-emerald-500 transition-colors">CVD</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
