"use client";
import { MdOutlineTrendingUp } from "react-icons/md";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DatePickerWithRange } from "../DateRange/dateRangePicker";

// Custom color definitions
const desktopColor = "#007BFF"; // Custom blue color for desktop line
const mobileColor = "#28A745"; // Custom green color for mobile line
const gridColor = "#CCCCCC"; // Custom light grey color for grid lines

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 214, mobile: 140 },
  { month: "Aug", desktop: 214, mobile: 140 },
  { month: "Sept", desktop: 214, mobile: 140 },
  { month: "Oct", desktop: 214, mobile: 140 },
  { month: "Nov", desktop: 214, mobile: 140 },
  { month: "Dec", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: desktopColor,
  },
  mobile: {
    label: "Mobile",
    color: mobileColor,
  },
} satisfies ChartConfig;

const CustomerMap = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h4 className="font-semibold text-lg">Product Sales</h4>
          <DatePickerWithRange />
        </div>
        <div className="flex items-center justify-center gap-2 font-medium leading-none">
          Customer increase by 5.2% this month{" "}
          <MdOutlineTrendingUp className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke={gridColor}
              strokeDasharray="5"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke={desktopColor}
              strokeWidth={2}
              dot={{
                fill: desktopColor,
              }}
              activeDot={{
                r: 8,
              }}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke={mobileColor}
              strokeWidth={2}
              dot={{
                fill: mobileColor,
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CustomerMap;
