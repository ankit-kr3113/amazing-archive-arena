import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Github, ExternalLink, Star, Code, Zap, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Projects = () => {
  const [filter, setFilter] = useState("All Projects");
  const [animatedCounts, setAnimatedCounts] = useState({
    totalProjects: 0,
    technologies: 0,
    liveProjects: 0
  });

  // Animated counter hook
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    const targetCounts = {
      totalProjects: 15,
      technologies: 8,
      liveProjects: 4
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setAnimatedCounts({
        totalProjects: Math.round(targetCounts.totalProjects * easeProgress),
        technologies: Math.round(targetCounts.technologies * easeProgress),
        liveProjects: Math.round(targetCounts.liveProjects * easeProgress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const filters = ["All Projects", "Featured", "Frontend", "AI & ML", "Full Stack"];

  const projects = [
    {
      title: "BookHive",
      description: "BookNest is a full-stack library management system with distinct user and admin roles. It features book and PYQ management, a borrowing system, OTP-verified authentication, and separate dashboards. Built with React, Node.js, Express.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      category: "Full Stack",
      featured: true,
      tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
      demo: "https://bookhive-manager.vercel.app",
      github: "https://github.com/yuvraj-mehta/Byteverse_NandiNinjas",
      status: "Live"
    },
    {
      title: "Portfolio Website",
      description: "Personal developer portfolio showcasing projects and skills. Designed and built a responsive single-page portfolio with smooth animations and dynamic navigation. Integrated a contact form using EmailJS and added a downloadable resume feature.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      category: "Frontend",
      featured: true,
      tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demo: "https://yuvrajmehta.codes",
      github: "https://github.com/yuvraj-mehta/My-Portfolio",
      status: "Live"
    },
    {
      title: "EcoGuardian",
      description: "An online community platform empowering individuals to collaborate on environmental projects, report cleanliness issues, access educational resources, and drive positive change for a cleaner, greener future. 🌍",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      category: "Full Stack",
      featured: true,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      demo: "https://yuvraj-mehta.github.io/EcoGuardian_prototype/",
      github: "https://github.com/yuvraj-mehta/EcoGuardian_prototype",
      status: "Live"
    },
    {
      title: "Stickify",
      description: "This is a simple notes application built with React and Vite. It allows users to create, update, delete, and manage notes with different colors. The application uses Appwrite as the backend service for managing notes.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      category: "Frontend",
      featured: false,
      tags: ["React", "Vite", "Tailwind CSS", "Appwrite"],
      demo: "https://stickify-git-master-yuvraj-mehtas-projects.vercel.app/",
      github: "https://github.com/yuvraj-mehta/Stickify",
      status: "Live"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "All Projects") return true;
    if (filter === "Featured") return project.featured;
    return project.category === filter;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements with Workspace Stock Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/8"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1920&h=1080&fit=crop&auto=format&q=20"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse opacity-40 animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-600 text-sm font-medium mb-4 shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Code className="w-4 h-4 animate-pulse" />
              <span>Featured Projects</span>
              <div className="ml-1 w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 animate-fade-in-up">
              Creative <span className="gradient-text relative inline-block">
                Solutions
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-60"></div>
              </span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 mb-6">
              Building <span className="text-primary font-semibold">full-stack applications</span> with modern technologies and{" "}
              <span className="text-primary font-semibold">user-centered design</span> principles
            </p>

            {/* Inline Stats Display */}
            <div className="flex items-center justify-center gap-6 text-sm animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                <Code className="w-4 h-4 text-emerald-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  {animatedCounts.totalProjects}+
                </span>
                <span className="text-muted-foreground font-medium">Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/5 rounded-lg border border-blue-500/20">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-muted-foreground font-medium">{animatedCounts.technologies}+ Technologies</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-green-500/5 rounded-lg border border-green-500/20">
                <Globe className="w-4 h-4 text-green-500" />
                <span className="text-muted-foreground font-medium">{animatedCounts.liveProjects} Live Demos</span>
              </div>
            </div>
          </div>

          {/* Enhanced Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                onClick={() => setFilter(filterName)}
                variant={filter === filterName ? "default" : "outline"}
                className={`${
                  filter === filterName
                    ? "bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground shadow-lg"
                    : "border-primary/30 text-muted-foreground hover:border-primary/60 hover:text-primary hover:bg-primary/5"
                } hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm px-4 py-2.5 rounded-full font-medium backdrop-blur-sm`}
              >
                {filterName}
              </Button>
            ))}
          </div>

          {/* Featured Projects Section */}
          {filter === "All Projects" && (
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {featuredProjects.map((project, index) => (
                  <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/80 border-0 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full blur-2xl"></div>
                    </div>

                    {/* Top Bar with Project Branding */}
                    <div className="h-1 w-full bg-gradient-to-r from-emerald-500/30 to-green-500/30"></div>

                    <div className="relative p-6">
                      <div className="relative overflow-hidden rounded-xl mb-6">
                        <Badge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg text-xs hover:scale-105 transition-transform duration-200">
                          <Star className="w-3 h-3 mr-1 animate-pulse" />
                          <span>Featured</span>
                        </Badge>
                        {project.status === "Live" && (
                          <Badge className="absolute top-3 right-3 z-10 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg text-xs hover:scale-105 transition-transform duration-200">
                            <Globe className="w-3 h-3 mr-1 animate-pulse" />
                            <span>Live</span>
                          </Badge>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200 bg-primary/5 border border-primary/20">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 4 && (
                            <Badge variant="outline" className="text-xs border-primary/30">
                              +{project.tags.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-3 pt-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                              <Github className="w-4 h-4 mr-2" />
                              <span>Code</span>
                            </Button>
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button size="sm" variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 hover:scale-105 transition-all duration-300">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                <span>Demo</span>
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div>
            {filter !== "All Projects" && (
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl">
                    {filter === "Featured" && "⭐"}
                    {filter === "Frontend" && "🎨"}
                    {filter === "AI & ML" && "🤖"}
                    {filter === "Full Stack" && "🔗"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold">{filter}</h2>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {(filter === "All Projects" ? projects : filteredProjects).map((project, index) => (
                <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/90 border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-500">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-3">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-full blur-2xl"></div>
                  </div>

                  <div className="relative p-6">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      {project.featured && (
                        <Badge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg text-xs hover:scale-105 transition-transform duration-200">
                          <Star className="w-3 h-3 mr-1" />
                          <span>Featured</span>
                        </Badge>
                      )}
                      <Badge className={`absolute top-3 right-3 z-10 shadow-lg text-xs hover:scale-105 transition-transform duration-200 ${
                        project.status === "Live" ? "bg-gradient-to-r from-green-500 to-green-600" :
                        project.status === "In Progress" ? "bg-gradient-to-r from-yellow-500 to-yellow-600" :
                        "bg-gradient-to-r from-blue-500 to-blue-600"
                      } text-white`}>
                        {project.status === "Live" && <Globe className="w-3 h-3 mr-1" />}
                        {project.status === "In Progress" && "🟡"}
                        {project.status === "Completed" && "🔵"}
                        <span>{project.status}</span>
                      </Badge>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200 bg-primary/5 border border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Badge variant="outline" className="text-xs border-primary/30">
                            +{project.tags.length - 5}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 hover:scale-105 transition-all duration-300">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced View More Projects */}
          <div className="text-center mt-12 sm:mt-16">
            <a href="https://github.com/yuvraj-mehta" target="_blank" rel="noopener noreferrer">
              <Button className="btn-hero hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" />
                <span className="text-sm sm:text-base">View More Projects on GitHub</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
