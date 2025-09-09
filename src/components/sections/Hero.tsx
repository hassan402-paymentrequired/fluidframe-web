import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";

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
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.5"
      );

      // Animate buttons
      tl.fromTo(
        buttonsRef.current?.children,
        { 
          opacity: 0, 
          y: 20,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        },
        "-=0.3"
      );

      // Floating animation for decorative elements
      gsap.to(floatingRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero-container">
      {/* Background decorative elements */}
      <div className="hero-bg"></div>
      
      {/* Floating decorative orbs */}
      <div ref={floatingRef} className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl animate-float hidden lg:block" style={{ animationDelay: "2s" }}></div>

      <div className="hero-content">
        <h1 ref={titleRef} className="text-hero mb-6">
          Transform Your Business with
          <span className="block">Cutting-Edge Technology</span>
        </h1>
        
        <p ref={subtitleRef} className="text-subtitle mb-8 max-w-2xl mx-auto">
          We build innovative software solutions that drive growth, streamline operations, 
          and position your business at the forefront of digital transformation.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow text-primary-foreground px-8 py-6 text-lg font-semibold group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg group"
          >
            <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Watch Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="h-8 w-24 bg-gradient-to-r from-primary/40 to-primary-glow/40 rounded"></div>
            <div className="h-8 w-28 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded"></div>
            <div className="h-8 w-20 bg-gradient-to-r from-primary/40 to-primary-glow/40 rounded"></div>
            <div className="h-8 w-32 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;