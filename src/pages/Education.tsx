import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Education = () => {
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

  const learningStats = [
    { title: "Online Courses Completed", value: "12+", icon: "📚" },
    { title: "Coding Challenges Solved", value: "300+", icon: "⚡" },
    { title: "Technical Books Read", value: "8+", icon: "📖" },
    { title: "Tech Communities Joined", value: "5+", icon: "👥" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              🎓 Academic Journey
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Educational <span className="gradient-text">Qualifications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic foundation and continuous learning journey in computer science,
              building expertise through formal education and specialized courses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Academic Timeline */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h2 className="text-2xl font-bold">Academic Timeline</h2>
              </div>

              {/* Current Education */}
              <Card className="portfolio-card slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                      Currently Pursuing
                    </Badge>
                    <Badge variant="outline">Bachelor of Technology</Badge>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/40">
                    📅 2023 - 2027
                  </Badge>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold">Stanford University</h3>
                  <p className="text-primary font-semibold">B.Tech in Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    📍 Stanford, California
                  </p>
                </div>

                <p className="text-muted-foreground mb-6">
                  Pursuing comprehensive computer science education with focus on algorithms, data structures,
                  and modern software development practices. Active participant in technical clubs and research projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Key Courses
                    </h4>
                    <ul className="space-y-2">
                      {["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks"].map((course, idx) => (
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
                      {["Maintaining CGPA of 7.50/10", "Merit List Recognition", "Technical Workshop Facilitation", "Competitive Programming Participant"].map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="text-yellow-500 mr-2">⭐</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="text-2xl mr-2">👥</span>
                    Activities & Involvement
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-sm">
                      <span className="font-medium">Class Representative</span>
                      <p className="text-muted-foreground">CSE Department</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Competitive Programming Participant</span>
                      <p className="text-muted-foreground">Multiple Contests</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Science Club Member</span>
                      <p className="text-muted-foreground">Science Exhibitions</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Mathematics Olympiad Participant</span>
                      <p className="text-muted-foreground">Sports Competitions</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Previous Education */}
              <Card className="portfolio-card slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Higher Secondary</Badge>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/40">
                    📅 2021 - 2022
                  </Badge>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold">Central High School</h3>
                  <p className="text-primary font-semibold">Class XII (CBSE)</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    📍 California
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Key Courses
                    </h4>
                    <ul className="space-y-2">
                      {["Physics", "Chemistry", "Mathematics", "Computer Science"].map((course, idx) => (
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
                      {["Scored 88.8% in CBSE Class 12", "School Merit List", "Perfect Attendance", "Academic Excellence Award"].map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="text-yellow-500 mr-2">⭐</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Class X */}
              <Card className="portfolio-card slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/40">
                    📅 2019 - 2020
                  </Badge>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold">Central High School</h3>
                  <p className="text-primary font-semibold">Class X (CBSE)</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    📍 California
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Key Courses
                    </h4>
                    <ul className="space-y-2">
                      {["Science", "Mathematics", "Social Studies", "English"].map((course, idx) => (
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
                      {["Scored 90% in CBSE Class 10", "Academic Excellence Award", "Science Exhibition", "Sports Competitions"].map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="text-yellow-500 mr-2">⭐</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
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
                    <Card key={index} className="portfolio-card slide-up">
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
                    <Card key={index} className="portfolio-card text-center slide-up">
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