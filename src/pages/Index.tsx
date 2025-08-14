import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code, Rocket, Laptop, Star, Trophy, Target, Zap, Download, Code2, MapPin, Clock, CheckCircle, Sparkles, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      {/* Hero Section - Redesigned with Modern Layout */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Enhanced Background with Subtle Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/[0.06] via-primary/[0.02] to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
        
        {/* Floating Interactive Elements */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-primary/40 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute top-48 right-32 w-1 h-1 bg-primary-glow/60 rounded-full animate-ping animation-delay-700"></div>
        <div className="absolute bottom-48 left-32 w-3 h-3 bg-primary/30 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary-glow/50 rounded-full animate-bounce animation-delay-1500"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Elegant Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/8 via-primary-glow/6 to-primary/8 border border-primary/15 text-primary text-sm font-medium shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 animate-gentle-glow mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 font-medium">Available for opportunities</span>
              </div>
              <div className="w-px h-4 bg-border/50"></div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">Remote & Open to relocation</span>
              </div>
            </div>
            
            {/* Hero Typography - Redesigned with Better Weight Contrast */}
            <div className="space-y-6 mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground/80 font-medium mb-4 animate-fade-in-up">
                  Hello, I'm
                </span>
                <span className="gradient-text relative inline-block animate-fade-in-up animation-delay-300">
                  Yuvraj Mehta
                </span>
              </h1>

              {/* Value Proposition Tagline */}
              <div className="animate-fade-in-up animation-delay-500 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary/90 leading-tight">
                  Crafting Digital Experiences That Matter
                </h2>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                  <span className="text-foreground font-medium">B.Tech CS student</span> at <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">NIT Patna</span>, passionate about building full stack applications with user-centric design and scalable architecture.
                </p>
              </div>
            </div>

            {/* Animated Metrics Row with Icons */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12 animate-fade-in-up animation-delay-600">
              <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors">2+</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Years Experience</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-500 group-hover:text-green-400 transition-colors">15+</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Projects Built</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-purple-500 group-hover:text-purple-400 transition-colors">500+</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub Commits</div>
                </div>
              </div>
            </div>

            {/* Tech Stack - Redesigned with Uniform Shape */}
            <div className="animate-fade-in-up animation-delay-700 mb-12">
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
                {/* React */}
                <div className="group flex items-center gap-2.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[10px] text-white font-bold">R</span>
                  </div>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">React</span>
                </div>

                {/* Node.js */}
                <div className="group flex items-center gap-2.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[10px] text-white font-bold">N</span>
                  </div>
                  <span className="text-sm font-medium text-green-500 group-hover:text-green-400 transition-colors">Node.js</span>
                </div>

                {/* MongoDB */}
                <div className="group flex items-center gap-2.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[10px] text-white font-bold">M</span>
                  </div>
                  <span className="text-sm font-medium text-yellow-600 group-hover:text-yellow-500 transition-colors">MongoDB</span>
                </div>

                {/* TypeScript */}
                <div className="group flex items-center gap-2.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[10px] text-white font-bold">TS</span>
                  </div>
                  <span className="text-sm font-medium text-purple-500 group-hover:text-purple-400 transition-colors">TypeScript</span>
                </div>

                {/* Git */}
                <div className="group flex items-center gap-2.5 bg-gradient-to-r from-gray-500/10 to-slate-500/10 border border-gray-500/20 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 hover:border-gray-500/40 transition-all duration-300 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-600 to-slate-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[10px] text-white font-bold">Git</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-500 transition-colors">Git</span>
                </div>

                {/* Tailwind */}
                <div className="group flex items-center gap-2.5 bg-gradient-to-r from-indigo-500/10 to-blue-600/10 border border-indigo-500/20 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 cursor-pointer">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-[10px] text-white font-bold">TW</span>
                  </div>
                  <span className="text-sm font-medium text-indigo-500 group-hover:text-indigo-400 transition-colors">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Better Visual Hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900 mb-8">
              <Button
                className="group relative overflow-hidden px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 border-0 min-h-[64px] rounded-2xl transform hover:scale-105 active:scale-95"
                aria-label="Start a conversation with Yuvraj"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/80 via-primary/80 to-primary-glow/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  Let's Build Something Amazing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                className="group px-8 py-6 text-lg font-semibold border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 min-h-[64px] rounded-2xl transform hover:scale-105 active:scale-95 backdrop-blur-sm bg-background/50"
                aria-label="Explore Yuvraj's portfolio and projects"
              >
                <span className="flex items-center gap-2">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Explore Portfolio
                </span>
              </Button>
            </div>

            {/* Enhanced Profile Photo with Soft Gradient Glow */}
            <div className="relative flex justify-center mb-12 animate-fade-in-up animation-delay-800">
              <div className="relative group">
                {/* Multiple Gradient Glows */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-glow/30 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-glow/15 via-primary/25 to-primary-glow/15 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
                
                {/* Profile Image Container */}
                <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary/40 via-primary-glow/60 to-primary/40 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 group cursor-pointer mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Elegant Status Badges */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 border border-white/20">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3" />
                      <span>Available</span>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2 border border-white/20">
                    <div className="flex items-center gap-1.5">
                      <Code className="w-3 h-3" />
                      <span>Full Stack Dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-1000 mb-8">
              <Button
                variant="ghost"
                size="lg"
                className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl px-6 py-3"
                aria-label="Download Yuvraj's resume"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl px-6 py-3"
                aria-label="Schedule a call with Yuvraj"
              >
                <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                <span>Schedule a Call</span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-xl px-6 py-3"
                aria-label="View Yuvraj's coding profiles"
              >
                <Code2 className="w-4 h-4 mr-2 group-hover:animate-spin" />
                <span>Coding Profiles</span>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1200">
              <a
                href="https://github.com/yuvraj-mehta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Yuvraj's GitHub profile"
                className="group relative w-16 h-16 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gray-900 hover:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-500/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Github className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Yuvraj's LinkedIn profile"
                className="group relative w-16 h-16 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="mailto:yuvraj.mehta532@gmail.com"
                aria-label="Send email to Yuvraj"
                className="group relative w-16 h-16 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Mail className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-fade-in-up animation-delay-1400">
              <div className="flex flex-col items-center space-y-3 group cursor-pointer">
                <span className="text-sm text-muted-foreground/70 group-hover:text-primary transition-colors duration-300 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce group-hover:bg-primary transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
