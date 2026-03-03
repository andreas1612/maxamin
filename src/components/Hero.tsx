"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, ShieldAlert, Radio, Server } from "lucide-react";
import Link from "next/link";

const PASSIVE_LOGS = [
    { ts: "13:07:12", level: "PASSIVE", msg: "Monitoring 802.11 frames on ch 1,6,11...", color: "text-blue-400" },
    { ts: "13:07:14", level: "PASSIVE", msg: "BLE ADV_IND captured: BSSID a3:f1:22:...", color: "text-blue-400" },
    { ts: "13:07:17", level: "PASSIVE", msg: "Sub-GHz 868 MHz: listening for LoRaWAN...", color: "text-slate-400" },
    { ts: "13:07:20", level: "PASSIVE", msg: "Zigbee channel scan 11-26 initiated...", color: "text-blue-400" },
    { ts: "13:07:24", level: "INFO", msg: "Artifact written: wifi_ch6.pcapng", color: "text-slate-400" },
    { ts: "13:07:26", level: "HASH", msg: "SHA-256: a3f1c2...9d22b7 [VERIFIED]", color: "text-emerald-400" },
];

const ACTIVE_LOGS = [
    { ts: "13:09:01", level: "ACTIVE", msg: "ROE flag verified. Hardware switch: ACTIVE.", color: "text-emerald-400" },
    { ts: "13:09:03", level: "ACTIVE", msg: "EAPOL handshake captured: AP_CORP_WIFI", color: "text-emerald-300" },
    { ts: "13:09:07", level: "VULN", msg: "FINDING: Default credentials on MQTT broker.", color: "text-rose-400" },
    { ts: "13:09:10", level: "HASH", msg: "SHA-256: b47a16...7159aa [SIGNED]", color: "text-emerald-400" },
    { ts: "13:09:14", level: "ACTIVE", msg: "TLS handshake attempted: port 8883...", color: "text-emerald-300" },
    { ts: "13:09:18", level: "VULN", msg: "FINDING: Certificate expired 47 days ago.", color: "text-rose-400" },
];

