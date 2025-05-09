"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-p-mobile md:text-p-tablet xl:text-p flex w-full min-w-0 bg-transparent p-2 outline-none",
        "selection:bg-primary selection:text-primary-foreground file:border-0",
        "file:text-sub-foreground file:text-small-mobile file:md:text-small-tablet file:xl:text-small file:inline-flex file:bg-transparent",
        "placeholder:text-sub-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:placeholder:text-transparent focus:placeholder:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
