"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";

interface NavItem {
  name: string;
  href: string;
}

interface PlaygroundSidebarProps {
  items: NavItem[];
}

export function PlaygroundSidebar({ items }: PlaygroundSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="none">
      <SidebarHeader className="shrink-0 px-4 py-4">
        <Link
          href="/playground"
          className="flex items-center">
          <span className="text-xl font-bold">UI Components</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroupLabel className="shrink-0 px-4 py-2">
          <span className="text-muted-foreground text-xs font-medium">
            {items.length} components
          </span>
        </SidebarGroupLabel>

        <SidebarMenu className="flex-1 overflow-hidden py-2">
          <ScrollArea className="h-full px-2">
            {items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}>
                  <Link href={item.href}>{item.name}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </ScrollArea>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
