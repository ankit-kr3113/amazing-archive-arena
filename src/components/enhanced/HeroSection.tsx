import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo, achievements } from "@/data/portfolioData";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Enhanced mouse tracking for subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badge with Pulse Animation */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm mb-8 backdrop-blur-sm">
          <div className="relative">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-foreground/70">Available for opportunities</span>
          <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
          <span className="text-foreground/70">{personalInfo.status.workMode}</span>
        </div>

        {/* Enhanced Typography */}
        <div className="space-y-6 mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-lg font-normal text-foreground/60 mb-4">
              👋 Hello, I'm
            </span>
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-gradient">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground/80 font-light max-w-4xl mx-auto leading-relaxed">
            Crafting <span className="text-primary font-semibold">digital experiences</span> that make a difference
          </p>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {personalInfo.course} Student at {personalInfo.university} • {achievements.leetcode.problemsSolved} LeetCode Problems • {achievements.stats.totalProjects} Projects
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <Link to="/contact">
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 border-2 border-primary/30 hover:border-primary/60 text-primary hover:bg-primary/10 font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
