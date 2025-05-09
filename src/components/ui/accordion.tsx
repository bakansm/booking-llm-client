"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const accordionVariants = cva(
  "border-sub-background overflow-hidden rounded-xs border-2",
  {
    variants: {
      variant: {
        default: "border-sub-background",
        primary: "border-primary",
        secondary: "border-secondary",
        error: "border-error",
        warning: "border-warning",
        success: "border-success",
        transparent: "border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const accordionTriggerVariants = cva(
  "text-p-mobile text-foreground md:text-p-tablet xl:text-p flex flex-1 items-start justify-between gap-4 p-4 text-left leading-relaxed font-normal transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "bg-sub-background",
        primary: "bg-primary",
        secondary: "bg-secondary",
        error: "bg-error",
        warning: "bg-warning",
        success: "bg-success",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Create a context to pass the variant down to child components
const AccordionVariantContext =
  React.createContext<VariantProps<typeof accordionVariants>["variant"]>(
    "default",
  );

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants>;

function Accordion({ className, variant, ...props }: AccordionProps) {
  return (
    <AccordionVariantContext.Provider value={variant}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn(accordionVariants({ variant, className }))}
        {...props}
      />
    </AccordionVariantContext.Provider>
  );
}

type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(className)}
      {...props}
    />
  );
}

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> &
  VariantProps<typeof accordionTriggerVariants>;

function AccordionTrigger({
  className,
  children,
  variant: propVariant,
  ...props
}: AccordionTriggerProps) {
  // Use the variant from context or from direct props
  const contextVariant = React.useContext(AccordionVariantContext);
  const variant = propVariant || contextVariant;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ variant, className }))}
        {...props}>
        {children}
        <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down p-4",
        className,
      )}
      {...props}>
      {children}
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
