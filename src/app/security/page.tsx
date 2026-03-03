import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security Charter | Maxamin",
    description: "Maxamin's commitment to operational security, evidence integrity, and sovereign data handling.",
};

export default function SecurityPage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// TRUST</p>
                    <h1 className="text-5xl font-black text-white">Security Charter</h1>
                    <p className="text-slate-400 font-mono text-sm">Operational commitments for all Maxamin engagements</p>
                </div>
            </section>

            <section className="py-16 max-w-4xl mx-auto px-6 space-y-8">
                {[
                    { head: "Sovereign Infrastructure", body: "All evidence processing, storage, and reporting occurs on Maxamin-owned hardware located in Cyprus. We use no cloud providers for evidence handling. The Vault (Fujitsu M740) and Synology NAS are maintained on-premise under physical access control." },
                    { head: "Evidence Integrity", body: "Every artifact is SHA-256 hashed at the point of capture. A manifest.json is generated per audit run, with optional PGP-signed manifest.sig for clients requiring cryptographic non-repudiation." },
                    { head: "Access Control", body: "The Vault uses RBAC with 2FA for all operator access. The n8n automation engine runs 47 isolated workflows, each scoped to specific audit functions. No shared credentials." },
                    { head: "Deletion & Retention", body: "Evidence is retained for 60 days in WORM (Write Once Read Many) storage. After the retention window, artifacts are irrecoverably deleted and a signed Deletion Certificate is provided to the client." },
                    { head: "No Conflict of Interest", body: "Maxamin does not accept DSA-funded work. Any related party employed by the Cyprus Digital Security Authority is fully recused from all client-related matters." },
                    { head: "Incident Reporting", body: "If a security incident affecting client data is detected, Maxamin will notify the affected client within 24 hours. Root cause analysis and remediation evidence will follow within 72 hours." },
                ].map((s) => (
                    <div key={s.head} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                        <h2 className="text-lg font-bold text-white mb-2">{s.head}</h2>
                        <p className="text-sm font-mono text-slate-400 leading-relaxed">{s.body}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
