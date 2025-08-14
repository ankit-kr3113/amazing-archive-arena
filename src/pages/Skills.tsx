import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Code2,
  Database,
  Globe,
  Terminal,
  Palette,
  Server,
  Brain,
  Wrench,
  Star
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = ["All", "Frontend", "Backend", "Languages", "Tools"];

  const skillsData = [
    // Featured/Primary Skills
    {
      name: "React",
      category: "Frontend",
      level: "Expert",
      icon: Code2,
      color: "text-blue-500",
      featured: true
    },
    {
      name: "JavaScript",
      category: "Frontend", 
      level: "Expert",
      icon: Code2,
      color: "text-yellow-500",
      featured: true
    },
    {
      name: "TypeScript",
      category: "Frontend",
      level: "Advanced",
      icon: Code2,
      color: "text-blue-600",
      featured: true
    },
    {
      name: "Node.js",
      category: "Backend",
      level: "Advanced",
      icon: Server,
      color: "text-green-500",
      featured: true
    },
    {
      name: "MongoDB",
      category: "Backend",
      level: "Advanced",
      icon: Database,
      color: "text-green-600",
      featured: true
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Advanced",
      icon: Palette,
      color: "text-cyan-500",
      featured: true
    },

    // Additional Skills
    {
      name: "Next.js",
      category: "Frontend",
      level: "Intermediate",
      icon: Globe,
      color: "text-gray-700",
      featured: false
    },
    {
      name: "Express.js",
      category: "Backend",
      level: "Advanced",
      icon: Server,
      color: "text-gray-600",
      featured: false
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      level: "Expert",
      icon: Globe,
      color: "text-orange-500",
      featured: false
    },
    {
      name: "C++",
      category: "Languages",
      level: "Advanced",
      icon: Brain,
      color: "text-blue-800",
      featured: false
    },
    {
      name: "Java",
      category: "Languages",
      level: "Intermediate",
      icon: Brain,
      color: "text-orange-600",
      featured: false
    },
    {
      name: "Python",
      category: "Languages",
      level: "Intermediate",
      icon: Brain,
      color: "text-green-700",
      featured: false
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Advanced",
      icon: Wrench,
      color: "text-orange-500",
      featured: false
    },
    {
      name: "VS Code",
      category: "Tools",
      level: "Expert",
      icon: Terminal,
      color: "text-blue-600",
      featured: false
    },
    {
      name: "RESTful APIs",
      category: "Backend",
      level: "Advanced",
      icon: Globe,
      color: "text-indigo-500",
      featured: false
    }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skillsData;
    }
    return skillsData.filter(skill => skill.category === activeCategory);
  };

  const getLevelColor = (level) => {
    switch(level) {
      case "Expert": return "bg-emerald-100 text-emerald-700";
      case "Advanced": return "bg-blue-100 text-blue-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/8"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&auto=format&q=20"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse opacity-40 animation-delay-2000"></div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-600 text-xs font-medium mb-3">
              <span>⚡</span>
              <span>Skills</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Technical Skills
            </h1>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Technologies and tools I use to build great software
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className={`${activeCategory === category ? "btn-hero" : "btn-outline-hero"} hover:scale-105 transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Skills (Only show when "All" is selected) */}
          {activeCategory === "All" && (
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-5 h-5 text-primary mr-2" />
                <h2 className="text-lg font-semibold">Core Technologies</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {skillsData.filter(skill => skill.featured).map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card key={index} className="portfolio-card group text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="p-4">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${skill.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                        <Badge className={`${getLevelColor(skill.level)} text-xs border-0`}>
                          {skill.level}
                        </Badge>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Skills Grid */}
          <div>
            {activeCategory !== "All" && (
              <div className="flex items-center justify-center mb-6">
                <span className="text-lg mr-2">
                  {activeCategory === "Frontend" && "🎨"}
                  {activeCategory === "Backend" && "⚙️"}
                  {activeCategory === "Languages" && "💻"}
                  {activeCategory === "Tools" && "🔧"}
                </span>
                <h2 className="text-lg font-semibold">{activeCategory}</h2>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {getFilteredSkills().map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className="portfolio-card group text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer relative">
                    <div className="p-4">
                      {skill.featured && activeCategory === "All" && (
                        <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs z-10">
                          <Star className="w-3 h-3" />
                        </Badge>
                      )}
                      
                      <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${skill.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <h3 className="font-medium text-sm mb-2 group-hover:text-primary transition-colors leading-tight">{skill.name}</h3>
                      
                      <Badge className={`${getLevelColor(skill.level)} text-xs border-0`}>
                        {skill.level}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Simple Footer Note */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Always learning and exploring new technologies 🚀
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
