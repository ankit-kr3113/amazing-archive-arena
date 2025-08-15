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
  Smartphone,
  Clock,
  TrendingUp,
  Zap,
  GitCommit,
  BookOpen,
  Award,
  Target,
  Activity,
  CheckCircle,
  CircleDot,
  Eye,
  Users,
  ArrowRight,
  Play,
  Pause,
  Phone,
  MessageSquare,
  FileText,
  BarChart3,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

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
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Typewriter effect for hero
  const typewriterText = useTypewriter("Full Stack Developer & Problem Solver", 80);

  // Enhanced stats with real-time feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { name: "React", color: "bg-blue-500", icon: "⚛️", level: 90 },
    { name: "Node.js", color: "bg-green-500", icon: "🟢", level: 85 },
    { name: "TypeScript", color: "bg-blue-600", icon: "📘", level: 80 },
    { name: "MongoDB", color: "bg-green-600", icon: "🍃", level: 75 },
    { name: "Express", color: "bg-gray-600", icon: "🚀", level: 80 },
    { name: "Next.js", color: "bg-black", icon: "▲", level: 85 }
  ];

  const highlights = [
    { icon: GraduationCap, title: "B.Tech CS", subtitle: "NIT Patna", year: "2025", progress: 75, trend: "+5%", isLive: false },
    { icon: Code2, title: "15+ Projects", subtitle: "Full Stack", year: "2+ Years", progress: 85, trend: "+3 this month", isLive: true },
    { icon: Trophy, title: "DSA Expert", subtitle: "500+ Problems", year: "LeetCode", progress: 90, trend: "+50 this week", isLive: true },
    { icon: Briefcase, title: "Experience", subtitle: "Internships & Projects", year: "Active", progress: 80, trend: "Growing", isLive: false }
  ];

  // Quick actions data
  const quickActions = [
    { icon: Mail, label: "Send Email", href: "mailto:yuvraj.mehta532@gmail.com", type: "external" },
    { icon: Download, label: "Download Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", type: "download" },
    { icon: MessageSquare, label: "Schedule Call", href: "/contact", type: "internal" },
    { icon: Github, label: "View GitHub", href: "https://github.com/yuvraj-mehta", type: "external" }
  ];

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
      icon: Rocket,
      title: "Project Deployment",
      description: "Deployed E-commerce platform with CI/CD pipeline",
      time: "3 days ago",
      type: "deployment",
      isLive: true,
      badge: "Deployed"
    },
    {
      icon: BookOpen,
      title: "Learning Next.js 14",
      description: "Completed advanced Next.js course with App Router",
      time: "2 weeks ago",
      type: "learning",
      isLive: false,
      badge: "Completed"
    }
  ];

  // Portfolio preview data
  const portfolioPreview = [
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

  const skillLevels = [
    { name: "React", level: 90, icon: "⚛️", category: "Frontend" },
    { name: "Node.js", level: 85, icon: "🟢", category: "Backend" },
    { name: "TypeScript", level: 80, icon: "📘", category: "Language" },
    { name: "MongoDB", level: 75, icon: "🍃", category: "Database" },
    { name: "Next.js", level: 85, icon: "▲", category: "Framework" },
    { name: "Express", level: 80, icon: "🚀", category: "Backend" }
  ];

  const currentStatus = {
    availability: "Open for Opportunities",
    currentFocus: "Building Full-Stack Projects with Next.js",
    learning: "Advanced React Patterns & System Design",
    lookingFor: "Internships & Full-time Opportunities",
    location: "Patna, Bihar (Open to Remote)",
    lastUpdated: "Updated 2 days ago"
  };

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

          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 hover:scale-105">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="font-semibold text-sm text-foreground">{item.title}</div>
                <div className="text-xs text-muted-foreground mb-2">{item.subtitle}</div>
                <div className="text-xs text-primary font-medium mb-2">{item.year}</div>
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-1.5 mb-1">
                  <div
                    className="bg-gradient-to-r from-primary to-primary-glow h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-green-500 font-medium flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {item.trend}
                </div>
              </Card>
            ))}
          </div>

          {/* Current Status Banner */}
          <Card className="p-6 mb-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CircleDot className="w-5 h-5 text-green-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{currentStatus.availability}</h3>
                  <p className="text-sm text-muted-foreground">{currentStatus.currentFocus}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-primary">{currentStatus.lookingFor}</p>
                <p className="text-xs text-muted-foreground">{currentStatus.lastUpdated}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - About & Skills */}
            <div className="lg:col-span-1 space-y-6">

              {/* Current Status */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Current Focus</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Learning:</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">{currentStatus.learning}</p>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Location:</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">{currentStatus.location}</p>
                </div>
                <Button asChild size="sm" className="w-full mt-4">
                  <Link to="/contact">Let's Connect</Link>
                </Button>
              </Card>

              {/* Quick Skills Visualization */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Skills Overview</h3>
                </div>
                <div className="space-y-3">
                  {skillLevels.map((skill, index) => (
                    <div key={index} className="">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
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

              {/* Recent Activity Timeline */}
              <Card className="p-6 border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Last 30 days
                  </Badge>
                </div>

                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'project' ? 'bg-blue-500/10' :
                        activity.type === 'achievement' ? 'bg-yellow-500/10' :
                        activity.type === 'learning' ? 'bg-green-500/10' :
                        'bg-purple-500/10'
                      }`}>
                        <activity.icon className={`w-4 h-4 ${
                          activity.type === 'project' ? 'text-blue-500' :
                          activity.type === 'achievement' ? 'text-yellow-500' :
                          activity.type === 'learning' ? 'text-green-500' :
                          'text-purple-500'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-sm">{activity.title}</h4>
                          <span className="text-xs text-muted-foreground">{activity.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" size="sm" className="w-full mt-4">
                  <Link to="/experience">View Full Timeline</Link>
                </Button>
              </Card>
              
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
