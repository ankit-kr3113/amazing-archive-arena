import { Github, Linkedin, Mail, Twitter, Heart, Code, Coffee, MapPin, Calendar, Star, TrendingUp, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", count: "250+ repos" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", count: "5K+ connections" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", count: "2K+ followers" },
    { icon: Mail, href: "mailto:john@example.com", label: "Email", count: "Always open" },
  ];

  const quickLinks = [
    { name: "About Me", href: "/about", emoji: "👨‍💻" },
    { name: "My Skills", href: "/skills", emoji: "⚡" },
    { name: "Projects", href: "/projects", emoji: "🚀" },
    { name: "Experience", href: "/experience", emoji: "🏢" },
    { name: "Contact", href: "/contact", emoji: "📫" },
  ];

  const techStack = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker"
  ];

  const achievements = [
    { icon: Users, value: "50K+", label: "Code Lines Written", color: "text-green-400" },
    { icon: Star, value: "15+", label: "Projects Completed", color: "text-yellow-400" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-blue-400" },
    { icon: Coffee, value: "∞", label: "Cups of Coffee", color: "text-orange-400" }
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background/50"></div>
      
      {/* Theme-specific background effects */}
      {theme === 'cyberpunk' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0"></div>
        </div>
      )}
      
      {theme === 'retro' && (
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand & Bio Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">John Doe</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences through clean code and innovative solutions. 
              Currently exploring the intersection of AI and web development.
            </p>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground/80">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground/80">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon: Icon, href, label, count }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 p-3 rounded-lg bg-muted/50 border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{label}</div>
                      <div className="text-xs text-muted-foreground">{count}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Quick Navigation
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{link.emoji}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <Button className="w-full btn-hero group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact & Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              Get In Touch
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">San Francisco, CA</div>
                  <div className="text-xs">Available for remote work</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">john@example.com</div>
                  <div className="text-xs">Response within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for new projects</span>
              </div>
              <p className="text-xs text-green-600/80 dark:text-green-400/80 mt-1">
                Currently accepting freelance opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border">
          {achievements.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform`} />
              </div>
              <div className="text-3xl font-bold gradient-text">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                &copy; {currentYear} John Doe. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start">
                Built with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using React, TypeScript & Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Last updated: Today
              </span>
              <span>•</span>
              <span>v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;