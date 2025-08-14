import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const About = () => {
  const skills = [
    { name: "Web Development", level: 80 },
    { name: "Data Structures", level: 85 },
    { name: "Algorithms", level: 75 },
    { name: "Frontend Development", level: 85 },
    { name: "Backend Development", level: 80 },
    { name: "Database Design", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements with Subtle Code Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/8"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1920&h=1080&fit=crop&auto=format&q=20"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse opacity-40 animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Redesigned Header */}
          <div className="text-center mb-6 fade-in">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary-glow/20 to-primary/30 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/15 to-primary-glow/15 rounded-full border border-primary/25 shadow-xl backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-sm font-bold">👋</span>
                </div>
                <span className="text-primary font-semibold tracking-wide">Discover My Story</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse animation-delay-300"></div>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse animation-delay-600"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-xl rounded-lg"></span>
                  <span className="relative bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
                    About
                  </span>
                </span>
                <span className="mx-4 text-muted-foreground/30">/</span>
                <span className="gradient-text relative inline-block font-extrabold">
                  Me
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
                </span>
              </h1>

              <div className="max-w-3xl mx-auto">
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Dive into the <span className="text-primary font-semibold">journey</span> of a passionate developer who transforms
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    <span>code into meaningful digital experiences</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left - Profile & Info */}
            <div className="space-y-6 sm:space-y-8 slide-up">
              <Card className="portfolio-card group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face&auto=format&q=80"
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                    <span className="flex items-center gap-1.5">
                      <span className="animate-pulse">⭐</span>
                      <span className="hidden sm:inline">Top 27.7% - LeetCode Global</span>
                      <span className="sm:hidden">Top 27.7%</span>
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
                  Full Stack Developer & CS Student
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Computer Science student at <span className="text-primary font-semibold">NIT Patna</span> passionate about full stack development with a strong
                    foundation in Data Structures & Algorithms. I approach technical challenges analytically and
                    continually expand my skills in GenAI and modern web technologies.
                  </p>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    As a <span className="text-primary font-semibold">Robotics Club member</span>, I've organized workshops and led teams building combat and soccer
                    bots. Outside coding, I enjoy competitive programming and sports, having won Bronze in 50m
                    Hurdles at NIT Patna Intramurals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button className="btn-hero group hover:scale-105 transition-all duration-300">
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <span>Get In Touch</span>
                  </Button>
                  <Button variant="outline" className="btn-outline-hero group hover:scale-105 transition-all duration-300">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right - Skills & Technical Expertise */}
            <div className="space-y-6 sm:space-y-8 slide-up">
              <Card className="portfolio-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="text-xl sm:text-2xl mr-3 animate-pulse">⚡</div>
                  <h3 className="text-xl sm:text-2xl font-bold">Technical Expertise</h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors duration-200">{skill.name}</span>
                        <span className="text-primary font-bold text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 group-hover:h-3 transition-all duration-300" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="animate-pulse">🎯</span>
                    <span className="text-sm sm:text-base">Key Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-yellow-500 animate-pulse">⭐</span>
                      <span className="text-xs sm:text-sm">2+ years of coding</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-yellow-500 animate-pulse">⭐</span>
                      <span className="text-xs sm:text-sm">333+ problems solved</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-yellow-500 animate-pulse">⭐</span>
                      <span className="text-xs sm:text-sm">Team leadership</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-yellow-500 animate-pulse">⭐</span>
                      <span className="text-xs sm:text-sm">Workshop facilitation</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Fun Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Card className="portfolio-card text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">Coding Hours</div>
                </Card>
                <Card className="portfolio-card text-center group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">Projects Built</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
