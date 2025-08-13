import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium shadow-lg backdrop-blur-sm">
                  <Code className="w-4 h-4 mr-2" />
                  Full Stack Developer
                  <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Hello, I'm{" "}
                  <span className="gradient-text relative">
                    Yuvraj Mehta
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30"></div>
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  B.Tech CS student at <span className="text-primary font-semibold">NIT Patna</span> passionate about building 
                  <span className="text-primary font-semibold"> full stack applications</span> with a focus on{" "}
                  <span className="text-primary font-semibold">user-friendly interfaces</span>. 
                  Skilled in <span className="text-primary font-semibold">MERN Stack</span>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero group shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Me
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="btn-outline-hero group shadow-lg hover:shadow-xl transition-all duration-300">
                  View Work
                  <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yuvraj-mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:yuvraj.mehta532@gmail.com"
                  className="group w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative slide-up">
              <div className="relative flex justify-center">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/30 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary-glow/10 rounded-full"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={heroPortrait}
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Floating Achievement Cards */}
                <div className="absolute top-8 -right-6 w-24 h-20 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce">
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-xs text-primary font-medium">Building</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>

                <div className="absolute bottom-8 -left-6 w-28 h-22 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce" style={{animationDelay: '1s'}}>
                  <div className="text-2xl mb-1">💻</div>
                  <div className="text-xs text-primary font-medium">Coding</div>
                  <div className="text-xs text-muted-foreground">333+ Problems</div>
                </div>

                <div className="absolute top-1/2 -right-8 w-20 h-20 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce" style={{animationDelay: '2s'}}>
                  <div className="text-xl mb-1">⭐</div>
                  <div className="text-xs text-primary font-medium">Top 27%</div>
                  <div className="text-xs text-muted-foreground">LeetCode</div>
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
