"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ChartDataPoint {
  month: string;
  revenue: number;
  expenses: number;
  users: number;
}

interface PieDataPoint {
  name: string;
  value: number;
}

interface ChartTheme {
  light: string;
  dark: string;
}

interface ChartConfigItem {
  label: string;
  theme: ChartTheme;
}

interface ChartConfig {
  [key: string]: ChartConfigItem;
}

export default function ChartPage() {
  // Sample data for bar/line/area charts
  const cartesianData: ChartDataPoint[] = [
    { month: "Jan", revenue: 3000, expenses: 2000, users: 120 },
    { month: "Feb", revenue: 4500, expenses: 2800, users: 180 },
    { month: "Mar", revenue: 3800, expenses: 3200, users: 250 },
    { month: "Apr", revenue: 5100, expenses: 3800, users: 310 },
    { month: "May", revenue: 6000, expenses: 3500, users: 290 },
    { month: "Jun", revenue: 4800, expenses: 4200, users: 350 },
  ];

  // Sample data for pie chart
  const pieData: PieDataPoint[] = [
    { name: "Desktop", value: 45 },
    { name: "Mobile", value: 40 },
    { name: "Tablet", value: 15 },
  ];

  // Chart configurations
  const chartConfig: ChartConfig = {
    revenue: {
      label: "Revenue",
      theme: {
        light: "hsl(var(--primary))",
        dark: "hsl(var(--primary))",
      },
    },
    expenses: {
      label: "Expenses",
      theme: {
        light: "hsl(var(--muted))",
        dark: "hsl(var(--muted))",
      },
    },
    users: {
      label: "Users",
      theme: {
        light: "hsl(var(--primary))",
        dark: "hsl(var(--primary))",
      },
    },
    desktop: {
      label: "Desktop",
      theme: {
        light: "hsl(var(--primary))",
        dark: "hsl(var(--primary))",
      },
    },
    mobile: {
      label: "Mobile",
      theme: {
        light: "hsl(var(--destructive))",
        dark: "hsl(var(--destructive))",
      },
    },
    tablet: {
      label: "Tablet",
      theme: {
        light: "hsl(var(--warning))",
        dark: "hsl(var(--warning))",
      },
    },
  };

  // Pie chart colors
  const COLORS = [
    "hsl(var(--primary))",
    "hsl(var(--destructive))",
    "hsl(var(--warning))",
  ];

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Chart</h1>
        <p className="text-muted-foreground">
          A versatile chart component for data visualization using Recharts
        </p>
      </div>

      <Tabs defaultValue="bar">
        <TabsList className="mb-4">
          <TabsTrigger value="bar">Bar Chart</TabsTrigger>
          <TabsTrigger value="line">Line Chart</TabsTrigger>
          <TabsTrigger value="area">Area Chart</TabsTrigger>
          <TabsTrigger value="pie">Pie Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="bar">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
                <CardDescription>
                  Monthly comparison for the first half of the year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  className="h-80"
                  config={chartConfig}>
                  <BarChart data={cartesianData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <ChartLegend />
                    <Bar
                      dataKey="revenue"
                      name="revenue"
                    />
                    <Bar
                      dataKey="expenses"
                      name="expenses"
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-medium">Usage</h3>
              <pre className="bg-muted rounded-md p-4">
                <code className="text-sm">{`import { 
  ChartContainer, 
  ChartLegend, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// Bar chart example
<ChartContainer className="h-80" config={chartConfig}>
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <ChartTooltip
      content={({ active, payload }) => (
        <ChartTooltipContent 
          active={active} 
          payload={payload} 
        />
      )}
    />
    <ChartLegend />
    <Bar dataKey="revenue" name="revenue" />
    <Bar dataKey="expenses" name="expenses" />
  </BarChart>
</ChartContainer>`}</code>
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="line">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>
                  Monthly user metrics over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  className="h-80"
                  config={chartConfig}>
                  <LineChart data={cartesianData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <ChartLegend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      name="users"
                      strokeWidth={2}
                      dot={true}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-medium">Usage</h3>
              <pre className="bg-muted rounded-md p-4">
                <code className="text-sm">{`import { 
  ChartContainer, 
  ChartLegend, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

// Line chart example
<ChartContainer className="h-80" config={chartConfig}>
  <LineChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <ChartTooltip
      content={({ active, payload }) => (
        <ChartTooltipContent 
          active={active} 
          payload={payload} 
        />
      )}
    />
    <ChartLegend />
    <Line 
      type="monotone" 
      dataKey="users" 
      name="users" 
      strokeWidth={2} 
      dot={true}
    />
  </LineChart>
</ChartContainer>`}</code>
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="area">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>
                  Monthly revenue with visual emphasis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  className="h-80"
                  config={chartConfig}>
                  <AreaChart data={cartesianData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                        />
                      )}
                    />
                    <ChartLegend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      name="revenue"
                      fill="url(#colorRevenue)"
                      stroke="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-medium">Usage</h3>
              <pre className="bg-muted rounded-md p-4">
                <code className="text-sm">{`import { 
  ChartContainer, 
  ChartLegend, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

// Area chart example
<ChartContainer className="h-80" config={chartConfig}>
  <AreaChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <ChartTooltip
      content={({ active, payload }) => (
        <ChartTooltipContent 
          active={active} 
          payload={payload} 
        />
      )}
    />
    <ChartLegend />
    <Area 
      type="monotone" 
      dataKey="revenue" 
      name="revenue" 
      fill="url(#colorRevenue)" 
      stroke="hsl(var(--primary))" 
      fillOpacity={0.3}
    />
  </AreaChart>
</ChartContainer>`}</code>
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pie">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
                <CardDescription>User device type breakdown</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ChartContainer
                  className="h-80 max-w-md"
                  config={chartConfig}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                      nameKey="name">
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          name={entry.name.toLowerCase()}
                        />
                      ))}
                    </Pie>
                    <ChartTooltip
                      content={({ active, payload }) => (
                        <ChartTooltipContent
                          active={active}
                          payload={payload}
                          nameKey="name"
                        />
                      )}
                    />
                    <ChartLegend />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-medium">Usage</h3>
              <pre className="bg-muted rounded-md p-4">
                <code className="text-sm">{`import { 
  ChartContainer, 
  ChartLegend, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

// Pie chart example
<ChartContainer className="h-80 max-w-md" config={chartConfig}>
  <PieChart>
    <Pie
      data={pieData}
      cx="50%"
      cy="50%"
      labelLine={false}
      innerRadius={60}
      outerRadius={100}
      dataKey="value"
      nameKey="name"
    >
      {pieData.map((entry, index) => (
        <Cell 
          key={\`cell-\${index}\`} 
          fill={COLORS[index % COLORS.length]} 
          name={entry.name.toLowerCase()}
        />
      ))}
    </Pie>
    <ChartTooltip
      content={({ active, payload }) => (
        <ChartTooltipContent 
          active={active} 
          payload={payload} 
          nameKey="name"
        />
      )}
    />
    <ChartLegend />
  </PieChart>
</ChartContainer>`}</code>
              </pre>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
