import Intake from "@/components/Intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Audit Intake | Maxamin",
    description: "Submit your IoT security audit request. Secure, GDPR-compliant intake — governed by DPA (Art. 28).",
};

export default function IntakePage() {
    return (
        <div className="pt-16">
            <Intake />
        </div>
    );
}
