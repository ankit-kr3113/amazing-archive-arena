import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink,
  Code2,
  Rocket,
  GraduationCap,
  Trophy,
  Star,
  MapPin,
  Calendar,
  Briefcase,
  Terminal,
  Database,
  Globe,
  Smartphone
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Link } from "react-router-dom";

const Overview = () => {
  const techStack = [
    { name: "React", color: "bg-blue-500", icon: "⚛️" },
    { name: "Node.js", color: "bg-green-500", icon: "🟢" },
    { name: "TypeScript", color: "bg-blue-600", icon: "📘" },
    { name: "MongoDB", color: "bg-green-600", icon: "🍃" },
    { name: "Express", color: "bg-gray-600", icon: "🚀" },
    { name: "Next.js", color: "bg-black", icon: "▲" }
  ];

  const highlights = [
    { icon: GraduationCap, title: "B.Tech CS", subtitle: "NIT Patna", year: "2025" },
    { icon: Code2, title: "15+ Projects", subtitle: "Full Stack", year: "2+ Years" },
    { icon: Trophy, title: "DSA Expert", subtitle: "500+ Problems", year: "LeetCode" },
    { icon: Briefcase, title: "Experience", subtitle: "Internships & Projects", year: "Active" }
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration tool with drag-and-drop",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "Web App"
    },
    {
      title: "Weather Dashboard",
      description: "Responsive weather app with location-based forecasts",
      tech: ["React", "API Integration", "Chart.js"],
      category: "Frontend"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      {/* Header Section */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Portfolio Overview
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Quick Look at</span>{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Yuvraj Mehta
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full Stack Developer • B.Tech CS Student • NIT Patna • Passionate about creating impactful digital solutions
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="font-semibold text-sm text-foreground">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                <div className="text-xs text-primary font-medium">{item.year}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - About & Skills */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* About Summary */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">About Me</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Final year B.Tech Computer Science student at NIT Patna with 2+ years of development experience. 
                  Specialized in full-stack web development with focus on React, Node.js, and modern JavaScript frameworks.
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>Graduating 2025</span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to="/about">View Full Profile</Link>
                </Button>
              </Card>

              {/* Tech Stack */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <span className="text-sm">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/skills">All Skills & Tools</Link>
                </Button>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Connect</h3>
                </div>
                <div className="flex gap-2 mb-4">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href="https://github.com/yuvraj-mehta" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-3 h-3 mr-1" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </Card>
            </div>

            {/* Right Column - Projects & Experience */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Featured Projects */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Rocket className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Featured Projects</h3>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/projects">
                      View All <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
                
                <div className="grid gap-4">
                  {featuredProjects.map((project, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{project.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Experience & Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Education */}
                <Card className="p-6 border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm">B.Tech Computer Science</div>
                      <div className="text-sm text-primary">NIT Patna</div>
                      <div className="text-xs text-muted-foreground">2021 - 2025</div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Class 12th</div>
                      <div className="text-sm text-muted-foreground">Science Stream</div>
                      <div className="text-xs text-muted-foreground">2021</div>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-4">
                    <Link to="/education">Full Academic Details</Link>
                  </Button>
                </Card>

                {/* Coding Achievements */}
                <Card className="p-6 border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Trophy className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Coding</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">LeetCode</span>
                      <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                        500+ Solved
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">GeeksforGeeks</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CodeChef</span>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        Contests
                      </Badge>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-4">
                    <Link to="/coding">View Profiles & Stats</Link>
                  </Button>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Ready to Collaborate?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's discuss your next project or explore opportunities together
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <a href="/Yuvraj_Resume_v2_1 (1).pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="mailto:yuvrajmehta2003@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;
