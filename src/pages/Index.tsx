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
        {/* Enhanced Background Elements with Subtle Stock Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/8"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1920&h=1080&fit=crop&auto=format&q=20"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary-glow/3 rounded-full blur-2xl opacity-60 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-2xl opacity-40 animate-pulse animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-140px)]">
            {/* Enhanced Left Content */}
            <div className="space-y-6 sm:space-y-8 fade-in order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Code className="w-4 h-4 mr-2 animate-pulse" />
                  <span>Full Stack Developer</span>
                  <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block animate-fade-in-up">Hello, I'm</span>{" "}
                  <span className="gradient-text relative inline-block animate-fade-in-up animation-delay-300">
                    Yuvraj Mehta
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-40 animate-pulse"></div>
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-lg leading-relaxed animate-fade-in-up animation-delay-600">
                  B.Tech CS student at <span className="text-primary font-semibold">NIT Patna</span> passionate about building
                  <span className="text-primary font-semibold"> full stack applications</span> with a focus on{" "}
                  <span className="text-primary font-semibold">user-friendly interfaces</span>.
                  Skilled in <span className="text-primary font-semibold">MERN Stack</span>.
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animation-delay-900">
                <Button className="btn-hero group shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="btn-outline-hero group shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span>View Work</span>
                  <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 animate-fade-in-up animation-delay-1200">
                <a
                  href="https://github.com/yuvraj-mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:yuvraj.mehta532@gmail.com"
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Enhanced Right Content - Hero Image */}
            <div className="relative slide-up order-1 lg:order-2">
              <div className="relative flex justify-center">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/30 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/8 to-primary-glow/12 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-primary-glow/10 via-transparent to-primary/10 rounded-full animate-pulse animation-delay-2000"></div>
                
                {/* Enhanced Profile Image */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-primary/20 rounded-full group-hover:ring-primary/40 transition-all duration-300"></div>
                </div>

                {/* Enhanced Floating Achievement Cards with Better Icons */}
                <div className="hidden lg:block absolute top-8 -right-2 w-20 h-16 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-float group">
                  <div className="flex justify-center mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Rocket className="w-3 h-3 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-[10px] text-primary font-medium text-center">Building</div>
                  <div className="text-[9px] text-muted-foreground text-center">Projects</div>
                </div>

                <div className="hidden lg:block absolute bottom-8 -left-2 w-24 h-18 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-float animation-delay-1000 group">
                  <div className="flex justify-center mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <Laptop className="w-3 h-3 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-[10px] text-primary font-medium text-center">Coding</div>
                  <div className="text-[9px] text-muted-foreground text-center">333+ Problems</div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -right-4 w-18 h-18 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-float animation-delay-2000 group">
                  <div className="flex justify-center mb-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <Trophy className="w-3 h-3 text-white group-hover:animate-bounce" />
                    </div>
                  </div>
                  <div className="text-[10px] text-primary font-medium text-center">Top 27%</div>
                  <div className="text-[9px] text-muted-foreground text-center">LeetCode</div>
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
