"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { type DateRange } from "react-day-picker";

export function BookingRangeExample() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  return (
    <div className="flex flex-col gap-2">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
      />
      <div className="text-muted-foreground text-sm">
        {range?.from && range?.to
          ? `Booking: ${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
          : "Select a booking range"}
      </div>
    </div>
  );
}
