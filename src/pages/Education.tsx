import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Education = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const educationEntries = [
    {
      id: 0,
      status: "Currently Pursuing",
      type: "Bachelor of Technology",
      period: "2023 - 2027",
      institution: "National Institute of Technology, Patna",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Patna, Bihar",
      description: "Pursuing comprehensive computer science education with focus on algorithms, data structures, and modern software development practices. Active participant in technical clubs and research projects.",
      keyPoints: {
        courses: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks"],
        achievements: ["Maintaining CGPA of 7.69/10", "Merit List Recognition", "Technical Workshop Facilitation", "Competitive Programming Participant"],
        activities: [
          { role: "Class Representative", detail: "CSE Department" },
          { role: "Competitive Programming Participant", detail: "Multiple Contests" },
          { role: "Science Club Member", detail: "Science Exhibitions" },
          { role: "Mathematics Olympiad Participant", detail: "Sports Competitions" }
        ]
      }
    },
    {
      id: 1,
      type: "Higher Secondary",
      period: "2021 - 2022",
      institution: "Pragya Bharti Public School, Gaya",
      degree: "Class XII (CBSE)",
      location: "Gaya, Bihar",
      description: "Completed higher secondary education with focus on science and mathematics subjects.",
      keyPoints: {
        courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
        achievements: ["Scored 88.8% in CBSE Class 12", "School Merit List", "Perfect Attendance", "Academic Excellence Award"]
      }
    },
    {
      id: 2,
      type: "Secondary",
      period: "2019 - 2020",
      institution: "Pragya Bharti Public School, Gaya",
      degree: "Class X (CBSE)",
      location: "Gaya, Bihar",
      description: "Completed secondary education with strong foundation in core subjects.",
      keyPoints: {
        courses: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
        achievements: ["Scored 90% in CBSE Class 10", "Academic Excellence Award"]
      }
    }
  ];

  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2023",
      description: "Comprehensive full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js",
      badge: "🌐"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Coursera",
      year: "2023",
      description: "Advanced course on efficient algorithms and complex data structures implementation",
      badge: "📊"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "FreeCodeCamp",
      year: "2024",
      description: "Introduction to machine learning concepts and practical implementation",
      badge: "🤖"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 rounded-full text-violet-600 text-xs font-medium mb-2">
              <span>🎓</span>
              <span>Education</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
              Educational Background
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Academic foundation and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Academic Timeline with Expandable Cards */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h2 className="text-2xl font-bold">Academic Timeline</h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent hidden sm:block"></div>
                
                <div className="space-y-6">
                  {educationEntries.map((entry, index) => (
                    <div key={entry.id} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg hidden sm:block z-10">
                        <div className="absolute inset-1 bg-primary/60 rounded-full"></div>
                      </div>
                      
                      <Card className="portfolio-card slide-up hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 sm:ml-8 cursor-pointer" onClick={() => toggleCard(entry.id)}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Badge className={entry.status === "Currently Pursuing" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-secondary text-secondary-foreground"}>
                              {entry.status || entry.type}
                            </Badge>
                            <Badge variant="outline">{entry.type}</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-primary border-primary/40 text-xs">
                              📅 {entry.period}
                            </Badge>
                            <div className="text-muted-foreground hover:text-primary transition-colors">
                              {expandedCards.includes(entry.id) ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-xl font-bold">{entry.institution}</h3>
                          <p className="text-primary font-semibold">{entry.degree}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                            📍 {entry.location}
                          </p>
                        </div>

                        {/* Compact description when collapsed */}
                        {!expandedCards.includes(entry.id) && (
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {entry.description.split('.')[0]}.
                          </p>
                        )}

                        {/* Expanded content */}
                        {expandedCards.includes(entry.id) && (
                          <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
                            <p className="text-muted-foreground">{entry.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center">
                                  <span className="text-2xl mr-2">📚</span>
                                  Key Courses
                                </h4>
                                <ul className="space-y-2">
                                  {entry.keyPoints.courses.map((course, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                      <span className="text-primary mr-2">•</span>
                                      {course}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3 flex items-center">
                                  <span className="text-2xl mr-2">🏆</span>
                                  Achievements
                                </h4>
                                <ul className="space-y-2">
                                  {entry.keyPoints.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                      <span className="text-yellow-500 mr-2">⭐</span>
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Activities section only for current education */}
                            {entry.keyPoints.activities && (
                              <div className="pt-4 border-t border-border">
                                <h4 className="font-semibold mb-3 flex items-center">
                                  <span className="text-2xl mr-2">👥</span>
                                  Activities & Involvement
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {entry.keyPoints.activities.map((activity, idx) => (
                                    <div key={idx} className="text-sm">
                                      <span className="font-medium">{activity.role}</span>
                                      <p className="text-muted-foreground">{activity.detail}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Learning Stats */}
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-xl">🏆</span>
                  </div>
                  <h2 className="text-xl font-bold">Certifications</h2>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="portfolio-card slide-up hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm">{cert.badge}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-sm">{cert.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {cert.year}
                            </Badge>
                          </div>
                          <p className="text-xs text-primary font-medium mb-2">Issued by {cert.issuer}</p>
                          <p className="text-xs text-muted-foreground">{cert.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Continuous Learning */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-xl">📈</span>
                  </div>
                  <h2 className="text-xl font-bold">Continuous Learning</h2>
                </div>

                <div className="space-y-4">
                  {learningStats.map((stat, index) => (
                    <Card key={index} className="portfolio-card text-center slide-up hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.title}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
