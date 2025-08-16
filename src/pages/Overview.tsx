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
  FaReact,
  FaNodeJs,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaBriefcase,
  FaRocket,
  FaCode,
  FaBook,
  FaEnvelope
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";
import {
  HiChatBubbleLeftRight
} from "react-icons/hi2";
import {
  BiGitCommit
} from "react-icons/bi";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import GitHubActivity from "@/components/GitHubActivity";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

// Optimized typewriter effect with reduced re-renders
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;
    
    const timeoutId = setTimeout(() => {
      setDisplayText(prev => {
        const nextText = text.slice(0, prev.length + 1);
        if (nextText === text) {
          setIsComplete(true);
        }
        return nextText;
      });
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [displayText, text, speed, isComplete]);

  return displayText;
};

// Optimized image component with better loading states
const ProjectImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  if (error) {
    return (
      <div className={`${className} bg-muted/80 flex items-center justify-center border border-border/50`}>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <FaCode className="w-6 h-6 text-foreground/70" />
          </div>
          <p className="text-xs text-foreground/60">Project Preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {loading && (
        <div className={`${className} bg-muted/60 flex items-center justify-center absolute inset-0 z-10 border border-border/30`}>
          <div className="w-8 h-8 border-2 border-primary/70 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

const Overview = () => {
  // Optimized typewriter with memoization
  const typewriterText = useTypewriter("Full Stack Developer & Problem Solver", 120);

  // Memoized static data to prevent unnecessary re-renders
  const highlights = useMemo(() => [
    { icon: FaGraduationCap, title: "B.Tech CS", subtitle: "NIT Patna", year: "2025", progress: 75, trend: "+5%", isLive: false },
    { icon: FaCode, title: "15+ Projects", subtitle: "Full Stack", year: "2+ Years", progress: 85, trend: "+3 this month", isLive: true },
    { icon: FaTrophy, title: "DSA Expert", subtitle: "500+ Problems", year: "LeetCode", progress: 90, trend: "+50 this week", isLive: true },
    { icon: FaBriefcase, title: "Experience", subtitle: "Internships & Projects", year: "Active", progress: 80, trend: "Growing", isLive: false }
  ], []);

  const quickActions = useMemo(() => [
    { icon: FaEnvelope, label: "Send Email", href: "mailto:yuvraj.mehta532@gmail.com", type: "external" },
    { icon: Download, label: "Download Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", type: "download" },
    { icon: HiChatBubbleLeftRight, label: "Schedule Call", href: "/contact", type: "internal" },
    { icon: FaGithub, label: "View GitHub", href: "https://github.com/yuvraj-mehta", type: "external" }
  ], []);

  const recentActivities = useMemo(() => [
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
  ], []);

  const featuredProjects = useMemo(() => [
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
  ], []);

  const skillLevels = useMemo(() => [
    { name: "React", level: 90, icon: FaReact, category: "Frontend" },
    { name: "Node.js", level: 85, icon: FaNodeJs, category: "Backend" },
    { name: "TypeScript", level: 80, icon: SiTypescript, category: "Language" },
    { name: "MongoDB", level: 75, icon: SiMongodb, category: "Database" },
    { name: "Next.js", level: 85, icon: SiNextdotjs, category: "Framework" },
    { name: "Express", level: 80, icon: SiExpress, category: "Backend" }
  ], []);

  const currentStatus = useMemo(() => ({
    availability: "Open for Opportunities",
    currentFocus: "Building Full-Stack Projects with Next.js",
    learning: "Advanced React Patterns & System Design",
    lookingFor: "Internships & Full-time Opportunities",
    location: "Patna, Bihar (Open to Remote)",
    lastUpdated: "Updated 2 days ago"
  }), []);

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

      {/* Optimized Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Simplified background - removed particle system for performance */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.08] via-primary-glow/[0.04] to-transparent rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            {/* Status Badge with better contrast */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-foreground font-semibold">Portfolio Overview</span>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground/80 text-lg md:text-xl font-medium block mb-2">
                  👋 Hello, I'm
                </span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary-glow bg-clip-text text-transparent font-bold">
                  Yuvraj Mehta
                </span>
              </h1>

              {/* Typewriter Subtitle with better contrast */}
              <div className="text-xl md:text-2xl text-foreground/80 mb-6 h-8">
                <span className="border-r-2 border-primary font-medium">
                  {typewriterText}
                </span>
              </div>

              {/* Description with improved readability */}
              <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                <span className="text-foreground font-semibold">B.Tech CS Student</span> at{" "}
                <span className="text-primary font-semibold">NIT Patna</span> •{" "}
                <span className="text-primary font-semibold">500+ LeetCode Problems</span> •{" "}
                <span className="text-foreground font-semibold">15+ Projects</span>
              </p>

              {/* Enhanced Status Badges with vibrant colors */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/60 text-sm shadow-lg hover:shadow-green-500/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-green-200 font-semibold">Available</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/60 text-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 font-semibold">Remote</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/60 text-sm shadow-lg hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm">
                  <FaStar className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-200 font-semibold">Top 27.7%</span>
                </div>
              </div>

              {/* Enhanced CTAs with vibrant design */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  className="px-8 py-4 font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 group relative overflow-hidden"
                  asChild
                >
                  <Link to="/contact">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      Let's Connect
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="px-8 py-4 font-bold border-2 border-gradient bg-gradient-to-r from-transparent to-transparent hover:from-purple-500/10 hover:to-cyan-500/10 border-purple-400 hover:border-cyan-400 text-purple-400 hover:text-cyan-300 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm"
                  asChild
                >
                  <a href="/Yuvraj_Resume_v2_1 (1).pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards with vibrant design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => {
              const gradientColors = {
                0: 'from-purple-500/20 via-indigo-500/20 to-blue-500/20 hover:from-purple-500/30 hover:via-indigo-500/30 hover:to-blue-500/30',
                1: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20 hover:from-blue-500/30 hover:via-cyan-500/30 hover:to-teal-500/30',
                2: 'from-emerald-500/20 via-green-500/20 to-lime-500/20 hover:from-emerald-500/30 hover:via-green-500/30 hover:to-lime-500/30',
                3: 'from-orange-500/20 via-red-500/20 to-pink-500/20 hover:from-orange-500/30 hover:via-red-500/30 hover:to-pink-500/30'
              };
              const iconColors = {
                0: 'text-purple-400 group-hover:text-purple-300',
                1: 'text-cyan-400 group-hover:text-cyan-300',
                2: 'text-emerald-400 group-hover:text-emerald-300',
                3: 'text-orange-400 group-hover:text-orange-300'
              };
              const borderColors = {
                0: 'border-purple-500/30 hover:border-purple-400/60',
                1: 'border-cyan-500/30 hover:border-cyan-400/60',
                2: 'border-emerald-500/30 hover:border-emerald-400/60',
                3: 'border-orange-500/30 hover:border-orange-400/60'
              };
              return (
                <Card
                  key={index}
                  className={`group relative p-6 text-center bg-gradient-to-br ${gradientColors[index]} border-2 ${borderColors[index]} cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm hover:-translate-y-2`}
                >
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon with enhanced styling */}
                  <div className="relative flex justify-center mb-4">
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary-glow/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <item.icon className={`w-8 h-8 ${iconColors[index]} transition-colors duration-300`} />
                      {item.isLive && (
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg animate-pulse">
                          <div className="w-full h-full bg-green-300 rounded-full animate-ping opacity-75"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced typography */}
                  <div className="relative z-10">
                    <div className="font-bold text-lg text-foreground group-hover:text-white transition-colors duration-300 mb-1">{item.title}</div>
                    <div className="text-sm text-foreground/70 group-hover:text-white/80 transition-colors duration-300 mb-2">{item.subtitle}</div>
                    <div className="text-sm font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">{item.year}</div>

                    {/* Enhanced Progress Bar with glow */}
                    <div className="w-full bg-black/20 rounded-full h-3 mb-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-primary via-primary-glow to-accent h-3 rounded-full transition-all duration-1000 shadow-lg relative"
                        style={{ width: `${item.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                      </div>
                    </div>

                    {/* Enhanced trend indicator */}
                    <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-300 font-medium">{item.trend}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Featured Projects with better contrast */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">Featured Projects</h2>
                <p className="text-foreground/70">Recent work and live applications</p>
              </div>
              <Button variant="outline" asChild className="group border-2 border-purple-400/50 hover:border-cyan-400 text-purple-400 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-500 shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
                <Link to="/projects">
                  View All Projects
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="group overflow-hidden border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm hover:-translate-y-2 bg-gradient-to-br from-card/80 to-card/60">
                  <div className="relative overflow-hidden">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.isLive && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Live
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" className="text-xs" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-3 h-3 mr-1" />
                            Live
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs border-white/30 text-white hover:bg-white hover:text-black" asChild>
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
                      <h3 className="font-semibold group-hover:text-primary transition-colors text-foreground">{project.title}</h3>
                      <Badge className="text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/50 text-purple-300 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300">{project.category}</Badge>
                    </div>
                    <p className="text-sm text-foreground/70 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs border-purple-400/40 text-purple-300 hover:bg-purple-400/10 transition-all duration-300">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Status Banner with vibrant design */}
          <Card className="relative p-6 mb-12 bg-gradient-to-r from-primary/20 via-primary-glow/15 to-accent/20 border-2 border-primary/40 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 backdrop-blur-sm overflow-hidden">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-50 animate-pulse"></div>
            <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/40 to-emerald-500/40 flex items-center justify-center shadow-lg">
                  <CircleDot className="w-7 h-7 text-green-300" />
                  <div className="absolute inset-0 bg-green-400/20 rounded-2xl animate-ping"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{currentStatus.availability}</h3>
                  <p className="text-foreground/70">{currentStatus.currentFocus}</p>
                  <p className="text-sm text-primary font-medium mt-1">{currentStatus.learning}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-primary mb-1">{currentStatus.lookingFor}</p>
                <p className="text-sm text-foreground/70">{currentStatus.location}</p>
                <p className="text-xs text-foreground/60 mt-1">{currentStatus.lastUpdated}</p>
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
              <Card className="p-6 border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/30 flex items-center justify-center mr-3 shadow-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Current Focus</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-foreground">Learning:</span>
                  </div>
                  <p className="text-sm text-foreground/70 pl-6">{currentStatus.learning}</p>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-foreground">Location:</span>
                  </div>
                  <p className="text-sm text-foreground/70 pl-6">{currentStatus.location}</p>
                </div>
                <Button asChild size="sm" className="w-full mt-4">
                  <Link to="/contact">Let's Connect</Link>
                </Button>
              </Card>

              {/* Skills Overview */}
              <Card className="p-6 border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center mr-3 shadow-lg">
                    <Activity className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Skills Overview</h3>
                </div>
                <div className="space-y-3">
                  {skillLevels.map((skill, index) => (
                    <div key={index} className="">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/60 rounded-full h-1.5">
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
              <Card className="p-6 border-2 border-primary/40 hover:border-primary/60 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-card/90 to-card/70 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center mr-3 shadow-lg">
                    <FaGraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">About Me</h3>
                </div>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  Final year B.Tech Computer Science student at NIT Patna with 2+ years of development experience. 
                  Specialized in full-stack web development with focus on React, Node.js, and modern JavaScript frameworks.
                </p>
                <div className="flex items-center gap-2 text-xs text-foreground/60 mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-foreground/60 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>Graduating 2025</span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to="/about">View Full Profile</Link>
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 border-2 border-primary/40 hover:border-primary/60 bg-gradient-to-br from-primary/10 via-primary-glow/10 to-accent/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center mr-3 shadow-lg">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
                </div>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-auto p-3 transition-all duration-300 group border-primary/30"
                      asChild
                    >
                      {action.type === 'external' ? (
                        <a href={action.href} target="_blank" rel="noopener noreferrer">
                          <action.icon className="w-4 h-4 mr-3" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </a>
                      ) : action.type === 'download' ? (
                        <a href={action.href} download>
                          <action.icon className="w-4 h-4 mr-3" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </a>
                      ) : (
                        <Link to={action.href}>
                          <action.icon className="w-4 h-4 mr-3" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </Link>
                      )}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - GitHub Activity & Experience */}
            <div className="lg:col-span-2 space-y-6">

              {/* GitHub Activity */}
              <GitHubActivity />

              {/* Recent Activity Timeline */}
              <Card className="p-6 border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Live Activity</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <Badge variant="outline" className="text-xs">
                      Real-time
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activity.type === 'project' ? 'bg-blue-500/20 group-hover:bg-blue-500/30' :
                        activity.type === 'achievement' ? 'bg-yellow-500/20 group-hover:bg-yellow-500/30' :
                        activity.type === 'learning' ? 'bg-green-500/20 group-hover:bg-green-500/30' :
                        activity.type === 'deployment' ? 'bg-purple-500/20 group-hover:bg-purple-500/30' :
                        'bg-gray-500/20 group-hover:bg-gray-500/30'
                      }`}>
                        <activity.icon className={`w-4 h-4 transition-transform duration-300 ${
                          activity.type === 'project' ? 'text-blue-400' :
                          activity.type === 'achievement' ? 'text-yellow-400' :
                          activity.type === 'learning' ? 'text-green-400' :
                          activity.type === 'deployment' ? 'text-purple-400' :
                          'text-gray-400'
                        }`} />
                        {activity.isLive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate text-foreground">
                            {activity.title}
                          </h4>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Badge variant="secondary" className="text-xs px-2 py-0.5">
                              {activity.badge}
                            </Badge>
                            <span className="text-xs text-foreground/60">{activity.time}</span>
                          </div>
                        </div>
                        <p className="text-xs text-foreground/60 mt-1 line-clamp-2">{activity.description}</p>
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
                <Card className="p-6 border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                      <FaGraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-sm text-foreground">B.Tech Computer Science</div>
                      <div className="text-sm text-primary">NIT Patna</div>
                      <div className="text-xs text-foreground/60">2021 - 2025</div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Class 12th</div>
                      <div className="text-sm text-foreground/70">Science Stream</div>
                      <div className="text-xs text-foreground/60">2021</div>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-4">
                    <Link to="/education">Full Academic Details</Link>
                  </Button>
                </Card>

                {/* Coding Achievements */}
                <Card className="p-6 border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                      <FaTrophy className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Coding</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">LeetCode</span>
                      <Badge className="bg-orange-500/20 text-orange-200 border-orange-500/30">
                        500+ Solved
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">GeeksforGeeks</span>
                      <Badge className="bg-green-500/20 text-green-200 border-green-500/30">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">CodeChef</span>
                      <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                        Contests
                      </Badge>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full mt-4">
                    <Link to="/coding">View Profiles & Stats</Link>
                  </Button>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;
