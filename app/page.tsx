import { About } from "@/components/sections/About";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { PhotoBreak } from "@/components/sections/PhotoBreak";
import { Process } from "@/components/sections/Process";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Services } from "@/components/sections/Services";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SelectedProjects />
      <Services />
      <Statement />
      <PhotoBreak />
      <About />
      <Process />
      <BeforeAfterSection />
      <Stats />
      <Contact />
    </>
  );
}
