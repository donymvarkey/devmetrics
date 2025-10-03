import { SiBitbucket, SiGithub, SiGitlab } from "react-icons/si";

const platforms = [
  {
    name: "GitHub",
    icon: SiGithub,
    id: "github",
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    id: "gitlab",
  },
  {
    name: "Bitbucket",
    icon: SiBitbucket,
    id: "bitbucket",
  },
];

const DEMO_REPO = {
  id: 10270250,
  node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
  name: "react",
  full_name: "facebook/react",
  private: false,
  owner: {
    login: "facebook",
    id: 69631,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
    avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/facebook",
    html_url: "https://github.com/facebook",
    followers_url: "https://api.github.com/users/facebook/followers",
    following_url:
      "https://api.github.com/users/facebook/following{/other_user}",
    gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
    starred_url: "https://api.github.com/users/facebook/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
    organizations_url: "https://api.github.com/users/facebook/orgs",
    repos_url: "https://api.github.com/users/facebook/repos",
    events_url: "https://api.github.com/users/facebook/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/facebook/received_events",
    type: "Organization",
    user_view_type: "public",
    site_admin: false,
  },
  html_url: "https://github.com/facebook/react",
  description: "The library for web and native user interfaces.",
  fork: false,
  url: "https://api.github.com/repos/facebook/react",
  forks_url: "https://api.github.com/repos/facebook/react/forks",
  keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/facebook/react/teams",
  hooks_url: "https://api.github.com/repos/facebook/react/hooks",
  issue_events_url:
    "https://api.github.com/repos/facebook/react/issues/events{/number}",
  events_url: "https://api.github.com/repos/facebook/react/events",
  assignees_url: "https://api.github.com/repos/facebook/react/assignees{/user}",
  branches_url: "https://api.github.com/repos/facebook/react/branches{/branch}",
  tags_url: "https://api.github.com/repos/facebook/react/tags",
  blobs_url: "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/facebook/react/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/facebook/react/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/facebook/react/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/facebook/react/statuses/{sha}",
  languages_url: "https://api.github.com/repos/facebook/react/languages",
  stargazers_url: "https://api.github.com/repos/facebook/react/stargazers",
  contributors_url: "https://api.github.com/repos/facebook/react/contributors",
  subscribers_url: "https://api.github.com/repos/facebook/react/subscribers",
  subscription_url: "https://api.github.com/repos/facebook/react/subscription",
  commits_url: "https://api.github.com/repos/facebook/react/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/facebook/react/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/facebook/react/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/facebook/react/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/facebook/react/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/facebook/react/merges",
  archive_url:
    "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/facebook/react/downloads",
  issues_url: "https://api.github.com/repos/facebook/react/issues{/number}",
  pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/facebook/react/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
  releases_url: "https://api.github.com/repos/facebook/react/releases{/id}",
  deployments_url: "https://api.github.com/repos/facebook/react/deployments",
  created_at: "2013-05-24T16:15:54Z",
  updated_at: "2025-09-19T09:12:21Z",
  pushed_at: "2025-09-18T23:19:51Z",
  git_url: "git://github.com/facebook/react.git",
  ssh_url: "git@github.com:facebook/react.git",
  clone_url: "https://github.com/facebook/react.git",
  svn_url: "https://github.com/facebook/react",
  homepage: "https://react.dev",
  size: 1142136,
  stargazers_count: 239016,
  watchers_count: 239016,
  language: "JavaScript",
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: true,
  has_discussions: false,
  forks_count: 49353,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 1035,
  license: {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://api.github.com/licenses/mit",
    node_id: "MDc6TGljZW5zZTEz",
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: ["declarative", "frontend", "javascript", "library", "react", "ui"],
  visibility: "public",
  forks: 49353,
  open_issues: 1035,
  watchers: 239016,
  default_branch: "main",
  permissions: {
    admin: false,
    maintain: false,
    push: false,
    triage: false,
    pull: true,
  },
  score: 1,
};

const DEMO_REPO_1 = {
  id: 1038782948,
  node_id: "R_kgDOPeqR5A",
  name: "quickstart-react",
  full_name: "harshgupta20/quickstart-react",
  private: false,
  owner: {
    login: "harshgupta20",
    id: 59175412,
    node_id: "MDQ6VXNlcjU5MTc1NDEy",
    avatar_url: "https://avatars.githubusercontent.com/u/59175412?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/harshgupta20",
    html_url: "https://github.com/harshgupta20",
    followers_url: "https://api.github.com/users/harshgupta20/followers",
    following_url:
      "https://api.github.com/users/harshgupta20/following{/other_user}",
    gists_url: "https://api.github.com/users/harshgupta20/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/harshgupta20/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/harshgupta20/subscriptions",
    organizations_url: "https://api.github.com/users/harshgupta20/orgs",
    repos_url: "https://api.github.com/users/harshgupta20/repos",
    events_url: "https://api.github.com/users/harshgupta20/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/harshgupta20/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
  },
  html_url: "https://github.com/harshgupta20/quickstart-react",
  description: "React Package Solution",
  fork: false,
  url: "https://api.github.com/repos/harshgupta20/quickstart-react",
  forks_url: "https://api.github.com/repos/harshgupta20/quickstart-react/forks",
  keys_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/harshgupta20/quickstart-react/teams",
  hooks_url: "https://api.github.com/repos/harshgupta20/quickstart-react/hooks",
  issue_events_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/issues/events{/number}",
  events_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/events",
  assignees_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/branches{/branch}",
  tags_url: "https://api.github.com/repos/harshgupta20/quickstart-react/tags",
  blobs_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/languages",
  stargazers_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/stargazers",
  contributors_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/contributors",
  subscribers_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/subscribers",
  subscription_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/subscription",
  commits_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/compare/{base}...{head}",
  merges_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/merges",
  archive_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/downloads",
  issues_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/labels{/name}",
  releases_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/harshgupta20/quickstart-react/deployments",
  created_at: "2025-08-15T20:08:17Z",
  updated_at: "2025-09-19T10:31:03Z",
  pushed_at: "2025-09-02T11:13:11Z",
  git_url: "git://github.com/harshgupta20/quickstart-react.git",
  ssh_url: "git@github.com:harshgupta20/quickstart-react.git",
  clone_url: "https://github.com/harshgupta20/quickstart-react.git",
  svn_url: "https://github.com/harshgupta20/quickstart-react",
  homepage: "https://www.npmjs.com/package/quickstart-react",
  size: 71,
  stargazers_count: 145,
  watchers_count: 145,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: true,
  forks_count: 37,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 7,
  license: {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://api.github.com/licenses/mit",
    node_id: "MDc6TGljZW5zZTEz",
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: ["quickstart-react", "reactjs", "vite-react"],
  visibility: "public",
  forks: 37,
  open_issues: 7,
  watchers: 145,
  default_branch: "master",
  permissions: {
    admin: false,
    maintain: false,
    push: false,
    triage: false,
    pull: true,
  },
  score: 1,
};

export { platforms, DEMO_REPO, DEMO_REPO_1 };
