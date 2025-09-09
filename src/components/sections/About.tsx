import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses transformed"
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Projects delivered on time"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
      description: "In cutting-edge tech"
    },
    {
      icon: Target,
      number: "24/7",
      label: "Support",
      description: "Always here for you"
    }
  ];

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
          }
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current?.children,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
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
          }
        }
      );

      // Number counter animation
      stats.forEach((stat, index) => {
        const element = statsRef.current?.children[index]?.querySelector('.stat-number');
        if (element && stat.number.includes('+')) {
          const targetNumber = parseInt(stat.number.replace('+', ''));
          gsap.fromTo(element, 
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
              onUpdate: function() {
                element.textContent = Math.ceil(this.targets()[0].textContent) + '+';
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">TechFlow</span>
            </h2>
            
            <p className="text-subtitle">
              We are a forward-thinking technology company dedicated to helping businesses 
              navigate the digital landscape and achieve sustainable growth through innovative solutions.
            </p>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Founded on the principle that technology should be accessible and transformative, 
                we combine deep technical expertise with strategic thinking to deliver solutions 
                that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced developers, designers, and strategists work collaboratively 
                to understand your unique business needs and craft custom solutions that drive 
                measurable results and long-term success.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                enhance efficiency, and create competitive advantages in an ever-evolving digital world.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default About;