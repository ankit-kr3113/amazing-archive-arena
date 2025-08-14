import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web Development");

  const skillCategories = ["Web Development", "Database", "Languages", "Tools"];

  const skillsData = {
    "Web Development": [
      {
        name: "React",
        level: "Frontend",
        icon: "⚛️",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30",
      },
      {
        name: "Node.js",
        level: "Backend",
        icon: "🟢",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/30",
      },
      {
        name: "JavaScript",
        level: "Frontend",
        icon: "🟨",
        color: "from-yellow-500/20 to-orange-500/20",
        borderColor: "border-yellow-500/30",
      },
      {
        name: "TypeScript",
        level: "Frontend",
        icon: "🔷",
        color: "from-blue-600/20 to-indigo-500/20",
        borderColor: "border-blue-600/30",
      },
      {
        name: "Express.js",
        level: "Backend",
        icon: "🚀",
        color: "from-gray-600/20 to-slate-500/20",
        borderColor: "border-gray-600/30",
      },
      {
        name: "HTML5",
        level: "Frontend",
        icon: "🌐",
        color: "from-orange-500/20 to-red-500/20",
        borderColor: "border-orange-500/30",
      },
      {
        name: "CSS3",
        level: "Frontend",
        icon: "🎨",
        color: "from-blue-500/20 to-purple-500/20",
        borderColor: "border-blue-500/30",
      },
      {
        name: "Tailwind CSS",
        level: "Frontend",
        icon: "💨",
        color: "from-cyan-500/20 to-teal-500/20",
        borderColor: "border-cyan-500/30",
      },
      {
        name: "Next.js",
        level: "Frontend",
        icon: "▲",
        color: "from-gray-800/20 to-black/20",
        borderColor: "border-gray-800/30",
      },
      {
        name: "Redux",
        level: "Frontend",
        icon: "🔄",
        color: "from-purple-500/20 to-violet-500/20",
        borderColor: "border-purple-500/30",
      },
      {
        name: "Vue",
        level: "Frontend",
        icon: "💚",
        color: "from-green-400/20 to-emerald-400/20",
        borderColor: "border-green-400/30",
      }
    ],
    "Database": [
      {
        name: "MongoDB",
        level: "Database",
        icon: "🍃",
        color: "from-green-600/20 to-green-500/20",
        borderColor: "border-green-600/30",
      },
      {
        name: "SQL",
        level: "Database",
        icon: "🗃️",
        color: "from-blue-600/20 to-indigo-600/20",
        borderColor: "border-blue-600/30",
      },
      {
        name: "Database Design",
        level: "Database",
        icon: "🏗️",
        color: "from-purple-600/20 to-pink-600/20",
        borderColor: "border-purple-600/30",
      }
    ],
    "Languages": [
      {
        name: "JavaScript",
        level: "Languages",
        icon: "🟨",
        color: "from-yellow-500/20 to-orange-500/20",
        borderColor: "border-yellow-500/30",
      },
      {
        name: "TypeScript",
        level: "Languages",
        icon: "🔷",
        color: "from-blue-600/20 to-indigo-500/20",
        borderColor: "border-blue-600/30",
      },
      {
        name: "C++",
        level: "Languages",
        icon: "🔵",
        color: "from-blue-700/20 to-indigo-700/20",
        borderColor: "border-blue-700/30",
      },
      {
        name: "Java",
        level: "Languages",
        icon: "☕",
        color: "from-orange-600/20 to-red-600/20",
        borderColor: "border-orange-600/30",
      },
      {
        name: "Python",
        level: "Languages",
        icon: "🐍",
        color: "from-green-600/20 to-blue-600/20",
        borderColor: "border-green-600/30",
      }
    ],
    "Tools": [
      {
        name: "Git & GitHub",
        level: "Tools",
        icon: "📂",
        color: "from-orange-500/20 to-red-500/20",
        borderColor: "border-orange-500/30",
      },
      {
        name: "VS Code",
        level: "Tools",
        icon: "💻",
        color: "from-blue-600/20 to-cyan-600/20",
        borderColor: "border-blue-600/30",
      },
      {
        name: "RESTful APIs",
        level: "Tools",
        icon: "🔌",
        color: "from-indigo-500/20 to-purple-500/20",
        borderColor: "border-indigo-500/30",
      },
      {
        name: "Postman",
        level: "Tools",
        icon: "📮",
        color: "from-orange-600/20 to-red-600/20",
        borderColor: "border-orange-600/30",
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Frontend": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Backend": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Database": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Languages": return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      case "Tools": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Web Development": return "🌐";
      case "Database": return "🗄️";
      case "Languages": return "💻";
      case "Tools": return "⚡";
      default: return "🔧";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Tech Stack</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The modern technologies and tools I use to build interactive and scalable web applications
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                size="lg"
                className={`
                  px-6 py-3 rounded-full transition-all duration-300 hover:scale-105
                  ${activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  }
                `}
              >
                <span className="mr-2">{getCategoryIcon(category)}</span>
                {category}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData[activeCategory]?.map((skill, index) => (
              <Card 
                key={`${activeCategory}-${index}`} 
                className={`
                  group relative overflow-hidden transition-all duration-300 
                  hover:scale-105 hover:-translate-y-2 cursor-pointer
                  bg-gradient-to-br ${skill.color} 
                  border ${skill.borderColor}
                  hover:shadow-xl hover:shadow-primary/10
                  backdrop-blur-sm
                `}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Level Badge */}
                  <Badge className={`
                    ${getLevelColor(skill.level)} 
                    text-xs font-medium px-3 py-1 rounded-full border
                    transition-all duration-300 group-hover:scale-105
                  `}>
                    {skill.level}
                  </Badge>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>

          {/* Project Showcase Teaser */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span>🚀</span>
              <span>Project Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
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
