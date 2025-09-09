import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your specific business requirements.",
      features: ["Full-stack development", "API integration", "Legacy system modernization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android apps", "React Native solutions", "Progressive web apps"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      features: ["AWS & Azure deployment", "Cloud migration", "DevOps automation"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      features: ["Business intelligence", "Data visualization", "Predictive analytics"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security audits", "Penetration testing", "Compliance management"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end transformation strategies to digitize and optimize your business processes.",
      features: ["Process automation", "Digital strategy", "Change management"]
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
            end: "bottom 20%",
          }
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children,
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
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 20%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and drive digital innovation across all aspects of your organization.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="feature-card group cursor-pointer">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:animate-glow"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-medium"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;