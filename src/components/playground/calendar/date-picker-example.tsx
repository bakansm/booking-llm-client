"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export function DatePickerExample() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => setOpen((o) => !o)}
        variant="outlined">
        {date ? date.toLocaleDateString() : "Pick a date"}
      </Button>
      {open && (
        <div className="bg-background absolute z-10 mt-2 rounded-md border p-2 shadow-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
