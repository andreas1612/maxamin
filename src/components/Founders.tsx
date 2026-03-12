"use client";

import { motion } from "framer-motion";

const founders = [
    {
        name: "Andreas Pieri",
        role: "Chief Executive Officer",
        code: "CEO",
        focus: "Sovereign Strategy & Market Displacement",
        bio: "Leads the Maxamin mission to redefine IoT security in Cyprus. Specializes in translating deep technical risk into boardroom-level language, regulatory obligations, and fixed-fee commercial outcomes.",
        hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        pgp: "4096R/0xA3F1C299",
        arsenal: ["Strategic Auditing", "Risk Governance", "Regulatory Affairs", "Sovereign Architecture"],
    },
    {
        name: "Sotiris Haralambous",
        role: "Chief Operating Officer",
        code: "COO",
        focus: "Operational Security & Vault Infrastructure",
        bio: "Architect of the Maxamin backend: the proprietary orchestration engine, structured evidence store, and WORM cold vault. Ensures zero data egress, airtight chain-of-custody, and ISO-aligned retention cycles.",
        hash: "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
        pgp: "4096R/0xF8C2B771",
        arsenal: ["Systems Architecture", "Automation Engineering", "Data Governance", "Evidence Databases", "WORM Storage"],
    },
    {
        name: "Andreas Mylonas",
        role: "Chief Technology Officer",
        code: "CTO",
        focus: "Field Probe Engineering & RF Intelligence",
        bio: "Lead hardware engineer behind Maxamin's proprietary field probes. Specialist in multi-band RF coverage and radio layer security assessment. Responsible for Maxamin's evidence integrity architecture and field deployment operations.",
        hash: "b47a16d895822be88dd33f00ecebbcf1d50eeaa409c9d4fa1cf13ad7159aa4b7",
        pgp: "4096R/0x9D22B741",
        arsenal: ["Hardware Engineering", "RF Security", "PKI & Transport Security", "Evidence Integrity", "Field Operations"],
    },
];

export default function Founders() {
    return (
        <section className="py-24 bg-slate-900/30 border-y border-slate-800 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// PERSONNEL_FILE</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">Meet the Team</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {founders.map((person, i) => (
                        <motion.div
                            key={person.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="group bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-800 group-hover:border-emerald-500/20 transition-colors">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 border-2 border-emerald-500/40 group-hover:border-emerald-500 transition-colors flex items-center justify-center">
                                        <span className="text-xs font-bold font-mono text-emerald-400">{person.code}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-mono text-slate-600">PGP KEY</div>
                                        <div className="text-[10px] font-mono text-emerald-500/70">{person.pgp}</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                                <p className="text-xs font-mono text-emerald-500 mt-0.5">{person.role}</p>
                                <p className="text-xs text-slate-500 mt-1">Focus: {person.focus}</p>
                            </div>

                            {/* Bio */}
                            <div className="p-6 flex-1">
                                <p className="text-sm text-slate-400 leading-relaxed">{person.bio}</p>
                            </div>

                            {/* Cryptographic signature */}
                            <div className="px-6 pb-3">
                                <div className="crypto-block p-3 overflow-hidden">
                                    <div className="flex items-center justify-between mb-1.5 opacity-60">
                                        <span>// DIGITAL_SIGNATURE · SHA-256</span>
                                        <span className="animate-pulse">● VERIFIED</span>
                                    </div>
                                    <div className="break-all leading-relaxed opacity-80">[SIG] {person.hash}</div>
                                </div>
                            </div>

                            {/* Arsenal */}
                            <div className="px-6 pb-6 pt-3 border-t border-slate-800">
                                <p className="text-[10px] font-mono text-slate-600 mb-2 tracking-wider">TECHNICAL ARSENAL</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {person.arsenal.map((tag) => (
                                        <span key={tag} className="text-[11px] font-mono px-2 py-0.5 border border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5 rounded group-hover:border-emerald-500/40 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
