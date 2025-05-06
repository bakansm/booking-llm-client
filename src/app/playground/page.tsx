import { ChevronRight } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const components = [
  {
    name: "Accordion",
    href: "/playground/accordion",
    description: "A vertically stacked set of interactive headings",
  },
  {
    name: "Alert",
    href: "/playground/alert",
    description: "Displays a callout for user attention",
  },
  {
    name: "Alert Dialog",
    href: "/playground/alert-dialog",
    description: "A modal dialog that interrupts the user",
  },
  {
    name: "Avatar",
    href: "/playground/avatar",
    description: "An image element with a fallback",
  },
  {
    name: "Badge",
    href: "/playground/badge",
    description: "A small status descriptor for UI elements",
  },
  {
    name: "Button",
    href: "/playground/button",
    description: "Triggers an action or event",
  },
  {
    name: "Calendar",
    href: "/playground/calendar",
    description: "A date field component with a popover calendar",
  },
  {
    name: "Card",
    href: "/playground/card",
    description: "Container for grouping related content",
  },
  {
    name: "Carousel",
    href: "/playground/carousel",
    description: "A slideshow component for cycling through elements",
  },
  {
    name: "Checkbox",
    href: "/playground/checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked",
  },
  {
    name: "Collapsible",
    href: "/playground/collapsible",
    description: "An interactive component that expands/collapses content",
  },
  {
    name: "Dialog",
    href: "/playground/dialog",
    description: "A window overlaid on the UI",
  },
  {
    name: "Dropdown Menu",
    href: "/playground/dropdown-menu",
    description: "Displays a menu to the user triggered by a button",
  },
  {
    name: "Form",
    href: "/playground/form",
    description: "A collection of form controls with validation",
  },
  {
    name: "Hover Card",
    href: "/playground/hover-card",
    description: "A card that appears when hovering over a trigger",
  },
  {
    name: "Input",
    href: "/playground/input",
    description: "A form control for text entry",
  },
  {
    name: "Label",
    href: "/playground/label",
    description: "A caption for interface elements",
  },
  {
    name: "Navigation Menu",
    href: "/playground/navigation-menu",
    description: "A collection of links for site navigation",
  },
  {
    name: "Pagination",
    href: "/playground/pagination",
    description: "Controls for navigating through pages of content",
  },
  {
    name: "Popover",
    href: "/playground/popover",
    description: "Floating content that is triggered by a button",
  },
  {
    name: "Progress",
    href: "/playground/progress",
    description: "Displays completion progress of a task",
  },
  {
    name: "Radio Group",
    href: "/playground/radio-group",
    description: "A set of radio inputs that can be selected",
  },
  {
    name: "Scroll Area",
    href: "/playground/scroll-area",
    description: "A scrollable area with custom scrollbars",
  },
  {
    name: "Separator",
    href: "/playground/separator",
    description: "A visual divider between content",
  },
  {
    name: "Sheet",
    href: "/playground/sheet",
    description: "A sidebar panel that overlays the interface",
  },
  {
    name: "Skeleton",
    href: "/playground/skeleton",
    description: "A placeholder for content that is loading",
  },
  {
    name: "Sonner",
    href: "/playground/sonner",
    description: "A toast notification component for displaying messages",
  },
  {
    name: "Switch",
    href: "/playground/switch",
    description: "A control that toggles between on and off states",
  },
  {
    name: "Tabs",
    href: "/playground/tabs",
    description: "A set of layered sections of content",
  },
  {
    name: "Textarea",
    href: "/playground/textarea",
    description: "A multi-line text input field",
  },
  {
    name: "Tooltip",
    href: "/playground/tooltip",
    description: "A popup that displays information about an element",
  },
];

// Sort components alphabetically for consistency
components.sort((a, b) => a.name.localeCompare(b.name));

export default function PlaygroundPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold tracking-tight">UI Components</h1>
          <p className="text-muted-foreground">
            Explore and interact with all Shadcn UI components.
          </p>
        </div>
        <div className="text-muted-foreground text-sm">
          {components.length} components
        </div>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href}>
            <Card className="hover:bg-muted/50 h-full transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-base font-medium">
                  {component.name}
                </CardTitle>
                <ChevronRight className="text-muted-foreground h-4 w-4" />
              </CardHeader>
              <CardDescription className="text-muted-foreground px-6 pb-4 text-sm">
                {component.description}
              </CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
