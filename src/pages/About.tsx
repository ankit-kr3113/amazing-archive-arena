import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
      
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
              👋 Get to know me
              <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              About <span className="gradient-text relative">
                Me
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get to know the person behind the code - my journey, skills, and passion for technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Profile & Info */}
            <div className="space-y-8 slide-up">
              <Card className="portfolio-card group hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={heroPortrait}
                    alt="Yuvraj Mehta - Full Stack Developer"
                    className="w-full h-80 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                    ⭐ Top 27.7% - LeetCode Global
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Full Stack Developer & CS Student
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Computer Science student at <span className="text-primary font-semibold">NIT Patna</span> passionate about full stack development with a strong
                  foundation in Data Structures & Algorithms. I approach technical challenges analytically and
                  continually expand my skills in GenAI and modern web technologies.
                </p>

                <p className="text-muted-foreground mb-6">
                  As a <span className="text-primary font-semibold">Robotics Club member</span>, I've organized workshops and led teams building combat and soccer
                  bots. Outside coding, I enjoy competitive programming and sports, having won Bronze in 50m
                  Hurdles at NIT Patna Intramurals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-hero">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" className="btn-outline-hero">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right - Skills & Technical Expertise */}
            <div className="space-y-8 slide-up">
              <Card className="portfolio-card">
                <div className="flex items-center mb-6">
                  <div className="text-2xl mr-3">⚡</div>
                  <h3 className="text-2xl font-bold">Technical Expertise</h3>
                </div>

                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">🎯 Key Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">2+ years of coding</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">333+ problems solved</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">Team leadership</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">Workshop facilitation</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Fun Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="portfolio-card text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-muted-foreground">Coding Hours</div>
                </Card>
                <Card className="portfolio-card text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
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