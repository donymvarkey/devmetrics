import { eventIcons } from "@/constants";

type Props = {
  type: string;
};

export function EventIcon({ type }: Props) {
  const {
    icon: Icon,
    label,
    color,
  } = eventIcons[type] || eventIcons["Default"];
  return (
    <div className="flex items-center space-x-2">
      <Icon className={`w-4 h-4 ${color}`} />
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  );
}
