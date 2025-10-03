import octokit from "@/configs/octokitConfig";
import { subDays } from "date-fns";

export const searchGithubRepos = async (query: string) => {
  try {
    const response = await octokit.request("GET /search/repositories", {
      q: query,
      per_page: 10,
    });

    return response?.data;
  } catch (error) {
    return error;
  }
};

export async function getRepoStats(owner: string, repo: string) {
  try {
    // Get repository metadata
    const { data: repoData } = await octokit.rest.repos.get({
      owner,
      repo,
    });

    // Get issues
    const { data: openIssues } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: "open",
      per_page: 100,
    });

    const { data: closedIssues } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: "closed",
      per_page: 100,
    });

    // Get PRs
    const { data: openPRs } = await octokit.rest.pulls.list({
      owner,
      repo,
      state: "open",
      per_page: 100,
    });

    const { data: closedPRs } = await octokit.rest.pulls.list({
      owner,
      repo,
      state: "closed",
      per_page: 100,
    });

    // Get contributors (commit activity)
    const { data: contributors } = await octokit.rest.repos.listContributors({
      owner,
      repo,
    });

    return {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      watchers: repoData.subscribers_count,
      openIssuesCount: repoData.open_issues_count, // includes PRs
      openIssues: openIssues.length,
      closedIssues: closedIssues.length,
      openPRs: openPRs.length,
      closedPRs: closedPRs.length,
      contributors: contributors.length,
      totalCommits: contributors.reduce(
        (acc, c) => acc + (c.contributions || 0),
        0
      ),
    };
  } catch (error) {
    console.error("Error fetching repo stats:", error);
    throw error;
  }
}

export const listCollaborators = async (owner: string, repo: string) => {
  try {
    const collaborators = await octokit.request(
      "GET /repos/{owner}/{repo}/contributors",
      {
        owner,
        repo,
        per_page: 12,
      }
    );
    return collaborators.data;
  } catch (error) {
    console.error("Error fetching collaborators:", error);
    throw error;
  }
};

export const getCommitActivity = async (owner: string, repo: string) => {
  try {
    const since = subDays(new Date(), 30); // 30 days ago
    const until = new Date();

    const commits = await octokit.paginate(octokit.rest.repos.listCommits, {
      owner,
      repo,
      since: since.toISOString(), // ✅ Correct format
      until: until.toISOString(), // ✅ Correct format
      per_page: 100,
    });

    // Group commits by day
    const dailyCommits: Record<string, number> = {};

    commits.forEach((commit) => {
      const date = new Date(commit.commit.author?.date || "")
        .toISOString()
        .split("T")[0];
      dailyCommits[date] = (dailyCommits[date] || 0) + 1;
    });

    // Fill missing days with 0 commits
    const result: { date: string; count: number }[] = [];
    for (let i = 0; i < 30; i++) {
      const day = subDays(until, i).toISOString().split("T")[0];
      result.unshift({
        date: day,
        count: dailyCommits[day] || 0,
      });
    }

    return result;
  } catch (error) {
    console.error("Error fetching commit activity:", error);
    throw error;
  }
};
