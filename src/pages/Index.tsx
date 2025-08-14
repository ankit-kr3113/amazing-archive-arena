import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code, Rocket, Laptop, Star, Trophy, Target, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
            {/* Enhanced Left Content */}
            <div className="space-y-8 sm:space-y-10 fade-in order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
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

                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-lg leading-relaxed animate-fade-in-up animation-delay-600 mt-6">
                  <span className="text-foreground font-medium">B.Tech CS student</span> at <span className="text-primary font-semibold">NIT Patna</span> passionate about building
                  <span className="text-primary font-semibold"> full stack applications</span> with a focus on{" "}
                  <span className="text-primary font-semibold">user-friendly interfaces</span>.
                </p>

                <div className="text-sm text-muted-foreground/80 animate-fade-in-up animation-delay-700 mt-3">
                  Specialized in <span className="text-primary font-medium">MERN Stack</span> • <span className="text-primary font-medium">React</span> • <span className="text-primary font-medium">Node.js</span>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-900 mt-8">
                <Button
                  className="btn-hero group px-8 py-5 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 min-h-[60px] w-full sm:w-auto"
                  aria-label="Contact Yuvraj Mehta"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline-hero group px-8 py-5 text-lg font-semibold border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-h-[60px] w-full sm:w-auto"
                  aria-label="View Yuvraj's projects and work"
                >
                  <span>View Work</span>
                  <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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
                {/* Simplified Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary-glow/20 to-primary/15 rounded-full blur-2xl animate-pulse"></div>
                
                {/* Enhanced Profile Image */}
                <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary-glow/30 to-primary/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-primary/30 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary-foreground">YM</span>
                      </div>
                      <p className="text-xs text-primary-foreground/80 px-4">Professional Photo Coming Soon</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-primary/20 rounded-full group-hover:ring-primary/40 transition-all duration-300"></div>
                </div>

                {/* Achievement Cards with Current Stats */}
                <div className="hidden lg:block absolute top-12 -right-4 w-24 h-20 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-float group">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-xs text-primary font-semibold text-center">4+</div>
                  <div className="text-[10px] text-muted-foreground text-center">Projects</div>
                </div>

                <div className="hidden lg:block absolute bottom-12 -left-4 w-24 h-20 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-float animation-delay-1000 group">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <Laptop className="w-4 h-4 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-xs text-primary font-semibold text-center">NIT</div>
                  <div className="text-[10px] text-muted-foreground text-center">Patna</div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-6 w-24 h-20 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-float animation-delay-2000 group">
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-xs text-primary font-semibold text-center">MERN</div>
                  <div className="text-[10px] text-muted-foreground text-center">Stack</div>
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
