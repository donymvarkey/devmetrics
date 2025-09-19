import React from "react";
import type { WidgetDataTypes } from "../types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

const WidgetCards = ({ id, title, value, change, trend }: WidgetDataTypes) => {
  return (
    <Card key={id} className="border-0 shadow-md">
      <CardContent>
        <CardHeader className="p-0 text-cyan-800/40">{title}</CardHeader>
        <CardDescription className="flex items-center">
          {title !== "Active Customers" && (
            <IndianRupee className="size-4 text-cyan-800" />
          )}
          <span className="text-3xl font-bold text-cyan-800">{value}</span>
        </CardDescription>
        <CardFooter className="p-0 mt-4">
          <span
            className={cn(
              trend === "up" ? "text-green-500" : "text-red-500",
              "text-sm font-medium"
            )}
          >
            {change}
          </span>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default WidgetCards;
