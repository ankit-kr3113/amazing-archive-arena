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
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  <Code className="w-4 h-4 mr-2" />
                  Full Stack Developer
                </div>
                
                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="gradient-text">Yuvraj Mehta</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  B.Tech CS student at <span className="text-primary font-semibold">NIT Patna</span> passionate about building 
                  <span className="text-primary font-semibold"> full stack applications</span> with a focus on{" "}
                  <span className="text-primary font-semibold">user-friendly interfaces</span>. 
                  Skilled in <span className="text-primary font-semibold">MERN Stack</span>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">
                  Contact Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="btn-outline-hero">
                  View Work
                  <Code className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Social Links */}
               <div className="flex space-x-4">
                <a
                  href="https://github.com/yuvraj-mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:yuvraj.mehta532@gmail.com"
                  className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative slide-up">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 mx-auto w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={heroPortrait}
                    alt="Yuvraj Mehta"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 -right-4 w-20 h-20 bg-card rounded-lg border border-border p-4 shadow-lg">
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-xs text-muted-foreground">Building</div>
                </div>

                <div className="absolute bottom-10 -left-4 w-24 h-20 bg-card rounded-lg border border-border p-4 shadow-lg">
                  <div className="text-2xl mb-1">💻</div>
                  <div className="text-xs text-muted-foreground">Coding</div>
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
