import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X, Download, Code2, Sparkles, User, Briefcase, GraduationCap, Wrench, Code, FolderOpen, Mail, Home } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30 backdrop-blur-xl bg-background/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <Avatar className="h-8 w-8 sm:h-9 sm:w-9 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50 group-hover:scale-110">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80" alt="Yuvraj Mehta" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold text-sm">
                  <Code2 className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-background"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">Yuvraj.</span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/5 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Enhanced Resume Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="group bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/30 hover:from-primary/20 hover:to-primary-glow/20 text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span>Resume</span>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 p-2 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
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

      {/* Enhanced Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-card/95 backdrop-blur-xl border-t border-border/30 shadow-lg">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
                  isActive(item.href)
                    ? "text-primary bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 shadow-lg"
                    : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary-glow/5 border border-transparent"
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className={`w-4 h-4 mr-3 transition-all duration-300 ${
                  isActive(item.href) ? 'text-primary animate-pulse' : 'text-muted-foreground/60'
                }`} />
                {item.name}
              </Link>
            );
          })}
          <div className="px-4 pt-4 border-t border-border/30 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full group bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/30 hover:from-primary/20 hover:to-primary-glow/20 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span>Download Resume</span>
              <Sparkles className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
