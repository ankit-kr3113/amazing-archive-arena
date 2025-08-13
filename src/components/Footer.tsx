import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/yuvraj-mehta", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Mail, href: "mailto:yuvraj.mehta532@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Brand & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold gradient-text mb-2">Yuvraj Mehta</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Full Stack Developer specializing in modern web technologies
            </p>
            <p className="text-xs text-muted-foreground">
              📍 Gaya, Bihar, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end mb-2">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="bg-primary/10 border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
              >
                <ArrowUp className="w-3 h-3 mr-1" />
                <span className="text-xs">Top</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mb-1">
              &copy; {currentYear} Yuvraj Mehta. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
