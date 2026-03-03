"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Info, Zap, Lock, Wifi, Database } from "lucide-react";

const sentinelHotspots = [
    { id: "s1", x: 78, y: 22, icon: Wifi, title: "Multi-Radio Array", desc: "Alfa USB (mt76), nRF52840 BLE, CC2652P Zigbee, RTL-SDR v4 Sub-GHz, ACR122U NFC." },
    { id: "s2", x: 22, y: 65, icon: Zap, title: "Physical Safety Switch", desc: "Keyed PASSIVE / OFF / ACTIVE rotary. Hardware interlock prevents active ops without RoE signature." },
    { id: "s3", x: 55, y: 45, icon: Lock, title: "SHA-256 at Capture", desc: "Pi Pico supervisor triggers hashing on every pcap/pcapng write. Manifest auto-signed." },
];

const vaultHotspots = [
    { id: "v1", x: 25, y: 35, icon: Database, title: "PostgreSQL Hot Storage", desc: "Structured run metadata, artifact manifests, client records, and finding indices." },
    { id: "v2", x: 70, y: 55, icon: Zap, title: "n8n Automation Engine", desc: "47 production flows: F1 Run Intake → F10 CVD Intake. Zero cloud egress. RBAC + 2FA." },
    { id: "v3", x: 50, y: 78, icon: Lock, title: "Synology Cold Vault", desc: "WORM-locked immutable evidence store. Deletion cert auto-issued after 60-day retention." },
];

function HotspotLayer({ hotspots }: { hotspots: typeof sentinelHotspots }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            {hotspots.map((h) => (
                <div key={h.id} className="absolute" style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                    <button
                        onMouseEnter={() => setActive(h.id)}
                        onMouseLeave={() => setActive(null)}
                        onClick={() => setActive(active === h.id ? null : h.id)}
                        className="relative -translate-x-1/2 -translate-y-1/2 block"
                    >
                        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" />
                        <span className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-emerald-500 bg-slate-950/80 shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                            <h.icon className="w-3 h-3 text-emerald-400" />
                        </span>
                    </button>
                    <AnimatePresence>
                        {active === h.id && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 8 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-8 top-0 z-30 w-52 bg-slate-950 border border-emerald-500/40 rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.1)] pointer-events-none"
                            >
                                <div className="flex items-center gap-1.5 mb-1.5 text-emerald-400">
                                    <Info className="w-3 h-3" />
                                    <span className="text-xs font-bold font-mono">{h.title}</span>
                                </div>
                                <p className="text-[11px] font-mono text-slate-300 leading-relaxed">{h.desc}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </>
    );
}

export default function HardwareShowcase() {
    return (
        <section className="py-24 bg-slate-900/40 border-y border-slate-800 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// SOVEREIGN_INFRASTRUCTURE</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">The Technical Edge</h2>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {/* Sentinel */}
                    <div className="group">
                        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-colors bg-black">
                            <Image src="/sentinel.png" alt="The Sentinel Field Probe" fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 scale-105 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                            {/* Scan line progress */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800">
                                <motion.div
                                    className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                            {/* Status badge */}
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-mono text-emerald-400">FIELD ACTIVE</span>
                            </div>
                            <HotspotLayer hotspots={sentinelHotspots} />
                        </div>
                        <div className="mt-6 space-y-3">
                            <h3 className="text-2xl font-bold text-white">The Sentinel <span className="text-slate-500 font-normal text-lg">(Pi 5 Field Probe v1.0)</span></h3>
                            <p className="text-sm text-slate-400 font-mono leading-relaxed">Tactical multi-radio field probe. Raspberry Pi 5 (8GB) with NVMe evidence store, Dockerised toolchain, and a hardware-interlocked PASSIVE/ACTIVE safety switch.</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["ARM64", "Wi-Fi/BLE/Zigbee", "RTL-SDR", "NFC", "Wired TAP", "SHA-256 PoC"].map(t => (
                                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 border border-slate-700 text-slate-400 rounded bg-slate-900">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Vault */}
                    <div className="group">
                        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-colors bg-black">
                            <Image src="/vault.png" alt="The Vault" fill className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700 scale-105 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
                                <span className="text-[10px] font-mono text-emerald-400 font-bold">ON-PREMISE SOVEREIGNTY</span>
                            </div>
                            <HotspotLayer hotspots={vaultHotspots} />
                        </div>
                        <div className="mt-6 space-y-3">
                            <h3 className="text-2xl font-bold text-white">The Vault <span className="text-slate-500 font-normal text-lg">(Fujitsu M740 Brain)</span></h3>
                            <p className="text-sm text-slate-400 font-mono leading-relaxed">Self-hosted, multi-tenant n8n automation with PostgreSQL hot storage and Synology WORM cold vault. Zero cloud egress. Full chain-of-custody enforcement.</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {["n8n 47 Flows", "PostgreSQL", "Synology WORM", "RBAC + 2FA", "Deletion Cert"].map(t => (
                                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 border border-slate-700 text-slate-400 rounded bg-slate-900">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
