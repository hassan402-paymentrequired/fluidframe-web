import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";
import MainLayout from "@/layout/main-layout";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Team />
      <Contact />
    </MainLayout>
  );
};

export default Index;