export default function HeroSection() {
    const [isActive, setIsActive] = useState(false);
    const [visibleLogs, setVisibleLogs] = useState<typeof PASSIVE_LOGS>([]);
    const [logIdx, setLogIdx] = useState(0);

    useEffect(() => {
        setVisibleLogs([]);
        setLogIdx(0);
    }, [isActive]);

    useEffect(() => {
        const pool = isActive ? ACTIVE_LOGS : PASSIVE_LOGS;
        const id = setTimeout(() => {
            setVisibleLogs((prev) => {
                const next = [...prev, pool[logIdx % pool.length]].slice(-6);
                return next;
            });
            setLogIdx((i) => i + 1);
        }, 1600);
        return () => clearTimeout(id);
    }, [logIdx, isActive]);

    return (
        <section className="relative min-h-screen flex items-center hex-bg overflow-hidden">
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center w-full">

                {/* Left: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="space-y-10"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-mono text-emerald-400 tracking-widest">NICOSIA · CYPRUS · FIELD OPS ACTIVE</span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-3">
                        <h1 className="text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] text-white">
                            Autonomous<br />
                            IoT Auditing.<br />
                            <span className="text-emerald-500 glow-emerald-text">Defensible Evidence.</span>
                        </h1>
                        <p className="text-lg text-slate-400 font-mono leading-relaxed max-w-lg">
                            Full-stack IoT security assessments — device, radio, network, cloud — mapped to NIS2, CRA &amp; ETSI EN 303&nbsp;645. Passive by default. Active by authorization.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Link href="/intake" className="group px-8 py-4 bg-emerald-500 text-slate-950 font-bold font-mono text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] flex items-center gap-2">
                            INITIATE AUDIT
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link href="/solutions" className="px-8 py-4 border border-slate-700 text-slate-300 font-mono text-sm font-bold hover:border-emerald-500/50 hover:text-white hover:bg-emerald-500/5 transition-all">
                            VIEW SOLUTIONS
                        </Link>
                    </div>

                    {/* Trust Stats */}
                    <div className="flex gap-8 pt-4 border-t border-slate-800">
                        {[
                            { val: "NIS2", label: "Compliant" },
                            { val: "SHA-256", label: "Every Artifact" },
                            { val: "PASSIVE", label: "By Default" },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="text-emerald-400 font-black font-mono text-lg">{s.val}</div>
                                <div className="text-slate-500 text-xs font-mono">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Live HUD */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="space-y-4"
                >
                    {/* Safety Switch */}
                    <div className="bg-slate-900/60 rounded-xl border border-slate-800 p-5 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                {isActive ? <ShieldAlert className="w-4 h-4 text-emerald-500" /> : <Shield className="w-4 h-4 text-blue-400" />}
                                <span className="text-xs font-mono text-slate-400 tracking-widest">HARDWARE MODE SELECT</span>
                            </div>
                            <div className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isActive ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-blue-500/20 text-blue-400 border border-blue-500/30"}`}>
                                {isActive ? "AUTHORIZED ENGAGEMENT" : "SAFE MONITORING"}
                            </div>
                        </div>
                        <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800 relative">
                            <motion.div
                                layout
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-md transition-colors ${isActive ? "left-[calc(50%+2px)] bg-emerald-500/20 border border-emerald-500/40" : "left-1 bg-blue-500/15 border border-blue-500/30"}`}
                            />
                            <button onClick={() => setIsActive(false)} className={`relative z-10 flex-1 py-2.5 text-sm font-bold font-mono flex items-center justify-center gap-1.5 transition-colors ${!isActive ? "text-blue-400" : "text-slate-600"}`}>
                                <Radio className="w-3.5 h-3.5" /> PASSIVE
                            </button>
                            <button onClick={() => setIsActive(true)} className={`relative z-10 flex-1 py-2.5 text-sm font-bold font-mono flex items-center justify-center gap-1.5 transition-colors ${isActive ? "text-emerald-400" : "text-slate-600"}`}>
                                <Server className="w-3.5 h-3.5" /> ACTIVE
                            </button>
                        </div>
                    </div>

                    {/* Live Feed Terminal */}
                    <div className={`rounded-xl border transition-all duration-500 overflow-hidden backdrop-blur-sm ${isActive ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]" : "border-slate-800"}`}>
                        <div className={`px-4 py-2.5 border-b flex items-center justify-between transition-colors ${isActive ? "bg-slate-900/80 border-emerald-500/25" : "bg-slate-900/60 border-slate-800"}`}>
                            <div className="flex items-center gap-2">
                                <Terminal className={`w-3.5 h-3.5 ${isActive ? "text-emerald-500" : "text-slate-500"}`} />
                                <span className={`text-xs font-mono tracking-wider ${isActive ? "text-emerald-400" : "text-slate-500"}`}>
                                    SENTINEL_FEED · RX 2.4/5GHz · {isActive ? "ACTIVE MODE" : "PASSIVE MODE"}
                                </span>
                            </div>
                            <div className="flex gap-1">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${isActive && i === 0 ? "bg-emerald-500 animate-pulse" : "bg-slate-700"}`} />
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-950 p-4 h-64 overflow-hidden relative scanline">
                            {isActive && <div className="absolute inset-0 bg-emerald-500/3 pointer-events-none" />}
                            <AnimatePresence initial={false}>
                                {visibleLogs.map((log, i) => (
                                    <motion.div
                                        key={`${log.ts}-${log.msg}-${i}`}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex gap-3 items-start mb-1.5 text-xs"
                                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                                    >
                                        <span className="text-slate-600 shrink-0">{log.ts}</span>
                                        <span className={`shrink-0 w-14 text-right ${log.color} opacity-70`}>[{log.level}]</span>
                                        <span className={log.color}>{log.msg}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <div className="mt-1 text-emerald-500 text-xs animate-pulse" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>█</div>
                        </div>
                        {/* Hash pipeline bar */}
                        <div className={`px-4 py-3 border-t flex items-center gap-3 transition-colors ${isActive ? "border-emerald-500/25 bg-slate-900/60" : "border-slate-800 bg-slate-900/40"}`}>
                            <span className="text-slate-500 text-xs font-mono">PIPELINE:</span>
                            {["CAPTURE", "HASH", "SIGN", "VAULT"].map((step, i) => (
                                <div key={step} className="flex items-center gap-1">
                                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded transition-colors ${isActive ? "text-emerald-400 border border-emerald-500/30 bg-emerald-500/10" : "text-slate-600 border border-slate-800"}`}>
                                        {step}
                                    </span>
                                    {i < 3 && <span className="text-slate-700 text-xs">›</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
