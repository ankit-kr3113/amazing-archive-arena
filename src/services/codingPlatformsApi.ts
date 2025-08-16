const API_BASE_URL = 'https://portfolio-1-1rg6.onrender.com/api/v1';

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  ranking: number;
  languages?: string[];
  problemsSolved: {
    easy: number;
    medium: number;
    hard: number;
  };
  submissionStats?: {
    totalSubmissions: number;
    acceptanceRate: number;
  };
  badges?: any[];
  recentSubmissions?: any[];
}

export interface CodeForcesStats {
  handle: string;
  rating: number;
  rank: string;
  maxRating: number;
  maxRank: string;
  contribution: number;
  friendOfCount?: number;
  lastOnlineTimeSeconds?: number;
  registrationTimeSeconds?: number;
  problemsSolved: number;
  contestsParticipated: number;
  submissions?: any[];
}

export interface CodeChefStats {
  username: string;
  rating: number;
  stars: number;
  highestRating: number;
  globalRank: number;
  countryRank: number;
  problemsSolved: number;
  contests?: any[];
  badges?: any[];
}

export interface GFGStats {
  username: string;
  institution?: string;
  score: number;
  rank: number;
  problemsSolved: number;
  codingScore: number;
  monthlyCoding?: number;
  weeklyStreak?: number;
  totalSubmissions?: number;
  badges?: any[];
}

export interface AllPlatformStats {
  leetcode: LeetCodeStats;
  codeforces: CodeForcesStats;
  codechef: CodeChefStats;
  gfg: GFGStats;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  lastUpdated?: string;
  message?: string;
  errors?: string[];
}

class CodingPlatformsApi {
  private async fetchWithTimeout(url: string, timeout = 10000): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async getAllPlatformData(): Promise<AllPlatformStats | null> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/codingPlatforms/all`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<AllPlatformStats> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.message || 'Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching all platform data:', error);
      return null;
    }
  }

  async getLeetCodeData(): Promise<LeetCodeStats | null> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/codingPlatforms/leetcode`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<LeetCodeStats> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.message || 'Failed to fetch LeetCode data');
      }
    } catch (error) {
      console.error('Error fetching LeetCode data:', error);
      return null;
    }
  }

  async getCodeForcesData(): Promise<CodeForcesStats | null> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/codingPlatforms/codeforces`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<CodeForcesStats> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.message || 'Failed to fetch CodeForces data');
      }
    } catch (error) {
      console.error('Error fetching CodeForces data:', error);
      return null;
    }
  }

  async getCodeChefData(): Promise<CodeChefStats | null> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/codingPlatforms/codechef`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<CodeChefStats> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.message || 'Failed to fetch CodeChef data');
      }
    } catch (error) {
      console.error('Error fetching CodeChef data:', error);
      return null;
    }
  }

  async getGFGData(): Promise<GFGStats | null> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/codingPlatforms/gfg`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result: ApiResponse<GFGStats> = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error(result.message || 'Failed to fetch GFG data');
      }
    } catch (error) {
      console.error('Error fetching GFG data:', error);
      return null;
    }
  }

  async checkServerHealth(): Promise<boolean> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/health`, 5000);
      return response.ok;
    } catch (error) {
      console.error('Server health check failed:', error);
      return false;
    }
  }
}

export const codingPlatformsApi = new CodingPlatformsApi();
