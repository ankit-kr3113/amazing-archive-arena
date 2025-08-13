import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
      
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
              💼 Professional Journey
              <div className="ml-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Experience & <span className="gradient-text relative">
                Achievements
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-30"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey showcasing leadership roles, technical contributions, and notable
              achievements in competitive environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Professional Experience */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl">💼</span>
                </div>
                <h2 className="text-2xl font-bold">Professional Experience</h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="portfolio-card slide-up hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant={exp.status === "Currently Active" ? "default" : "secondary"}
                            className={exp.status === "Currently Active" ? "bg-green-500/10 text-green-500 border-green-500/20" : ""}
                          >
                            {exp.status || exp.type}
                          </Badge>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          📍 {exp.location}
                        </p>
                      </div>
                      
                      <div className="mt-2 md:mt-0">
                        <Badge variant="outline" className="text-primary border-primary/40">
                          📅 {exp.period}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="text-yellow-500 mr-2">⭐</span>
                        Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="text-yellow-500 mr-2">⭐</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="text-2xl mr-2">🛠️</span>
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements Sidebar */}
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl">🏆</span>
                </div>
                <h2 className="text-xl font-bold">Achievements</h2>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="portfolio-card slide-up">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm">
                          {achievement.category === "competition" && "🏆"}
                          {achievement.category === "technical" && "⚡"}
                          {achievement.category === "leadership" && "👥"}
                          {achievement.category === "sports" && "🏅"}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-sm">{achievement.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
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