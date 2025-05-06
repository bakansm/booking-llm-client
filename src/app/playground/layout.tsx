import React from "react";

import { PlaygroundSidebar } from "@/components/playground/playground-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const components = [
  { name: "Accordion", href: "/playground/accordion" },
  { name: "Alert", href: "/playground/alert" },
  { name: "Alert Dialog", href: "/playground/alert-dialog" },
  { name: "Avatar", href: "/playground/avatar" },
  { name: "Badge", href: "/playground/badge" },
  { name: "Button", href: "/playground/button" },
  { name: "Calendar", href: "/playground/calendar" },
  { name: "Card", href: "/playground/card" },
  { name: "Carousel", href: "/playground/carousel" },
  { name: "Chart", href: "/playground/chart" },
  { name: "Checkbox", href: "/playground/checkbox" },
  { name: "Collapsible", href: "/playground/collapsible" },
  { name: "Dialog", href: "/playground/dialog" },
  { name: "Dropdown Menu", href: "/playground/dropdown-menu" },
  { name: "Form", href: "/playground/form" },
  { name: "Hover Card", href: "/playground/hover-card" },
  { name: "Input", href: "/playground/input" },
  { name: "Label", href: "/playground/label" },
  { name: "Navigation Menu", href: "/playground/navigation-menu" },
  { name: "Pagination", href: "/playground/pagination" },
  { name: "Popover", href: "/playground/popover" },
  { name: "Progress", href: "/playground/progress" },
  { name: "Radio Group", href: "/playground/radio-group" },
  { name: "Scroll Area", href: "/playground/scroll-area" },
  { name: "Separator", href: "/playground/separator" },
  { name: "Sheet", href: "/playground/sheet" },
  { name: "Skeleton", href: "/playground/skeleton" },
  { name: "Sonner", href: "/playground/sonner" },
  { name: "Switch", href: "/playground/switch" },
  { name: "Tabs", href: "/playground/tabs" },
  { name: "Textarea", href: "/playground/textarea" },
  { name: "Tooltip", href: "/playground/tooltip" },
];

// Sort components alphabetically
components.sort((a, b) => a.name.localeCompare(b.name));

interface PlaygroundLayoutProps {
  children: React.ReactNode;
}

export default function PlaygroundLayout({ children }: PlaygroundLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <PlaygroundSidebar items={components} />
      <SidebarInset>
        <ScrollArea className="h-full">
          <main className="p-6 md:p-8">{children}</main>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
