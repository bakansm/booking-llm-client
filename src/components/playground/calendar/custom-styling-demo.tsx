"use client";

import { Calendar } from "@/components/ui/calendar";

export function CustomStylingDemo() {
  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Custom Styling</h3>
      <Calendar
        className="border-primary rounded-xl border-2 border-dashed"
        mode="single"
      />
    </div>
  );
}
