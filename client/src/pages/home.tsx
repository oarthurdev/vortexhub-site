import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Benefits from "@/components/benefits";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
