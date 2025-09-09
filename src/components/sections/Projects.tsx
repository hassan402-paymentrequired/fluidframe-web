import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "A comprehensive e-commerce solution with advanced analytics, inventory management, and multi-vendor support.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      metrics: {
        users: "50K+",
        performance: "99.9%",
        growth: "300%"
      },
      status: "Live",
      link: "#"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Secure mobile banking application with real-time transactions, budget tracking, and investment tools.",
      technologies: ["React Native", "Firebase", "Blockchain"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      metrics: {
        downloads: "100K+",
        rating: "4.8/5",
        transactions: "$2M+"
      },
      status: "Live",
      link: "#"
    },
    {
      title: "Educational Learning Platform",
      category: "EdTech Solution",
      description: "Interactive learning management system with video conferencing, assessment tools, and progress tracking.",
      technologies: ["Next.js", "WebRTC", "Redis"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop",
      metrics: {
        students: "25K+",
        courses: "500+",
        satisfaction: "96%"
      },
      status: "Live",
      link: "#"
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

      // Projects animation
      gsap.fromTo(
        projectsRef.current?.children,
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
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their goals 
            with innovative technology solutions and strategic implementations.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="feature-card group cursor-pointer overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden mb-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-md h-48 object-cover transition-transform duration-300 "
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={project.status === "Live" ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-2">
                <div>
                  <div className="text-sm text-primary font-medium mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/30">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-sm font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                  <Button
                  className="w-full mt-2"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                  </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work?
          </p>
          <a 
            href="#contact" 
            className="inline-flex text-sm items-center px-8 py-2 bg-gradient-primary text-primary-foreground rounded-md hover:shadow-glow transition-all duration-300 font-semibold"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;