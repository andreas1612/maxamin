"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Server, Radio, FileKey, Globe } from "lucide-react";

const standards = [
    {
        id: "nis2", label: "NIS2", badge: "EU Directive",
        title: "Network & Information Security Directive",
        sub: "Supervisory expectations for essential & important entities — including hotels, clinics, and logistics operators in Cyprus.",
        cards: [
            { icon: ShieldCheck, head: "Evidence Sanitization", body: "Artifact redaction pipeline strips personal data before delivery. Aligned with Cyprus Commissioner for Privacy / Data Protection (DPA) requirements." },
            { icon: FileKey, head: "Vulnerability Disclosure", body: "Coordinated CVD flow (F10 n8n): client triage within 7 days, remediation plan within 30, public disclosure by mutual agreement." },
            { icon: Server, head: "Chain of Custody", body: "SHA-256 per artifact, manifest.json per run, optional PGP-signed manifest.sig. Immutable WORM storage in The Vault." },
            { icon: Globe, head: "Supplier Obligations", body: "DPA (GDPR Art. 28) and sub-processor register provided. No transfers outside EEA without SCCs / adequacy decision." },
        ]
    },
    {
        id: "cra", label: "CRA", badge: "EU Regulation",
        title: "Cyber Resilience Act",
        sub: "Hardware and software product security obligations applicable to IoT manufacturers and importers targeting EU markets.",
        cards: [
            { icon: ShieldCheck, head: "Secure-by-Default", body: "Firmware extraction, secure-boot flags, and debug interface lock verification against CRA conformity baselines." },
            { icon: FileKey, head: "Tech File Support", body: "Evidence bundle structured for manufacturer technical documentation; standards mapping includes CRA Annex I sections." },
            { icon: Server, head: "Update Pathway Integrity", body: "Authenticated OTA verification checks; update mechanism tamper detection (secure-boot chain tracing)." },
            { icon: Globe, head: "DPA / Cyprus Context", body: "Processing of incidental personal data in captures governed by DPA (Art. 28). Cyprus jurisdiction; no DSA disclosure without consent." },
        ]
    },
    {
        id: "iso27400", label: "ISO/IEC 27400", badge: "International Standard",
        title: "IoT Security & Privacy Guideline",
        sub: "Core mapping for device trust, connectivity risk, and IoT-specific security controls across the full audit stack.",
        cards: [
            { icon: ShieldCheck, head: "Device Trust Boundaries", body: "Secure boot, JTAG/UART lock, and secret sweep mapped to ISO/IEC 27400 device trust controls." },
            { icon: Radio, head: "Connectivity Risk", body: "Wi-Fi, BLE, Zigbee, Thread, and Sub-GHz radio posture assessed against 27400 connectivity risk guidance." },
            { icon: FileKey, head: "Information Flow Policy", body: "Network layer review (VLAN, mDNS, SSDP) and cloud IAM audit aligned to 27400 data flow controls." },
            { icon: Server, head: "27001/27002 ISMS Layer", body: "Logging, access control, cryptography, and supplier management mapped to ISO/IEC 27001 Annex A via SoA-lite template." },
        ]
    },
    {
        id: "etsi", label: "ETSI EN 303 645", badge: "IoT Baseline",
        title: "Consumer IoT Cyber Security Baseline",
        sub: "13 mandatory and 5 recommended provisions for consumer-facing IoT devices; now referenced by CRA conformity assessments.",
        cards: [
            { icon: ShieldCheck, head: "No Default Passwords", body: "Automated credential sweep validates that all device interfaces reject factory-default credentials." },
            { icon: Server, head: "Secure Update Checks", body: "Update mechanism integrity — authenticated, rollback-protected, and transport-secured (TLS verified)." },
            { icon: Radio, head: "Exposed Surface Review", body: "Open port and service discovery; unnecessary network services flagged against principle of minimal exposure." },
            { icon: FileKey, head: "NISTIR 8259 Alignment", body: "Informative alignment note: findings cross-referenced with NIST SP 800-213 as a procurement baseline for US-market clients." },
        ]
    },
];

export default function ComplianceMatrix() {
    const [active, setActive] = useState("nis2");
    const current = standards.find((s) => s.id === active)!;

    return (
        <section className="py-24 bg-slate-950 relative">
            <div className="absolute inset-0 grid-overlay opacity-30" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// REGULATORY_MAPPING</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">Compliance Explorer</h2>
                </div>

                {/* Tab bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {standards.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActive(s.id)}
                            className={`relative px-6 py-3 rounded-xl text-sm font-mono font-bold border transition-all ${active === s.id
                                    ? "border-emerald-500 bg-emerald-500/15 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                    : "border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700"
                                }`}
                        >
                            {s.label}
                            {active === s.id && (
                                <motion.div layoutId="tab-pill" className="absolute inset-0 rounded-xl border border-emerald-500 -z-10" />
                            )}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="border border-emerald-500/20 rounded-2xl bg-slate-900/50 backdrop-blur-sm overflow-hidden">
                            <div className="p-6 lg:p-8 border-b border-slate-800">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <span className="text-xs font-mono text-emerald-500 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-full">{current.badge}</span>
                                        <h3 className="text-2xl font-bold text-white mt-2">{current.title}</h3>
                                        <p className="text-slate-400 font-mono text-sm mt-2 max-w-2xl">{current.sub}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800">
                                {current.cards.map((card, i) => (
                                    <motion.div
                                        key={card.head}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.07 }}
                                        className="p-6 bg-slate-950/80 hover:bg-slate-900/80 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                                <card.icon className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            <h4 className="text-sm font-bold text-white">{card.head}</h4>
                                        </div>
                                        <p className="text-xs font-mono text-slate-400 leading-relaxed">{card.body}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
