import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Users,
  GitBranch,
  Settings,
  Github,
  Activity,
  TrendingUp,
  Calendar,
} from "lucide-react";
// import { SiGitlab, SiBitbucket } from "react-icons/si";
import { useNavigate } from "react-router";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: TrendingUp,
  },
  {
    title: "Contributors",
    url: "/dashboard/contributors",
    icon: Users,
  },
  {
    title: "Activity",
    url: "/dashboard/activity",
    icon: Activity,
  },
  {
    title: "Timeline",
    url: "/dashboard/timeline",
    icon: Calendar,
  },
];

const platformItems = [
  {
    title: "GitHub",
    url: "/dashboard/platforms/github",
    icon: Github,
  },
  // {
  //   title: "GitLab",
  //   url: "/dashboard/platforms/gitlab",
  //   icon: () => <SiGitlab className="h-4 w-4 text-gray-50" />,
  // },
  // {
  //   title: "Bitbucket",
  //   url: "/dashboard/platforms/bitbucket",
  //   icon: () => <SiBitbucket className="h-4 w-4 text-gray-50" />,
  // },
];

export default function AppSidebar() {
  const navigate = useNavigate();
  const { open } = useSidebar();

  const handleNavigation = (url: string) => {
    navigate(url);
  };

  return (
    <Sidebar
      className="border-r border-r-gray-400/20"
      data-testid="app-sidebar"
    >
      {open ? (
        <SidebarHeader className="p-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gray-50/25 rounded-lg flex items-center justify-center">
              <GitBranch className="h-4 w-4 text-gray-50" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-50">DevMetrics</h2>
              <p className="text-xs text-gray-600">Analytics Platform</p>
            </div>
          </div>
        </SidebarHeader>
      ) : (
        <SidebarHeader className="p-2">
          <div className="h-8 w-8 bg-gray-50/25 rounded-lg flex items-center justify-center">
            <GitBranch className="h-4 w-4 text-gray-50" />
          </div>
        </SidebarHeader>
      )}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    data-testid={`nav-${item.title.toLowerCase()}`}
                  >
                    <button
                      onClick={() => handleNavigation(item.url)}
                      className={cn(
                        location.pathname === item.url
                          ? "bg-gray-800"
                          : "hover:bg-gray-800/60",
                        "w-full flex items-center cursor-pointer "
                      )}
                    >
                      <item.icon className="h-4 w-4 text-gray-50" />
                      <span className="text-gray-50">{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600">
            Platforms
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platformItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    data-testid={`platform-${item.title.toLowerCase()}`}
                  >
                    <button
                      onClick={() => handleNavigation(item.url)}
                      className={cn(
                        location.pathname === item.url
                          ? "bg-gray-800"
                          : "hover:bg-gray-800/60",
                        "w-full flex items-center cursor-pointer "
                      )}
                    >
                      <item.icon className="h-4 w-4 text-gray-50" />
                      <span className="text-gray-50">{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild data-testid="nav-settings">
              <button
                onClick={() => handleNavigation("/dashboard/settings")}
                className="w-full flex items-center bg-gray-800 hover:bg-gray-800/60"
              >
                <Settings className="h-4 w-4 text-gray-50" />
                <span className="text-gray-50">Settings</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
