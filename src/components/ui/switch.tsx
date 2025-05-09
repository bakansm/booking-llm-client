"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const switchVariants = cva(
  "peer focus-visible:ring-ring data-[state=unchecked]:border-sub-background data-[state=unchecked]:bg-sub-background focus-visible:ring-ring/50 inline-flex shrink-0 items-center rounded-full border-2 shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        primary:
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
        secondary:
          "data-[state=checked]:border-secondary data-[state=checked]:bg-secondary",
        success:
          "data-[state=checked]:border-success data-[state=checked]:bg-success",
        error:
          "data-[state=checked]:border-error data-[state=checked]:bg-error",
        warning:
          "data-[state=checked]:border-warning data-[state=checked]:bg-warning",
      },
      size: {
        xs: "w-6",
        sm: "w-8",
        md: "w-10",
        lg: "w-12",
        xl: "w-14",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
);

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants> & {
    thumbClassName?: string;
  };

function Switch({
  className,
  thumbClassName,
  color = "primary",
  size = "md",
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ color, size }), className)}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-4px)] data-[state=unchecked]:translate-x-0",
          size === "xs" && "size-3",
          size === "sm" && "size-4",
          size === "md" && "size-5",
          size === "lg" && "size-6",
          size === "xl" && "size-7",
          thumbClassName,
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
