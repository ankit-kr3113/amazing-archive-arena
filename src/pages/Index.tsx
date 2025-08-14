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
      
      {/* Polished Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Enhanced Background with Improved Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/[0.08] via-primary/[0.03] to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        
        {/* Refined Floating Particles */}
        <div className="absolute top-24 left-16 w-2 h-2 bg-primary/50 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute top-48 right-28 w-1 h-1 bg-primary-glow/70 rounded-full animate-ping animation-delay-700"></div>
        <div className="absolute bottom-44 left-28 w-3 h-3 bg-primary/40 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-36 right-16 w-1.5 h-1.5 bg-primary-glow/60 rounded-full animate-bounce animation-delay-1500"></div>
        
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh] lg:min-h-[75vh]">
            
            {/* Enhanced Left Content - Better Typography & Spacing */}
            <div className="lg:col-span-7 space-y-10 sm:space-y-12 fade-in order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-8 sm:space-y-10">
                
                {/* Polished Status Badge */}
                <div className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-primary/12 to-primary-glow/8 border border-primary/25 text-primary text-sm font-medium shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 micro-interaction animate-gentle-glow">
                  <Code className="w-4 h-4 mr-2.5 animate-pulse" />
                  <span className="font-semibold">Full Stack Developer</span>
                  <div className="ml-3 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                {/* Enhanced Typography with Better Hierarchy */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                    <span className="block text-foreground/85 animate-fade-in-up mb-3 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                      Hello, I'm
                    </span>
                    <span className="gradient-text relative inline-block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                      Yuvraj Mehta
                    </span>
                  </h1>

                  {/* Refined Tagline Section */}
                  <div className="animate-fade-in-up animation-delay-500 space-y-5">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary/90 leading-tight">
                      "Crafting Digital Experiences That Matter"
                    </h2>
                    
                    {/* Enhanced Status Indicators */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-sm">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-500 font-medium">Available for opportunities</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-500 font-medium">Open to remote work</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-lg leading-relaxed animate-fade-in-up animation-delay-600 font-light">
                    <span className="text-foreground font-medium">B.Tech CS student</span> at{" "}
                    <span className="text-primary font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      NIT Patna
                    </span>{" "}
                    passionate about building{" "}
                    <span className="text-primary font-semibold">full stack applications</span> with a focus on{" "}
                    <span className="text-primary font-semibold">user-friendly interfaces</span> and scalable solutions.
                  </p>
                </div>

                {/* Enhanced Technology Stack */}
                <div className="animate-fade-in-up animation-delay-700 space-y-5">
                  <h3 className="text-base font-semibold text-foreground/90 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Tech Stack & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    
                    {/* React */}
                    <div className="group flex items-center gap-2.5 bg-gradient-to-r from-blue-500/12 to-cyan-500/8 border border-blue-500/25 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 transition-all duration-300 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-[10px] text-white font-bold">R</span>
                      </div>
                      <span className="text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">React</span>
                    </div>

                    {/* Node.js */}
                    <div className="group flex items-center gap-2.5 bg-gradient-to-r from-green-500/12 to-emerald-500/8 border border-green-500/25 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-[10px] text-white font-bold">N</span>
                      </div>
                      <span className="text-sm font-medium text-green-500 group-hover:text-green-400 transition-colors">Node.js</span>
                    </div>

                    {/* MongoDB */}
                    <div className="group flex items-center gap-2.5 bg-gradient-to-r from-yellow-500/12 to-orange-500/8 border border-yellow-500/25 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-[10px] text-white font-bold">M</span>
                      </div>
                      <span className="text-sm font-medium text-yellow-600 group-hover:text-yellow-500 transition-colors">MongoDB</span>
                    </div>

                    {/* TypeScript */}
                    <div className="group flex items-center gap-2.5 bg-gradient-to-r from-purple-500/12 to-pink-500/8 border border-purple-500/25 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-[10px] text-white font-bold">TS</span>
                      </div>
                      <span className="text-sm font-medium text-purple-500 group-hover:text-purple-400 transition-colors">TypeScript</span>
                    </div>

                    {/* Git */}
                    <div className="group flex items-center gap-2.5 bg-gradient-to-r from-gray-500/12 to-slate-500/8 border border-gray-500/25 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 hover:border-gray-500/40 transition-all duration-300 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-600 to-slate-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-[10px] text-white font-bold">Git</span>
                      </div>
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-500 transition-colors">Git</span>
                    </div>

                    {/* Tailwind */}
                    <div className="group flex items-center gap-2.5 bg-gradient-to-r from-indigo-500/12 to-blue-600/8 border border-indigo-500/25 px-4 py-2.5 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 cursor-pointer">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-[10px] text-white font-bold">TW</span>
                      </div>
                      <span className="text-sm font-medium text-indigo-500 group-hover:text-indigo-400 transition-colors">Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Metrics Section */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
                  <div className="glass px-5 py-3 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/8 to-primary-glow/6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="text-primary font-bold text-lg">2+</span>
                    <span className="text-muted-foreground text-sm ml-2 font-medium">Years Experience</span>
                  </div>
                  <div className="glass px-5 py-3 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/8 to-primary-glow/6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="text-primary font-bold text-lg">15+</span>
                    <span className="text-muted-foreground text-sm ml-2 font-medium">Projects Built</span>
                  </div>
                  <div className="glass px-5 py-3 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/8 to-primary-glow/6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="text-primary font-bold text-lg">500+</span>
                    <span className="text-muted-foreground text-sm ml-2 font-medium">GitHub Commits</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900">
                <Button
                  className="group relative overflow-hidden px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:via-primary hover:to-primary-glow shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 border-0 min-h-[64px] w-full sm:w-auto rounded-2xl hover:scale-105 active:scale-95"
                  aria-label="Start a conversation with Yuvraj"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Build Something
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  className="group px-8 py-6 text-lg font-semibold border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 min-h-[64px] w-full sm:w-auto rounded-2xl hover:scale-105 active:scale-95 backdrop-blur-sm bg-background/50"
                  aria-label="Explore Yuvraj's portfolio and projects"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Portfolio
                    <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Enhanced Secondary Actions */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
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
              <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in-up animation-delay-1200">
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
            </div>

            {/* Enhanced Right Content - Hero Image */}
            <div className="lg:col-span-5 relative slide-up order-1 lg:order-2">
              <div className="relative flex justify-center">
                {/* Enhanced Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/25 to-primary/20 rounded-full blur-2xl animate-pulse opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-primary-glow/15 via-transparent to-primary/15 rounded-full blur-xl animate-pulse animation-delay-1000 opacity-80"></div>

                {/* Enhanced Profile Image */}
                <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl hover:shadow-primary/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 group mx-auto cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Enhanced Ring Effects */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/70 transition-all duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 rounded-full border border-primary-glow/0 group-hover:border-primary-glow/50 transition-all duration-700 group-hover:scale-110 animation-delay-200"></div>

                  {/* Enhanced Status Badges */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500/95 to-emerald-500/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 border border-white/20">
                    <span className="animate-pulse">●</span> Available for hire
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500/95 to-purple-500/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2 border border-white/20">
                    Full Stack Dev
                  </div>

                  {/* Enhanced Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary-glow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 -right-3 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                </div>

                {/* Enhanced Achievement Cards */}
                <div className="hidden lg:block absolute top-8 -right-6 w-32 h-28 bg-card/95 backdrop-blur-sm rounded-2xl border border-primary/30 p-4 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float micro-interaction group cursor-pointer hover:border-blue-500/50">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center animate-subtle-bounce group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Rocket className="w-5 h-5 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-base text-primary font-bold text-center group-hover:text-blue-500 transition-colors duration-300">15+</div>
                  <div className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">Projects</div>
                  <div className="text-[10px] text-green-500 text-center group-hover:animate-pulse">Live & Running</div>
                </div>

                <div className="hidden lg:block absolute bottom-8 -left-6 w-32 h-28 bg-card/95 backdrop-blur-sm rounded-2xl border border-primary/30 p-4 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float animation-delay-1000 micro-interaction group cursor-pointer hover:border-green-500/50">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center animate-subtle-bounce animation-delay-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Laptop className="w-5 h-5 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-base text-primary font-bold text-center group-hover:text-green-500 transition-colors duration-300">NIT</div>
                  <div className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">Patna</div>
                  <div className="text-[10px] text-blue-500 text-center group-hover:animate-pulse">Top 30 IIT</div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-8 w-32 h-28 bg-card/95 backdrop-blur-sm rounded-2xl border border-primary/30 p-4 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float animation-delay-2000 micro-interaction group cursor-pointer hover:border-yellow-500/50">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center animate-subtle-bounce animation-delay-1200 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Trophy className="w-5 h-5 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-base text-primary font-bold text-center group-hover:text-yellow-500 transition-colors duration-300">500+</div>
                  <div className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">GitHub</div>
                  <div className="text-[10px] text-purple-500 text-center group-hover:animate-pulse">Commits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1400">
          <div className="flex flex-col items-center space-y-3 group cursor-pointer">
            <span className="text-sm text-muted-foreground/70 group-hover:text-primary transition-colors duration-300 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/50 transition-colors duration-300">
              <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce group-hover:bg-primary transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
