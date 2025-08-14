import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, Download, Code2, Sparkles, User, Briefcase, GraduationCap, Wrench, Code, FolderOpen, Mail, Home } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for blur background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Education", href: "/education", icon: GraduationCap },
    { name: "Skills", href: "/skills", icon: Wrench },
    { name: "Coding", href: "/coding", icon: Code },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl bg-background/80 border-b border-border/30 shadow-lg shadow-background/10' 
        : 'backdrop-blur-md bg-background/60 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-18'
        }`}>
          {/* Enhanced Logo with Modern Design */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Avatar className={`transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/50 group-hover:scale-110 ${
                scrolled ? 'h-8 w-8' : 'h-9 w-9'
              }`}>
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80" alt="Yuvraj Mehta" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold">
                  <Code2 className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-background shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold gradient-text group-hover:scale-105 transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>Yuvraj Mehta</span>
              <span className="text-xs text-muted-foreground/70 font-medium -mt-1 group-hover:text-primary/70 transition-colors duration-300">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with Clean Design */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-primary/8 hover:scale-105 group ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Enhanced Resume Button with Glow Effect */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="group relative overflow-hidden bg-gradient-to-r from-primary/8 via-primary-glow/6 to-primary/8 border border-primary/25 hover:border-primary/40 text-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 rounded-xl px-6 py-2.5 font-medium"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Resume</span>
              <Sparkles className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300 relative z-10" />
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 p-2 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`}>
                  <Menu className="h-5 w-5" />
                </div>
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'}`}>
                  <X className="h-5 w-5" />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation with Glass Effect */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-card/95 backdrop-blur-xl border-t border-border/30 shadow-2xl shadow-background/20">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[1.02] group ${
                  isActive(item.href)
                    ? "text-primary bg-gradient-to-r from-primary/12 to-primary-glow/8 border border-primary/25 shadow-lg shadow-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/6 hover:to-primary-glow/4 border border-transparent hover:border-primary/15"
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className={`w-5 h-5 mr-3 transition-all duration-300 ${
                  isActive(item.href) ? 'text-primary animate-pulse' : 'text-muted-foreground/60 group-hover:text-primary/70'
                }`} />
                <span className="relative">
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                  )}
                </span>
              </Link>
            );
          })}
          
          {/* Mobile Resume Button */}
          <div className="px-4 pt-4 border-t border-border/30 mt-4">
            <Button
              variant="outline"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-primary/8 to-primary-glow/6 border border-primary/25 hover:border-primary/40 hover:from-primary/12 hover:to-primary-glow/10 hover:scale-105 transition-all duration-500 rounded-xl py-3 text-primary font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <Sparkles className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300 relative z-10" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
