"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-sub-background overflow-hidden rounded-xs p-3 shadow-md",
        className,
      )}
      classNames={{
        months: "",
        month: "flex flex-col gap-4",
        caption: "relative text-center",
        caption_label:
          "text-strong-mobile md:text-strong-tablet lg:text-strong",
        nav: "flex items-center",
        nav_button: "cursor-pointer p-1 hover:bg-primary/20 rounded-full",
        nav_button_previous: "absolute left-0 top-0",
        nav_button_next: "absolute right-0 top-0",
        table: "",
        head_row: "flex",
        head_cell:
          "text-primary w-full text-p-mobile md:text-p-tablet xl:text-p",
        row: "flex w-full",
        cell: "relative aspect-square p-0 text-center text-small-mobile md:text-small-tablet xl:text-small focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "text", icon: true }),
          "aria-selected:bg-primary aria-selected:text-foreground rounded-full text-foreground",
        ),
        day_range_start:
          "aria-selected:rounded-e-none aria-selected:bg-primary aria-selected:text-foreground",
        day_range_end:
          "aria-selected:rounded-s-none aria-selected:bg-primary aria-selected:text-foreground",
        day_selected: "aria-selected:bg-primary aria-selected:text-foreground",
        day_today: "bg-primary text-foreground",
        day_outside: "text-foreground/30 aria-selected:text-foreground",
        day_disabled: "text-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-primary/10 rounded-none aria-selected:text-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn("size-4", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn("size-4", className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
