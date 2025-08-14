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
  Star,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const skillCategories = [
    "All Skills",
    "Frontend",
    "Backend", 
    "Database",
    "Languages",
    "Tools & Platforms"
  ];

  const skillsData = [
    // Frontend Skills
    {
      name: "React",
      category: "Frontend",
      proficiency: 90,
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      years: "2+",
      level: "Advanced",
      featured: true,
      projects: 8
    },
    {
      name: "TypeScript",
      category: "Frontend",
      proficiency: 85,
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
      years: "1.5+",
      level: "Advanced",
      featured: true,
      projects: 5
    },
    {
      name: "JavaScript",
      category: "Frontend",
      proficiency: 95,
      icon: Code2,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      years: "3+",
      level: "Expert",
      featured: true,
      projects: 12
    },
    {
      name: "Next.js",
      category: "Frontend",
      proficiency: 80,
      icon: Globe,
      color: "text-gray-700",
      bgColor: "bg-gray-700/10",
      borderColor: "border-gray-700/20",
      years: "1+",
      level: "Intermediate",
      featured: true,
      projects: 3
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      proficiency: 90,
      icon: Palette,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      years: "2+",
      level: "Advanced",
      featured: true,
      projects: 10
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      proficiency: 95,
      icon: Globe,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      years: "3+",
      level: "Expert",
      featured: false,
      projects: 15
    },
    {
      name: "Redux Toolkit",
      category: "Frontend",
      proficiency: 75,
      icon: Code2,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      years: "1+",
      level: "Intermediate",
      featured: false,
      projects: 4
    },

    // Backend Skills
    {
      name: "Node.js",
      category: "Backend",
      proficiency: 85,
      icon: Server,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      years: "2+",
      level: "Advanced",
      featured: true,
      projects: 7
    },
    {
      name: "Express.js",
      category: "Backend",
      proficiency: 80,
      icon: Server,
      color: "text-gray-600",
      bgColor: "bg-gray-600/10",
      borderColor: "border-gray-600/20",
      years: "2+",
      level: "Advanced",
      featured: true,
      projects: 6
    },
    {
      name: "RESTful APIs",
      category: "Backend",
      proficiency: 90,
      icon: Globe,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      years: "2+",
      level: "Advanced",
      featured: true,
      projects: 8
    },
    {
      name: "JWT Authentication",
      category: "Backend",
      proficiency: 85,
      icon: Server,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
      years: "1.5+",
      level: "Advanced",
      featured: false,
      projects: 5
    },

    // Database Skills
    {
      name: "MongoDB",
      category: "Database",
      proficiency: 85,
      icon: Database,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      borderColor: "border-green-600/20",
      years: "2+",
      level: "Advanced",
      featured: true,
      projects: 6
    },
    {
      name: "SQL",
      category: "Database",
      proficiency: 75,
      icon: Database,
      color: "text-blue-700",
      bgColor: "bg-blue-700/10",
      borderColor: "border-blue-700/20",
      years: "1+",
      level: "Intermediate",
      featured: false,
      projects: 3
    },
    {
      name: "Mongoose ODM",
      category: "Database",
      proficiency: 80,
      icon: Database,
      color: "text-emerald-600",
      bgColor: "bg-emerald-600/10",
      borderColor: "border-emerald-600/20",
      years: "1.5+",
      level: "Advanced",
      featured: false,
      projects: 5
    },

    // Programming Languages
    {
      name: "JavaScript",
      category: "Languages",
      proficiency: 95,
      icon: Code2,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      years: "3+",
      level: "Expert",
      featured: true,
      projects: 12
    },
    {
      name: "TypeScript",
      category: "Languages",
      proficiency: 85,
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
      years: "1.5+",
      level: "Advanced",
      featured: true,
      projects: 5
    },
    {
      name: "C++",
      category: "Languages",
      proficiency: 80,
      icon: Brain,
      color: "text-blue-800",
      bgColor: "bg-blue-800/10",
      borderColor: "border-blue-800/20",
      years: "2+",
      level: "Advanced",
      featured: false,
      projects: 4
    },
    {
      name: "Java",
      category: "Languages",
      proficiency: 75,
      icon: Brain,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      borderColor: "border-orange-600/20",
      years: "1.5+",
      level: "Intermediate",
      featured: false,
      projects: 3
    },
    {
      name: "Python",
      category: "Languages",
      proficiency: 70,
      icon: Brain,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      borderColor: "border-green-700/20",
      years: "1+",
      level: "Intermediate",
      featured: false,
      projects: 2
    },

    // Tools & Platforms
    {
      name: "Git & GitHub",
      category: "Tools & Platforms",
      proficiency: 90,
      icon: Wrench,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      years: "3+",
      level: "Advanced",
      featured: true,
      projects: 15
    },
    {
      name: "VS Code",
      category: "Tools & Platforms",
      proficiency: 95,
      icon: Terminal,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
      years: "3+",
      level: "Expert",
      featured: false,
      projects: 15
    },
    {
      name: "Postman",
      category: "Tools & Platforms",
      proficiency: 85,
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      borderColor: "border-orange-600/20",
      years: "2+",
      level: "Advanced",
      featured: false,
      projects: 8
    },
    {
      name: "Vite",
      category: "Tools & Platforms",
      proficiency: 80,
      icon: Wrench,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20",
      years: "1+",
      level: "Intermediate",
      featured: false,
      projects: 5
    },
    {
      name: "Vercel",
      category: "Tools & Platforms",
      proficiency: 85,
      icon: Globe,
      color: "text-gray-800",
      bgColor: "bg-gray-800/10",
      borderColor: "border-gray-800/20",
      years: "1.5+",
      level: "Advanced",
      featured: false,
      projects: 8
    }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "All Skills") {
      return skillsData;
    }
    return skillsData.filter(skill => skill.category === activeCategory);
  };

  const featuredSkills = skillsData.filter(skill => skill.featured);

  const getProficiencyText = (level) => {
    switch(level) {
      case "Expert": return "text-emerald-600";
      case "Advanced": return "text-blue-600";
      case "Intermediate": return "text-yellow-600";
      default: return "text-gray-600";
    }
  };

  const getProficiencyBg = (level) => {
    switch(level) {
      case "Expert": return "bg-emerald-100";
      case "Advanced": return "bg-blue-100";
      case "Intermediate": return "bg-yellow-100";
      default: return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements */}
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
          {/* Header Section */}
          <div className="text-center mb-8 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-600 text-xs font-medium mb-4">
              <span>⚡</span>
              <span>Technical Skills</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Skills & Technologies
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies and best practices
            </p>
          </div>

          {/* Skills Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <Card className="portfolio-card text-center p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xl font-bold text-foreground">{skillsData.length}</div>
              <div className="text-xs text-muted-foreground">Total Skills</div>
            </Card>
            <Card className="portfolio-card text-center p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="text-xl font-bold text-foreground">{featuredSkills.length}</div>
              <div className="text-xs text-muted-foreground">Core Skills</div>
            </Card>
            <Card className="portfolio-card text-center p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-xl font-bold text-foreground">{skillsData.reduce((acc, skill) => acc + skill.projects, 0)}</div>
              <div className="text-xs text-muted-foreground">Projects Built</div>
            </Card>
            <Card className="portfolio-card text-center p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-xl font-bold text-foreground">3+</div>
              <div className="text-xs text-muted-foreground">Years Coding</div>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {skillCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${activeCategory === category ? "btn-hero" : "btn-outline-hero"} hover:scale-105 transition-all duration-300 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Skills Section */}
          {activeCategory === "All Skills" && (
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mr-4">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Core Technologies</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                {featuredSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card key={index} className={`portfolio-card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden ${skill.borderColor}`}>
                      <div className="relative z-10 p-6">
                        {/* Featured Badge */}
                        <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg text-xs z-20">
                          <Star className="w-3 h-3 mr-1" />
                          Core
                        </Badge>

                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className={`w-16 h-16 rounded-xl ${skill.bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${skill.color} group-hover:shadow-lg relative`}>
                            <Icon className="w-8 h-8 group-hover:animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div>
                            <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                            <Badge className={`${getProficiencyBg(skill.level)} ${getProficiencyText(skill.level)} text-xs border-0`}>
                              {skill.level}
                            </Badge>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="w-full">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>Proficiency</span>
                              <span>{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color.replace('text-', 'bg-')}`}
                                style={{ width: `${skill.proficiency}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Experience & Projects */}
                          <div className="flex justify-between w-full text-xs text-muted-foreground">
                            <div className="text-center">
                              <div className="font-semibold text-foreground">{skill.years}</div>
                              <div>Experience</div>
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-foreground">{skill.projects}</div>
                              <div>Projects</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Background hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Skills Grid */}
          <div>
            {activeCategory !== "All Skills" && (
              <div className="flex items-center justify-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl">
                    {activeCategory === "Frontend" && "🎨"}
                    {activeCategory === "Backend" && "⚙️"}
                    {activeCategory === "Database" && "🗄️"}
                    {activeCategory === "Languages" && "💻"}
                    {activeCategory === "Tools & Platforms" && "🔧"}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">{activeCategory}</h2>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {(activeCategory === "All Skills" ? skillsData : getFilteredSkills()).map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className={`portfolio-card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer relative overflow-hidden ${skill.borderColor}`}>
                    <div className="relative z-10 p-4">
                      {skill.featured && (
                        <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground shadow-sm text-xs z-20">
                          <Star className="w-3 h-3 mr-1" />
                          Core
                        </Badge>
                      )}

                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`w-12 h-12 rounded-lg ${skill.bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${skill.color}`}>
                          <Icon className="w-6 h-6 group-hover:animate-pulse" />
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                          <Badge className={`${getProficiencyBg(skill.level)} ${getProficiencyText(skill.level)} text-xs border-0`}>
                            {skill.level}
                          </Badge>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="w-full">
                          <div className="flex justify-between text-xs text-muted-foreground mb-1">
                            <span>Progress</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${skill.color.replace('text-', 'bg-')}`}
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Experience & Projects */}
                        <div className="flex justify-between w-full text-xs text-muted-foreground">
                          <div className="text-center">
                            <div className="font-medium text-foreground">{skill.years}</div>
                            <div>Exp.</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-foreground">{skill.projects}</div>
                            <div>Projects</div>
                          </div>
                        </div>
                      </div>

                      {/* Background hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary-glow/3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </Card>
                  );
              })}
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="mt-16 text-center">
            <Card className="portfolio-card p-6 sm:p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Continuous Learning</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Always exploring new technologies and improving existing skills. Currently focusing on advanced React patterns, 
                serverless architectures, and modern web performance optimization techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["GraphQL", "Next.js 14", "Docker", "AWS", "Prisma"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors">
                    🚀 {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;