"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function MultipleDatesDemo() {
  const [multiple, setMultiple] = React.useState<Date[]>([]);

  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Multiple Dates</h3>
      <Calendar
        mode="multiple"
        selected={multiple}
        onSelect={(days) => days && setMultiple(days)}
      />
      <div className="text-muted-foreground mt-2 text-sm">
        {multiple.length > 0
          ? `Selected: ${multiple.map((d) => d.toLocaleDateString()).join(", ")}`
          : "No dates selected"}
      </div>
    </div>
  );
}
