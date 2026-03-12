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
                        { title: "1. Passive-by-Default", body: "All engagements begin in passive monitoring mode. Active testing only commences after the client has signed a formal Rules of Engagement (RoE) — and is enforced at the hardware level, not just by policy." },
                        { title: "2. Evidence Integrity at Capture", body: "Every artifact produced during an engagement is integrity-protected at the moment of creation. The result: a cryptographically verifiable evidence bundle that cannot be disputed or tampered with after the fact." },
                        { title: "3. Sovereign Data Handling", body: "All data flows from field to vault without traversing any third-party infrastructure. There are no cloud relays, no intermediary processors, and no data that leaves Cyprus-based infrastructure without client consent." },
                        { title: "4. Immutable Retention & Verified Disposal", body: "Evidence is held in an immutable, write-protected store and retained for a defined post-delivery window. Clients receive a signed Deletion Certificate confirming permanent, verifiable destruction at the close of the retention period." },
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
