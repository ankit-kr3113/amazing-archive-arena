import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart, Code, Coffee, Star, Zap, User, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/yuvraj-mehta", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/", 
      label: "LinkedIn",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/", 
      label: "Twitter",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
    { 
      icon: Mail, 
      href: "mailto:yuvraj.mehta532@gmail.com", 
      label: "Email",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/30"
    },
  ];

  const quickLinks = [
    { name: "About", href: "/about", icon: "👤" },
    { name: "Skills", href: "/skills", icon: "🛠️" },
    { name: "Projects", href: "/projects", icon: "🚀" },
    { name: "Experience", href: "/experience", icon: "💼" },
    { name: "Contact", href: "/contact", icon: "📬" },
  ];

  const codingProfiles = [
    { 
      name: "LeetCode", 
      href: "https://leetcode.com/u/mythical-UV/", 
      icon: "🧩",
      badge: "Top 27.7%",
      color: "text-orange-500"
    },
    { 
      name: "GeeksforGeeks", 
      href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/", 
      icon: "💻",
      badge: "Active",
      color: "text-green-500"
    },
    { 
      name: "CodeChef", 
      href: "https://www.codechef.com/users/quick_unity_53", 
      icon: "👨‍💻",
      badge: "Participant",
      color: "text-blue-500"
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-card via-card/95 to-background/80 border-t border-border/30 mt-16 sm:mt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse opacity-20 animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                Yuvraj Mehta
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1.5"></div>
                  Available for opportunities
                </Badge>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Full Stack Developer specializing in modern web technologies and algorithms. 
                Passionate about creating exceptional digital experiences and currently exploring the exciting world of 
                <span className="text-primary font-semibold"> Generative AI</span>.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wider">Connect With Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label, color, bgColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-11 h-11 rounded-xl bg-primary/10 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground ${color} ${bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {label}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wider">Contact Info</h4>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group cursor-pointer">
                <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm">Gaya, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group cursor-pointer">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm">yuvraj.mehta532@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-200 group p-2 rounded-lg hover:bg-primary/5"
                >
                  <span className="text-sm group-hover:animate-bounce">{link.icon}</span>
                  <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                </Link>
              ))}
              <Link
                to="/projects"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-200 group p-2 rounded-lg hover:bg-primary/5 mt-3 pt-3 border-t border-border/30"
              >
                <ExternalLink className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">Resume Download</span>
              </Link>
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              Coding Profiles
            </h4>
            <div className="space-y-3">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg group-hover:animate-bounce">{profile.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-foreground">{profile.name}</div>
                      <Badge variant="outline" className={`text-xs ${profile.color} border-current/20`}>
                        {profile.badge}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 backdrop-blur-sm border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">17,090+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Portfolio Views</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-6 h-6 text-green-500 animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-foreground group-hover:text-green-500 transition-colors duration-300">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Coding Hours</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <User className="w-6 h-6 text-blue-500 animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">333+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Problems Solved</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Yuvraj Mehta. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center sm:justify-start gap-2">
                <span>Crafted with</span>
                <Heart className="w-3 h-3 text-red-500 animate-pulse" />
                <span>using React & TypeScript</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Last updated: Aug 2024</span>
              </div>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="group bg-primary/10 border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 mr-1 group-hover:animate-bounce" />
                <span className="text-xs">Top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
