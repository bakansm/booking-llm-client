"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { type DateRange } from "react-day-picker";

export function DateRangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Date Range</h3>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
      />
      <div className="text-muted-foreground mt-2 text-sm">
        {range?.from && range?.to
          ? `Selected: ${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
          : "No range selected"}
      </div>
    </div>
  );
}
