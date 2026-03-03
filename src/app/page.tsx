import HeroSection from "@/components/Hero";
import AuditWheel from "@/components/AuditWheel";
import HardwareShowcase from "@/components/Hardware";
import Services from "@/components/Services";
import ComplianceMatrix from "@/components/Compliance";
import Founders from "@/components/Founders";
import Ethics from "@/components/Ethics";
import Intake from "@/components/Intake";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AuditWheel />
      <HardwareShowcase />
      <Services />
      <ComplianceMatrix />
      <Founders />
      <Ethics />
      <Intake />
    </>
  );
}
