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
                    <p className="text-slate-400 font-mono text-sm">Coordinated Vulnerability Disclosure — n8n Flow F10</p>
                </div>
            </section>

            <section className="py-16 max-w-4xl mx-auto px-6 space-y-10">
                <p className="text-sm font-mono text-slate-400 leading-relaxed">
                    Maxamin operates a Coordinated Vulnerability Disclosure (CVD) process for IoT vulnerabilities discovered during audit engagements. This aligns with NIS2 Article 12 requirements for CVD coordination.
                </p>

                <div className="space-y-6">
                    {[
                        { step: "01", title: "Discovery & Documentation", body: "The auditor documents the vulnerability with full reproducibility evidence, CVSS 3.1 scoring, and SHA-256 hashed proof-of-concept artifacts." },
                        { step: "02", title: "Client Notification (Day 0)", body: "The client is notified within 24 hours of confirmation. A triage call is scheduled to agree on remediation timeline and disclosure scope." },
                        { step: "03", title: "Vendor Notification (Day 7)", body: "If the vulnerability relates to a third-party product, the vendor is notified (with client consent). A 90-day remediation window is granted per industry standard." },
                        { step: "04", title: "Remediation Verification (Day 30)", body: "Maxamin re-tests the finding after the client's remediation. A 'Before/After' evidence bundle is produced and hashed." },
                        { step: "05", title: "Public Disclosure (Mutual)", body: "Public disclosure occurs only by mutual agreement between Maxamin and the client. No unauthorized publication of client-specific findings." },
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
