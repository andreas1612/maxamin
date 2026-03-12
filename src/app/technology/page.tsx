import HardwareShowcase from "@/components/Hardware";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology | Maxamin",
    description: "The Sentinel (Pi 5 Field Probe) and The Vault (Fujitsu M740 Brain) — sovereign IoT audit infrastructure.",
};

export default function TechnologyPage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// SOVEREIGN_INFRASTRUCTURE</p>
                    <h1 className="text-5xl lg:text-6xl font-black text-white">The Technical Edge</h1>
                    <p className="text-slate-400 font-mono max-w-2xl mx-auto">
                        Purpose-built hardware. Zero cloud egress. Every artifact hashed at the point of capture and stored in on-premise WORM storage.
                    </p>
                </div>
            </section>

            <HardwareShowcase />

            {/* Evidence Pipeline visual */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// CHAIN_OF_CUSTODY</p>
                    <h2 className="text-4xl font-black text-white">Digital Evidence Pipeline</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { step: "01", label: "CAPTURE", desc: "The Sentinel captures and records artifacts in the field. Every file is integrity-protected at the exact moment of creation — not retrospectively." },
                        { step: "02", label: "HANDSHAKE", desc: "Encrypted, direct transfer to The Vault. No third-party relay, no cloud intermediary — field to vault over a private, authenticated channel." },
                        { step: "03", label: "PROCESSING", desc: "The Vault's orchestration engine ingests, indexes and cross-references every artifact against the run manifest, maintaining an unbroken chain of custody." },
                        { step: "04", label: "ARCHIVING", desc: "WORM cold vault. Immutable 60-day retention. A signed Deletion Certificate is issued when the retention window closes." },
                    ].map((s, i) => (
                        <div key={s.step} className="relative">
                            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 h-full hover:border-emerald-500/40 transition-colors">
                                <div className="text-emerald-500 font-mono font-bold text-2xl mb-2">{s.step}</div>
                                <h3 className="text-sm font-bold text-white mb-2">{s.label}</h3>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed">{s.desc}</p>
                            </div>
                            {i < 3 && (
                                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-500 text-lg font-bold">›</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Evidence Vault manifest preview */}
            <section className="py-20 bg-slate-900/30 border-y border-slate-800">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-8">
                        <p className="text-xs font-mono text-emerald-500 tracking-widest mb-3">/// IMMUTABLE_MANIFEST</p>
                        <h2 className="text-3xl font-bold text-white">The Evidence Vault</h2>
                        <p className="text-slate-400 font-mono text-sm mt-2">Sample run manifest — every row integrity-checked</p>
                    </div>
                    <div className="border border-slate-800 rounded-xl overflow-x-auto">
                        <table className="w-full text-xs font-mono min-w-[600px]">
                            <thead className="bg-slate-900">
                                <tr className="border-b border-slate-800">
                                    <th className="p-3 text-left text-slate-500">run_id</th>
                                    <th className="p-3 text-left text-slate-500">artifact</th>
                                    <th className="p-3 text-left text-slate-500">sha256</th>
                                    <th className="p-3 text-left text-slate-500">timestamp</th>
                                    <th className="p-3 text-left text-emerald-500">status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 bg-slate-950">
                                {[
                                    { id: "RUN-2026-037", file: "wifi_ch6.pcapng", hash: "a3f1c2d4e5f678...9d22b7", ts: "2026-03-01 13:07:26", st: "VERIFIED" },
                                    { id: "RUN-2026-037", file: "ble_adv_scan.json", hash: "b47a16d895822b...7159aa", ts: "2026-03-01 13:09:14", st: "VERIFIED" },
                                    { id: "RUN-2026-037", file: "zigbee_keys.log", hash: "8d969eef6ecad3...adc6c9", ts: "2026-03-01 13:11:02", st: "VERIFIED" },
                                    { id: "RUN-2026-037", file: "mqtt_capture.pcap", hash: "e3b0c44298fc1c...7852b8", ts: "2026-03-01 13:14:47", st: "VERIFIED" },
                                    { id: "RUN-2026-037", file: "manifest.json", hash: "c5b721d8e4a912...f3c801", ts: "2026-03-01 13:15:00", st: "SIGNED" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-900/50">
                                        <td className="p-3 text-slate-400">{row.id}</td>
                                        <td className="p-3 text-white">{row.file}</td>
                                        <td className="p-3 text-emerald-400/70">{row.hash}</td>
                                        <td className="p-3 text-slate-500">{row.ts}</td>
                                        <td className="p-3"><span className="text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] font-bold">{row.st}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
