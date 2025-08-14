import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Atom,
  FileCode2,
  Braces,
  Globe,
  Paintbrush,
  Waves,
  Zap,
  Server,
  Database,
  BarChart3,
  Cpu,
  Coffee,
  Settings,
  BookOpen,
  Github,
  Terminal,
  Send
} from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const skillCategories = [
    "Web Development",
    "Database",
    "Languages",
    "Tools"
  ];

  const skillsData = {
    "Web Development": {
      subtitle: "Frontend & Backend",
      skills: [
        { name: "React", icon: Atom, category: "Frontend", color: "text-blue-400" },
        { name: "TypeScript", icon: FileCode2, category: "Frontend", color: "text-blue-600" },
        { name: "JavaScript", icon: Braces, category: "Frontend", color: "text-yellow-500" },
        { name: "HTML5", icon: Globe, category: "Frontend", color: "text-orange-500" },
        { name: "CSS3", icon: Paintbrush, category: "Frontend", color: "text-blue-500" },
        { name: "Tailwind CSS", icon: Waves, category: "Frontend", color: "text-cyan-400" },
        { name: "Next.js", icon: Zap, category: "Frontend", color: "text-gray-700" },
        { name: "Redux", icon: BarChart3, category: "Frontend", color: "text-purple-500" },
        { name: "Vite", icon: Zap, category: "Frontend", color: "text-yellow-400" },
        { name: "Node.js", icon: Server, category: "Backend", color: "text-green-500" },
        { name: "Express.js", icon: Server, category: "Backend", color: "text-gray-600" },
        { name: "RESTful APIs", icon: Send, category: "Backend", color: "text-indigo-500" }
      ]
    },
    "Database": {
      subtitle: "Data Management",
      skills: [
        { name: "MongoDB", icon: Database, category: "Database", color: "text-green-500" },
        { name: "SQL", icon: Database, category: "Database", color: "text-blue-500" },
        { name: "Database Design", icon: BarChart3, category: "Database", color: "text-purple-500" }
      ]
    },
    "Languages": {
      subtitle: "Programming",
      skills: [
        { name: "JavaScript", icon: Braces, category: "Programming", color: "text-yellow-500" },
        { name: "TypeScript", icon: FileCode2, category: "Programming", color: "text-blue-600" },
        { name: "C++", icon: Cpu, category: "Programming", color: "text-blue-700" },
        { name: "Java", icon: Coffee, category: "Programming", color: "text-orange-600" },
        { name: "Python", icon: FileCode2, category: "Programming", color: "text-green-600" }
      ]
    },
    "Tools": {
      subtitle: "Development Tools",
      skills: [
        { name: "Git", icon: BookOpen, category: "Tools", color: "text-red-500" },
        { name: "GitHub", icon: Github, category: "Tools", color: "text-gray-700" },
        { name: "VS Code", icon: Terminal, category: "Tools", color: "text-blue-600" },
        { name: "Postman", icon: Send, category: "Tools", color: "text-orange-500" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements with Tech Stock Image */}
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
        
        <div className="relative max-w-7xl mx-auto">
          {/* Redesigned Header */}
          <div className="text-center mb-6 fade-in">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-indigo-500/30 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
              <div className="relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-indigo-500/10 rounded-2xl border border-cyan-500/20 shadow-2xl backdrop-blur-sm">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold animate-spin-slow">⚙️</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-left">
                  <span className="block text-primary font-bold text-lg tracking-wide">Technical Arsenal</span>
                  <span className="block text-muted-foreground text-sm">Crafting with cutting-edge technologies</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-4 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
                  <div className="w-5 h-1 bg-indigo-400 rounded-full animate-pulse animation-delay-600"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl rounded-lg"></span>
                  <span className="relative bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                    Skills
                  </span>
                </span>
                <span className="mx-4 text-muted-foreground/30 font-light">&</span>
                <span className="gradient-text relative inline-block font-extrabold">
                  Stack
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-300"></div>
                  </div>
                </span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Mastering <span className="text-cyan-500 font-semibold">modern frameworks</span> and <span className="text-blue-500 font-semibold">cutting-edge tools</span>
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></span>
                    <span>to build scalable and interactive digital experiences</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {skillCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveTab(category)}
                variant={activeTab === category ? "default" : "outline"}
                className={`${activeTab === category ? "btn-hero" : "btn-outline-hero"} hover:scale-105 transition-all duration-300 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {skillsData[activeTab]?.skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="portfolio-card text-center slide-up group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${skill.color} group-hover:shadow-lg`}>
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">{skill.name}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">{skill.category}</p>
                  </div>

                  {/* Enhanced background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* Enhanced hover effect bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-primary-glow rounded-full animate-ping animation-delay-300"></div>
                    <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-primary rounded-full animate-ping animation-delay-600"></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
