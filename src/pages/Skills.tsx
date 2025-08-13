
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
      
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
              🛠️ Technical Skills
              <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              My <span className="gradient-text relative">
                Tech Stack
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The modern technologies and tools I use to build interactive and scalable web applications
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveTab(category)}
                variant={activeTab === category ? "default" : "outline"}
                className={activeTab === category ? "btn-hero" : "btn-outline-hero"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData[activeTab]?.skills.map((skill, index) => (
              <Card key={index} className="portfolio-card text-center slide-up group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.category}</p>
                
                {/* Hover effect bar */}
                <div className="mt-3 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
