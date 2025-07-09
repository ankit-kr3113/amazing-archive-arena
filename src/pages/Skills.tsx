
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              🛠️ Technical Skills
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="gradient-text">Tech Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData[activeTab]?.skills.map((skill, index) => (
              <Card key={index} className="portfolio-card text-center slide-up">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-sm">{skill.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
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
