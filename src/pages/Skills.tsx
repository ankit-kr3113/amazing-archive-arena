import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
        { name: "React", icon: "⚛️", category: "Frontend" },
        { name: "TypeScript", icon: "🟦", category: "Frontend" },
        { name: "JavaScript", icon: "🟨", category: "Frontend" },
        { name: "HTML5", icon: "🧡", category: "Frontend" },
        { name: "CSS3", icon: "🔵", category: "Frontend" },
        { name: "Tailwind CSS", icon: "🌊", category: "Frontend" },
        { name: "Next.js", icon: "⚫", category: "Frontend" },
        { name: "Redux", icon: "🟣", category: "Frontend" },
        { name: "Vite", icon: "⚡", category: "Frontend" },
        { name: "Node.js", icon: "🟢", category: "Backend" },
        { name: "Express.js", icon: "🖤", category: "Backend" },
        { name: "RESTful APIs", icon: "📡", category: "Backend" }
      ]
    },
    "Database": {
      subtitle: "Data Management",
      skills: [
        { name: "MongoDB", icon: "🟢", category: "Database" },
        { name: "SQL", icon: "💾", category: "Database" },
        { name: "Database Design", icon: "🏗️", category: "Database" }
      ]
    },
    "Languages": {
      subtitle: "Programming",
      skills: [
        { name: "JavaScript", icon: "🟨", category: "Programming" },
        { name: "TypeScript", icon: "🟦", category: "Programming" },
        { name: "C++", icon: "⚙️", category: "Programming" },
        { name: "Java", icon: "☕", category: "Programming" },
        { name: "Python", icon: "🐍", category: "Programming" }
      ]
    },
    "Tools": {
      subtitle: "Development Tools",
      skills: [
        { name: "Git", icon: "📚", category: "Tools" },
        { name: "GitHub", icon: "🐙", category: "Tools" },
        { name: "VS Code", icon: "💙", category: "Tools" },
        { name: "Postman", icon: "🧡", category: "Tools" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/8"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse opacity-40 animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in">
            <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="animate-bounce mr-2">🛠️</span>
              <span>Technical Skills</span>
              <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight">
              My <span className="gradient-text relative inline-block">
                Tech Stack
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30 animate-pulse"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              The modern technologies and tools I use to build interactive and scalable web applications
            </p>
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {skillsData[activeTab]?.skills.map((skill, index) => (
              <Card key={index} className="portfolio-card text-center slide-up group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">{skill.icon}</div>
                <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight">{skill.name}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">{skill.category}</p>

                {/* Enhanced hover effect bar */}
                <div className="mt-2 sm:mt-3 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-primary-glow rounded-full animate-ping animation-delay-300"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
