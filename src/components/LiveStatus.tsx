import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  GitCommit, 
  Star, 
  GitFork, 
  TrendingUp, 
  Code, 
  Trophy, 
  Target,
  Calendar,
  Clock,
  ExternalLink,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { FaGithub, FaCode } from 'react-icons/fa';
import { githubApi, GitHubStats } from '@/services/githubApi';
import { leetcodeApi, LeetCodeStats, LeetCodeProgress } from '@/services/leetcodeApi';

interface LiveStatusProps {
  className?: string;
}

const LiveStatus = ({ className = '' }: LiveStatusProps) => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [leetcodeProgress, setLeetcodeProgress] = useState<LeetCodeProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Fetch data from APIs
  const fetchData = async () => {
    setLoading(true);
    try {
      const [githubData, leetcodeData, leetcodeProgressData] = await Promise.all([
        githubApi.getGitHubStats(),
        leetcodeApi.getUserStats(),
        leetcodeApi.getProgress()
      ]);
      
      setGithubStats(githubData);
      setLeetcodeStats(leetcodeData);
      setLeetcodeProgress(leetcodeProgressData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching live data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshData = () => {
    fetchData();
  };

  if (loading) {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="flex items-center justify-center h-32">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Loading live data...</span>
        </div>
      </Card>
    );
  }

  const skillLevel = leetcodeStats ? leetcodeApi.getSkillLevel(leetcodeStats.totalSolved) : null;
  const rankingPercentile = leetcodeStats ? leetcodeApi.getRankingPercentile(leetcodeStats.ranking) : null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with refresh */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-bold">Live Activity Dashboard</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            Updated {lastUpdated.toLocaleTimeString()}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={refreshData}
            disabled={loading}
            className="h-8 w-8 p-0"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>

      {/* GitHub Stats */}
      {githubStats && (
        <Card className="p-6 border-primary/20 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
                <FaGithub className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">GitHub Activity</h3>
                <p className="text-sm text-muted-foreground">Real-time repository data</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Live
            </Badge>
          </div>

          {/* GitHub Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Code className="w-4 h-4 text-blue-500" />
                <span className="text-2xl font-bold text-blue-500">{githubStats.totalRepos}</span>
              </div>
              <p className="text-xs text-muted-foreground">Repositories</p>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-2xl font-bold text-yellow-500">{githubStats.totalStars}</span>
              </div>
              <p className="text-xs text-muted-foreground">Stars</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <GitFork className="w-4 h-4 text-green-500" />
                <span className="text-2xl font-bold text-green-500">{githubStats.totalForks}</span>
              </div>
              <p className="text-xs text-muted-foreground">Forks</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <GitCommit className="w-4 h-4 text-purple-500" />
                <span className="text-2xl font-bold text-purple-500">{githubStats.streakDays}</span>
              </div>
              <p className="text-xs text-muted-foreground">Active Days</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Recent Activity
            </h4>
            {githubStats.recentActivity.slice(0, 3).map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground flex-1">
                  {githubApi.formatActivity(activity)}
                </span>
              </div>
            ))}
          </div>

          <Button 
            asChild 
            size="sm" 
            variant="outline" 
            className="w-full mt-4"
          >
            <a href="https://github.com/yuvraj-mehta" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-2" />
              View GitHub Profile
            </a>
          </Button>
        </Card>
      )}

      {/* LeetCode Stats */}
      {leetcodeStats && (
        <Card className="p-6 border-primary/20 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">LeetCode Progress</h3>
                <p className="text-sm text-muted-foreground">Problem solving statistics</p>
              </div>
            </div>
            <div className="text-right">
              {skillLevel && (
                <Badge className={`${skillLevel.color} mb-1`}>
                  {skillLevel.level}
                </Badge>
              )}
              {rankingPercentile && (
                <p className="text-xs text-muted-foreground">Top {rankingPercentile}%</p>
              )}
            </div>
          </div>

          {/* LeetCode Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Trophy className="w-4 h-4 text-orange-500" />
                <span className="text-2xl font-bold text-orange-500">{leetcodeStats.totalSolved}</span>
              </div>
              <p className="text-xs text-muted-foreground">Problems Solved</p>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Target className="w-4 h-4 text-green-500" />
                <span className="text-2xl font-bold text-green-500">{leetcodeStats.acceptanceRate.toFixed(1)}%</span>
              </div>
              <p className="text-xs text-muted-foreground">Acceptance Rate</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-2xl font-bold text-blue-500">#{leetcodeStats.ranking.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground">Global Rank</p>
            </div>

            <div className="text-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <span className="text-2xl font-bold text-purple-500">
                  {leetcodeProgress?.currentStreak || 0}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
          </div>

          {/* Difficulty Breakdown */}
          <div className="space-y-3 mb-4">
            <h4 className="font-medium text-sm">Difficulty Breakdown</h4>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600">Easy</span>
                <span className="text-sm font-medium">{leetcodeStats.easySolved}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(leetcodeStats.easySolved / leetcodeStats.totalSolved) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-yellow-600">Medium</span>
                <span className="text-sm font-medium">{leetcodeStats.mediumSolved}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(leetcodeStats.mediumSolved / leetcodeStats.totalSolved) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-red-600">Hard</span>
                <span className="text-sm font-medium">{leetcodeStats.hardSolved}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(leetcodeStats.hardSolved / leetcodeStats.totalSolved) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Recent Submissions */}
          {leetcodeProgress && leetcodeProgress.recentSubmissions.length > 0 && (
            <div className="space-y-2 mb-4">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <Code className="w-4 h-4" />
                Recent Submissions
              </h4>
              {leetcodeProgress.recentSubmissions.slice(0, 3).map((submission, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-muted-foreground flex-1">
                    {leetcodeApi.formatSubmission(submission)}
                  </span>
                </div>
              ))}
            </div>
          )}

          <Button 
            asChild 
            size="sm" 
            variant="outline" 
            className="w-full"
          >
            <a href={`https://leetcode.com/u/${leetcodeApi['username']}`} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-2" />
              View LeetCode Profile
            </a>
          </Button>
        </Card>
      )}

      {/* Combined Statistics */}
      <Card className="p-6 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Combined Progress</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Development Activity</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Code Commits</span>
              <span className="font-medium">{githubStats?.totalCommits || 0}+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Active Projects</span>
              <span className="font-medium">{githubStats?.totalRepos || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Community Stars</span>
              <span className="font-medium">{githubStats?.totalStars || 0}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Problem Solving</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Problems</span>
              <span className="font-medium">{leetcodeStats?.totalSolved || 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Success Rate</span>
              <span className="font-medium">{leetcodeStats?.acceptanceRate.toFixed(1) || 0}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Streak</span>
              <span className="font-medium">{leetcodeProgress?.currentStreak || 0} days</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiveStatus;
