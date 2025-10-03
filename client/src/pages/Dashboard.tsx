import {
  getCommitActivity,
  getRecentActivity,
  listCollaborators,
  searchGithubRepos,
} from "@/api";
import CommitGraph from "@/components/CommitGraph";
import ContributorsList from "@/components/ContributorsList";
import CustomDialog from "@/components/CustomDialog";
import RecentActivities from "@/components/RecentActivities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/hooks";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import {
  type ContributorProps,
  type RepoSearchItem,
  type RepoSearchResponse,
} from "@/types/types";
import { GitFork, PlusCircle, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Dashboard = () => {
  const [addRepoDialog, setAddRepoDialog] = useState<boolean>(false);
  const [repoName, setRepoName] = useState("");
  const [selectedRepo, setSelectedRepo] = useState<RepoSearchItem | null>(null);
  const [searchResults, setSearchResults] = useState<RepoSearchItem[]>([]);
  const [contributors, setContributors] = useState<ContributorProps[]>([]);
  const [commitData, setCommitData] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const debouncedQuery = useDebounce(repoName, 500);
  const { currentRepo } = useAppSelector((state) => state.repo);

  const searchRepositories = async (query: string) => {
    if (!query) return;
    const response = (await searchGithubRepos(query)) as RepoSearchResponse;
    setSearchResults(response.items as RepoSearchItem[]);
  };

  const handleRepoSelect = (repo: RepoSearchItem) => {
    setSelectedRepo(repo);
    // setAddRepoDialog(false);
    // setRepoName("");
  };

  const handleSaveSelectedRepo = () => {
    console.log("Saving repo:", selectedRepo);
    // Implement the logic to save the selected repository
  };

  const handleClearSearch = () => {
    setRepoName("");
    setSelectedRepo(null);
    setSearchResults([]);
  };

  const getContributorsData = async () => {
    if (currentRepo?.owner?.login && currentRepo?.name) {
      const collaborators = await listCollaborators(
        currentRepo.owner.login,
        currentRepo.name
      );

      setContributors(collaborators as ContributorProps[]);
    }
  };

  const getCommitData = async () => {
    if (currentRepo?.owner?.login && currentRepo?.name) {
      const commits = await getCommitActivity(
        currentRepo.owner.login,
        currentRepo.name
      );
      setCommitData(commits as []);
      // console.log("Commits in the last 30 days:", commits);
    }
  };

  const getRecentRepoActivity = async () => {
    if (currentRepo?.owner?.login && currentRepo?.name) {
      const activity = await getRecentActivity(
        currentRepo.owner.login,
        currentRepo.name
      );
      setRecentActivity(activity as []);
    }
  };

  useEffect(() => {
    if (debouncedQuery) {
      searchRepositories(debouncedQuery);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    getCommitData();
    getContributorsData();
    getRecentRepoActivity();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="space-y-2 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-400">
            Dashboard
          </h1>
          <p className="text-gray-600 text-sm">
            Comprehensive analytics for your open source contributions
          </p>
        </div>
        <Button
          onClick={() => setAddRepoDialog(true)}
          className="bg-blue-500 text-gray-50"
        >
          <PlusCircle />
          <p>Link new Repo</p>
        </Button>
      </div>
      {currentRepo === null ? (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-gray-50/30">
            You don't have added any repositories
          </h1>
        </div>
      ) : (
        <div className="mt-5 p-5 bg-gray-800 rounded-md border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-row space-x-3">
              <img
                src={currentRepo?.owner?.avatar_url}
                className="w-5 h-5 rounded-full"
              />
              <Link
                to={currentRepo?.html_url}
                target="_blank"
                className="text-gray-300 font-semibold hover:underline hover:text-gray-200"
              >
                {currentRepo?.name}
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <Star className="size-4 text-amber-500 inline mr-1" />
                <span className="text-gray-50 text-xs">
                  {currentRepo?.stargazers_count}
                </span>
              </div>
              <div>
                <GitFork className="size-4 text-amber-500 inline mr-1" />
                <span className="text-gray-50 text-xs">
                  {currentRepo?.forks_count}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-xs text-gray-400/40 font-medium">About</span>
            <p className="text-gray-300 mt-4">{currentRepo?.description}</p>
            <div className="mt-2 flex items-center space-x-2">
              {currentRepo?.topics?.map((topic, index) => (
                <Badge className="bg-gray-200/20 text-gray-100" key={index}>
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <ContributorsList
              contributors={contributors}
              title="Top Contributors"
            />
          </div>
          <div>
            <CommitGraph data={commitData} />
          </div>
          <div>
            <RecentActivities recentEvents={recentActivity} />
          </div>
        </div>
      )}
      {addRepoDialog && (
        <CustomDialog
          title="Link a new Repository"
          description="Add a new repository to see the latest data"
          open={addRepoDialog}
          onOpenChange={() => {
            setAddRepoDialog(false);
            handleClearSearch();
          }}
        >
          <div className=" space-y-2">
            <Label className="text-gray-500 font-normal text-sm">
              Repository Name
            </Label>
            <div className="border border-gray-50/10 rounded-full py-1 flex px-1 items-center">
              <Input
                className="text-gray-50 border-0 placeholder:text-gray-400/30"
                placeholder="eg: facebook/react"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value.trim())}
              />
              {debouncedQuery && (
                <Button onClick={handleClearSearch}>
                  <X className="text-gray-100" />
                </Button>
              )}
            </div>
          </div>
          {searchResults.length > 0 && (
            <div className="max-h-60 overflow-y-auto border border-gray-50/10 rounded-md mt-5">
              {searchResults.length > 0 &&
                searchResults.map((item, index) => (
                  <div
                    role="button"
                    onClick={() => handleRepoSelect(item)}
                    key={index}
                    className={cn(
                      "p-2 border-b border-gray-50/10 hover:bg-gray-50/5 cursor-pointer flex items-center justify-between space-x-3",
                      selectedRepo?.id === item.id &&
                        "bg-gray-900 hover:bg-gray-950"
                    )}
                  >
                    <p className="text-gray-50 text-sm">{item?.full_name}</p>
                    <div className="flex items-center text-xs justify-end space-x-3 flex-1">
                      <div className="flex items-center">
                        <GitFork className="size-4 text-gray-200 mr-1" />
                        <span className="text-gray-50 text-xs">
                          {item?.forks_count}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="size-4 text-gray-200 mr-1" />
                        <span className="text-gray-50 text-xs">
                          {item?.stargazers_count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {!!selectedRepo && (
            <Button
              onClick={handleSaveSelectedRepo}
              className="w-full bg-blue-500 mt-4 text-gray-50 h-10 rounded-full"
            >
              Save
            </Button>
          )}
        </CustomDialog>
      )}
    </div>
  );
};

export default Dashboard;
