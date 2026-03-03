"use client";

import { useState } from "react";
import { Send, TerminalSquare, ChevronDown } from "lucide-react";

const environments = [
    { value: "hotel", label: "Hotel / Resort (NIS2 Essential)" },
    { value: "clinic", label: "Healthcare Clinic / Hospital" },
    { value: "logistics", label: "Logistics / Warehouse Center" },
    { value: "smart-building", label: "Smart Building / Campus" },
    { value: "gaming", label: "Gaming / Entertainment Venue" },
    { value: "ot", label: "Utilities / Light OT / Field Sensors" },
    { value: "other", label: "Other / Not Listed" },
];

const services = [
    { value: "healthcheck", label: "NIS2-Ready Healthcheck (10 days)" },
    { value: "core", label: "Core IoT Audit (2–3 weeks)" },
    { value: "hardening", label: "Hardening & Validation (4–6 weeks)" },
    { value: "retainer", label: "Managed Retainer (Ongoing)" },
    { value: "unsure", label: "Unsure — Recommend a scope call" },
];

export default function Intake() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(16,185,129,0.06),transparent)] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <TerminalSquare className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// SECURE_TRANSMISSION</p>
                    <h2 className="text-4xl font-black text-white">Initiate Audit Intake</h2>
                    <p className="text-slate-400 font-mono mt-4">Provide initial reconnaissance parameters. Our team will respond within 1 business day.</p>
                </div>

                {submitted ? (
                    <div className="text-center py-20 border border-emerald-500/30 rounded-2xl bg-emerald-500/5">
                        <div className="text-emerald-400 font-mono text-xl font-bold mb-2">TRANSMISSION RECEIVED</div>
                        <p className="text-slate-400 font-mono text-sm">SHA-256 confirmation will be issued upon review.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 lg:p-10 backdrop-blur-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-mono text-slate-500 tracking-widest">ORGANIZATION</label>
                                <input required type="text" placeholder="Company Name" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-slate-600" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-mono text-slate-500 tracking-widest">CONTACT EMAIL</label>
                                <input required type="email" placeholder="security@domain.com" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-slate-600" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-mono text-slate-500 tracking-widest">TARGET ENVIRONMENT</label>
                            <div className="relative">
                                <select required className="w-full appearance-none bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all cursor-pointer">
                                    <option value="">Select ICP Classification...</option>
                                    {environments.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-mono text-slate-500 tracking-widest">DESIRED ENGAGEMENT</label>
                            <div className="relative">
                                <select className="w-full appearance-none bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm font-mono text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all cursor-pointer">
                                    <option value="">Select service tier...</option>
                                    {services.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-mono text-slate-500 tracking-widest">ENGAGEMENT SCOPE (BRIEF)</label>
                            <textarea required rows={4} placeholder="e.g. 12 devices, 3 SSIDs, AWS MQTT broker — NIS2 audit required before Q3." className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none placeholder:text-slate-600" />
                        </div>

                        <div className="flex items-start gap-3 text-xs font-mono text-slate-500 p-3 bg-slate-950/80 border border-slate-800 rounded-lg">
                            <span className="text-emerald-500 shrink-0 mt-0.5">⚑</span>
                            This submission is governed by our DPA (GDPR Art. 28). Evidence never leaves Cyprus-based infrastructure. No disclosure to DSA without explicit written consent.
                        </div>

                        <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-sm flex items-center justify-center gap-2 rounded-lg transition-all group shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]">
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            TRANSMIT SECURE INQUIRY
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
