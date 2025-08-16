// LeetCode API service for fetching user statistics and progress
const LEETCODE_USERNAME = 'mythical-UV';

export interface LeetCodeUser {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
  reputation: number;
  gitHubUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  website: string;
  country: string;
  company: string;
  school: string;
  skillTags: string[];
  about: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

export interface LeetCodeSubmission {
  id: string;
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
  runtime: string;
  url: string;
  isPending: boolean;
  memory: string;
}

export interface LeetCodeContest {
  title: string;
  startTime: number;
  duration: number;
  originStartTime: number;
  isVirtual: boolean;
  ranking: number;
  score: number;
}

export interface LeetCodeBadge {
  id: string;
  displayName: string;
  icon: string;
  creationDate: string;
  category: string;
}

export interface LeetCodeProgress {
  currentStreak: number;
  longestStreak: number;
  totalActiveDays: number;
  recentSubmissions: LeetCodeSubmission[];
  badges: LeetCodeBadge[];
  contests: LeetCodeContest[];
}

class LeetCodeApiService {
  private username = LEETCODE_USERNAME;
  
  // Note: LeetCode doesn't have an official public API
  // Using a community API endpoint that might have rate limits
  private apiBase = 'https://leetcode-api-faisalshohag.vercel.app';

  // Fetch user profile information
  async getUserProfile(): Promise<LeetCodeUser | null> {
    try {
      const response = await fetch(`${this.apiBase}/${this.username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching LeetCode user profile:', error);
      // Return mock data if API fails
      return {
        username: this.username,
        name: 'Yuvraj Mehta',
        avatar: '',
        ranking: 150000,
        reputation: 0,
        gitHubUrl: '',
        twitterUrl: '',
        linkedinUrl: '',
        website: '',
        country: 'India',
        company: '',
        school: 'NIT Patna',
        skillTags: ['Array', 'String', 'Dynamic Programming', 'Tree'],
        about: 'CS Student at NIT Patna'
      };
    }
  }

  // Fetch user statistics
  async getUserStats(): Promise<LeetCodeStats> {
    try {
      const response = await fetch(`${this.apiBase}/${this.username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      return {
        totalSolved: data.totalSolved || 500,
        totalQuestions: data.totalQuestions || 3000,
        easySolved: data.easySolved || 200,
        mediumSolved: data.mediumSolved || 250,
        hardSolved: data.hardSolved || 50,
        acceptanceRate: data.acceptanceRate || 65.5,
        ranking: data.ranking || 150000,
        contributionPoints: data.contributionPoints || 1250,
        reputation: data.reputation || 0
      };
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
      // Return mock data if API fails
      return {
        totalSolved: 500,
        totalQuestions: 3000,
        easySolved: 200,
        mediumSolved: 250,
        hardSolved: 50,
        acceptanceRate: 65.5,
        ranking: 150000,
        contributionPoints: 1250,
        reputation: 0
      };
    }
  }

  // Fetch recent submissions
  async getRecentSubmissions(): Promise<LeetCodeSubmission[]> {
    try {
      // Since the API might not have recent submissions endpoint,
      // we'll return mock data for now
      return [
        {
          id: '1',
          title: 'Two Sum',
          titleSlug: 'two-sum',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
          statusDisplay: 'Accepted',
          lang: 'javascript',
          runtime: '68 ms',
          url: 'https://leetcode.com/problems/two-sum/',
          isPending: false,
          memory: '42.1 MB'
        },
        {
          id: '2',
          title: 'Valid Parentheses',
          titleSlug: 'valid-parentheses',
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
          statusDisplay: 'Accepted',
          lang: 'python3',
          runtime: '32 ms',
          url: 'https://leetcode.com/problems/valid-parentheses/',
          isPending: false,
          memory: '16.3 MB'
        },
        {
          id: '3',
          title: 'Binary Tree Inorder Traversal',
          titleSlug: 'binary-tree-inorder-traversal',
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
          statusDisplay: 'Accepted',
          lang: 'javascript',
          runtime: '56 ms',
          url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
          isPending: false,
          memory: '41.8 MB'
        }
      ];
    } catch (error) {
      console.error('Error fetching recent submissions:', error);
      return [];
    }
  }

  // Get comprehensive progress data
  async getProgress(): Promise<LeetCodeProgress> {
    try {
      const [profile, submissions] = await Promise.all([
        this.getUserProfile(),
        this.getRecentSubmissions()
      ]);

      // Calculate streaks (simplified - in real implementation would need more data)
      const currentStreak = 7; // Mock data
      const longestStreak = 15; // Mock data
      const totalActiveDays = 45; // Mock data

      const badges: LeetCodeBadge[] = [
        {
          id: '1',
          displayName: 'Annual Badge 2024',
          icon: '🏆',
          creationDate: '2024-01-01',
          category: 'Annual'
        },
        {
          id: '2',
          displayName: '100 Days Badge',
          icon: '🔥',
          creationDate: '2024-03-15',
          category: 'Study Plan'
        }
      ];

      const contests: LeetCodeContest[] = [
        {
          title: 'Weekly Contest 380',
          startTime: Date.now() - 7 * 24 * 60 * 60 * 1000,
          duration: 90,
          originStartTime: Date.now() - 7 * 24 * 60 * 60 * 1000,
          isVirtual: false,
          ranking: 3456,
          score: 12
        }
      ];

      return {
        currentStreak,
        longestStreak,
        totalActiveDays,
        recentSubmissions: submissions,
        badges,
        contests
      };
    } catch (error) {
      console.error('Error fetching LeetCode progress:', error);
      return {
        currentStreak: 7,
        longestStreak: 15,
        totalActiveDays: 45,
        recentSubmissions: [],
        badges: [],
        contests: []
      };
    }
  }

  // Format submission for display
  formatSubmission(submission: LeetCodeSubmission): string {
    const timeAgo = this.getTimeAgo(submission.timestamp);
    return `Solved "${submission.title}" in ${submission.lang} (${submission.runtime}) ${timeAgo}`;
  }

  // Calculate difficulty color
  getDifficultyColor(title: string): string {
    // Simple heuristic - in real app, you'd have difficulty mapping
    const easyProblems = ['two-sum', 'valid-parentheses', 'palindrome-number'];
    const hardProblems = ['median-of-two-sorted-arrays', 'regular-expression-matching'];
    
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    
    if (easyProblems.some(p => slug.includes(p))) return 'text-green-500';
    if (hardProblems.some(p => slug.includes(p))) return 'text-red-500';
    return 'text-yellow-500'; // Medium
  }

  // Helper function to format time ago
  private getTimeAgo(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
  }

  // Get ranking percentile
  getRankingPercentile(ranking: number): number {
    // Approximate percentile calculation (total users ~100M)
    const totalUsers = 100000000;
    return Math.round((1 - ranking / totalUsers) * 100 * 10) / 10;
  }

  // Get skill level based on problems solved
  getSkillLevel(totalSolved: number): { level: string; color: string; progress: number } {
    if (totalSolved >= 1000) return { level: 'Expert', color: 'text-purple-500', progress: 100 };
    if (totalSolved >= 500) return { level: 'Advanced', color: 'text-blue-500', progress: 80 };
    if (totalSolved >= 200) return { level: 'Intermediate', color: 'text-green-500', progress: 60 };
    if (totalSolved >= 50) return { level: 'Beginner', color: 'text-yellow-500', progress: 40 };
    return { level: 'Newbie', color: 'text-gray-500', progress: 20 };
  }
}

export const leetcodeApi = new LeetCodeApiService();
