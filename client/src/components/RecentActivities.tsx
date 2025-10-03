import type { RecentEventsProps } from "@/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ActivityItem } from "./ActivityItem";

const RecentActivities = ({
  recentEvents,
}: {
  recentEvents: RecentEventsProps[];
}) => {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center space-x-2">
          <span className="text-xs text-gray-400/40 font-medium">
            Recent Activity
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-3">
          {recentEvents.map((event: RecentEventsProps, index: number) => (
            <ActivityItem key={event.id || index} event={event} index={index} />
          )) || (
            <div className="text-center text-muted-foreground py-4">
              No recent activity. Add a repository to see contributions.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
