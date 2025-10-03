import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EventIcon } from "@/components/EventIcon";

type Event = {
  id?: string;
  actor: string;
  avatar?: string;
  type: string;
  createdAt: string;
};

type Props = {
  event: Event;
  index: number;
};

export function ActivityItem({ event, index }: Props) {
  return (
    <div
      key={event.id || index}
      className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Left Section: Avatar + Actor */}
      <div className="flex items-center space-x-3 flex-1">
        <Avatar className="h-8 w-8">
          <AvatarImage src={event?.avatar} alt={event.actor} />
          <AvatarFallback>
            {event?.actor?.charAt(0)?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium text-gray-800 dark:text-gray-100">
          {event.actor}
        </span>
      </div>

      {/* Middle Section: Event Type */}
      <div className="flex justify-end mr-10">
        <EventIcon type={event?.type} />
      </div>

      {/* Right Section: Date */}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {format(new Date(event.createdAt), "dd MMM yyyy, hh:mm a")}
      </span>
    </div>
  );
}
