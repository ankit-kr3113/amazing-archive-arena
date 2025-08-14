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
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 overflow-hidden">
        {/* Enhanced Interactive Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        {/* Floating interactive particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/40 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary-glow/60 rounded-full animate-ping animation-delay-700"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-primary/30 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-primary-glow/50 rounded-full animate-bounce animation-delay-1500"></div>
        
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
            {/* Enhanced Left Content */}
            <div className="space-y-8 sm:space-y-10 fade-in order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 micro-interaction animate-gentle-glow">
                  <Code className="w-4 h-4 mr-2 animate-pulse" />
                  <span>Full Stack Developer</span>
                  <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="block text-foreground/90 animate-fade-in-up mb-2">Hello, I'm</span>
                  <span className="gradient-text relative inline-block animate-fade-in-up animation-delay-300">
                    Yuvraj Mehta
                  </span>
                </h1>

                {/* Enhanced Tagline */}
                <div className="animate-fade-in-up animation-delay-500 mt-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
                    "Crafting Digital Experiences That Matter"
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 font-medium">Available for new opportunities</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Open to remote work</span>
                  </div>
                </div>

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-lg leading-relaxed animate-fade-in-up animation-delay-600 mt-6">
                  <span className="text-foreground font-medium">B.Tech CS student</span> at <span className="text-primary font-semibold">NIT Patna</span> passionate about building
                  <span className="text-primary font-semibold"> full stack applications</span> with a focus on{" "}
                  <span className="text-primary font-semibold">user-friendly interfaces</span> and scalable solutions.
                </p>

                {/* Technology Stack with Icons */}
                <div className="animate-fade-in-up animation-delay-700 mt-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3 text-center lg:text-left">Tech Stack & Tools</h3>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {/* Frontend */}
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">R</span>
                      </div>
                      <span className="text-xs font-medium text-blue-500">React</span>
                    </div>

                    {/* Backend */}
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">N</span>
                      </div>
                      <span className="text-xs font-medium text-green-500">Node.js</span>
                    </div>

                    {/* Database */}
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">M</span>
                      </div>
                      <span className="text-xs font-medium text-yellow-600">MongoDB</span>
                    </div>

                    {/* Languages */}
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">TS</span>
                      </div>
                      <span className="text-xs font-medium text-purple-500">TypeScript</span>
                    </div>

                    {/* Tools */}
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-gray-500/10 to-slate-500/10 border border-gray-500/20 px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                      <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">Git</span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">Git</span>
                    </div>

                    <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-blue-600/10 border border-indigo-500/20 px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-300 group">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">TW</span>
                      </div>
                      <span className="text-xs font-medium text-indigo-500">Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-800 mt-6">
                  <div className="glass px-4 py-2 rounded-full border border-primary/20">
                    <span className="text-primary font-semibold">2+</span>
                    <span className="text-muted-foreground text-sm ml-1">Years Experience</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-full border border-primary/20">
                    <span className="text-primary font-semibold">15+</span>
                    <span className="text-muted-foreground text-sm ml-1">Projects Built</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-full border border-primary/20">
                    <span className="text-primary font-semibold">500+</span>
                    <span className="text-muted-foreground text-sm ml-1">GitHub Commits</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Action Buttons with Better Copy */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900 mt-8">
                <Button
                  className="btn-hero group px-8 py-5 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 min-h-[60px] w-full sm:w-auto relative overflow-hidden"
                  aria-label="Start a conversation with Yuvraj"
                >
                  <span className="relative z-10">Let's Build Something</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-hero group px-8 py-5 text-lg font-semibold border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[60px] w-full sm:w-auto"
                  aria-label="Explore Yuvraj's portfolio and projects"
                >
                  <span>Explore Portfolio</span>
                  <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>

              {/* Additional Action Options */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-1000 mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Download Yuvraj's resume"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Schedule a call with Yuvraj"
                >
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  <span>Schedule a Call</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="View Yuvraj's coding profiles"
                >
                  <Code2 className="w-4 h-4 mr-2 group-hover:animate-spin" />
                  <span>Coding Profiles</span>
                </Button>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up animation-delay-1200 mt-6">
                <a
                  href="https://github.com/yuvraj-mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Yuvraj's GitHub profile"
                  className="group relative w-14 h-14 rounded-xl bg-card/70 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gray-900 hover:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Yuvraj's LinkedIn profile"
                  className="group relative w-14 h-14 rounded-xl bg-card/70 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="mailto:yuvraj.mehta532@gmail.com"
                  aria-label="Send email to Yuvraj"
                  className="group relative w-14 h-14 rounded-xl bg-card/70 backdrop-blur-sm border border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Enhanced Right Content - Hero Image */}
            <div className="relative slide-up order-1 lg:order-2">
              <div className="relative flex justify-center">
                {/* Enhanced Animated Background with Multiple Layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary-glow/20 to-primary/15 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-primary-glow/10 via-transparent to-primary/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>

                {/* Enhanced Profile Image with Advanced Interactions */}
                <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:shadow-primary/40 hover:shadow-2xl transition-all duration-500 hover:scale-105 group mx-auto cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Animated ring effect on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-105"></div>
                  <div className="absolute inset-0 rounded-full border border-primary-glow/0 group-hover:border-primary-glow/40 transition-all duration-700 group-hover:scale-110 animation-delay-200"></div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Multiple status badges */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                    <span className="animate-pulse">●</span> Available for hire
                  </div>

                  {/* Interactive skill badge that appears on hover */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                    Full Stack Dev
                  </div>

                  {/* Floating particles around image on hover */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary-glow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 -right-3 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                </div>

                {/* Enhanced Achievement Cards with Interactive Hover Effects */}
                <div className="hidden lg:block absolute top-12 -right-4 w-28 h-24 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 p-3 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float micro-interaction group cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center animate-subtle-bounce group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Rocket className="w-4 h-4 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-sm text-primary font-bold text-center group-hover:text-blue-500 transition-colors duration-300">15+</div>
                  <div className="text-[10px] text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">Projects</div>
                  <div className="text-[9px] text-green-500 text-center group-hover:animate-pulse">Live & Running</div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    View Projects →
                  </div>
                </div>

                <div className="hidden lg:block absolute bottom-12 -left-4 w-28 h-24 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 p-3 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float animation-delay-1000 micro-interaction group cursor-pointer hover:border-green-500/50 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-teal-500/10">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center animate-subtle-bounce animation-delay-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Laptop className="w-4 h-4 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-sm text-primary font-bold text-center group-hover:text-green-500 transition-colors duration-300">NIT</div>
                  <div className="text-[10px] text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">Patna</div>
                  <div className="text-[9px] text-blue-500 text-center group-hover:animate-pulse">Top 30 IIT</div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Education Details →
                  </div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-6 w-28 h-24 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 p-3 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float animation-delay-2000 micro-interaction group cursor-pointer hover:border-yellow-500/50 hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-orange-500/10">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center animate-subtle-bounce animation-delay-1200 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Trophy className="w-4 h-4 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-sm text-primary font-bold text-center group-hover:text-yellow-500 transition-colors duration-300">500+</div>
                  <div className="text-[10px] text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300">GitHub</div>
                  <div className="text-[9px] text-purple-500 text-center group-hover:animate-pulse">Commits</div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    View GitHub →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1400">
          <div className="flex flex-col items-center space-y-2 group cursor-pointer">
            <span className="text-xs text-muted-foreground/60 group-hover:text-primary transition-colors duration-300">Scroll to explore</span>
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
