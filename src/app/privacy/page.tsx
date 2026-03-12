import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Maxamin",
    description: "How Maxamin handles personal data during IoT security audits — aligned to GDPR and Cyprus DPA requirements.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// LEGAL</p>
                    <h1 className="text-5xl font-black text-white">Privacy Policy</h1>
                    <p className="text-slate-400 font-mono text-sm">Last updated: March 2026</p>
                </div>
            </section>

            <section className="py-16 max-w-4xl mx-auto px-6 space-y-10">
                {[
                    { head: "1. Data Controller", body: "Maxamin Ltd., registered in Nicosia, Cyprus, acts as the Data Controller for website visitor data and as a Data Processor for client engagement data under a GDPR Article 28 Data Processing Agreement (DPA)." },
                    { head: "2. Data We Process", body: "During IoT security audits, we may incidentally capture personal data contained within network traffic (e.g., MAC addresses, BLE advertising names). All such data is sanitised before delivery and is never used beyond the scope of the audit." },
                    { head: "3. Legal Basis", body: "Legitimate interest (website analytics), contractual necessity (audit engagements), and legal obligation (regulatory retention where applicable). We do not use consent-based processing for core services." },
                    { head: "4. Data Retention", body: "Evidence artifacts are retained in The Vault (WORM cold vault) for 60 days post-delivery. A signed Evidence Deletion Certificate is issued upon expiry. Website visitor logs are retained for 30 days." },
                    { head: "5. No Transfers Outside EEA", body: "All data resides on Maxamin-owned infrastructure in Cyprus. No data is transferred to cloud providers, sub-processors outside the EEA, or third-party jurisdictions without explicit Client consent and Standard Contractual Clauses (SCCs)." },
                    { head: "6. Your Rights", body: "Under GDPR, you have the right to access, rectify, erase, restrict processing, and data portability. Contact our DPO at privacy@maxamin.io. Complaints may be directed to the Cyprus Commissioner for Personal Data Protection." },
                    { head: "7. No Disclosure to Authorities", body: "Maxamin will not disclose any audit findings, client data, or work product to any governmental authority — including the Cyprus Digital Security Authority (DSA) — without the Client's prior written consent." },
                ].map((s) => (
                    <div key={s.head}>
                        <h2 className="text-lg font-bold text-white mb-2">{s.head}</h2>
                        <p className="text-sm font-mono text-slate-400 leading-relaxed">{s.body}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
