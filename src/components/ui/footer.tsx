import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ahadsons Limited
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions
              and digital excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  >
                    <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@Ahadsonslimited@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+234 803 335 3397</span>
                <span>+234 702 594 9591</span>
                
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  Address: VGi Centre, Okonjo Iweala Way, Utako District, Abuja.
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest tech insights and
              updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-secondary/50 border border-border/50 rounded-full text-sm focus:outline-none focus:border-primary transition-colors w-full"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 py-2 bg-gradient-primary text-primary-foreground rounded-full text-xs font-medium hover:shadow-glow transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ahadsons Limited. All rights reserved. Built with
            passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
