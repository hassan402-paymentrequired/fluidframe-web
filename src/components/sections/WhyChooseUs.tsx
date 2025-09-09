import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Users, Clock, Shield, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and innovative approaches to solve complex business challenges.",
      highlight: "Latest Tech Stack"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience and deep expertise across multiple domains.",
      highlight: "Certified Experts"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines and delivering projects on schedule, every time.",
      highlight: "98% Success Rate"
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Security isn't an afterthought - it's built into every solution from the ground up.",
      highlight: "Enterprise Grade"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing and quality assurance processes ensure exceptional results.",
      highlight: "ISO Certified"
    },
    {
      icon: CheckCircle,
      title: "Full Support",
      description: "Comprehensive support and maintenance to keep your solutions running smoothly.",
      highlight: "24/7 Available"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Reasons animation
      gsap.fromTo(
        reasonsRef.current?.children,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: reasonsRef.current,
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">TechFlow</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            We don't just build software - we craft solutions that transform businesses. 
            Here's what sets us apart from the competition.
          </p>
        </div>

        <div ref={reasonsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="feature-card group cursor-pointer relative overflow-hidden">
                {/* Highlight badge */}
                <div className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                  {reason.highlight}
                </div>
                
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;