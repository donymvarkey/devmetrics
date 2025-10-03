import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface CommitData {
  date: string;
  count: number;
}

export default function CommitGraph({ data }: { data: CommitData[] }) {
  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="text-xs text-gray-400/40 font-medium">
          Commits (Last 30 Days)
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 border rounded-lg border-gray-500/10 p-5 shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="2 2" stroke="#444" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              minTickGap={20}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{ fontSize: "14px" }}
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value: number) => [`${value} commits`, "Commits"]}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#2563eb" // Tailwind blue-600
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#1d4ed8" }} // blue-700
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
