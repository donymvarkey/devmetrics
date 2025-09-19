import { searchGithubRepos } from "@/api";
import CustomDialog from "@/components/CustomDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/hooks";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import type { RepoSearchItem, RepoSearchResponse } from "@/types/types";
import { GitFork, PlusCircle, Star, X } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [addRepoDialog, setAddRepoDialog] = useState<boolean>(false);
  const [repoName, setRepoName] = useState("");
  const [selectedRepo, setSelectedRepo] = useState<RepoSearchItem | null>(null);
  const [searchResults, setSearchResults] = useState<RepoSearchItem[]>([]);
  const debouncedQuery = useDebounce(repoName, 500);
  const { currentRepo } = useAppSelector((state) => state.repo);
  console.log("🚀 ~ Dashboard ~ currentRepo:", currentRepo);

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

  useEffect(() => {
    if (debouncedQuery) {
      searchRepositories(debouncedQuery);
    }
  }, [debouncedQuery]);

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
      {currentRepo === null && (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-gray-50/30">
            You don't have added any repositories
          </h1>
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
