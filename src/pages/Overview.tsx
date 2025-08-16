import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  Zap,
  Target,
  Activity,
  CircleDot,
  Eye,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaBriefcase,
  FaTerminal,
  FaGlobe,
  FaMobile,
  FaPlay,
  FaPause,
  FaPhone,
  FaAward,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaRocket,
  FaCode,
  FaBook,
  FaEnvelope
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiGit,
  SiPostgresql
} from "react-icons/si";
import {
  HiSparkles,
  HiChatBubbleLeftRight
} from "react-icons/hi2";
import {
  BiGitCommit
} from "react-icons/bi";
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
    { name: "React", color: "bg-blue-500", icon: FaReact, level: 90 },
    { name: "Node.js", color: "bg-green-500", icon: FaNodeJs, level: 85 },
    { name: "TypeScript", color: "bg-blue-600", icon: SiTypescript, level: 80 },
    { name: "MongoDB", color: "bg-green-600", icon: SiMongodb, level: 75 },
    { name: "Express", color: "bg-gray-600", icon: SiExpress, level: 80 },
    { name: "Next.js", color: "bg-black", icon: SiNextdotjs, level: 85 }
  ];

  const highlights = [
    { icon: FaGraduationCap, title: "B.Tech CS", subtitle: "NIT Patna", year: "2025", progress: 75, trend: "+5%", isLive: false },
    { icon: FaCode, title: "15+ Projects", subtitle: "Full Stack", year: "2+ Years", progress: 85, trend: "+3 this month", isLive: true },
    { icon: FaTrophy, title: "DSA Expert", subtitle: "500+ Problems", year: "LeetCode", progress: 90, trend: "+50 this week", isLive: true },
    { icon: FaBriefcase, title: "Experience", subtitle: "Internships & Projects", year: "Active", progress: 80, trend: "Growing", isLive: false }
  ];

  // Quick actions data
  const quickActions = [
    { icon: FaEnvelope, label: "Send Email", href: "mailto:yuvraj.mehta532@gmail.com", type: "external" },
    { icon: Download, label: "Download Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", type: "download" },
    { icon: HiChatBubbleLeftRight, label: "Schedule Call", href: "/contact", type: "internal" },
    { icon: FaGithub, label: "View GitHub", href: "https://github.com/yuvraj-mehta", type: "external" }
  ];

  const recentActivities = [
    {
      icon: BiGitCommit,
      title: "Portfolio Enhancement",
      description: "Updated portfolio with modern design and better UX",
      time: "2 days ago",
      type: "project",
      isLive: true,
      badge: "Live"
    },
    {
      icon: FaTrophy,
      title: "LeetCode Milestone",
      description: "Solved 50+ problems this month, reached 500+ total",
      time: "1 week ago",
      type: "achievement",
      isLive: false,
      badge: "Achievement"
    },
    {
      icon: FaRocket,
      title: "Project Deployment",
      description: "Deployed E-commerce platform with CI/CD pipeline",
      time: "3 days ago",
      type: "deployment",
      isLive: true,
      badge: "Deployed"
    },
    {
      icon: FaBook,
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
    { name: "React", level: 90, icon: FaReact, category: "Frontend" },
    { name: "Node.js", level: 85, icon: FaNodeJs, category: "Backend" },
    { name: "TypeScript", level: 80, icon: SiTypescript, category: "Language" },
    { name: "MongoDB", level: 75, icon: SiMongodb, category: "Database" },
    { name: "Next.js", level: 85, icon: SiNextdotjs, category: "Framework" },
    { name: "Express", level: 80, icon: SiExpress, category: "Backend" }
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
      {/* SEO Meta Tags */}
      <title>Yuvraj Mehta - Full Stack Developer | Portfolio Overview</title>
      <meta name="description" content="Full Stack Developer & B.Tech CS Student at NIT Patna. Specialized in React, Node.js, and modern web technologies. 500+ LeetCode problems solved." />
      <meta name="keywords" content="Full Stack Developer, React, Node.js, TypeScript, NIT Patna, LeetCode, Portfolio" />
      <meta property="og:title" content="Yuvraj Mehta - Full Stack Developer Portfolio" />
      <meta property="og:description" content="Full Stack Developer specializing in modern web technologies. Check out my projects and skills." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <Navigation />
      <ThemeSwitcher />

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.08] via-primary-glow/[0.04] to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Simplified Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span>Portfolio Overview</span>
            </div>

            {/* Streamlined Hero Content */}
            <div className="space-y-6">
              {/* Compact Main Title */}
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up animation-delay-200 leading-tight">
                <span className="text-muted-foreground text-lg md:text-xl font-medium block mb-2">
                  👋 Hello, I'm
                </span>
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient">
                  Yuvraj Mehta
                </span>
              </h1>

              {/* Typewriter Subtitle */}
              <div className="text-xl md:text-2xl text-muted-foreground mb-6 h-8 animate-fade-in-up animation-delay-400">
                <span className="border-r-2 border-primary animate-pulse font-medium">
                  {typewriterText}
                </span>
              </div>

              {/* Compact Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
                <span className="text-foreground font-semibold">B.Tech CS Student</span> at{" "}
                <span className="text-primary font-semibold">NIT Patna</span> •{" "}
                <span className="text-primary-glow font-semibold">500+ LeetCode Problems</span> •{" "}
                <span className="text-foreground font-semibold">15+ Projects</span>
              </p>

              {/* Compact Status Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-700">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Available</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm">
                  <MapPin className="w-3 h-3 text-blue-500" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Remote</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm">
                  <FaStar className="w-3 h-3 text-purple-500" />
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Top 27.7%</span>
                </div>
              </div>

              {/* Compact CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 animate-fade-in-up animation-delay-900">
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


          {/* Enhanced Quick Stats with Animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group p-4 text-center hover:shadow-xl transition-all duration-500 border-primary/20 hover:border-primary/40 hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${1000 + index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    {item.isLive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</div>
                <div className="text-xs text-muted-foreground mb-2">{item.subtitle}</div>
                <div className="text-xs text-primary font-medium mb-3">{item.year}</div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                    style={{
                      width: `${item.progress}%`,
                      transform: 'translateX(-100%)',
                      animation: `slideIn 1s ease-out ${1200 + index * 100}ms forwards`
                    }}
                  ></div>
                </div>

                <div className="text-xs text-green-500 font-medium flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3 group-hover:animate-bounce" />
                  {item.trend}
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Portfolio Preview */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground">Recent work and live applications</p>
              </div>
              <Button variant="outline" asChild className="group">
                <Link to="/projects">
                  View All Projects
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioPreview.map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {project.isLive && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        Live
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" className="text-xs" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-3 h-3 mr-1" />
                            Live
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Current Status Banner */}
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
                          <skill.icon className="w-4 h-4 text-primary" />
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
                    <FaGraduationCap className="w-4 h-4 text-primary" />
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
                    <FaCode className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <tech.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/skills">All Skills & Tools</Link>
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                </div>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-auto p-3 hover:scale-105 transition-all duration-300 group"
                      asChild
                    >
                      {action.type === 'external' ? (
                        <a href={action.href} target="_blank" rel="noopener noreferrer">
                          <action.icon className="w-4 h-4 mr-3 group-hover:animate-bounce" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </a>
                      ) : action.type === 'download' ? (
                        <a href={action.href} download>
                          <action.icon className="w-4 h-4 mr-3 group-hover:animate-bounce" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </a>
                      ) : (
                        <Link to={action.href}>
                          <action.icon className="w-4 h-4 mr-3 group-hover:animate-bounce" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </Link>
                      )}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Projects & Experience */}
            <div className="lg:col-span-2 space-y-6">

              {/* Enhanced Recent Activity Timeline */}
              <Card className="p-6 border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <Activity className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <h3 className="text-lg font-semibold">Live Activity</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Badge variant="outline" className="text-xs">
                      Real-time
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                    >
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activity.type === 'project' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' :
                        activity.type === 'achievement' ? 'bg-yellow-500/10 group-hover:bg-yellow-500/20' :
                        activity.type === 'learning' ? 'bg-green-500/10 group-hover:bg-green-500/20' :
                        activity.type === 'deployment' ? 'bg-purple-500/10 group-hover:bg-purple-500/20' :
                        'bg-gray-500/10 group-hover:bg-gray-500/20'
                      }`}>
                        <activity.icon className={`w-4 h-4 group-hover:scale-110 transition-transform duration-300 ${
                          activity.type === 'project' ? 'text-blue-500' :
                          activity.type === 'achievement' ? 'text-yellow-500' :
                          activity.type === 'learning' ? 'text-green-500' :
                          activity.type === 'deployment' ? 'text-purple-500' :
                          'text-gray-500'
                        }`} />
                        {activity.isLive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                            {activity.title}
                          </h4>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Badge variant="secondary" className="text-xs px-2 py-0.5">
                              {activity.badge}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-6">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/experience">
                      <Clock className="w-3 h-3 mr-2" />
                      Full Timeline
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a href="https://github.com/yuvraj-mehta" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-3 h-3 mr-2" />
                      GitHub Activity
                    </a>
                  </Button>
                </div>
              </Card>
              

              {/* Experience & Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Education */}
                <Card className="p-6 border-primary/20">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      <FaGraduationCap className="w-4 h-4 text-primary" />
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
                      <FaTrophy className="w-4 h-4 text-primary" />
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
                        <FaEnvelope className="w-4 h-4 mr-2" />
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
