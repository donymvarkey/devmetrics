import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  Cell,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { LanguageProps } from "@/types/types";

const COLORS = [
  "#60A5FA",
  "#F87171",
  "#34D399",
  "#FBBF24",
  "#A78BFA",
  "#F472B6",
  "#38BDF8",
  "#FB923C",
  "#22D3EE",
  "#4ADE80",
];

export default function Chart({ data }: { data: LanguageProps[] }) {
  if (!data || data.length === 0) {
    return (
      <Card className="w-full border-0 shadow-none">
        <CardHeader className="px-0">
          <CardTitle className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            Language Usage
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 border rounded-lg border-gray-500/10 p-5 shadow-md bg-gradient-to-b from-gray-900/40 to-gray-800/40 flex items-center justify-center h-[300px]">
          <span className="text-gray-400 text-sm">
            No language data available
          </span>
        </CardContent>
      </Card>
    );
  }

  // Convert percentage to number
  const chartData = data.map((lang) => ({
    name: lang.name,
    percentage: Number(lang.percentage),
  }));

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center space-x-2">
          <span className="text-xs text-gray-400/40 font-medium">
            Recent Activity
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 border rounded-lg border-gray-500/10 p-5 shadow-md bg-gradient-to-b from-gray-900/40 to-gray-800/40">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="2 2" stroke="#37393A" />
            <XAxis dataKey="name" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} unit="%" />
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "0.5rem",
                color: "#f9fafb",
              }}
            />
            <Legend />
            <Bar dataKey="percentage" isAnimationActive={false}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
