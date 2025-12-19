import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const GITHUB_API_BASE = 'https://api.github.com';

// GitHub Personal Access Token - Get from environment variable
const GITHUB_PAT = import.meta.env.VITE_GITHUB_PAT || '';

// Usernames for different platforms
const USERNAMES = {
  github: 'yuvasrisai18',
  leetcode: 'Yuva_SriSai_18',
};

interface AnalyticsData {
  github: {
    totalCommits: number;
    totalRepos: number;
    totalCollaborators: number;
    totalContributions: number;
    currentMonthCommits: number;
    yearlyContributions: number;
    contributionData: Array<{ month: string; contributions: number }>;
    languageUsage: Array<{ name: string; percentage: number; color: string }>;
  };
  coding: {
    leetcode: {
      solved: number;
      easy: number;
      medium: number;
      hard: number;
      ranking: number;
      contributionData: Array<{ month: string; contributions: number }>;
    };
  };
}

export const useAnalyticsData = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch GitHub data - using official GitHub API
        const githubRes = await fetch(`${GITHUB_API_BASE}/users/${USERNAMES.github}`, {
          headers: GITHUB_PAT ? {
            'Authorization': `Bearer ${GITHUB_PAT}`,
            'Accept': 'application/vnd.github+json'
          } : {}
        });
        const githubProfileData = await githubRes.json();

        // Fetch GitHub repositories and languages
        const reposRes = await fetch(
          `${GITHUB_API_BASE}/users/${USERNAMES.github}/repos?per_page=100&sort=updated`,
          {
            headers: GITHUB_PAT ? {
              'Authorization': `Bearer ${GITHUB_PAT}`,
              'Accept': 'application/vnd.github+json'
            } : {}
          }
        );
        const reposData = await reposRes.json();

        // Aggregate language usage from repositories
        const languageUsage = aggregateLanguages(reposData);

        // Fetch GitHub calendar data from custom Vercel API for contributions graph
        const calendarRes = await fetch(`${BASE_URL}/github?username=${USERNAMES.github}`);
        const calendarData = await calendarRes.json();

        // Transform calendar data to monthly contributions
        const commitsPerMonth = transformCalendarDataToMonthly(calendarData?.github?.calendar || {});

        // Fetch LeetCode data
        const leetcodeRes = await fetch(`${BASE_URL}/leetcode?username=${USERNAMES.leetcode}`);
        const leetcodeData = await leetcodeRes.json();

        // Transform GitHub data to contribution activity with real commits
        const dailyContributions = transformGitHubData(commitsPerMonth);

        // Calculate current month commits and yearly contributions
        const currentMonth = new Date().toLocaleString('default', { month: 'short' });
        const currentYear = new Date().getFullYear().toString().slice(-2);
        const currentMonthData = commitsPerMonth.find(
          (m) => m.month === `${currentMonth}'${currentYear}`
        );
        const currentMonthCommits = currentMonthData?.contributions || 0;
        const yearlyContributions = commitsPerMonth.reduce(
          (sum, m) => sum + m.contributions,
          0
        );

        // Transform LeetCode data
        const leetcodeStats = transformLeetCodeData(leetcodeData);

        // Transform LeetCode calendar data to monthly contributions
        const leetcodeContributionData = transformCalendarDataToMonthly(leetcodeData?.calendar || {});

        const analyticsData: AnalyticsData = {
          github: {
            totalCommits: githubProfileData?.public_repos ,
            totalRepos: githubProfileData?.public_repos + githubProfileData?.total_private_repos,
            totalCollaborators: githubProfileData?.collaborators ,
            totalContributions: githubProfileData?.followers,
            currentMonthCommits: currentMonthCommits,
            yearlyContributions: yearlyContributions,
            contributionData: dailyContributions,
            languageUsage: languageUsage,
          },
          coding: {
            leetcode: {
              solved: leetcodeStats.solved || 0,
              easy: leetcodeStats.easy || 0,
              medium: leetcodeStats.medium || 0,
              hard: leetcodeStats.hard || 0,
              ranking: 15234,
              contributionData: leetcodeContributionData,
            },
          },
        };

        setData(analyticsData);
      } catch (err) {
        console.error('Error fetching analytics data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        // Set fallback data if API fails
        setData(getFallbackData());
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  return { data, loading, error };
};

// Helper function to transform calendar data to monthly contributions
const transformCalendarDataToMonthly = (calendarData: Record<string, number>) => {
  const monthlyTotals: {
    month: string;
    year: number;
    contributions: number;
  }[] = [];

  Object.entries(calendarData).forEach(([dateStr, count]) => {
    const date = new Date(dateStr);
    const monthName = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    const existingMonth = monthlyTotals.find(
      (m) => m.month === monthName && m.year === year
    );
    
    if (existingMonth) {
      existingMonth.contributions += count;
    } else {
      monthlyTotals.push({ month: monthName, year, contributions: count });
    }
  });

  // Sort by date
  monthlyTotals.sort((a, b) => {
    if (a.year === b.year) {
      return (
        new Date(`${a.month} 1, ${a.year}`).getMonth() -
        new Date(`${b.month} 1, ${b.year}`).getMonth()
      );
    }
    return a.year - b.year;
  });

  // Return in the format needed for charts
  return monthlyTotals.map((m) => ({
    month: `${m.month}'${m.year.toString().slice(-2)}`,
    contributions: m.contributions,
  }));
};

// Helper function to aggregate languages from repositories
const aggregateLanguages = (repos: any[]) => {
  const languageCounts: { [key: string]: number } = {};
  let totalBytes = 0;

  // Aggregate language usage from all repositories
  if (Array.isArray(repos)) {
    repos.forEach((repo: any) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + (repo.size || 0);
        totalBytes += repo.size || 0;
      }
    });
  }

  // Calculate percentages and assign colors
  const languageColorMap: { [key: string]: string } = {
    'JavaScript': '#F7DF1E',
    'TypeScript': '#3178C6',
    'Python': '#3776AB',
    'Java': '#ED8B00',
    'Go': '#00ADD8',
    'Rust': '#CE422B',
    'C': '#A8B9CC',
    'C++': '#00599C',
    'C#': '#239120',
    'PHP': '#777BB4',
    'Ruby': '#CC342D',
    'Swift': '#FA7343',
    'Kotlin': '#7F52FF',
    'HTML': '#E34C26',
    'CSS': '#563D7C',
  };

  const sortedLanguages = Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5) // Top 5 languages
    .map(([lang, bytes]) => ({
      name: lang,
      percentage: totalBytes ? Math.round((bytes / totalBytes) * 100) : 0,
      color: languageColorMap[lang] || '#6B7280',
    }));

  // If we have less than 5 languages, add "Other"
  const totalPercentage = sortedLanguages.reduce((sum, lang) => sum + lang.percentage, 0);
  if (totalPercentage < 100 && sortedLanguages.length > 0) {
    sortedLanguages.push({
      name: 'Other',
      percentage: 100 - totalPercentage,
      color: '#6B7280',
    });
  }

  // Return default if no languages found
  return sortedLanguages.length > 0
    ? sortedLanguages
    : [
        { name: 'JavaScript', percentage: 35, color: '#F7DF1E' },
        { name: 'TypeScript', percentage: 28, color: '#3178C6' },
        { name: 'Python', percentage: 20, color: '#3776AB' },
        { name: 'Java', percentage: 10, color: '#ED8B00' },
        { name: 'Other', percentage: 7, color: '#6B7280' },
      ];
};

