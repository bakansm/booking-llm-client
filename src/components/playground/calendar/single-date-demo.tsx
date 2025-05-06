"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function SingleDateDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(undefined);

  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">Single Date</h3>
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}
