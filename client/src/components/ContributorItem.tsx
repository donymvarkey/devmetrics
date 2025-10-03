import type { ContributorProps } from "@/types/types";
import { GitCommit } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router";

const ContributorItem = ({
  contributor,
}: {
  contributor: ContributorProps;
}) => {
  const { login, id, avatar_url, html_url, contributions } = contributor;
  return (
    <div
      key={id}
      className="flex items-center justify-center flex-col border rounded-lg border-gray-500/10 p-5 shadow-md"
    >
      <img src={avatar_url} className="w-22 h-22 rounded-full" />
      <div className="flex-1 mt-1 flex items-center space-x-2">
        <SiGithub className="size-4 text-gray-100" />
        <Link
          to={html_url}
          className="hover:text-gray-100 hover:underline text-gray-50 font-medium text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {login}
        </Link>
      </div>
      <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
        <GitCommit className="size-4 text-gray-400" />
        <span className="text-lg">{contributions}</span>
      </div>
    </div>
  );
};

export default ContributorItem;