// Helper function to transform GitHub API data to daily contributions
const transformGitHubData = (commitsData: Array<{ month: string; contributions: number }>) => {
  // If we have real commits data from API, use it
  if (commitsData && commitsData.length > 0) {
    return commitsData;
  }

  // Fallback to empty monthly data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month) => ({
    month,
    contributions: 0,
  }));
};

// Helper function to transform LeetCode data
const transformLeetCodeData = (leetcodeData: any) => {
  if (!leetcodeData?.profile?.problems_solved) {
    return { solved: 0, easy: 0, medium: 0, hard: 0 };
  }

  const problems = leetcodeData.profile.problems_solved;
  const stats: { [key: string]: number } = {};

  problems.forEach((problem: any) => {
    if (problem.difficulty === 'All') {
      stats['solved'] = problem.count;
    } else {
      stats[problem.difficulty.toLowerCase()] = problem.count;
    }
  });

  return {
    solved: stats['solved'] || 0,
    easy: stats['easy'] || 0,
    medium: stats['medium'] || 0,
    hard: stats['hard'] || 0,
  };
};

// Fallback data in case of API failure
const getFallbackData = (): AnalyticsData => ({
  github: {
    totalCommits: 0,
    totalRepos: 0,
    totalCollaborators: 0,
    totalContributions: 0,
    currentMonthCommits: 0,
    yearlyContributions: 0,
    contributionData: [],
    languageUsage: [],
  },
  coding: {
    leetcode: {
      solved: 0,
      easy: 0,
      medium: 0,
      hard: 0,
      ranking: 0,
      contributionData: [],
    },
  },
});
