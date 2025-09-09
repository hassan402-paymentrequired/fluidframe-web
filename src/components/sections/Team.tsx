import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      department: "Leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
      skills: ["Strategic Planning", "Business Development", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@techflow.com"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      department: "Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Technology evangelist specializing in scalable architectures and emerging tech.",
      skills: ["System Architecture", "Cloud Computing", "AI/ML"],
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@techflow.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      department: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative design leader focused on user-centered design and brand innovation.",
      skills: ["UI/UX Design", "Brand Strategy", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@techflow.com"
      }
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack engineer passionate about clean code and performance optimization.",
      skills: ["React", "Node.js", "Database Design"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@techflow.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      department: "Product",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Product strategist with expertise in agile methodologies and user research.",
      skills: ["Product Strategy", "Agile", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@techflow.com"
      }
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      department: "Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
      skills: ["AWS", "Docker", "Kubernetes"],
      social: {
        linkedin: "#",
        github: "#",
        email: "james@techflow.com"
      }
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

      // Team members animation
      gsap.fromTo(
        membersRef.current?.children,
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
            trigger: membersRef.current,
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Our diverse team of experts brings together creativity, technical excellence, 
            and strategic thinking to deliver exceptional results for every project.
          </p>
        </div>

        <div ref={membersRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="feature-card group cursor-pointer text-center overflow-hidden">
              {/* Member Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                    {member.department}
                  </Badge>
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;