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
  FaTwitter,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaGraduationCap,
  FaTrophy,
  FaStar,
  FaBriefcase,
  FaRocket,
  FaCode,
  FaBook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLink
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

  const contactInfo = useMemo(() => ({
    email: "yuvraj.mehta532@gmail.com",
    phone: "+91 98765 43210",
    location: "Patna, Bihar, India",
    timezone: "IST (UTC +5:30)",
    availability: "Available for opportunities",
    preferredContact: "Email or LinkedIn",
    responseTime: "Within 24 hours",
    socialLinks: [
      {
        name: "GitHub",
        icon: FaGithub,
        url: "https://github.com/yuvraj-mehta",
        username: "@yuvraj-mehta",
        color: "text-gray-300 hover:text-white"
      },
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://linkedin.com/in/yuvraj-mehta",
        username: "yuvraj-mehta",
        color: "text-blue-400 hover:text-blue-300"
      },
      {
        name: "Twitter",
        icon: FaTwitter,
        url: "https://twitter.com/yuvraj_mehta",
        username: "@yuvraj_mehta",
        color: "text-sky-400 hover:text-sky-300"
      },
      {
        name: "Email",
        icon: FaEnvelope,
        url: "mailto:yuvraj.mehta532@gmail.com",
        username: "yuvraj.mehta532@gmail.com",
        color: "text-red-400 hover:text-red-300"
      }
    ]
  }), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden">
      {/* Background gradient overlay with animation */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 animate-pulse opacity-50 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/8 via-transparent to-transparent pointer-events-none"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
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

      {/* Minimalistic Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/95"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          {/* Simple status indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm mb-10">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-foreground/70">Portfolio Overview</span>
          </div>

          {/* Clean typography hierarchy */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              <span className="text-lg font-normal text-foreground/60 block mb-6">👋 Hello, I'm</span>
              Yuvraj Mehta
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto mt-6">
              {typewriterText}
            </p>

            {/* Simplified info line */}
            <p className="text-foreground/60 max-w-xl mx-auto mt-4">
              B.Tech CS Student at NIT Patna · 500+ LeetCode Problems · 15+ Projects
            </p>

            {/* Clean status badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-300">Available</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <MapPin className="w-3 h-3 text-blue-400" />
                <span className="text-sm text-blue-300">Remote</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <FaStar className="w-3 h-3 text-purple-400" />
                <span className="text-sm text-purple-300">Top 27.7%</span>
              </div>
            </div>

            {/* Simplified CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button
                className="px-8 py-3 bg-primary hover:bg-primary/90 transition-colors"
                asChild
              >
                <Link to="/contact">
                  Let's Connect
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="px-8 py-3 border-primary/30 hover:border-primary/50 transition-colors"
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

        {/* Clean stats cards */}
        <div className="relative max-w-6xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group p-5 bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                    {item.isLive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base text-foreground">{item.title}</div>
                    <div className="text-sm text-foreground/60">{item.subtitle}</div>
                    <div className="text-sm text-primary font-medium">{item.year}</div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-foreground/60 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {item.trend}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid - Reorganized for Portfolio Overview */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left Column - Core Skills & Capabilities */}
            <div className="lg:col-span-1 space-y-6">

              {/* Skills Overview - Most Important for Portfolio */}
              <Card className="p-6 border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center mr-3 shadow-lg">
                    <Activity className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Technical Skills</h3>
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

              {/* Coding Achievements - Key Portfolio Highlight */}
              <Card className="p-6 border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center mr-3 shadow-lg">
                    <FaTrophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Coding Achievements</h3>
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

              {/* Current Focus & Availability */}
              <Card className="p-6 border-primary/30">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/30 flex items-center justify-center mr-3 shadow-lg">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Current Status</h3>
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

              {/* Contact Information */}
              <Card className="p-4 border-2 border-primary/40 hover:border-primary/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-card/90 to-card/70 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center mr-2 shadow-lg">
                    <FaEnvelope className="w-4 h-4 text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">Contact</h3>
                </div>

                {/* Compact Status */}
                <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-green-300">Available • {contactInfo.location}</span>
                </div>

                {/* Compact Social Links */}
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {contactInfo.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-1 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                    >
                      <social.icon className={`w-3 h-3 ${social.color} transition-colors duration-300`} />
                      <span className="text-xs text-foreground">{social.name}</span>
                    </a>
                  ))}
                </div>

                {/* Primary Contact */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gradient-to-r from-primary/15 to-primary-glow/15 hover:from-primary/25 hover:to-primary-glow/25 border border-primary/30 transition-all duration-300 group"
                >
                  <FaEnvelope className="w-3 h-3 text-primary" />
                  <span className="text-xs text-foreground group-hover:text-primary transition-colors duration-300">Send Email</span>
                </a>
              </Card>
            </div>

            {/* Right Column - Projects & Activity */}
            <div className="lg:col-span-2 space-y-6">

              {/* GitHub Activity - Shows active development */}
              <GitHubActivity />

              {/* Recent Activity Timeline - Recent work showcase */}
              <Card className="p-6 border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
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

              {/* Education & Background Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* About Summary */}
                <Card className="p-6 border-2 border-primary/40 hover:border-primary/60 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-card/90 to-card/70 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center mr-3 shadow-lg">
                      <FaGraduationCap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">About</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                    Final year B.Tech Computer Science student at NIT Patna with 2+ years of development experience.
                    Specialized in full-stack web development.
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
              </div>

            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Overview;
