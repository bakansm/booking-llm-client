"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "text-p-mobile md:text-p-tablet xl:text-p flex w-full bg-transparent outline-none",
        "selection:bg-primary selection:text-primary-foreground",
        "placeholder:text-sub-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:placeholder:text-transparent focus:placeholder:opacity-0",
        "field-sizing-content max-h-48 min-h-16 resize-none p-2",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
