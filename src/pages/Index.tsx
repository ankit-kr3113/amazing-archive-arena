import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code, Rocket, Laptop, Star, Trophy, Target, Zap, Download, Code2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      {/* Enhanced Hero Section - Modern Visual Appeal */}
      <section className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/[0.12] via-primary-glow/[0.06] to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary-glow/[0.08] to-transparent rounded-full blur-2xl opacity-30 animate-pulse animation-delay-1000"></div>
        
        {/* Enhanced Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-bounce animation-delay-300 shadow-lg shadow-primary/20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow/80 rounded-full animate-ping animation-delay-700 shadow-lg shadow-primary-glow/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-primary/15"></div>
        <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-primary-glow/60 rounded-full animate-bounce animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Enhanced Left Content */}
            <div className="space-y-8 fade-in order-2 lg:order-1 text-center lg:text-left">
              
              {/* Enhanced Status Badge */}
              <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary-glow/10 border-2 border-primary/25 text-primary text-sm font-semibold shadow-xl backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-gentle-glow hover:border-primary/40">
                <Code className="w-4 h-4 mr-2 animate-pulse" />
                <span>Full Stack Developer</span>
                <div className="ml-3 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
              </div>
              
              {/* Enhanced Typography */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block text-foreground/90 animate-fade-in-up mb-2 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    Hello, I'm
                  </span>
                  <span className="gradient-text relative inline-block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent drop-shadow-2xl">
                    Yuvraj Mehta
                  </span>
                </h1>

                {/* Enhanced Tagline */}
                <div className="animate-fade-in-up animation-delay-500 space-y-4">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text drop-shadow-lg">
                    "Crafting Digital Experiences That Matter"
                  </h2>
                  
                  {/* Enhanced Status Indicators */}
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-500/15 border-2 border-green-500/30 backdrop-blur-sm hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/10">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                      <span className="text-green-400 font-semibold">Available</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-500/15 border-2 border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/10">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                      <span className="text-blue-400 font-semibold">Remote</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
                  <span className="text-foreground font-semibold">B.Tech CS student</span> at{" "}
                  <span className="text-primary font-bold">NIT Patna</span>{" "}
                  passionate about building{" "}
                  <span className="text-primary font-bold">full stack applications</span> with focus on{" "}
                  <span className="text-primary-glow font-bold">user-friendly interfaces</span>.
                </p>
              </div>

              {/* Compact Tech Stack */}
              <div className="animate-fade-in-up animation-delay-700 space-y-3">
                <h3 className="text-sm font-semibold text-foreground/90 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5">
                  <Star className="w-3 h-3 text-primary" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  
                  {/* Compact Tech Badges */}
                  <div className="group flex items-center gap-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/8 border border-blue-500/20 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-[8px] text-white font-bold">R</span>
                    </div>
                    <span className="text-xs font-medium text-blue-500">React</span>
                  </div>

                  <div className="group flex items-center gap-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/8 border border-green-500/20 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-[8px] text-white font-bold">N</span>
                    </div>
                    <span className="text-xs font-medium text-green-500">Node.js</span>
                  </div>

                  <div className="group flex items-center gap-1.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/8 border border-yellow-500/20 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-[8px] text-white font-bold">M</span>
                    </div>
                    <span className="text-xs font-medium text-yellow-600">MongoDB</span>
                  </div>

                  <div className="group flex items-center gap-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/8 border border-purple-500/20 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-[8px] text-white font-bold">TS</span>
                    </div>
                    <span className="text-xs font-medium text-purple-500">TypeScript</span>
                  </div>

                  <div className="group flex items-center gap-1.5 bg-gradient-to-r from-gray-500/10 to-slate-500/8 border border-gray-500/20 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-600 to-slate-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-[8px] text-white font-bold">Git</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">Git</span>
                  </div>

                  <div className="group flex items-center gap-1.5 bg-gradient-to-r from-indigo-500/10 to-blue-600/8 border border-indigo-500/20 px-2.5 py-1.5 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-[8px] text-white font-bold">TW</span>
                    </div>
                    <span className="text-xs font-medium text-indigo-500">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Compact Metrics */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
                <div className="glass px-3 py-2 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/6 to-primary-glow/4 hover:scale-105 transition-all duration-300">
                  <span className="text-primary font-bold text-sm">2+</span>
                  <span className="text-muted-foreground text-xs ml-1">Years</span>
                </div>
                <div className="glass px-3 py-2 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/6 to-primary-glow/4 hover:scale-105 transition-all duration-300">
                  <span className="text-primary font-bold text-sm">15+</span>
                  <span className="text-muted-foreground text-xs ml-1">Projects</span>
                </div>
                <div className="glass px-3 py-2 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/6 to-primary-glow/4 hover:scale-105 transition-all duration-300">
                  <span className="text-primary font-bold text-sm">500+</span>
                  <span className="text-muted-foreground text-xs ml-1">Commits</span>
                </div>
              </div>

              {/* Compact Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-900">
                <Button
                  className="group relative overflow-hidden px-6 py-3 text-base font-semibold bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 border-0 rounded-xl hover:scale-105 active:scale-95"
                  aria-label="Start a conversation with Yuvraj"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Build Something
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  className="group px-6 py-3 text-base font-semibold border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/15 transition-all duration-500 rounded-xl hover:scale-105 active:scale-95 backdrop-blur-sm bg-background/50"
                  aria-label="Explore Yuvraj's portfolio and projects"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Portfolio
                    <Code className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Compact Secondary Actions */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg px-3 py-2 text-sm"
                  aria-label="Download Yuvraj's resume"
                >
                  <Download className="w-3 h-3 mr-1.5 group-hover:animate-bounce" />
                  <span>Resume</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg px-3 py-2 text-sm"
                  aria-label="Schedule a call with Yuvraj"
                >
                  <Zap className="w-3 h-3 mr-1.5 group-hover:animate-pulse" />
                  <span>Schedule Call</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg px-3 py-2 text-sm"
                  aria-label="View Yuvraj's coding profiles"
                >
                  <Code2 className="w-3 h-3 mr-1.5 group-hover:animate-spin" />
                  <span>Coding Profiles</span>
                </Button>
              </div>

              {/* Compact Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up animation-delay-1200">
                <a
                  href="https://github.com/yuvraj-mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Yuvraj's GitHub profile"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gray-900 hover:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Yuvraj's LinkedIn profile"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="mailto:yuvraj.mehta532@gmail.com"
                  aria-label="Send email to Yuvraj"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Compact Right Content - Hero Image */}
            <div className="relative slide-up order-1 lg:order-2">
              <div className="relative flex justify-center">
                {/* Compact Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary-glow/20 to-primary/15 rounded-full blur-xl animate-pulse opacity-50"></div>
                
                {/* Compact Profile Image */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-3 border-primary/30 shadow-xl hover:shadow-primary/40 hover:shadow-xl transition-all duration-500 hover:scale-105 group mx-auto cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Compact Ring Effects */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-105"></div>
                  
                  {/* Compact Status Badges */}
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-green-500/95 to-emerald-500/95 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 border border-white/20">
                    <span className="animate-pulse">●</span> Available
                  </div>

                  <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500/95 to-purple-500/95 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2 border border-white/20">
                    Full Stack Dev
                  </div>
                </div>

                {/* Compact Achievement Cards */}
                <div className="hidden xl:block absolute top-4 -right-4 w-20 h-16 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/25 p-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 hover:scale-110 animate-float micro-interaction group cursor-pointer">
                  <div className="flex justify-center mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-xs text-primary font-bold text-center">15+</div>
                  <div className="text-[8px] text-muted-foreground text-center">Projects</div>
                </div>

                <div className="hidden xl:block absolute bottom-4 -left-4 w-20 h-16 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/25 p-2 shadow-lg hover:shadow-xl hover:shadow-green-500/15 transition-all duration-300 hover:scale-110 animate-float animation-delay-1000 micro-interaction group cursor-pointer">
                  <div className="flex justify-center mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Laptop className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-xs text-primary font-bold text-center">NIT</div>
                  <div className="text-[8px] text-muted-foreground text-center">Patna</div>
                </div>

                <div className="hidden xl:block absolute top-1/2 -right-6 w-20 h-16 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/25 p-2 shadow-lg hover:shadow-xl hover:shadow-yellow-500/15 transition-all duration-300 hover:scale-110 animate-float animation-delay-2000 micro-interaction group cursor-pointer">
                  <div className="flex justify-center mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-xs text-primary font-bold text-center">500+</div>
                  <div className="text-[8px] text-muted-foreground text-center">Commits</div>
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
