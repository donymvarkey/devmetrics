import AppSidebar from "@/components/AppSidebar";
import TimePeriodSelector from "@/components/TimePeriodSelector";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { Outlet } from "react-router";
// import { useState } from "react";

export default function DashboardLayout() {
  const [timePeriod, setTimePeriod] = useState("30d");

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <header
            className="flex items-center justify-between p-4 border-b border-b-gray-400/20 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60"
            data-testid="dashboard-header"
          >
            <div className="flex items-center space-x-4">
              <SidebarTrigger
                className="w-4 h-4 text-gray-50"
                data-testid="button-sidebar-toggle"
              />
              <div className="hidden md:block">
                <TimePeriodSelector
                  value={timePeriod}
                  onValueChange={setTimePeriod}
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-gray-50">John Doe</p>
              <Avatar className="rounded-full">
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main
            className="flex-1 overflow-auto p-6 bg-background"
            data-testid="dashboard-main"
          >
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
