"use client";

import { addDays, format, isAfter, isBefore, isSameDay } from "date-fns";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

export function DisabledDatesDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  // Current date for reference
  const today = new Date();

  // Example of some dates that would be unavailable for booking
  const disabledDates = [
    addDays(today, 2),
    addDays(today, 5),
    addDays(today, 6),
    addDays(today, 12),
  ];

  // Example of dates that are fully booked
  const fullyBookedDates = [
    addDays(today, 4),
    addDays(today, 9),
    addDays(today, 10),
  ];

  // Function to determine if a date should be disabled
  const isDateDisabled = (date: Date) => {
    // Disable dates in the past
    if (isBefore(date, today) && !isSameDay(date, today)) {
      return true;
    }

    // Disable specific unavailable dates
    if (disabledDates.some((disabledDate) => isSameDay(date, disabledDate))) {
      return true;
    }

    // Disable fully booked dates
    if (fullyBookedDates.some((bookedDate) => isSameDay(date, bookedDate))) {
      return true;
    }

    // Disable dates too far in the future (e.g., more than 30 days ahead)
    if (isAfter(date, addDays(today, 30))) {
      return true;
    }

    return false;
  };

  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <h3 className="text-md mb-2 font-medium">
          Booking with Disabled Dates
        </h3>
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge
            variant="outlined"
            className="bg-primary/10">
            Available
          </Badge>
          <Badge
            variant="outlined"
            className="bg-red-500/10 text-red-500">
            Unavailable
          </Badge>
          <Badge
            variant="outlined"
            className="bg-amber-500/10 text-amber-500">
            Fully Booked
          </Badge>
        </div>
      </div>

      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        disabled={isDateDisabled}
        modifiers={{
          booked: fullyBookedDates,
        }}
        modifiersClassNames={{
          booked: "bg-amber-500/10 text-amber-500",
        }}
      />

      <div className="text-muted-foreground text-sm">
        {range?.from && range?.to
          ? `Selected: ${format(range.from, "PPP")} - ${format(range.to, "PPP")}`
          : "Select a date range"}
      </div>
    </div>
  );
}
