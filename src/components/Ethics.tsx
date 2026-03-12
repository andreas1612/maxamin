"use client";

import { Lock, AlertTriangle, FileCheck } from "lucide-react";

const policies = [
    {
        icon: Lock,
        color: "emerald",
        title: "No Disclosure to Authorities",
        body: "Maxamin shall not disclose any Client Information, Work Product, or Findings to any governmental authority or regulator — including the Cyprus Digital Security Authority (DSA) — without the Client's prior written consent. If legally compelled, we (i) promptly notify the Client, and (ii) disclose only the minimum information legally required.",
    },
    {
        icon: AlertTriangle,
        color: "rose",
        title: "Conflict of Interest & Recusal",
        body: "Maxamin does not accept DSA-funded work. Any related party employed by the DSA is fully recused from all Client-related matters. Any actual or apparent conflict will be disclosed immediately; where it cannot be mitigated, Maxamin will withdraw from the engagement at the Client's request.",
    },
    {
        icon: FileCheck,
        color: "emerald",
        title: "Chain of Custody",
        body: "Every artifact is hashed (SHA-256) at point of capture and recorded in a manifest per run. Evidence is retained for 60 days after final delivery in The Vault (WORM cold vault), after which a signed Deletion Certificate is issued to the Client. No artifact transfers outside EEA without explicit DPA clauses.",
    },
];

const colorMap = {
    emerald: {
        border: "border-emerald-500/40",
        bar: "bg-emerald-500",
        icon: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
        glow: "hover:border-emerald-500/60",
    },
    rose: {
        border: "border-rose-500/30",
        bar: "bg-rose-500",
        icon: "text-rose-500 bg-rose-500/10 border-rose-500/20",
        glow: "hover:border-rose-500/50",
    },
};

export default function Ethics() {
    return (
        <section className="py-24 bg-slate-900/20 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// CORE_DOCTRINE</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">Sovereign Ethics</h2>
                    <p className="mt-4 text-slate-400 font-mono max-w-xl mx-auto">Uncompromising jurisdiction, total client confidentiality, forensic-grade evidence handling.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {policies.map((p) => {
                        const c = colorMap[p.color as keyof typeof colorMap];
                        return (
                            <div key={p.title} className={`relative overflow-hidden border-2 ${c.border} ${c.glow} bg-slate-950 rounded-2xl p-8 flex flex-col gap-5 transition-colors`}>
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${c.bar}`} />
                                <div className={`self-start p-3 border ${c.icon} rounded-xl`}>
                                    <p.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                                    <p className="text-sm font-mono text-slate-400 leading-relaxed">{p.body}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
