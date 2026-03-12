import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CVD Policy | Maxamin",
    description: "Maxamin's Coordinated Vulnerability Disclosure policy for responsible reporting of IoT security findings.",
};

export default function CVDPage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// RESPONSIBLE_DISCLOSURE</p>
                    <h1 className="text-5xl font-black text-white">CVD Policy</h1>
                    <p className="text-slate-400 font-mono text-sm">Coordinated Vulnerability Disclosure — Responsible Ingestion Pipeline</p>
                </div>
            </section>

            <section className="py-16 max-w-4xl mx-auto px-6 space-y-10">
                <p className="text-sm font-mono text-slate-400 leading-relaxed">
                    Maxamin operates a Coordinated Vulnerability Disclosure (CVD) process for IoT vulnerabilities discovered during audit engagements. This aligns with NIS2 Article 12 requirements for CVD coordination.
                </p>

                <div className="space-y-6">
                    {[
                        { step: "01", title: "Discovery & Documentation", body: "The auditor produces a full evidence-backed disclosure package: reproduced, scored, and integrity-sealed. Nothing is logged without proof." },
                        { step: "02", title: "Client Notification", body: "The client is the first to know. A triage call is arranged promptly to agree on remediation scope and any disclosure commitments." },
                        { step: "03", title: "Vendor Coordination", body: "Where a third-party product is involved, coordinated notification follows with a reasonable remediation window — per established industry practice and client consent." },
                        { step: "04", title: "Remediation Verification", body: "Maxamin re-tests the resolved finding. A certified Before/After evidence bundle confirms risk reduction — not just remediation intent." },
                        { step: "05", title: "Public Disclosure", body: "Public disclosure is strictly by mutual agreement. No client-specific findings are published without explicit written consent." },
                    ].map((s) => (
                        <div key={s.step} className="flex gap-4 bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                            <div className="text-emerald-500 font-mono font-bold text-2xl shrink-0 w-10">{s.step}</div>
                            <div>
                                <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed">{s.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900/60 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-sm font-bold text-emerald-400 mb-2">Reporting a Vulnerability</h3>
                    <p className="text-xs font-mono text-slate-400 leading-relaxed">
                        If you have discovered a security vulnerability in Maxamin's infrastructure or services, please report it responsibly to <span className="text-emerald-400">security@maxamin.io</span>. PGP-encrypted reports are welcome (public key available on request). We will acknowledge receipt within 48 hours.
                    </p>
                </div>
            </section>
        </div>
    );
}
