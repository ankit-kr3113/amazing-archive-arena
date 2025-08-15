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
  ArrowRight,
  Eye,
  MessageSquare,
  ChevronRight,
  Activity,
  GitCommit,
  BookOpen,
  Target,
  Zap,
  CircleDot,
  TrendingUp,
  Clock
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Typewriter effect hook
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

const Overview = () => {
  const [visitorCount, setVisitorCount] = useState(12860);

  // Typewriter effect for hero
  const typewriterText = useTypewriter("Full Stack Developer & Problem Solver", 80);

  // Real-time visitor count
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Main stats - consolidated from previous duplicates
  const mainStats = [
    { 
      icon: Code2, 
      title: "15+ Projects", 
      subtitle: "Full Stack Development", 
      progress: 85, 
      trend: "+3 this month", 
      isLive: true,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    { 
      icon: Trophy, 
      title: "500+ Problems", 
      subtitle: "LeetCode & DSA", 
      progress: 90, 
      trend: "+50 this week", 
      isLive: true,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    { 
      icon: GraduationCap, 
      title: "B.Tech CS", 
      subtitle: "NIT Patna • 2025", 
      progress: 75, 
      trend: "+5%", 
      isLive: false,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    { 
      icon: Briefcase, 
      title: "2+ Years", 
      subtitle: "Development Experience", 
      progress: 80, 
      trend: "Growing", 
      isLive: false,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  // Quick actions - consolidated
  const quickActions = [
    { icon: Mail, label: "Send Email", href: "mailto:yuvraj.mehta532@gmail.com", type: "external" },
    { icon: Download, label: "Download Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", type: "download" },
    { icon: MessageSquare, label: "Schedule Call", href: "/contact", type: "internal" },
    { icon: Github, label: "View GitHub", href: "https://github.com/yuvraj-mehta", type: "external" }
  ];

  // Core technologies with projects count
  const coreSkills = [
    { name: "React", level: 90, icon: "⚛️", projects: 12 },
    { name: "Node.js", level: 85, icon: "🟢", projects: 8 },
    { name: "TypeScript", level: 80, icon: "📘", projects: 10 },
    { name: "MongoDB", level: 75, icon: "🍃", projects: 6 },
    { name: "Next.js", level: 85, icon: "▲", projects: 7 },
    { name: "Express", level: 80, icon: "🚀", projects: 8 }
  ];

  // Recent activities - key highlights only
  const recentActivities = [
    {
      icon: GitCommit,
      title: "Portfolio Enhancement",
      description: "Updated portfolio with modern design and better UX",
      time: "2 days ago",
      type: "project",
      isLive: true,
      badge: "Live"
    },
    {
      icon: Trophy,
      title: "LeetCode Milestone",
      description: "Solved 50+ problems this month, reached 500+ total",
      time: "1 week ago",
      type: "achievement",
      isLive: false,
      badge: "Achievement"
    },
    {
      icon: BookOpen,
      title: "Learning System Design",
      description: "Deep dive into scalable architecture patterns",
      time: "3 days ago",
      type: "learning",
      isLive: false,
      badge: "Learning"
    }
  ];

  // Featured projects - top 3 only
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      isLive: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration tool with drag-and-drop",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      category: "Web App",
      isLive: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Responsive weather app with location-based forecasts",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["React", "API Integration", "Chart.js"],
      category: "Frontend",
      isLive: true,
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const currentStatus = {
    availability: "Open for Opportunities",
    currentFocus: "Building Full-Stack Projects with Next.js",
    learning: "Advanced React Patterns & System Design",
    lookingFor: "Internships & Full-time Opportunities",
    location: "Patna, Bihar (Open to Remote)",
    lastUpdated: "Updated 2 days ago"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Yuvraj Mehta - Full Stack Developer | Portfolio Overview</title>
      <meta name="description" content="Full Stack Developer & B.Tech CS Student at NIT Patna. Specialized in React, Node.js, and modern web technologies. 500+ LeetCode problems solved." />

      <Navigation />
      <ThemeSwitcher />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.08] via-primary-glow/[0.04] to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span>Portfolio Overview</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up animation-delay-200 leading-tight">
                <span className="text-muted-foreground text-xl md:text-2xl font-medium block mb-4">
                  👋 Hey there, I'm
                </span>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient">
                  Yuvraj Mehta
                </span>
              </h1>

              <div className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8 h-12 animate-fade-in-up animation-delay-400">
                <span className="border-r-2 border-primary animate-pulse">
                  {typewriterText}
                </span>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
                A passionate <span className="text-primary font-semibold">Computer Science student</span> at{" "}
                <span className="text-primary-glow font-semibold">NIT Patna</span>, crafting digital experiences
                through innovative <span className="text-foreground font-semibold">full-stack solutions</span>.
              </p>

              {/* Inline Stats */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-6 animate-fade-in-up animation-delay-700">
                {mainStats.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <div className="text-left">
                      <div className="text-sm font-bold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.subtitle.split(' • ')[0]}</div>
                    </div>
                    {item.isLive && (
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full ml-1"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-800">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Available</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Remote</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm">
                  <Star className="w-3 h-3 text-purple-500 fill-current" />
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Top 27.7%</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 animate-fade-in-up animation-delay-1000">
                <Button
                  className="px-6 py-3 font-semibold bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Let's Connect
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="px-6 py-3 font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="/Yuvraj_Resume_v2_1 (1).pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>



          {/* Current Status Banner */}
          <Card className="p-6 mb-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CircleDot className="w-6 h-6 text-green-500 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{currentStatus.availability}</h3>
                  <p className="text-muted-foreground">{currentStatus.currentFocus}</p>
                  <p className="text-sm text-primary font-medium mt-1">{currentStatus.learning}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-primary mb-1">{currentStatus.lookingFor}</p>
                <p className="text-sm text-muted-foreground">{currentStatus.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{currentStatus.lastUpdated}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Skills & About */}
            <div className="lg:col-span-1 space-y-6">
              {/* Core Skills */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Core Technologies</h3>
                </div>
                <div className="space-y-3">
                  {coreSkills.map((skill, index) => (
                    <div key={index} className="">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.projects} projects
                          </Badge>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-primary to-primary-glow h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full mt-4">
                  <Link to="/skills">View All Skills</Link>
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 via-primary-glow/3 to-transparent">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-3 flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 group border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                      asChild
                    >
                      {action.type === 'external' ? (
                        <a href={action.href} target="_blank" rel="noopener noreferrer">
                          <action.icon className="w-4 h-4 group-hover:animate-bounce text-primary" />
                          <span className="text-xs font-medium text-center">{action.label}</span>
                        </a>
                      ) : action.type === 'download' ? (
                        <a href={action.href} download>
                          <action.icon className="w-4 h-4 group-hover:animate-bounce text-primary" />
                          <span className="text-xs font-medium text-center">{action.label}</span>
                        </a>
                      ) : (
                        <Link to={action.href}>
                          <action.icon className="w-4 h-4 group-hover:animate-bounce text-primary" />
                          <span className="text-xs font-medium text-center">{action.label}</span>
                        </Link>
                      )}
                    </Button>
                  ))}
                </div>
              </Card>

              {/* About & Current Focus */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">About & Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Final year B.Tech Computer Science student at NIT Patna with 2+ years of development experience.
                  Specialized in full-stack web development with focus on React, Node.js, and modern JavaScript frameworks.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>Patna, Bihar (Open to Remote)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Graduating 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Zap className="w-3 h-3" />
                    <span>Learning: {currentStatus.learning}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link to="/about">Full Profile</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link to="/contact">Connect</Link>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Projects & Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Activity */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Activity className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Live Updates
                  </Badge>
                </div>

                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activity.type === 'project' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' :
                        activity.type === 'achievement' ? 'bg-yellow-500/10 group-hover:bg-yellow-500/20' :
                        'bg-green-500/10 group-hover:bg-green-500/20'
                      }`}>
                        <activity.icon className={`w-4 h-4 ${
                          activity.type === 'project' ? 'text-blue-500' :
                          activity.type === 'achievement' ? 'text-yellow-500' :
                          'text-green-500'
                        }`} />
                        {activity.isLive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-sm">{activity.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">{activity.badge}</Badge>
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-6">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/experience">
                      <Clock className="w-3 h-3 mr-2" />
                      Experience
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a href="https://github.com/yuvraj-mehta" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Featured Projects */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Rocket className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Featured Projects</h3>
                  </div>
                  <Button variant="outline" asChild className="group">
                    <Link to="/projects">
                      View All
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Horizontal scrolling projects */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {featuredProjects.map((project, index) => (
                    <div key={index} className="group flex-shrink-0 w-80 overflow-hidden rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        {project.isLive && (
                          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                            Live
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <Button size="sm" className="text-xs flex-1" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="w-3 h-3 mr-1" />
                                Live
                              </a>
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs flex-1 bg-white/90 text-black hover:bg-white" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{project.title}</h4>
                          <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 4).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Links */}
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
