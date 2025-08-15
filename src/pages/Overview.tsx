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
  Play,
  Eye,
  BarChart3,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  CircleDot,
  Users,
  Clock,
  Activity,
  GitCommit,
  BookOpen,
  Award,
  Terminal,
  Database,
  Globe,
  Smartphone,
  Layers,
  Coffee,
  MessageSquare,
  FileText,
  Heart,
  Lightbulb,
  ChevronRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Enhanced typewriter effect hook
const useTypewriter = (texts: string[], speed: number = 100, pause: number = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentIndex, currentTextIndex, isDeleting, texts, speed, pause]);

  return displayText;
};

const Overview = () => {
  const [visitorCount, setVisitorCount] = useState(12860);

  // Enhanced typewriter with multiple texts
  const typewriterTexts = [
    "Full Stack Developer 🚀",
    "Problem Solver 🧩", 
    "React Enthusiast ⚛️",
    "NIT Patna Student 🎓"
  ];
  const typewriterText = useTypewriter(typewriterTexts, 80, 1500);

  // Real-time visitor count
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Hero stats data
  const heroStats = [
    { 
      label: "Projects Completed", 
      value: "15+", 
      icon: Rocket,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    { 
      label: "LeetCode Solved", 
      value: "500+", 
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    { 
      label: "Tech Stack", 
      value: "10+", 
      icon: Code2,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    { 
      label: "Experience", 
      value: "2+ Years", 
      icon: Star,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  // Featured technologies with real usage percentages
  const featuredTech = [
    { name: "React", proficiency: 90, icon: "⚛️", projects: 12 },
    { name: "Node.js", proficiency: 85, icon: "🟢", projects: 8 },
    { name: "TypeScript", proficiency: 80, icon: "💙", projects: 10 },
    { name: "MongoDB", proficiency: 75, icon: "🍃", projects: 6 },
    { name: "Next.js", proficiency: 85, icon: "⚫", projects: 7 },
    { name: "Express", proficiency: 80, icon: "🚀", projects: 8 }
  ];

  // Current achievements and activities
  const liveActivities = [
    {
      title: "Building Advanced Portfolio",
      description: "Implementing modern design patterns with React & TypeScript",
      time: "Active now",
      status: "live",
      icon: GitCommit,
      color: "text-blue-500"
    },
    {
      title: "LeetCode Daily Challenge",
      description: "Maintaining 90-day streak • Currently at problem #547",
      time: "1 hour ago",
      status: "recent",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      title: "Learning System Design",
      description: "Deep dive into scalable architecture patterns",
      time: "2 days ago",
      status: "learning",
      icon: BookOpen,
      color: "text-green-500"
    }
  ];

  // Quick access actions
  const quickActions = [
    { 
      label: "View Projects", 
      href: "/projects", 
      icon: Rocket, 
      description: "15+ Full-stack applications",
      variant: "primary" as const
    },
    { 
      label: "Download Resume", 
      href: "/Yuvraj_Resume_v2_1 (1).pdf", 
      icon: Download, 
      description: "Latest PDF version",
      variant: "outline" as const,
      external: true
    },
    { 
      label: "Connect", 
      href: "/contact", 
      icon: MessageSquare, 
      description: "Let's build something together",
      variant: "outline" as const
    },
    { 
      label: "GitHub", 
      href: "https://github.com/yuvraj-mehta", 
      icon: Github, 
      description: "500+ contributions this year",
      variant: "outline" as const,
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Yuvraj Mehta - Full Stack Developer | Modern Portfolio</title>
      <meta name="description" content="Full Stack Developer & Computer Science Student at NIT Patna. Specializing in React, Node.js, and modern web technologies. 500+ LeetCode problems solved." />

      <Navigation />
      <ThemeSwitcher />

      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-primary/[0.15] via-primary-glow/[0.08] to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-primary-glow/[0.12] via-primary/[0.06] to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span>Available for opportunities</span>
          </div>

          {/* Hero Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-up animation-delay-200">
              <span className="text-muted-foreground text-xl md:text-2xl font-medium block mb-4">
                👋 Hey there, I'm
              </span>
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Yuvraj Mehta
              </span>
            </h1>

            {/* Dynamic Typewriter */}
            <div className="h-16 flex items-center justify-center animate-fade-in-up animation-delay-400">
              <div className="text-2xl md:text-3xl font-semibold text-foreground">
                <span className="border-r-2 border-primary animate-pulse">
                  {typewriterText}
                </span>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
              <span className="text-primary font-semibold">Computer Science Student</span> at{" "}
              <span className="text-primary-glow font-semibold">NIT Patna</span> passionate about{" "}
              <span className="text-foreground font-semibold">building innovative solutions</span> and{" "}
              <span className="text-foreground font-semibold">solving complex problems</span>
            </p>
          </div>

          {/* Hero Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up animation-delay-800">
            {heroStats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-1000">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300" asChild>
              <Link to="/projects">
                <Rocket className="w-5 h-5 mr-2" />
                Explore My Work
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300" asChild>
              <a href="mailto:yuvraj.mehta532@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Let's Connect
              </a>
            </Button>
          </div>

          {/* Visitor Counter */}
          <div className="text-sm text-muted-foreground animate-fade-in-up animation-delay-1200">
            <div className="flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Viewed by {visitorCount.toLocaleString()}+ developers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jump straight to what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="group p-6 hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40 hover:shadow-xl">
                {action.external ? (
                  <a href={action.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <action.icon className="w-6 h-6 text-primary" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{action.label}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </a>
                ) : (
                  <Link to={action.href} className="block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <action.icon className="w-6 h-6 text-primary" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{action.label}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity & Tech Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Live Activity Feed */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mr-4">
                  <Activity className="w-5 h-5 text-primary-foreground animate-pulse" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Live Activity</h2>
                  <p className="text-muted-foreground">What I'm working on right now</p>
                </div>
              </div>

              <div className="space-y-4">
                {liveActivities.map((activity, index) => (
                  <Card key={index} className="p-6 hover:scale-[1.02] transition-all duration-300 border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.status === 'live' ? 'bg-green-500/10' :
                        activity.status === 'recent' ? 'bg-blue-500/10' : 'bg-purple-500/10'
                      }`}>
                        <activity.icon className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{activity.title}</h3>
                          <div className="flex items-center gap-2">
                            {activity.status === 'live' && (
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            )}
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tech Skills */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mr-4">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Core Technologies</h2>
                  <p className="text-muted-foreground">My primary tech stack</p>
                </div>
              </div>

              <div className="space-y-6">
                {featuredTech.map((tech, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tech.icon}</span>
                        <span className="font-semibold">{tech.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {tech.projects} projects
                        </Badge>
                      </div>
                      <span className="text-sm font-medium text-primary">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ 
                          width: `${tech.proficiency}%`,
                          animation: `slideIn 1s ease-out ${index * 150}ms forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" className="w-full group" asChild>
                  <Link to="/skills">
                    <Layers className="w-4 h-4 mr-2" />
                    View All Skills & Tools
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-card/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CircleDot className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-green-500/30 animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Open to Opportunities</h3>
                  <p className="text-lg text-muted-foreground mb-1">
                    Looking for internships and full-time positions
                  </p>
                  <p className="text-sm text-primary font-medium">
                    🎓 Graduating 2025 • 📍 Remote & On-site • 🚀 Full Stack Development
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="px-6 py-3" asChild>
                  <a href="/Yuvraj_Resume_v2_1 (1).pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-6 py-3 border-2" asChild>
                  <Link to="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Let's Talk
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;
