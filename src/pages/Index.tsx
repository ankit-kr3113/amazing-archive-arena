import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />

      {/* Hero Section - Clean and Modern */}
      <section className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.08] via-primary-glow/[0.04] to-transparent rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8 fade-in order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                <span>Full Stack Developer</span>
                <div className="ml-3 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block text-muted-foreground text-lg sm:text-xl lg:text-2xl font-medium mb-2">
                    Hello, I'm
                  </span>
                  <span className="gradient-text bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                    Yuvraj Mehta
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">B.Tech CS student</span> at{" "}
                  <span className="text-primary font-semibold">NIT Patna</span>{" "}
                  passionate about building{" "}
                  <span className="text-primary font-semibold">full stack applications</span> with a focus on{" "}
                  <span className="text-primary-glow font-semibold">user-friendly interfaces</span>. Skilled in{" "}
                  <span className="text-foreground font-semibold">MERN Stack</span>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contact Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg font-semibold border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  View Work
                  <Code className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://github.com/yuvraj-mehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-gray-900 hover:border-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:yuvraj.mehta532@gmail.com"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative slide-up order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-2xl opacity-60"></div>

                {/* Profile Image */}
                <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:scale-105 group">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />

                  {/* Subtle Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Achievement Badges - Simplified */}
                <div className="hidden lg:block absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <div className="text-sm text-primary font-bold">15+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>

                <div className="hidden lg:block absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-xl border border-border p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <div className="text-sm text-primary font-bold">NIT</div>
                  <div className="text-xs text-muted-foreground">Patna</div>
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
