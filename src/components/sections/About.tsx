import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/lib/extras";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current?.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 px-4"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Content */}
        <div ref={contentRef} className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            About Ahadsons Limited
          </h2>

          <p className="text-subtitle">
            We are a forward-thinking technology company dedicated to helping
            businesses navigate the digital landscape and achieve sustainable
            growth through innovative solutions.
          </p>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              About Ahadsons Limited. Incorporated with the CAC of Nigeria on
              the 1st of June 1989 with RC Number: RC131964 ​At Ahadsons
              Limited, we believe in the transformative power of technology. As
              a leading Information Technology company, we are dedicated to
              empowering businesses and individuals with innovative solutions
              that drive growth, enhance efficiency, and foster seamless
              connectivity. ​Our Vision: To be the trusted partner in navigating
              the ever-evolving digital landscape, creating a future where
              technology is a catalyst for unlimited potential. ​Who We Are:
              Ahadsons is more than just an ICT company; we are a team of
              passionate innovators, problem-solvers, and tech enthusiasts. With
              over 20 years of experience in the industry, our expertise spans
              across software development, cloud solutions, cybersecurity,
              network infrastructure, data analytics, supply of ICT equipment.
              We pride ourselves on our client-centric approach, understanding
              that true success comes from tailoring solutions that perfectly
              align with your unique goals. ​What We Do: We offer a
              comprehensive suite of ICT services designed to meet the diverse
              needs of modern enterprises. From strategic consulting and robust
              infrastructure management to cutting-edge software development and
              unwavering support, Ahadsons Limited provides end-to-end solutions
              that are reliable, scalable, and secure. ​We excel in developing
              bespoke software that streamlines operations and enhances user
              experience. ​we pride ourselves in the implementation of secure
              cloud strategies that ensure data accessibility and business
              continuity. We have acquired extensive experience in fortifying
              digital defenses with proactive cybersecurity measures to protect
              your valuable assets. ​We stay ahead of the curve, continuously
              exploring new technologies to bring you the most advanced and
              effective solutions. We are committed to sourcing the best
              available ICT equipments at the most competitive prices while
              exhibiting sensitivity to time. ​Excellence: We are committed to
              delivering the highest quality in every project, ensuring robust
              performance and lasting value. ​Partnership: We build strong,
              collaborative relationships with our clients, acting as an
              extension of their team to achieve shared success. ​Integrity: We
              operate with transparency, honesty, and a dedication to ethical
              practices in all our interactions. ​Join us on a journey to unlock
              your digital potential. Partner with Ahadsons Limited and
              experience the difference that expert ICT solutions can make.
              ​Ahadsons Limited has gained a wealth of experience, established
              strong partnerships & developed supply chain channels that has
              kept us delivering even better services each day. Our clients
              satisfaction is paramount to us. ​We are available to clients in
              any business field across the nation & beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

