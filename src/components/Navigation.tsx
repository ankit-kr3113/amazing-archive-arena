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
    <>
      {/* Floating Dock Style Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl px-2 py-2">
          <div className="flex items-center space-x-1">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="relative">
                <Avatar className="h-8 w-8 ring-2 ring-primary/30 transition-all duration-300 group-hover:ring-primary/60 group-hover:scale-110">
                  <AvatarImage src={personalInfo.profileImage} alt={personalInfo.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold text-xs">
                    <HiCode className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="hidden sm:block text-sm font-bold text-foreground/90 group-hover:text-foreground transition-colors">
                {personalInfo.name.split(' ')[0]}
              </span>
            </Link>

            {/* Navigation Dots */}
            <div className="hidden lg:flex items-center space-x-1 px-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative group p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                      isActive(item.href) 
                        ? "bg-primary/20 text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                    }`}
                    title={item.name}
                  >
                    <Icon className="w-5 h-5" />
                    
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                    )}
                    
                    {/* Tooltip */}
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex h-9 px-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                  <HiDownload className="w-4 h-4 mr-1" />
                  <span className="text-xs font-medium">CV</span>
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden h-9 w-9 p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <HiMenuAlt3 className={`w-4 h-4 transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
                  <HiX className={`w-4 h-4 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-20 left-4 right-4 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl p-4">
          <div className="grid grid-cols-2 gap-2">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-6 h-6 mb-2" />
                  <span className="text-xs font-medium">{item.name}</span>
                  {isActive(item.href) && (
                    <div className="mt-1 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Resume Button */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Button
              className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 rounded-xl transition-all duration-300"
              asChild
            >
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                <HiDownload className="w-4 h-4 mr-2" />
                <span>Download Resume</span>
                <HiSparkles className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
