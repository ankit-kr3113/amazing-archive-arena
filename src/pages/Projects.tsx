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
      description: "Full-stack library management system with user/admin roles, book management, and borrowing features.",
      image: "/placeholder.svg",
      category: "Full Stack",
      featured: true,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demo: "https://example.com",
      github: "https://github.com",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Responsive developer portfolio with smooth animations, dynamic navigation, and modern design.",
      image: "/placeholder.svg",
      category: "Frontend",
      featured: true,
      tags: ["React", "TypeScript", "Tailwind", "Vite"],
      demo: "https://example.com",
      github: "https://github.com",
      status: "Live"
    },
    {
      title: "EcoGuardian",
      description: "Environmental community platform for project collaboration, issue reporting, and environmental protection.",
      image: "/placeholder.svg",
      category: "Full Stack",
      featured: true,
      tags: ["HTML5", "CSS3", "JavaScript", "Express"],
      demo: "https://example.com",
      github: "https://github.com",
      status: "Completed"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      image: "/placeholder.svg",
      category: "AI & ML",
      featured: false,
      tags: ["Python", "TensorFlow", "NLP", "React"],
      demo: "https://example.com",
      github: "https://github.com",
      status: "In Progress"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard for e-commerce management with analytics and real-time data.",
      image: "/placeholder.svg",
      category: "Frontend",
      featured: false,
      tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
      demo: "https://example.com",
      github: "https://github.com",
      status: "Completed"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with authentication, CRUD operations, and real-time updates.",
      image: "/placeholder.svg",
      category: "Full Stack",
      featured: false,
      tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
      demo: "",
      github: "https://github.com",
      status: "Completed"
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
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              🚀 Project Showcase
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Recent <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest projects showcasing my skills in full stack development,
              algorithm implementation, and generative AI applications.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                onClick={() => setFilter(filterName)}
                variant={filter === filterName ? "default" : "outline"}
                className={filter === filterName ? "btn-hero" : "btn-outline-hero"}
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                  <Card key={index} className="portfolio-card group slide-up">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                        ⭐ Featured
                      </Badge>
                      {project.status === "Live" && (
                        <Badge className="absolute top-3 right-3 z-10 bg-green-500 text-white">
                          🟢 Live
                        </Badge>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                        <Button size="sm" className="btn-hero flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button size="sm" variant="outline" className="btn-outline-hero flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(filter === "All Projects" ? projects : filteredProjects).map((project, index) => (
                <Card key={index} className="portfolio-card group slide-up">
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
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      <Button size="sm" className="btn-hero flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button size="sm" variant="outline" className="btn-outline-hero flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* View More Projects */}
          <div className="text-center mt-16">
            <Button className="btn-hero">
              <Github className="w-5 h-5 mr-2" />
              View More Projects on GitHub
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;