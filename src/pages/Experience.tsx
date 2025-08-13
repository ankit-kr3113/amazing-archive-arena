import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  Briefcase,
  Trophy,
  Users,
  Zap,
  Award,
  Medal,
  Crown,
  Target,
  Settings,
  BookOpen,
  Cpu,
  Code2,
  Presentation,
  Lightbulb
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Technical Member",
      company: "Robotics Club, NIT Patna",
      location: "NIT Patna",
      period: "December 2023 - Present",
      type: "Technical",
      status: "Currently Active",
      description: "Organized and facilitated 3+ workshops on designing and building robotic bots. Led a team of 4 to build a combat-ready battle bot, achieving 4th place among 15+ teams at NIT Patna's tech fest. Directed a team of 3 in designing and developing a soccer bot for the annual tech fest, enhancing hands-on robotics and teamwork skills.",
      highlights: [
        "4th place in tech fest",
        "3+ workshops organized",
        "Team of 4-7 members"
      ],
      skills: ["Arduino", "C++", "Mechanical Design", "Team Leadership"]
    },
    {
      title: "Team Leader",
      company: "Hackathons (including Smart India Hackathon)",
      location: "NIT Patna & Remote",
      period: "2023",
      type: "Leadership",
      description: "Led teams in 3 major hackathons, including the prestigious Smart India Hackathon. Guided my team to qualify at the internal NIT Patna hackathon and advance to the national level. Oversaw all phases from ideation to development and presentation, ensuring effective collaboration and timely delivery of innovative solutions.",
      highlights: [
        "National level qualification",
        "3 major hackathons",
        "End-to-end project management"
      ],
      skills: ["Problem Solving", "Team Management", "Presentation", "Innovation"]
    }
  ];

  const achievements = [
    {
      title: "Winner - Model United Nations",
      category: "competition",
      year: "2023",
      description: "Represented the Republic of Poland at NIT Patna's Model United Nations. Earned the Best Delegate award for exceptional debate skills and impactful resolutions."
    },
    {
      title: "Technical Member - Robotics Club",
      category: "technical",
      year: "2023 - Present",
      description: "Active member of the Robotics Club, led team building combat and soccer bots, organized workshops."
    },
    {
      title: "Class Representative",
      category: "leadership",
      year: "2023 - 2024",
      description: "Coordinated between faculty and students, organized department events."
    },
    {
      title: "Bronze Medal - NIT Patna Intramurals",
      category: "sports",
      year: "2023",
      description: "Won Bronze in 50m Hurdles at the university sports event."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/8"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse opacity-40 animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in">
            <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="animate-bounce mr-2">💼</span>
              <span>Professional Journey</span>
              <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Experience & <span className="gradient-text relative inline-block">
                Achievements
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30 animate-pulse"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              My professional journey showcasing leadership roles, technical contributions, and notable
              achievements in competitive environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Professional Experience */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mr-4">
                  <Briefcase className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold">Professional Experience</h2>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="portfolio-card slide-up hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge
                            variant={exp.status === "Currently Active" ? "default" : "secondary"}
                            className={`text-xs ${exp.status === "Currently Active" ? "bg-green-500/10 text-green-500 border-green-500/20 animate-pulse" : ""}`}
                          >
                            {exp.status || exp.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold leading-tight">{exp.title}</h3>
                        <p className="text-primary font-semibold text-sm sm:text-base">{exp.company}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <span className="animate-pulse">📍</span>
                          <span>{exp.location}</span>
                        </p>
                      </div>
                      
                      <div className="mt-2 sm:mt-0">
                        <Badge variant="outline" className="text-primary border-primary/40 text-xs hover:bg-primary/10 transition-colors duration-200">
                          <span className="mr-1">📅</span>
                          <span>{exp.period}</span>
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
                        <span className="text-yellow-500 mr-2 animate-pulse">⭐</span>
                        <span>Key Highlights</span>
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                            <span className="text-yellow-500 mr-2 mt-0.5 animate-pulse">⭐</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
                        <span className="text-lg sm:text-2xl mr-2 animate-bounce">🛠️</span>
                        <span>Technologies & Skills</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Achievements Sidebar */}
            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mr-3 sm:mr-4">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 animate-bounce" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold">Achievements</h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="portfolio-card slide-up hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center flex-shrink-0 mt-1 hover:bg-primary/20 transition-colors duration-200">
                        {achievement.category === "competition" && <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 animate-pulse" />}
                        {achievement.category === "technical" && <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 animate-pulse" />}
                        {achievement.category === "leadership" && <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 animate-pulse" />}
                        {achievement.category === "sports" && <Medal className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 animate-pulse" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <h3 className="font-semibold text-xs sm:text-sm leading-tight flex-1">{achievement.title}</h3>
                          <Badge variant="outline" className="text-[10px] sm:text-xs flex-shrink-0 hover:bg-primary/10 transition-colors duration-200">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
