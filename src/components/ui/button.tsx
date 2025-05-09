"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center shadow-none gap-2 w-fit whitespace-nowrap font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 transform transition-transform",
  {
    variants: {
      variant: {
        contained: "border",
        outlined: "border bg-transparent",
        text: "bg-transparent border border-transparent",
      },
      color: {
        primary: "",
        secondary: "",
        error: "",
        warning: "",
        success: "",
      },
      size: {
        xs: "py-2 px-4 text-xs h-6 min-w-6",
        sm: "py-3 px-6 text-sm h-8 min-w-8",
        md: "py-5 px-8 text-base h-10 min-w-10",
        lg: "py-6 px-10 text-lg h-12 min-w-12",
        xl: "py-7 px-12 text-xl h-14 min-w-14",
      },
      fullWidth: {
        true: "w-full",
      },
      fullRounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
      icon: {
        true: "aspect-square p-0 justify-center items-center gap-0",
        false: "",
      },
      link: {
        true: "underline underline-offset-4 hover:no-underline",
        false: "",
      },
    },
    compoundVariants: [
      { icon: true, fullRounded: true, class: "rounded-full" },
      { icon: true, fullRounded: false, class: "rounded-md" },
      { icon: true, size: "xs", class: "h-6 w-6 p-0" },
      { icon: true, size: "sm", class: "h-8 w-8 p-0" },
      { icon: true, size: "md", class: "h-10 w-10 p-0" },
      { icon: true, size: "lg", class: "h-12 w-12 p-0" },
      { icon: true, size: "xl", class: "h-14 w-14 p-0" },
      {
        variant: "contained",
        color: "primary",
        class:
          "bg-primary border-primary hover:border-primary-hover hover:bg-primary-hover disabled:bg-primary-disabled hover:shadow-md hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-primary/50",
      },
      {
        variant: "contained",
        color: "secondary",
        class:
          "bg-secondary border-secondary hover:border-secondary-hover hover:bg-secondary-hover disabled:bg-secondary-disabled hover:shadow-md hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-secondary/50",
      },
      {
        variant: "contained",
        color: "error",
        class:
          "bg-error border-error hover:border-error-hover hover:bg-error-hover disabled:bg-error-disabled hover:shadow-md hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-error/50",
      },
      {
        variant: "contained",
        color: "warning",
        class:
          "bg-warning border-warning hover:border-warning-hover hover:bg-warning-hover disabled:bg-warning-disabled hover:shadow-md hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-warning/50",
      },
      {
        variant: "contained",
        color: "success",
        class:
          "bg-success border-success hover:border-success-hover hover:bg-success-hover disabled:bg-success-disabled hover:shadow-md hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-success/50",
      },
      {
        variant: "outlined",
        color: "primary",
        class:
          "text-primary border-primary hover:bg-primary/10 disabled:text-primary-disabled disabled:border-primary-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-primary/50",
      },
      {
        variant: "outlined",
        color: "secondary",
        class:
          "text-secondary border-secondary hover:bg-secondary/10 disabled:text-secondary-disabled disabled:border-secondary-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-secondary/50",
      },
      {
        variant: "outlined",
        color: "error",
        class:
          "text-error border-error hover:bg-error/10 disabled:text-error-disabled disabled:border-error-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-error/50",
      },
      {
        variant: "outlined",
        color: "warning",
        class:
          "text-warning border-warning hover:bg-warning/10 disabled:text-warning-disabled disabled:border-warning-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-warning/50",
      },
      {
        variant: "outlined",
        color: "success",
        class:
          "text-success border-success hover:bg-success/10 disabled:text-success-disabled disabled:border-success-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-success/50",
      },
      {
        variant: "text",
        color: "primary",
        class:
          "text-primary hover:bg-primary/10 disabled:text-primary-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-primary/50",
      },
      {
        variant: "text",
        color: "secondary",
        class:
          "text-secondary hover:bg-secondary/10 disabled:text-secondary-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-secondary/50",
      },
      {
        variant: "text",
        color: "error",
        class:
          "text-error hover:bg-error/10 disabled:text-error-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-error/50",
      },
      {
        variant: "text",
        color: "warning",
        class:
          "text-warning hover:bg-warning/10 disabled:text-warning-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-warning/50",
      },
      {
        variant: "text",
        color: "success",
        class:
          "text-success hover:bg-success/10 disabled:text-success-disabled hover:scale-105 active:scale-100 disabled:scale-100 active:shadow-none focus-visible:ring-2 focus-visible:ring-success/50",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "md",
      fullRounded: false,
      icon: false,
      link: false,
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariantProps {
  asChild?: boolean;
  loading?: boolean;
  tooltip?: React.ReactNode;
  tooltipOptions?: Partial<TooltipContentProps>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      color,
      size,
      fullWidth,
      fullRounded,
      asChild = false,
      icon = false,
      link = false,
      loading,
      tooltip,
      tooltipOptions,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const button = (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            color,
            size,
            fullWidth,
            fullRounded,
            icon,
            link,
          }),
          className,
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}>
        {loading ? (
          <Loader2 className="size-4 animate-spin text-current" />
        ) : (
          children
        )}
      </Comp>
    );

    if (!tooltip) return button;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent {...tooltipOptions}>{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
