import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Code, Rocket, Laptop, Star, Trophy, Download, Zap, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { personalInfo, socialLinks, achievements, techStack } from "@/data/portfolioData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />

      {/* Hero Section - Organized Layout Inspired by Screenshot */}
      <section className="relative pt-24 pb-16 min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/[0.12] via-primary-glow/[0.06] to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-primary-glow/[0.08] to-transparent rounded-full blur-2xl opacity-30 animate-pulse animation-delay-1000"></div>

        {/* Enhanced Floating Particles (6-8 particles) */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float animation-delay-300 shadow-lg shadow-primary/20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow/80 rounded-full animate-ping animation-delay-700 shadow-lg shadow-primary-glow/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-pulse animation-delay-1000 shadow-lg shadow-primary/15"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-accent/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-primary-glow/30 rounded-full animate-float animation-delay-1200 shadow-lg shadow-primary-glow/15"></div>
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-primary/70 rounded-full animate-ping animation-delay-900 shadow-lg shadow-primary/25"></div>
        <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-accent/40 rounded-full animate-pulse animation-delay-1500 shadow-lg shadow-accent/20"></div>
        <div className="absolute bottom-1/6 left-1/2 w-1.5 h-1.5 bg-primary-glow/50 rounded-full animate-bounce animation-delay-800 shadow-lg shadow-primary-glow/30"></div>

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">

            {/* Left Content - Better Organized */}
            <div className="space-y-6 fade-in order-2 lg:order-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary-glow/10 border-2 border-primary/25 text-primary text-sm font-semibold shadow-xl backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-gentle-glow hover:border-primary/40">
                <Code className="w-4 h-4 mr-2 animate-pulse" />
                <span>Full Stack Developer</span>
                <div className="ml-3 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
              </div>

              {/* Enhanced Typography Section */}
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block text-muted-foreground text-xl sm:text-2xl md:text-3xl font-medium mb-4 animate-fade-in-up">
                    👋 Hello, I'm
                  </span>
                  <span className="gradient-text relative inline-block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                    {personalInfo.name}
                  </span>
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 animate-fade-in-up animation-delay-500">
                  Crafting Digital Experiences That <span className="text-primary font-bold">Matter</span>
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up animation-delay-600">
                  <span className="text-foreground font-semibold">{personalInfo.course} student</span> at{" "}
                  <span className="text-primary font-bold">{personalInfo.university}</span>{" "}
                  passionate about building{" "}
                  <span className="text-primary font-bold">full stack applications</span> with focus on{" "}
                  <span className="text-primary-glow font-bold">user-friendly interfaces</span>.
                </p>

                {/* Status Indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-sm animate-fade-in-up animation-delay-700">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border-2 border-green-500/30 backdrop-blur-sm hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/10">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-green-400 font-semibold">{personalInfo.status.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border-2 border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/10">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
                    <span className="text-blue-400 font-semibold">{personalInfo.status.workMode}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="animate-fade-in-up animation-delay-800 space-y-3">
                <h3 className="text-sm font-bold text-foreground text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                  <Star className="w-4 h-4 text-primary animate-pulse" />
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Skilled in</span>
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <div key={index} className={`group flex items-center gap-2 bg-gradient-to-r ${tech.color}/15 border-2 ${tech.color.split(' ')[1]}/25 px-3 py-2 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-${tech.color.split(' ')[1]}/20 backdrop-blur-sm`}>
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                        <span className="text-[8px] text-white font-bold">{tech.icon}</span>
                      </div>
                      <span className={`text-xs font-semibold ${tech.textColor}`}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Section */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-900">
                <div className="glass px-4 py-3 rounded-xl border-2 border-primary/25 bg-gradient-to-r from-primary/10 to-primary-glow/8 hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 backdrop-blur-sm">
                  <span className="text-primary font-bold text-base">{achievements.stats.yearsExperience}</span>
                  <span className="text-muted-foreground text-xs ml-1 font-medium">Years</span>
                </div>
                <div className="glass px-4 py-3 rounded-xl border-2 border-primary/25 bg-gradient-to-r from-primary/10 to-primary-glow/8 hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 backdrop-blur-sm">
                  <span className="text-primary font-bold text-base">{achievements.stats.totalProjects}</span>
                  <span className="text-muted-foreground text-xs ml-1 font-medium">Projects</span>
                </div>
                <div className="glass px-4 py-3 rounded-xl border-2 border-primary/25 bg-gradient-to-r from-primary/10 to-primary-glow/8 hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 backdrop-blur-sm">
                  <span className="text-primary font-bold text-base">{achievements.stats.commits}</span>
                  <span className="text-muted-foreground text-xs ml-1 font-medium">Commits</span>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
                <Button
                  className="group relative overflow-hidden px-8 py-4 text-lg font-bold bg-gradient-to-r from-primary via-primary-glow to-accent hover:from-accent hover:via-primary-glow hover:to-primary shadow-2xl hover:shadow-3xl hover:shadow-primary/40 transition-all duration-500 border-0 rounded-2xl hover:scale-110 active:scale-95 backdrop-blur-sm transform hover:-translate-y-1"
                  asChild
                >
                  <a href="/contact">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Let's Connect
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="group px-8 py-4 text-lg font-bold border-2 border-primary/60 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary-glow/10 hover:text-primary shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 rounded-2xl hover:scale-110 active:scale-95 backdrop-blur-sm bg-background/60 hover:border-primary transform hover:-translate-y-1"
                  asChild
                >
                  <a href="/projects">
                    <span className="flex items-center justify-center gap-3">
                      View Portfolio
                      <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Secondary Actions */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-in-up animation-delay-1100">
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/15 transition-all duration-300 rounded-xl px-3 py-2 text-sm font-semibold hover:scale-105 backdrop-blur-sm border border-transparent hover:border-primary/20"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  <span>Resume</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/15 transition-all duration-300 rounded-xl px-3 py-2 text-sm font-semibold hover:scale-105 backdrop-blur-sm border border-transparent hover:border-primary/20"
                >
                  <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  <span>Schedule</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group text-muted-foreground hover:text-primary hover:bg-primary/15 transition-all duration-300 rounded-xl px-3 py-2 text-sm font-semibold hover:scale-105 backdrop-blur-sm border border-transparent hover:border-primary/20"
                >
                  <Code2 className="w-4 h-4 mr-2 group-hover:animate-spin" />
                  <span>Profiles</span>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up animation-delay-1200">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gray-900 hover:border-gray-700 transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-gray-500/30"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href={socialLinks.email.url}
                  className="group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-2 border-border/60 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-red-500/30"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Right Content - Enhanced Profile Image */}
            <div className="relative slide-up order-1 lg:order-2 flex justify-center">
              <div className="relative flex justify-center max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/30 to-primary/20 rounded-full blur-2xl animate-pulse opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary-glow/15 to-primary/15 rounded-full blur-xl animate-pulse opacity-40 animation-delay-1000"></div>

                {/* Profile Image */}
                <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl hover:shadow-primary/50 hover:shadow-2xl transition-all duration-500 hover:scale-110 group mx-auto cursor-pointer backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-primary-glow/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Ring Effects */}
                  <div className="absolute inset-0 rounded-full border-3 border-primary/0 group-hover:border-primary/70 transition-all duration-500 group-hover:scale-105"></div>

                  {/* Status Badges */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500/95 to-emerald-500/95 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 border-2 border-white/30">
                    <span className="animate-pulse">●</span> Available
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500/95 to-purple-500/95 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-3 border-2 border-white/30">
                    Full Stack Dev
                  </div>
                </div>

                {/* Achievement Cards - Enhanced Visibility */}
                <div className="hidden lg:block absolute top-4 -right-4 w-20 h-16 lg:w-24 lg:h-20 bg-card/98 backdrop-blur-lg rounded-2xl border-2 border-primary/40 p-2 lg:p-3 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-125 animate-float z-20">
                  <div className="flex justify-center mb-1 lg:mb-2">
                    <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Rocket className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-xs lg:text-sm text-primary font-bold text-center">{achievements.stats.totalProjects}</div>
                  <div className="text-[8px] lg:text-[10px] text-foreground/80 text-center font-medium">Projects</div>
                </div>

                <div className="hidden lg:block absolute bottom-4 -left-4 w-20 h-16 lg:w-24 lg:h-20 bg-card/98 backdrop-blur-lg rounded-2xl border-2 border-primary/40 p-2 lg:p-3 shadow-2xl hover:shadow-3xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-125 animate-float animation-delay-1000 z-20">
                  <div className="flex justify-center mb-1 lg:mb-2">
                    <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Laptop className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-xs lg:text-sm text-primary font-bold text-center">{personalInfo.university.split(' ')[0]}</div>
                  <div className="text-[8px] lg:text-[10px] text-foreground/80 text-center font-medium">{personalInfo.university.split(' ')[1]}</div>
                </div>

                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-8 w-20 h-16 lg:w-24 lg:h-20 bg-card/98 backdrop-blur-lg rounded-2xl border-2 border-primary/40 p-2 lg:p-3 shadow-2xl hover:shadow-3xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-125 animate-float animation-delay-2000 z-20">
                  <div className="flex justify-center mb-1 lg:mb-2">
                    <div className="w-5 h-5 lg:w-7 lg:h-7 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/30">
                      <Trophy className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-xs lg:text-sm text-primary font-bold text-center">{achievements.stats.commits}</div>
                  <div className="text-[8px] lg:text-[10px] text-foreground/80 text-center font-medium">Commits</div>
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
