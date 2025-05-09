"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

const radioItemVariants = cva(
  "focus-visible:border-border focus-visible:ring-ring/50 aria-invalid:ring-error/20 aria-invalid:border-error bg-sub-background border-sub-foreground aspect-square shrink-0 rounded-full border transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        primary: "text-primary data-[state=checked]:border-primary",
        secondary: "text-secondary data-[state=checked]:border-secondary",
        error: "text-error data-[state=checked]:border-error",
        warning: "text-warning data-[state=checked]:border-warning",
        success: "text-success data-[state=checked]:border-success",
      },
      size: {
        xs: "size-2",
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
        xl: "size-6",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
);

type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> &
  VariantProps<typeof radioItemVariants>;

function RadioGroupItem({
  className,
  color,
  size,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioItemVariants({ color, size, className }))}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center">
        <CircleIcon
          className={cn(
            radioItemVariants({ color, size }),
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current",
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
