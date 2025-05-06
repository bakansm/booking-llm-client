"use client";

import { Calendar } from "@/components/ui/calendar";

export function CustomStartWeekDemo() {
  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Start Week on Monday</h3>
      <Calendar
        weekStartsOn={1}
        mode="single"
      />
    </div>
  );
}
