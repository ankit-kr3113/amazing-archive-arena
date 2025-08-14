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
} from "react-icons/fa";
import {
  MdLeaderboard,
  MdTrendingUp
} from "react-icons/md";

const Coding = () => {
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
      difficulty: { easy: 45, medium: 20, hard: 5 },
      recentActivity: "Completed 'Array Rotation' challenge - 1 day ago"
    },
    {
      platform: "CodeChef",
      solved: 25,
      rating: "1270",
      rank: "2��� Coder (Division 3)",
      color: "text-amber-400",
      bgColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      icon: SiCodechef,
      url: "https://www.codechef.com/users/quick_unity_53",
      lastActive: "2024",
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
      difficulty: { easy: 8, medium: 2, hard: 0 },
      recentActivity: "Solved problem A in Div 3 contest - 2 weeks ago"
    }
  ];

  // Calculate total dynamically
  const totalProblems = codingStats.reduce((sum, platform) => sum + platform.solved, 0);

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
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Competitive <span className="text-primary">Programming</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Algorithm mastery across multiple platforms with consistent problem-solving excellence
            </p>
          </div>

          {/* Total Problems Solved Overview - Dynamic Calculation */}
          <div className="mb-12 flex justify-center">
            <Card className="group bg-gradient-to-br from-primary/10 to-primary-glow/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 w-full max-w-2xl">
              <div className="px-8 py-6">
                <div className="flex items-center justify-between">
                  {/* Left Decorative Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaCode className="text-xl text-primary" />
                  </div>

                  {/* Center Content */}
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                      {animatedCounts.total}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">Total Problems Solved</div>
                    <div className="text-sm text-muted-foreground">Across all competitive programming platforms</div>
                  </div>

                  {/* Right Decorative Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaChartLine className="text-xl text-primary" />
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
                    className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 rounded-xl transition-all duration-300 hover:border-slate-600/70 hover:scale-[1.02]"
                  >
                    <div className="p-6">
                      {/* Header with platform icon and visit button */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${platform.bgColor} flex items-center justify-center`}>
                            <IconComponent className={`w-6 h-6 ${platform.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-0">
                              {platform.platform}
                            </h3>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <a href={platform.url} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-blue-400 border-blue-400/50 hover:bg-blue-400/10 hover:border-blue-400 text-xs px-3 py-1"
                            >
                              Visit
                            </Button>
                          </a>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-slate-400">Active</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between mb-4">
                        {/* Main problem count */}
                        <div>
                          <div className="text-3xl font-bold text-white mb-1">
                            {animatedCounts.platforms[index]}
                          </div>
                          <div className="text-sm text-slate-400">
                            Problems Solved
                          </div>
                        </div>

                        {/* Progress indicator */}
                        <div className="text-right">
                          <div className="text-sm text-slate-300 mb-1">
                            {platform.platform === "LeetCode" && "27.7%"}
                            {platform.platform === "CodeChef" && "2★"}
                            {platform.platform === "GeeksforGeeks" && "35+ days"}
                            {platform.platform === "Codeforces" && "Newbie"}
                          </div>
                          <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                platform.platform === "LeetCode" ? "bg-orange-400 w-3/4" :
                                platform.platform === "CodeChef" ? "bg-amber-400 w-1/2" :
                                platform.platform === "GeeksforGeeks" ? "bg-green-400 w-4/5" :
                                "bg-blue-400 w-1/4"
                              }`}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Rating and rank info */}
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        {platform.rating && (
                          <>
                            <div className="flex items-center gap-1">
                              <FaStar className="w-3 h-3 text-yellow-400" />
                              <span className="text-slate-300">Rating: {platform.rating}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMedal className="w-3 h-3 text-blue-400" />
                              <span className="text-slate-300">{platform.rank}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Bottom description text */}
                      <div className="text-xs text-slate-400 border-t border-slate-700/50 pt-3">
                        {platform.platform === "LeetCode" && "Solved 228+ problems across all difficulty levels"}
                        {platform.platform === "CodeChef" && "★★★ rated coder with 5 contests and best rank 13656"}
                        {platform.platform === "GeeksforGeeks" && "Solved 112+ problems with 5 day current streak"}
                        {platform.platform === "Codeforces" && "Newbie with 6 contests and best rank 13605"}
                      </div>
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
