import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions | Maxamin",
    description: "IoT security engagement models: NIS2 Healthcheck, Core Audit, Hardening & Validation, and Managed Retainers.",
};

export default function SolutionsPage() {
    return (
        <div className="pt-16">
            {/* Hero banner */}
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// ENGAGEMENT_MODELS</p>
                    <h1 className="text-5xl lg:text-6xl font-black text-white">Solutions</h1>
                    <p className="text-slate-400 font-mono max-w-2xl mx-auto">
                        Transparent, fixed-fee IoT security engagements. From a 10-day healthcheck to ongoing managed retainers — each producing SHA-256 hashed, defensible evidence.
                    </p>
                </div>
            </section>

            {/* NIS2 Healthcheck deep dive */}
            <section id="healthcheck" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-20">
                <div className="border-l-2 border-emerald-500 pl-6 mb-8">
                    <p className="text-xs font-mono text-emerald-500 mb-1">01 / LEAD OFFER</p>
                    <h2 className="text-3xl font-bold text-white">NIS2-Ready IoT Healthcheck</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { head: "Scope", items: ["Up to 15 IoT devices", "Wi-Fi 2.4/5 GHz + BLE + NFC", "External network posture", "Single site, up to 3 SSIDs"] },
                        { head: "Deliverables", items: ["Top-10 risk findings (CVSS 3.1)", "Standards mapping report", "Evidence bundle (SHA-256 hashed)", "Free re-test within 30 days"] },
                        { head: "Commercial", items: ["€1,500 fixed fee", "10 days elapsed", "4–5 days auditor effort", "No travel surcharge (Cyprus)"] },
                    ].map((col) => (
                        <div key={col.head} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                            <h3 className="text-sm font-mono text-emerald-400 font-bold mb-4">{col.head}</h3>
                            <ul className="space-y-2">
                                {col.items.map((item) => (
                                    <li key={item} className="flex gap-2 text-sm text-slate-300 font-mono">
                                        <span className="text-emerald-500 mt-0.5">›</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Audit */}
            <section id="core" className="py-20 bg-slate-900/30 border-y border-slate-800 scroll-mt-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="border-l-2 border-emerald-500 pl-6 mb-8">
                        <p className="text-xs font-mono text-emerald-500 mb-1">02 / FULL-STACK</p>
                        <h2 className="text-3xl font-bold text-white">Core IoT Audit</h2>
                    </div>
                    <p className="text-slate-400 font-mono mb-6 max-w-3xl">
                        Complete four-layer assessment — Device, Radio, Network, Cloud — with CVSS-rated findings, standards mapping (NIS2, CRA, ISO 27400, ETSI 303 645), and full evidence bundle. 2–3 weeks elapsed, €5,500–€8,500.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Device Firmware", "Radio (Wi-Fi/BLE/Zigbee/Sub-GHz)", "Network (VLAN/MQTT/CoAP)", "Cloud (IAM/TLS)", "CVSS Findings", "Re-test"].map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-mono border border-emerald-500/25 text-emerald-400 bg-emerald-500/8 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hardening */}
            <section id="hardening" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-20">
                <div className="border-l-2 border-emerald-500 pl-6 mb-8">
                    <p className="text-xs font-mono text-emerald-500 mb-1">03 / REMEDIATION</p>
                    <h2 className="text-3xl font-bold text-white">Hardening &amp; Validation</h2>
                </div>
                <p className="text-slate-400 font-mono mb-6 max-w-3xl">
                    We design and implement the security controls needed to close the gap — transport hardening, network segmentation, wireless access policies, and commissioning controls — then produce certified Before/After evidence proving the risk was actually reduced. 4–6 weeks, €12k–€22k.
                </p>
            </section>

            {/* Retainers */}
            <section id="retainers" className="py-20 bg-slate-900/30 border-y border-slate-800 scroll-mt-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="border-l-2 border-emerald-500 pl-6 mb-8">
                        <p className="text-xs font-mono text-emerald-500 mb-1">04 / CONTINUOUS</p>
                        <h2 className="text-3xl font-bold text-white">Managed Retainers</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { tier: "Bronze", freq: "Quarterly", price: "€900/mo", features: ["Quarterly mini-audit", "Config drift detection", "Executive brief"] },
                            { tier: "Silver", freq: "Bi-monthly", price: "€1,500/mo", features: ["Bi-monthly audits", "Asset inventory diffs", "Incident guidance", "Standards re-mapping"] },
                            { tier: "Gold", freq: "Monthly", price: "€2,500/mo", features: ["Monthly full scans", "Dedicated engineer", "24h incident response", "Board-ready reporting"] },
                        ].map((r) => (
                            <div key={r.tier} className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 transition-colors">
                                <h3 className="text-lg font-bold text-white">{r.tier}</h3>
                                <p className="text-emerald-400 font-mono text-sm mb-1">{r.price}</p>
                                <p className="text-xs text-slate-500 font-mono mb-4">{r.freq}</p>
                                <ul className="space-y-2">
                                    {r.features.map((f) => (
                                        <li key={f} className="text-xs text-slate-400 font-mono flex gap-2"><span className="text-emerald-500">✓</span> {f}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full comparison from homepage */}
            <Services />
        </div>
    );
}
