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
    { title: "Coding Challenges Solved", value: "333+", icon: "⚡" },
    { title: "Technical Books Read", value: "8+", icon: "📖" },
    { title: "Tech Communities Joined", value: "5+", icon: "👥" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 fade-in">
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/30 via-purple-500/20 to-fuchsia-500/30 rounded-2xl blur-xl opacity-75 animate-pulse"></div>
              <div className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-fuchsia-500/10 rounded-2xl border border-violet-500/20 shadow-2xl backdrop-blur-sm">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold animate-bounce">🎓</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-left">
                  <span className="block text-primary font-bold text-sm tracking-wide">Academic Excellence</span>
                  <span className="block text-muted-foreground text-xs">Building knowledge foundations</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 border-2 border-violet-400 rounded-full animate-spin"></div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse animation-delay-300"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-xl rounded-lg"></span>
                  <span className="relative bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent animate-gradient">
                    Education
                  </span>
                </span>
                <span className="mx-4 text-muted-foreground/30 font-light">&</span>
                <span className="gradient-text relative inline-block font-extrabold">
                  Growth
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-18 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-full animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 flex gap-1">
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-300"></div>
                  </div>
                </span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  From <span className="text-violet-500 font-semibold">academic excellence</span> to <span className="text-purple-500 font-semibold">lifelong learning</span>
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse"></span>
                    <span>building strong foundations for technological innovation</span>
                  </span>
                </p>
              </div>
            </div>
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
                  <h3 className="text-xl font-bold">National Institute of Technology, Patna</h3>
                  <p className="text-primary font-semibold">B.Tech in Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    📍 Patna, Bihar
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
                      {["Maintaining CGPA of 7.69/10", "Merit List Recognition", "Technical Workshop Facilitation", "Competitive Programming Participant"].map((achievement, idx) => (
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
                  <h3 className="text-xl font-bold">Pragya Bharti Public School, Gaya</h3>
                  <p className="text-primary font-semibold">Class XII (CBSE)</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    📍 Gaya, Bihar
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
                  <h3 className="text-xl font-bold">Pragya Bharti Public School, Gaya</h3>
                  <p className="text-primary font-semibold">Class X (CBSE)</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    📍 Gaya, Bihar
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Key Courses
                    </h4>
                    <ul className="space-y-2">
                      {["Science", "Mathematics", "Social Studies", "English", "Hindi"].map((course, idx) => (
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
                      {["Scored 90% in CBSE Class 10", "Academic Excellence Award"].map((achievement, idx) => (
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
