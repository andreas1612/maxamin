"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Radio, Network, Cloud } from "lucide-react";

const segments = [
    {
        id: "device",
        label: "01 / Device",
        title: "Device & Firmware Layer",
        icon: Cpu,
        angle: 315,
        color: "#10b981",
        items: [
            "Physical interface hardening assessment",
            "Boot integrity & tamper-resistance checks",
            "Firmware trust chain verification",
            "Credential and secret exposure review",
        ],
    },
    {
        id: "radio",
        label: "02 / Radio",
        title: "Radio & RF Protocol Layer",
        icon: Radio,
        angle: 45,
        color: "#34d399",
        items: [
            "Multi-band wireless protocol coverage",
            "Short-range radio service enumeration",
            "Low-power mesh and sensor band analysis",
            "Passive and authorised active RF capture",
        ],
    },
    {
        id: "network",
        label: "03 / Network",
        title: "Network & Segmentation Layer",
        icon: Network,
        angle: 135,
        color: "#059669",
        items: [
            "Lateral-movement barrier verification",
            "Broadcast and discovery exposure review",
            "Industrial and OT protocol spot checks",
            "Broker and messaging security posture",
        ],
    },
    {
        id: "cloud",
        label: "04 / Cloud",
        title: "Cloud & Backend Layer",
        icon: Cloud,
        angle: 225,
        color: "#6ee7b7",
        items: [
            "Identity and access privilege review",
            "Transport security and certificate lifecycle",
            "Messaging policy and topic access controls",
            "Telemetry completeness and data privacy posture",
        ],
    },
];

export default function AuditWheel() {
    const [active, setActive] = useState("device");
    const activeSegment = segments.find((s) => s.id === active)!;

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-50" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// OUR_APPROACH</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">360° Audit Coverage</h2>
                    <p className="mt-4 text-slate-400 font-mono max-w-xl mx-auto">
                        Every engagement traverses all four layers. No blind spots. Every artifact hashed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Wheel */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
                            <div className="absolute inset-4 rounded-full border border-slate-800/60" />
                            <div className="absolute inset-8 rounded-full border border-slate-800/40" />

                            {/* Radial lines */}
                            {[0, 90, 180, 270].map((deg) => (
                                <div
                                    key={deg}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{ transform: `rotate(${deg}deg)` }}
                                >
                                    <div className="w-full h-px bg-slate-800/60" />
                                </div>
                            ))}

                            {/* Center circle */}
                            <div className="absolute inset-[35%] rounded-full bg-slate-900 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                                <span className="text-[8px] lg:text-[10px] font-mono font-bold text-emerald-500 text-center leading-tight">IOT<br />AUDIT</span>
                            </div>

                            {/* Segment buttons */}
                            {segments.map((seg) => {
                                const rad = (seg.angle * Math.PI) / 180;
                                const r = 47; // % from center
                                const x = 50 + r * Math.cos(rad);
                                const y = 50 + r * Math.sin(rad);
                                const isActive = active === seg.id;

                                return (
                                    <button
                                        key={seg.id}
                                        onClick={() => setActive(seg.id)}
                                        className="absolute -translate-x-1/2 -translate-y-1/2 transition-all z-20 cursor-pointer"
                                        style={{ left: `${x}%`, top: `${y}%` }}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: isActive ? 1.15 : 1,
                                                boxShadow: isActive ? "0 0 20px rgba(16,185,129,0.4)" : "none",
                                            }}
                                            className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 flex flex-col items-center justify-center transition-colors ${isActive
                                                ? "border-emerald-500 bg-emerald-500/20"
                                                : "border-slate-700 bg-slate-900 hover:border-emerald-500/50"
                                                }`}
                                        >
                                            <seg.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                                            <span className={`text-[8px] font-mono mt-0.5 ${isActive ? "text-emerald-400" : "text-slate-600"}`}>
                                                {seg.id.toUpperCase()}
                                            </span>
                                        </motion.div>
                                    </button>
                                );
                            })}

                            {/* Connecting arcs indicator — pointer-events-none so buttons remain clickable */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="14" />
                                <circle
                                    cx="50" cy="50" r="35"
                                    fill="none"
                                    stroke="rgba(16,185,129,0.3)"
                                    strokeWidth="14"
                                    strokeDasharray="55 165"
                                    strokeDashoffset={-segments.indexOf(activeSegment) * 55}
                                    style={{ transition: "stroke-dashoffset 0.4s ease" }}
                                    className="origin-center"
                                    transform="rotate(-90 50 50)"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Content Panel */}
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                                <activeSegment.icon className="w-6 h-6 text-emerald-500" />
                            </div>
                            <div>
                                <p className="text-xs font-mono text-emerald-500">{activeSegment.label}</p>
                                <h3 className="text-2xl font-bold text-white">{activeSegment.title}</h3>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {activeSegment.items.map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-3 text-sm"
                                >
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="text-slate-300 font-mono">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-4 border-t border-slate-800">
                            <div className="flex flex-wrap gap-2">
                                {["PASSIVE Default", "Cryptographic Evidence", "Standards Mapped"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-mono border border-emerald-500/25 text-emerald-400 bg-emerald-500/8 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Layer tabs (mobile fallback) */}
                <div className="flex gap-2 mt-10 overflow-x-auto lg:hidden pb-2">
                    {segments.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActive(s.id)}
                            className={`shrink-0 px-4 py-2 rounded-lg text-xs font-mono font-bold border transition-colors ${active === s.id
                                ? "border-emerald-500 bg-emerald-500/15 text-emerald-400"
                                : "border-slate-800 text-slate-500"
                                }`}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
