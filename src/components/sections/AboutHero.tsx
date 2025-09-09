import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";
import heroImage from "/public/hero.jpg";
import { stats } from "@/lib/extras";
import { Card } from "../ui/card";
// import

const AboutHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        statsRef.current?.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
          onComplete: () => {
            stats.forEach((stat, index) => {
              const element =
                statsRef.current?.children[index]?.querySelector(".stat-number");
              if (element && stat.number.includes("+")) {
                const targetNumber = parseInt(stat.number.replace("+", ""));
                gsap.fromTo(
                  element,
                  { textContent: 0 },
                  {
                    textContent: targetNumber,
                    duration: 2,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                      trigger: element,
                      start: "top 90%",
                    },
                    onUpdate: function () {
                      element.textContent =
                        Math.ceil(this.targets()[0].textContent) + "+";
                    },
                  }
                );
              }
            });
          },
        }
      );
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
      <div
        className="absolute top-40 right-20 w-12 h-12 bg-primary-light/20 rounded-full floating"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-20 h-20 border-2 border-accent-light/30 rounded-full floating"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="hero-about-content w-full h-full gap-10 mt-20">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold lg:mb-20 mb-10"
        >
          About{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Ahadsons Limited
          </span>
        </h2>
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="feature-card text-center group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                  <IconComponent className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="stat-number text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

