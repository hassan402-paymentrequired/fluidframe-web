import About from "@/components/sections/About";
import AboutHero from "@/components/sections/AboutHero";
import MainLayout from "@/layout/main-layout";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutHero />
      <About />
    </MainLayout>
  );
};

export default AboutPage;
