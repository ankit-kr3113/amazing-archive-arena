import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Coding = () => {
  const codingStats = [
    { platform: "LeetCode", solved: "228", rating: "1570", rank: "Top 27.7%", color: "text-orange-500", url: "https://leetcode.com/u/mythical-UV/" },
    { platform: "CodeChef", solved: "25", rating: "1270", rank: "2★ Coder (Division 3)", color: "text-brown-500", url: "https://www.codechef.com/users/quick_unity_53" },
    { platform: "GeeksforGeeks", solved: "70", rating: "Rank #1455", streak: "35+ day streak", color: "text-green-500", url: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/" },
    { platform: "Codeforces", solved: "10", rating: "900", rank: "Newbie", color: "text-blue-500", url: "https://codeforces.com/" }
  ];

  const achievements = [
    {
      title: "LeetCode Global Ranking",
      description: "Ranked in top 27.7% globally on LeetCode with 228+ problems solved",
      icon: "🏆"
    },
    {
      title: "CodeChef Starters 186",
      description: "Achieved Global Rank 1238 in CodeChef Starters 186",
      icon: "🥉"
    },
    {
      title: "GfG 160 Challenge",
      description: "35+ day streak in GfG 160 challenge",
      icon: "🎯"
    },
    {
      title: "Competitive Programming",
      description: "Participated in 3+ competitive contests on Codeforces",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full text-amber-600 text-xs font-medium mb-2">
              <span>⚡</span>
              <span>Coding</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
              Competitive Programming
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Algorithm mastery across multiple platforms
            </p>
          </div>

          {/* Coding Stats Overview */}
          <div className="mb-16">
            <Card className="portfolio-card text-center slide-up">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text">333</div>
                  <div className="text-muted-foreground">Total Problems Solved</div>
                  <div className="text-sm text-muted-foreground">Across all competitive programming platforms</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {codingStats.map((platform, index) => (
              <Card key={index} className="portfolio-card slide-up">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{platform.platform}</h3>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="text-primary border-primary/40">
                      Visit
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold gradient-text">{platform.solved}</div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  {platform.rating && (
                    <div>
                      <div className={`text-lg font-bold ${platform.color}`}>
                        ⭐ Rating: {platform.rating}
                      </div>
                      <div className="text-sm text-muted-foreground">{platform.rank}</div>
                    </div>
                  )}
                </div>

                {platform.platform === "LeetCode" && (
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-green-500/10 rounded p-2">
                      <div className="font-bold text-green-500">Easy</div>
                      <div className="text-sm">109</div>
                    </div>
                    <div className="bg-yellow-500/10 rounded p-2">
                      <div className="font-bold text-yellow-500">Medium</div>
                      <div className="text-sm">115</div>
                    </div>
                    <div className="bg-red-500/10 rounded p-2">
                      <div className="font-bold text-red-500">Hard</div>
                      <div className="text-sm">4</div>
                    </div>
                  </div>
                )}

                {platform.platform === "GeeksforGeeks" && (
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-green-500/10 rounded p-2">
                      <div className="font-bold text-green-500">Easy</div>
                      <div className="text-sm">32</div>
                    </div>
                    <div className="bg-yellow-500/10 rounded p-2">
                      <div className="font-bold text-yellow-500">Medium</div>
                      <div className="text-sm">30</div>
                    </div>
                    <div className="bg-red-500/10 rounded p-2">
                      <div className="font-bold text-red-500">Hard</div>
                      <div className="text-sm">8</div>
                    </div>
                  </div>
                )}

                {platform.streak && (
                  <div className="mt-3 text-center">
                    <Badge variant="outline" className="text-primary border-primary/40">
                      🔥 {platform.streak}
                    </Badge>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Notable Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-xl">🏆</span>
              </div>
              <h2 className="text-2xl font-bold">Notable Achievements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="portfolio-card slide-up">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{achievement.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coding;
