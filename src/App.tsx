import { Toaster } from "sonner";
import { Topbar } from "@/components/landing/Topbar";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Flavors } from "@/components/landing/Flavors";
import { SocialProof } from "@/components/landing/SocialProof";
import { CtaReveal } from "@/components/landing/CtaReveal";
import { LeadForm } from "@/components/landing/LeadForm";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/lib/use-reveal";

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen text-foreground">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Flavors />
        <SocialProof />
        <CtaReveal />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(20,11,38,0.95)",
            border: "1px solid rgba(168,85,247,0.4)",
            color: "white",
            backdropFilter: "blur(20px)",
          },
        }}
      />
    </div>
  );
}
