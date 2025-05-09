"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        contained: "",
        outlined: "bg-transparent",
      },
      color: {
        primary: "border-transparent bg-primary [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary [a&]:hover:bg-secondary/90",
        warning: "border-transparent bg-warning [a&]:hover:bg-warning/90",
        error: "border-transparent bg-error [a&]:hover:bg-error/90",
        success: "border-transparent bg-success [a&]:hover:bg-success/90",
      },
    },
    compoundVariants: [
      {
        variant: "outlined",
        color: "primary",
        class: "border-primary text-primary bg-transparent",
      },
      {
        variant: "outlined",
        color: "secondary",
        class: "border-secondary text-secondary bg-transparent",
      },
      {
        variant: "outlined",
        color: "warning",
        class: "border-warning text-warning bg-transparent",
      },
      {
        variant: "outlined",
        color: "error",
        class: "border-error text-error bg-transparent",
      },
      {
        variant: "outlined",
        color: "success",
        class: "border-success text-success bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
    },
  },
);

function Badge({
  className,
  variant,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
