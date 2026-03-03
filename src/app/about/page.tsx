import Founders from "@/components/Founders";
import Ethics from "@/components/Ethics";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Maxamin",
    description: "Meet the team — the founding engineers securing IoT infrastructure across Cyprus and the EU.",
};

export default function AboutPage() {
    return (
        <div className="pt-16">
            <section className="py-20 border-b border-slate-800 hex-bg">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
                    <p className="text-xs font-mono text-emerald-500 tracking-widest">/// WHO_WE_ARE</p>
                    <h1 className="text-5xl lg:text-6xl font-black text-white">Meet the Team</h1>
                    <p className="text-slate-400 font-mono max-w-2xl mx-auto">
                        Three engineers, one mission: make IoT security in Cyprus provable, sovereign, and audit-grade.
                    </p>
                </div>
            </section>
            <Founders />
            <Ethics />
        </div>
    );
}
