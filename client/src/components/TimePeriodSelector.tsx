import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

interface TimePeriodSelectorProps {
  value?: string;
  onValueChange?: (value: string) => void;
}

export default function TimePeriodSelector({
  value = "30d",
  onValueChange,
}: TimePeriodSelectorProps) {
  const handleValueChange = (newValue: string) => {
    console.log(`Time period changed to: ${newValue}`);
    onValueChange?.(newValue);
  };

  return (
    <div
      className="flex items-center space-x-2 border border-gray-50/20 rounded-md px-3"
      data-testid="time-period-selector"
    >
      <Clock className="h-4 w-4 text-gray-400" />
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger
          className="w-[140px] border-0 text-gray-50"
          data-testid="select-time-period"
        >
          <SelectValue
            className="placeholder:text-gray-50 text-gray-100"
            placeholder="Select period"
          />
        </SelectTrigger>
        <SelectContent className="text-gray-100 bg-gray-800 border-0 shadow-lg">
          <SelectItem className="text-gray-100" value="7d">
            Last 7 days
          </SelectItem>
          <SelectItem className="text-gray-100" value="30d">
            Last 30 days
          </SelectItem>
          <SelectItem value="90d">Last 3 months</SelectItem>
          <SelectItem value="6m">Last 6 months</SelectItem>
          <SelectItem value="1y">Last year</SelectItem>
          <SelectItem value="all">All time</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
