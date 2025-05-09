import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type TextVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "black"
  | "white";

interface TextProps {
  variant?: TextVariant;
}

const getVariantStyles = (variant?: TextVariant) => {
  switch (variant) {
    case "primary":
      return "text-foreground bg-primary px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    case "secondary":
      return "text-foreground bg-secondary px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    case "success":
      return "text-foreground bg-success px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    case "warning":
      return "text-foreground bg-warning px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    case "error":
      return "text-foreground bg-error px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    case "black":
      return "text-foreground bg-black px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    case "white":
      return "text-foreground bg-white px-2 rounded-xs w-fit max-w-full whitespace-nowrap";
    default:
      return "";
  }
};

const H1 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h1"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
H1.displayName = "H1";

const H2 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h2"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
H2.displayName = "H2";

const H3 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h3"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
H3.displayName = "H3";

const H4 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h4"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
H4.displayName = "H4";

const H5 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h5"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
H5.displayName = "H5";

const H6 = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h6"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
H6.displayName = "H6";

const P = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<"p"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
P.displayName = "P";

const A = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> &
    TextProps & {
      href: string;
    }
>(({ className, href, variant, ...props }, ref) => (
  <Link
    ref={ref}
    href={href}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
A.displayName = "A";

const Strong = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"strong"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <strong
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Strong.displayName = "Strong";

const Em = forwardRef<HTMLElement, ComponentPropsWithoutRef<"em"> & TextProps>(
  ({ className, variant, ...props }, ref) => (
    <em
      ref={ref}
      className={cn(getVariantStyles(variant), className)}
      {...props}
    />
  ),
);
Em.displayName = "Em";

const Small = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"small"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <small
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Small.displayName = "Small";

const Blockquote = forwardRef<
  HTMLQuoteElement,
  ComponentPropsWithoutRef<"blockquote"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Blockquote.displayName = "Blockquote";

const Pre = forwardRef<
  HTMLPreElement,
  ComponentPropsWithoutRef<"pre"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <pre
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Pre.displayName = "Pre";

const Code = forwardRef<
  HTMLModElement,
  ComponentPropsWithoutRef<"code"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Code.displayName = "Code";

const Sub = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"sub"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <sub
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Sub.displayName = "Sub";

const Sup = forwardRef<
  HTMLModElement,
  ComponentPropsWithoutRef<"sup"> & TextProps
>(({ className, variant, ...props }, ref) => (
  <sup
    ref={ref}
    className={cn(getVariantStyles(variant), className)}
    {...props}
  />
));
Sup.displayName = "Sup";

export {
  A,
  Blockquote,
  Code,
  Em,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Pre,
  Small,
  Strong,
  Sub,
  Sup,
};
