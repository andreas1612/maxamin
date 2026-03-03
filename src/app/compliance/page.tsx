import ComplianceMatrix from "@/components/Compliance";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compliance | Maxamin",
    description: "Regulatory mapping: NIS2, CRA, ISO/IEC 27400, ETSI EN 303 645 — aligned to Cyprus DPA requirements.",
};

export default function CompliancePage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// REGULATORY_MAPPING</p>
                    <h1 className="text-5xl lg:text-6xl font-black text-white">Compliance &amp; Trust</h1>
                    <p className="text-slate-400 font-mono max-w-2xl mx-auto">
                        Every finding mapped to EU and international standards. Cyprus Commissioner for Privacy / Data Protection (DPA) context embedded throughout.
                    </p>
                </div>
            </section>
            <ComplianceMatrix />
        </div>
    );
}
