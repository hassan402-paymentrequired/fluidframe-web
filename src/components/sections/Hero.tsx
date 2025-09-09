import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";
import heroImage from "/public/hero.jpg";
// import

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation timeline
      const tl = gsap.timeline();

      // Animate title
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Animate buttons
      tl.fromTo(
        buttonsRef.current?.children,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      // Floating animation for decorative elements
      gsap.to(floatingRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero-container">
      <div className="hero-bg"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-full h-full">
          <img
            src={heroImage}
            alt="Nigeria's Digital Future"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        ref={floatingRef}
        className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float hidden lg:block"
      ></div>
      <div
        className="absolute bottom-20 left-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-float hidden lg:block"
        style={{ animationDelay: "2s" }}
      ></div>

       <div className="absolute top-20 left-10 w-16 h-16 border border-primary-light/30 rounded-lg floating"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-primary-light/20 rounded-full floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-accent-light/30 rounded-full floating" style={{animationDelay: '4s'}}></div>


      <div className="hero-content">
        <div className="px-4 py-1 tracking-widest border-dashed uppercase font-sans rounded border border-primary bg-primary/10 text-primary text-xs font-medium max-w-xs my-2 mx-auto flex items-center justify-center">
          <span>Innovative Digital Solutions</span>
        </div>
        <h1 ref={titleRef} className="text-hero mb-6">
          Transform Your Business with
          <span className="block">Cutting-Edge Technology</span>
        </h1>

        <p ref={subtitleRef} className="text-subtitle mb-8 max-w-2xl mx-auto">
          We build innovative software solutions that drive growth, streamline
          operations, and position your business at the forefront of digital
          transformation.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow text-primary-foreground px-8 py-6 text-lg font-semibold group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

  
      </div>
    </section>
  );
};

export default Hero;
