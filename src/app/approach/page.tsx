import AuditWheel from "@/components/AuditWheel";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Approach | Maxamin",
    description: "The Maxamin 360° methodology: Device, Radio, Network, Cloud — every layer assessed, every artifact hashed.",
};

export default function ApproachPage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// METHODOLOGY</p>
                    <h1 className="text-5xl lg:text-6xl font-black text-white">Our Approach</h1>
                    <p className="text-slate-400 font-mono max-w-2xl mx-auto">
                        The DRNC methodology — Device, Radio, Network, Cloud — ensures no attack surface is left untested. Each layer produces hashed, defensible evidence.
                    </p>
                </div>
            </section>
            <AuditWheel />

            {/* Methodology detail */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-8">How We Operate</h2>
                <div className="space-y-6">
                    {[
                        { title: "1. Passive-by-Default", body: "All field operations begin in PASSIVE mode. The Sentinel's hardware-interlocked key switch physically prevents active probes until the client signs the Rules of Engagement (RoE) allowing ACTIVE testing." },
                        { title: "2. Evidence at Point of Capture", body: "Every pcap, pcapng, JSON artifact, and screenshot is SHA-256 hashed at the exact moment of write on the Sentinel's NVMe drive. A manifest.json is generated per run." },
                        { title: "3. Encrypted Transfer", body: "Artifacts travel from the Sentinel to The Vault over WireGuard VPN with TLS 1.3 in transit. No cloud relay, no third-party intermediary." },
                        { title: "4. Immutable Archiving", body: "The Vault's Synology WORM cold storage retains evidence for 60 days post-delivery. A signed Evidence Deletion Certificate is issued after the retention window closes." },
                    ].map((step) => (
                        <div key={step.title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">{step.title}</h3>
                            <p className="text-sm font-mono text-slate-400 leading-relaxed">{step.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
