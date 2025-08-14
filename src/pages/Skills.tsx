import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  const skillCategories = [
    { name: "Web Development", icon: "🌐" },
    { name: "Database", icon: "🗄️" },
    { name: "Languages", icon: "💻" },
    { name: "Tools", icon: "⚡" }
  ];

  const skillsData = {
    "Web Development": [
      {
        name: "React",
        level: "Frontend",
        icon: "⚛️",
        color: "text-blue-400"
      },
      {
        name: "Node.js",
        level: "Backend",
        icon: "🟢",
        color: "text-green-400"
      },
      {
        name: "JavaScript",
        level: "Frontend",
        icon: "🟨",
        color: "text-yellow-400"
      },
      {
        name: "TypeScript",
        level: "Frontend",
        icon: "🔷",
        color: "text-blue-500"
      },
      {
        name: "HTML5",
        level: "Frontend",
        icon: "🌐",
        color: "text-orange-400"
      },
      {
        name: "CSS3",
        level: "Frontend",
        icon: "🎨",
        color: "text-blue-400"
      },
      {
        name: "RESTful APIs",
        level: "Backend",
        icon: "🔌",
        color: "text-cyan-400"
      },
      {
        name: "Tailwind CSS",
        level: "Frontend",
        icon: "💨",
        color: "text-cyan-400"
      },
      {
        name: "Next.js",
        level: "Frontend",
        icon: "▲",
        color: "text-gray-300"
      },
      {
        name: "Redux",
        level: "Frontend",
        icon: "🔄",
        color: "text-purple-400"
      },
      {
        name: "Vue",
        level: "Frontend",
        icon: "💚",
        color: "text-green-400"
      }
    ],
    "Database": [
      {
        name: "MongoDB",
        level: "Database",
        icon: "🍃",
        color: "text-green-400"
      },
      {
        name: "SQL",
        level: "Database",
        icon: "🗃️",
        color: "text-blue-400"
      },
      {
        name: "Database Design",
        level: "Database",
        icon: "🏗️",
        color: "text-purple-400"
      }
    ],
    "Languages": [
      {
        name: "JavaScript",
        level: "Languages",
        icon: "🟨",
        color: "text-yellow-400"
      },
      {
        name: "TypeScript",
        level: "Languages",
        icon: "🔷",
        color: "text-blue-500"
      },
      {
        name: "C++",
        level: "Languages",
        icon: "🔵",
        color: "text-blue-400"
      },
      {
        name: "Java",
        level: "Languages",
        icon: "☕",
        color: "text-orange-400"
      },
      {
        name: "Python",
        level: "Languages",
        icon: "🐍",
        color: "text-yellow-400"
      }
    ],
    "Tools": [
      {
        name: "Git & GitHub",
        level: "Tools",
        icon: "📂",
        color: "text-orange-400"
      },
      {
        name: "VS Code",
        level: "Tools",
        icon: "💻",
        color: "text-blue-400"
      },
      {
        name: "Webpack",
        level: "Tools",
        icon: "📦",
        color: "text-blue-400"
      },
      {
        name: "Docker",
        level: "Tools",
        icon: "🐳",
        color: "text-blue-400"
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Frontend": return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
      case "Backend": return "bg-green-500/20 text-green-300 border border-green-500/30";
      case "Database": return "bg-purple-500/20 text-purple-300 border border-purple-500/30";
      case "Languages": return "bg-orange-500/20 text-orange-300 border border-orange-500/30";
      case "Tools": return "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
      default: return "bg-gray-500/20 text-gray-300 border border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Tech Stack</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The modern technologies and tools I use to build interactive and scalable web applications
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <Button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                variant={activeCategory === category.name ? "default" : "outline"}
                className={`
                  px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeCategory === category.name 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skillsData[activeCategory]?.map((skill, index) => (
              <Card 
                key={`${activeCategory}-${index}`}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-6 text-center">
                  {/* Skill Icon */}
                  <div className={`text-2xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Skill Level Badge */}
                  <Badge className={`
                    ${getLevelColor(skill.level)} 
                    text-xs font-medium px-3 py-1 rounded-md
                    transition-all duration-300 group-hover:scale-105
                  `}>
                    {skill.level}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Project Showcase Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span>🚀</span>
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore my latest projects showcasing my skills in full stack development, 
              modern frameworks, and innovative AI technologies.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
