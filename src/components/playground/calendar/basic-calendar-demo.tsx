"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function BasicCalendarDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(undefined);

  return (
    <div className="max-w-md">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
      <div className="text-muted-foreground mt-2 text-sm">
        {selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "No date selected"}
      </div>
    </div>
  );
}
