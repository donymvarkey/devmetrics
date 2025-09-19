import octokit from "@/configs/octokitConfig";

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
