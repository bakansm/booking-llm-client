"use client";

import { Calendar } from "@/components/ui/calendar";

export function HideOutsideDaysDemo() {
  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Hide Outside Days</h3>
      <Calendar
        showOutsideDays={false}
        mode="single"
      />
    </div>
  );
}
