import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HiMenuAlt3,
  HiX,
  HiDownload,
  HiCode,
  HiSparkles,
  HiUser,
  HiBriefcase,
  HiAcademicCap,
  HiCog,
  HiTerminal,
  HiFolder,
  HiMail,
  HiHome,
  HiEye
} from "react-icons/hi";
import { personalInfo } from "@/data/portfolioData";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Overview", href: "/", icon: HiEye },
    { name: "About", href: "/about", icon: HiUser },
    { name: "Experience", href: "/experience", icon: HiBriefcase },
    { name: "Education", href: "/education", icon: HiAcademicCap },
    { name: "Skills", href: "/skills", icon: HiCog },
    { name: "Coding", href: "/coding", icon: HiTerminal },
    { name: "Projects", href: "/projects", icon: HiFolder },
    { name: "Contact", href: "/contact", icon: HiMail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-enhanced border-b-2 border-primary/20 backdrop-blur-2xl bg-background/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group">
            <div className="relative">
              <Avatar className="h-9 w-9 ring-3 ring-primary/25 transition-all duration-300 group-hover:ring-primary/60 group-hover:scale-125 shadow-lg">
                <AvatarImage src={personalInfo.profileImage} alt={personalInfo.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold text-sm shadow-lg">
                  <Code2 className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-background shadow-lg shadow-green-500/30"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{personalInfo.name.split(' ')[0]}.</span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 rounded-xl hover:bg-primary/10 hover:scale-105 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/15 shadow-lg shadow-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Enhanced Resume Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="group bg-gradient-to-r from-primary/15 to-primary-glow/12 border-2 border-primary/40 hover:from-primary/25 hover:to-primary-glow/20 text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-xl shadow-lg backdrop-blur-sm"
              asChild
            >
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                <span className="font-semibold">Resume</span>
              </a>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 p-2 hover:bg-primary/15 hover:scale-110 transition-all duration-300 rounded-xl backdrop-blur-sm"
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
        <div className="px-6 pt-4 pb-6 space-y-3 bg-card/95 backdrop-blur-2xl border-t-2 border-primary/20 shadow-2xl">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? "text-primary bg-gradient-to-r from-primary/15 to-primary-glow/12 border-2 border-primary/25 shadow-xl shadow-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/8 hover:to-primary-glow/6 border-2 border-transparent hover:border-primary/20"
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Icon className={`w-5 h-5 mr-4 transition-all duration-300 ${
                  isActive(item.href) ? 'text-primary animate-pulse' : 'text-muted-foreground/60'
                }`} />
                {item.name}
              </Link>
            );
          })}
          <div className="px-5 pt-6 border-t-2 border-primary/20 mt-6">
            <Button
              variant="outline"
              size="sm"
              className="w-full group bg-gradient-to-r from-primary/15 to-primary-glow/12 border-2 border-primary/40 hover:from-primary/25 hover:to-primary-glow/20 hover:border-primary/60 hover:scale-105 transition-all duration-300 py-4 rounded-2xl shadow-lg backdrop-blur-sm"
              asChild
            >
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                <span className="font-semibold">Download Resume</span>
                <Sparkles className="w-4 h-4 ml-3 opacity-60 group-hover:opacity-100 group-hover:animate-spin transition-all duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
