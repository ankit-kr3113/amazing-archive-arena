import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

// React Icons imports
import { 
  SiLeetcode, 
  SiCodechef, 
  SiGeeksforgeeks, 
  SiCodeforces 
} from "react-icons/si";
import { 
  FaTrophy, 
  FaMedal, 
  FaTarget, 
  FaBolt, 
  FaCode, 
  FaChartLine,
  FaExternalLinkAlt
} from "react-icons/fa";
import { 
  MdTimeline,
  MdLeaderboard
} from "react-icons/md";

const Coding = () => {
  const codingStats = [
    { 
      platform: "LeetCode", 
      solved: "228", 
      rating: "1570", 
      rank: "Top 27.7%", 
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30",
      icon: SiLeetcode,
      url: "https://leetcode.com/u/mythical-UV/" 
    },
    { 
      platform: "CodeChef", 
      solved: "25", 
      rating: "1270", 
      rank: "2★ Coder (Division 3)", 
      color: "text-amber-400",
      bgColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      icon: SiCodechef,
      url: "https://www.codechef.com/users/quick_unity_53" 
    },
    { 
      platform: "GeeksforGeeks", 
      solved: "70", 
      rating: "Rank #1455", 
      streak: "35+ day streak", 
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      icon: SiGeeksforgeeks,
      url: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/" 
    },
    { 
      platform: "Codeforces", 
      solved: "10", 
      rating: "900", 
      rank: "Newbie", 
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      icon: SiCodeforces,
      url: "https://codeforces.com/" 
    }
  ];

  const achievements = [
    {
      title: "LeetCode Global Ranking",
      description: "Ranked in top 27.7% globally on LeetCode with 228+ problems solved",
      icon: FaTrophy,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "CodeChef Starters 186",
      description: "Achieved Global Rank 1238 in CodeChef Starters 186",
      icon: FaMedal,
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      title: "GfG 160 Challenge",
      description: "35+ day streak in GfG 160 challenge",
      icon: FaTarget,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Competitive Programming",
      description: "Participated in 3+ competitive contests on Codeforces",
      icon: FaBolt,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-2xl opacity-15"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Competitive <span className="text-primary">Programming</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Algorithm mastery across multiple platforms with consistent problem-solving excellence
            </p>
          </div>

          {/* Total Problems Solved Overview */}
          <div className="mb-16">
            <Card className="group bg-gradient-to-br from-primary/10 to-primary-glow/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
              <div className="p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <FaCode className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      333+
                    </div>
                    <div className="text-lg font-semibold text-foreground">Total Problems Solved</div>
                    <div className="text-sm text-muted-foreground">Across all competitive programming platforms</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Platform Statistics */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaChartLine className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Platform Statistics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {codingStats.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <Card 
                    key={index} 
                    className={`
                      group bg-gradient-to-br ${platform.bgColor} 
                      border ${platform.borderColor}
                      hover:border-primary/40 hover:bg-card/60 
                      transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer
                      backdrop-blur-sm
                    `}
                  >
                    <div className="p-6">
                      {/* Platform Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`${platform.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {platform.platform}
                          </h3>
                        </div>
                        <a href={platform.url} target="_blank" rel="noopener noreferrer">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-primary border-primary/40 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                          >
                            <FaExternalLinkAlt className="w-3 h-3 mr-2" />
                            Visit
                          </Button>
                        </a>
                      </div>

                      {/* Statistics Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                            {platform.solved}
                          </div>
                          <div className="text-sm text-muted-foreground font-medium">Problems Solved</div>
                        </div>
                        {platform.rating && (
                          <div>
                            <div className={`text-lg font-bold ${platform.color} flex items-center gap-1`}>
                              <MdLeaderboard className="w-4 h-4" />
                              {platform.rating}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">{platform.rank}</div>
                          </div>
                        )}
                      </div>

                      {/* Difficulty Breakdown for LeetCode */}
                      {platform.platform === "LeetCode" && (
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                            <div className="font-bold text-green-400">Easy</div>
                            <div className="text-lg font-semibold text-foreground">109</div>
                          </div>
                          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-center">
                            <div className="font-bold text-yellow-400">Medium</div>
                            <div className="text-lg font-semibold text-foreground">115</div>
                          </div>
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                            <div className="font-bold text-red-400">Hard</div>
                            <div className="text-lg font-semibold text-foreground">4</div>
                          </div>
                        </div>
                      )}

                      {/* Difficulty Breakdown for GeeksforGeeks */}
                      {platform.platform === "GeeksforGeeks" && (
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                            <div className="font-bold text-green-400">Easy</div>
                            <div className="text-lg font-semibold text-foreground">32</div>
                          </div>
                          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-center">
                            <div className="font-bold text-yellow-400">Medium</div>
                            <div className="text-lg font-semibold text-foreground">30</div>
                          </div>
                          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                            <div className="font-bold text-red-400">Hard</div>
                            <div className="text-lg font-semibold text-foreground">8</div>
                          </div>
                        </div>
                      )}

                      {/* Streak Badge */}
                      {platform.streak && (
                        <div className="text-center">
                          <Badge className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1 rounded-full">
                            <FaBolt className="w-3 h-3 mr-1" />
                            {platform.streak}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Notable Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaTrophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Notable Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card 
                    key={index} 
                    className={`
                      group bg-gradient-to-br ${achievement.bgColor}
                      border ${achievement.borderColor}
                      hover:border-primary/40 hover:bg-card/60
                      transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer
                      backdrop-blur-sm
                    `}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coding;
