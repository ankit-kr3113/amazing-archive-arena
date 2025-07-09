
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Coding = () => {
  const codingStats = [
    { platform: "LeetCode", solved: "231", rating: "1573", rank: "Top 27.1%", color: "text-orange-500" },
    { platform: "CodeChef", solved: "19", rating: "1452+", rank: "3 Star", color: "text-brown-500" },
    { platform: "GeeksforGeeks", solved: "114", rating: "Institute Rank: 1144", streak: "7 day streak", color: "text-green-500" },
    { platform: "Codeforces", solved: "10", rating: "879+", rank: "Newbie", color: "text-blue-500" }
  ];

  const achievements = [
    {
      title: "LeetCode Weekly Contest",
      description: "Ranked in top 27.7% globally on LeetCode with 9 contests attended",
      icon: "🏆"
    },
    {
      title: "LeetCode Problem Solver",
      description: "Solved 228 problems with current streak of 3 days and max streak of 15 days",
      icon: "⚡"
    },
    {
      title: "CodeChef Starters",
      description: "Achieved Global Rank 1238 in CodeChef Starters 136 with 6 contests attended",
      icon: "🥉"
    },
    {
      title: "GfG 160 Challenge",
      description: "Completed 35+ days of GfG 160 challenge with 40+ problems solved",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              🎯 Competitive Programming
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Coding <span className="gradient-text">Proficiency</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Algorithmic problem-solving across multiple competitive programming platforms with
              focus on data structures, algorithms, and optimization
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
                  <div className="text-4xl font-bold gradient-text">374</div>
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
                  <Button variant="outline" size="sm" className="text-primary border-primary/40">
                    Visit
                  </Button>
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
                      <div className="text-sm">112</div>
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
                      <div className="text-sm">33</div>
                    </div>
                    <div className="bg-yellow-500/10 rounded p-2">
                      <div className="font-bold text-yellow-500">Medium</div>
                      <div className="text-sm">82</div>
                    </div>
                    <div className="bg-red-500/10 rounded p-2">
                      <div className="font-bold text-red-500">Hard</div>
                      <div className="text-sm">2</div>
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
