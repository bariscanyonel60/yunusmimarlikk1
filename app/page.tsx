import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Press from "@/components/sections/Press";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MaterialsPalette from "@/components/sections/MaterialsPalette";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Experience3D from "@/components/sections/Experience3D";
import Services from "@/components/sections/Services";
import Designer from "@/components/sections/Designer";
import ClientVoices from "@/components/sections/ClientVoices";
import Process from "@/components/sections/Process";
import Journal from "@/components/sections/Journal";
import InstagramSection from "@/components/sections/InstagramSection";
import Faq from "@/components/sections/Faq";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Press />
      <ProjectsSection />
      <MaterialsPalette />
      <BeforeAfter />
      <Experience3D />
      <Services />
      <Designer />
      <ClientVoices />
      <Process />
      <Journal />
      <InstagramSection />
      <Faq />
      <ContactCTA />
    </main>
  );
}
