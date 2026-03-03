"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Star } from "lucide-react";

const tiers = [
    {
        id: "healthcheck",
        name: "NIS2-Ready Healthcheck",
        tagline: "Scope fast. Prove compliance.",
        time: "10 days elapsed",
        devices: "15 devices",
        price: "€1,500",
        highlight: false,
        features: ["Wi-Fi / BLE / Zigbee scan", "External posture review", "NFC tag inspection", "Top-10 findings report", "Free re-test within 30 days", "Evidence bundle (hashed)"],
    },
    {
        id: "core",
        name: "Core IoT Audit",
        tagline: "Full-stack, all-layer visibility.",
        time: "2–3 weeks",
        devices: "Full site scope",
        price: "€5,500–€8,500",
        highlight: true,
        features: ["All radio layers (Wi-Fi/BLE/Zigbee/Sub-GHz)", "Network: VLAN/segmentation/brokers", "Cloud: IAM/TLS/MQTT/CoAP", "Firmware & NFC inspection", "CVSS-rated findings + remediation", "ISO/IEC & ETSI standards mapping", "Re-test within 30 days"],
    },
    {
        id: "hardening",
        name: "Hardening & Validation",
        tagline: "'Before/After' risk reduction.",
        time: "4–6 weeks",
        devices: "Full site scope",
        price: "€12k–€22k",
        highlight: false,
        features: ["All Core Audit deliverables", "mTLS & broker hardening", "BLE/GATT policies", "Zigbee commissioning controls", "Network & VLAN segmentation", "Before/After evidence proof"],
    },
    {
        id: "retainer",
        name: "Managed Retainers",
        tagline: "Continuous compliance posture.",
        time: "Quarterly / Bi-monthly",
        devices: "Per site",
        price: "From €900/mo",
        highlight: false,
        features: ["Bronze / Silver / Gold tiers", "Scheduled mini-audits", "Config drift detection", "Asset inventory diffs", "Executive briefings", "Incident guidance"],
    },
];

const matrixRows = [
    { feature: "Wi-Fi / BLE / NFC Scan", healthcheck: true, core: true, hardening: true, retainer: true },
    { feature: "Zigbee / Thread Analysis", healthcheck: false, core: true, hardening: true, retainer: false },
    { feature: "Full Cloud Layer Review", healthcheck: false, core: true, hardening: true, retainer: false },
    { feature: "SHA-256 Evidence Bundle", healthcheck: true, core: true, hardening: true, retainer: true },
    { feature: "CVSS Finding Ratings", healthcheck: false, core: true, hardening: true, retainer: false },
    { feature: "Standards Mapping (ISO/ETSI)", healthcheck: false, core: true, hardening: true, retainer: false },
    { feature: "Control Implementation", healthcheck: false, core: false, hardening: true, retainer: false },
    { feature: "Before/After Evidence", healthcheck: false, core: false, hardening: true, retainer: false },
    { feature: "Scheduled Drift Detection", healthcheck: false, core: false, hardening: false, retainer: true },
    { feature: "Free Re-test", healthcheck: true, core: true, hardening: true, retainer: false },
];

const Cell = ({ val }: { val: boolean }) => (
    <td className="p-3 text-center">
        {val ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <span className="text-slate-700 font-mono text-sm">—</span>}
    </td>
);

export default function Services() {
    const [showMatrix, setShowMatrix] = useState(false);

    return (
        <section className="py-24 bg-slate-950 border-t border-slate-800 relative">
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// ENGAGEMENT_MODELS</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">Service Tiers</h2>
                    <p className="mt-4 text-slate-400 font-mono max-w-xl mx-auto">Transparent fixed-fee packages. Clear scope. Defensible outputs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {tiers.map((tier) => (
                        <div key={tier.id} className={`relative flex flex-col border rounded-2xl overflow-hidden transition-all hover:scale-[1.02] ${tier.highlight ? "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)]" : "border-slate-800 hover:border-slate-700"} bg-slate-900`}>
                            {tier.highlight && (
                                <div className="flex items-center justify-center gap-1.5 py-2 bg-emerald-500 text-slate-950 text-xs font-bold font-mono">
                                    <Star className="w-3 h-3" /> MOST REQUESTED
                                </div>
                            )}
                            <div className="p-6 flex-1">
                                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                                <p className="text-xs text-slate-500 font-mono mb-4">{tier.tagline}</p>
                                <div className="text-2xl font-black text-emerald-400 font-mono mb-1">{tier.price}</div>
                                <div className="text-xs text-slate-500 font-mono mb-6">{tier.time} · {tier.devices}</div>
                                <ul className="space-y-2">
                                    {tier.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                                            <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compare matrix toggle */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setShowMatrix(!showMatrix)}
                        className="flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                    >
                        COMPARE TIERS — FULL FEATURE MATRIX
                        <motion.div animate={{ rotate: showMatrix ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-4 h-4" />
                        </motion.div>
                    </button>
                </div>

                <AnimatePresence>
                    {showMatrix && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="border border-slate-800 rounded-2xl overflow-x-auto">
                                <table className="w-full text-sm min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-slate-800 bg-slate-900">
                                            <th className="p-4 text-left font-mono text-slate-400 font-medium">Feature</th>
                                            {tiers.map((t) => (
                                                <th key={t.id} className={`p-4 text-center font-mono text-xs font-bold ${t.highlight ? "text-emerald-400" : "text-slate-400"}`}>{t.name.split(" ")[0]}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800/60 bg-slate-950">
                                        {matrixRows.map((row) => (
                                            <tr key={row.feature} className="hover:bg-slate-900/50">
                                                <td className="p-3 pl-4 font-mono text-xs text-slate-300">{row.feature}</td>
                                                <Cell val={row.healthcheck} />
                                                <Cell val={row.core} />
                                                <Cell val={row.hardening} />
                                                <Cell val={row.retainer} />
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
