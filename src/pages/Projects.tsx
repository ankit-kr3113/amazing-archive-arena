import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Projects = () => {
  const [filter, setFilter] = useState("All Projects");

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
          {/* Enhanced Header */}
          <div className="text-center mb-8 fade-in">
            <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="animate-bounce mr-2">🚀</span>
              <span>Project Showcase</span>
              <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
              Recent <span className="gradient-text relative inline-block">
                Projects
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30 animate-pulse"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Explore my latest projects showcasing my skills in full stack development,
              problem solving, and modern web technologies.
            </p>
          </div>

          {/* Enhanced Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                onClick={() => setFilter(filterName)}
                variant={filter === filterName ? "default" : "outline"}
                className={`${filter === filterName ? "btn-hero" : "btn-outline-hero"} hover:scale-105 transition-all duration-300 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2`}
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
                  <Card key={index} className="portfolio-card group slide-up hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg text-xs hover:scale-105 transition-transform duration-200">
                        <span className="animate-pulse mr-1">⭐</span>
                        <span>Featured</span>
                      </Badge>
                      {project.status === "Live" && (
                        <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg text-xs hover:scale-105 transition-transform duration-200">
                          <span className="animate-pulse mr-1">🟢</span>
                          <span>Live</span>
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-[10px] sm:text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge variant="outline" className="text-[10px] sm:text-xs">
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 sm:gap-3 pt-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="btn-hero w-full hover:scale-105 transition-all duration-300">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            <span className="text-xs sm:text-sm">Code</span>
                          </Button>
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" variant="outline" className="btn-outline-hero w-full hover:scale-105 transition-all duration-300">
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              <span className="text-xs sm:text-sm">Demo</span>
                            </Button>
                          </a>
                        )}
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
                <Card key={index} className="portfolio-card group slide-up hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    {project.featured && (
                      <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                        ⭐ Featured
                      </Badge>
                    )}
                    <Badge className={`absolute top-3 right-3 z-10 ${
                      project.status === "Live" ? "bg-green-500" :
                      project.status === "In Progress" ? "bg-yellow-500" :
                      "bg-blue-500"
                    } text-white`}>
                      {project.status === "Live" && "🟢"}
                      {project.status === "In Progress" && "🟡"}
                      {project.status === "Completed" && "🔵"}
                      {" "}{project.status}
                    </Badge>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="btn-hero flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="btn-outline-hero flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </a>
                      )}
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
