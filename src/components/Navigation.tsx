
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, Download, Code2, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Skills", href: "/skills" },
    { name: "Coding", href: "/coding" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Avatar className="h-8 w-8 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold text-sm">
                  YM
                </AvatarFallback>
              </Avatar>
            </div>
            <span className="text-lg font-bold gradient-text">Yuvraj.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Resume Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="group bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 p-2 hover:bg-primary/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <Menu className="h-5 w-5" />
                </div>
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                  <X className="h-5 w-5" />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-card/95 backdrop-blur-xl border-t border-border/30">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "text-primary bg-primary/10 border border-primary/20 shadow-lg"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5 border border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                isActive(item.href) ? 'bg-primary scale-100' : 'bg-muted-foreground/30 scale-75'
              }`}></div>
              {item.name}
            </Link>
          ))}
          <div className="px-4 pt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/30 hover:border-primary/50"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
              <Sparkles className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
