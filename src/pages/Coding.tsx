import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState, useEffect } from "react";

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
  FaBullseye,
  FaBolt,
  FaCode,
  FaChartLine,
  FaExternalLinkAlt,
  FaClock,
  FaStar,
  FaFire,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import {
  MdLeaderboard,
  MdTrendingUp
} from "react-icons/md";

const Coding = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animatedCounts, setAnimatedCounts] = useState({
    total: 0,
    platforms: [0, 0, 0, 0]
  });

  // Animated counter hook
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;

    const targetTotal = 333;
    const targetPlatforms = [228, 70, 25, 10];

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setAnimatedCounts({
        total: Math.round(targetTotal * easeProgress),
        platforms: targetPlatforms.map(target => Math.round(target * easeProgress))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  // Ordered by activity level and importance
  const codingStats = [
    {
      platform: "LeetCode",
      solved: 228,
      rating: "1570",
      rank: "Top 27.7%",
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30",
      icon: SiLeetcode,
      url: "https://leetcode.com/u/mythical-UV/",
      lastActive: "2024",
      progress: 68, // out of 100 for visualization
      difficulty: { easy: 150, medium: 65, hard: 13 },
      recentActivity: "Solved 'Binary Tree Inorder Traversal' - 2 days ago"
    },
    {
      platform: "GeeksforGeeks",
      solved: 70,
      rating: "Rank #1455",
      streak: "35+ day streak",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      icon: SiGeeksforgeeks,
      url: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/",
      lastActive: "2024",
      progress: 45,
      difficulty: { easy: 45, medium: 20, hard: 5 },
      recentActivity: "Completed 'Array Rotation' challenge - 1 day ago"
    },
    {
      platform: "CodeChef",
      solved: 25,
      rating: "1270",
      rank: "2★ Coder (Division 3)",
      color: "text-amber-400",
      bgColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      icon: SiCodechef,
      url: "https://www.codechef.com/users/quick_unity_53",
      lastActive: "2024",
      progress: 25,
      difficulty: { easy: 18, medium: 6, hard: 1 },
      recentActivity: "Participated in Starters 186 - 1 week ago"
    },
    {
      platform: "Codeforces",
      solved: 10,
      rating: "900",
      rank: "Newbie",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      icon: SiCodeforces,
      url: "https://codeforces.com/profile/yuvraj_mythical",
      lastActive: "2024",
      progress: 15,
      difficulty: { easy: 8, medium: 2, hard: 0 },
      recentActivity: "Solved problem A in Div 3 contest - 2 weeks ago"
    }
  ];

  // Calculate total dynamically
  const totalProblems = codingStats.reduce((sum, platform) => sum + platform.solved, 0);

  // Skills and algorithm categories
  const skillsData = [
    { name: "Dynamic Programming", count: 45, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { name: "Arrays & Strings", count: 78, color: "bg-green-500/20 text-green-400 border-green-500/30" },
    { name: "Binary Trees", count: 32, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { name: "Graph Algorithms", count: 28, color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    { name: "Sorting & Searching", count: 42, color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    { name: "Greedy Algorithms", count: 25, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
    { name: "Hash Tables", count: 35, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
    { name: "Two Pointers", count: 29, color: "bg-red-500/20 text-red-400 border-red-500/30" }
  ];

  // Recent activity timeline
  const recentActivity = [
    { date: "Jan 15, 2025", activity: "Solved 3 problems on LeetCode", type: "solve", platform: "LeetCode" },
    { date: "Jan 14, 2025", activity: "Completed daily challenge on GeeksforGeeks", type: "challenge", platform: "GeeksforGeeks" },
    { date: "Jan 12, 2025", activity: "Participated in CodeChef Starters 186", type: "contest", platform: "CodeChef" },
    { date: "Jan 10, 2025", activity: "Achieved 35-day streak on GeeksforGeeks", type: "milestone", platform: "GeeksforGeeks" },
    { date: "Jan 8, 2025", activity: "Solved first hard problem on LeetCode", type: "milestone", platform: "LeetCode" }
  ];

  // Enhanced achievements with more unique and specific content
  const achievements = [
    {
      title: "LeetCode Consistency Champion",
      description: "Maintained active problem-solving streak with 228+ problems solved, achieving top 27.7% global ranking",
      icon: FaTrophy,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      metric: "228 Problems"
    },
    {
      title: "Contest Performer",
      description: "Achieved Global Rank 1238 in CodeChef Starters 186, demonstrating competitive programming skills",
      icon: FaMedal,
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      metric: "Rank 1238"
    },
    {
      title: "Daily Coding Streak Master",
      description: "Maintained 35+ consecutive days of coding in GfG 160 challenge, showing dedication and consistency",
      icon: FaFire,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      metric: "35+ Days"
    },
    {
      title: "Multi-Platform Excellence",
      description: "Active across 4+ competitive programming platforms with consistent performance and growth",
      icon: FaStar,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      metric: "4 Platforms"
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
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Competitive <span className="text-primary">Programming</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Algorithm mastery across multiple platforms with consistent problem-solving excellence
            </p>
          </div>

          {/* Total Problems Solved Overview - Dynamic Calculation */}
          <div className="mb-12">
            <Card className="group bg-gradient-to-br from-primary/10 to-primary-glow/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
              <div className="p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <FaCode className="text-xl text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                      {animatedCounts.total}+
                    </div>
                    <div className="text-base font-semibold text-foreground">Total Problems Solved</div>
                    <div className="text-sm text-muted-foreground">Across {codingStats.length} platforms</div>
                  </div>
                </div>

                {/* Last Updated Info */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <FaClock className="w-3 h-3" />
                  <span>Last updated: January 2025</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Platform Statistics */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <FaChartLine className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Platform Statistics</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {codingStats.map((platform, index) => {
                const IconComponent = platform.icon;
                const isExpanded = expandedCard === index;
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
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                  >
                    <div className="p-4">
                      {/* Platform Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`${platform.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {platform.platform}
                            </h3>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MdTrendingUp className="w-3 h-3" />
                              <span>Active {platform.lastActive}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href={platform.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-primary border-primary/40 hover:bg-primary/10 hover:scale-105 transition-all duration-300 h-8"
                            >
                              <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                              Visit
                            </Button>
                          </a>
                          {isExpanded ? <FaChevronUp className="w-3 h-3 text-muted-foreground" /> : <FaChevronDown className="w-3 h-3 text-muted-foreground" />}
                        </div>
                      </div>


                      {/* Statistics Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                            {animatedCounts.platforms[index]}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">Problems Solved</div>
                        </div>
                        {platform.rating && (
                          <div className="text-center">
                            <div className={`text-base font-bold ${platform.color} flex items-center justify-center gap-1`}>
                              <MdLeaderboard className="w-3 h-3" />
                              {platform.rating}
                            </div>
                            <div className="text-xs text-muted-foreground font-medium">{platform.rank}</div>
                          </div>
                        )}
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-primary/20 space-y-3">
                          {/* Difficulty Breakdown */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Difficulty Breakdown</h4>
                            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
                              <div className="bg-green-500/10 border border-green-500/20 rounded-md py-1">
                                <div className="text-sm font-bold text-green-400">{platform.difficulty.easy}</div>
                                <div className="text-xs text-muted-foreground">Easy</div>
                              </div>
                              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-md py-1">
                                <div className="text-sm font-bold text-yellow-400">{platform.difficulty.medium}</div>
                                <div className="text-xs text-muted-foreground">Medium</div>
                              </div>
                              <div className="bg-red-500/10 border border-red-500/20 rounded-md py-1">
                                <div className="text-sm font-bold text-red-400">{platform.difficulty.hard}</div>
                                <div className="text-xs text-muted-foreground">Hard</div>
                              </div>
                            </div>
                          </div>

                          {/* Recent Activity */}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Recent Activity</h4>
                            <p className="text-xs text-muted-foreground bg-primary/5 p-2 rounded-md">
                              {platform.recentActivity}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Streak Badge */}
                      {platform.streak && (
                        <div className="text-center mt-3">
                          <Badge className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded-full text-xs">
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
            <div className="flex items-center gap-2 mb-6">
              <FaTrophy className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">Notable Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-5 h-5 ${achievement.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                              {achievement.title}
                            </h3>
                            <Badge className={`
                              ${achievement.color} bg-transparent border-current text-xs font-medium ml-2 flex-shrink-0
                            `}>
                              {achievement.metric}
                            </Badge>
                          </div>
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

          {/* Progress Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <MdTrendingUp className="w-4 h-4" />
              <span>Continuous Growth</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Actively solving problems and participating in contests to improve algorithmic thinking and competitive programming skills.
              Always looking for new challenges and opportunities to grow.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coding;
