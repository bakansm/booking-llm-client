import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [currentPath, setCurrentPath] = React.useState("");

  // Update current path for mobile view
  React.useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
      <div className="flex flex-col space-y-3 px-4">
        <Link
          href="/playground"
          className="flex items-center space-x-2 py-2">
          <span className="font-bold">UI Components</span>
        </Link>
      </div>
      <Separator className="my-4" />
      <nav className="flex flex-col space-y-1 px-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              "hover:bg-accent hover:text-accent-foreground",
              "transition-colors",
              currentPath === item.href && "bg-accent text-accent-foreground",
            )}>
            {item.name}
          </Link>
        ))}
      </nav>
    </ScrollArea>
  );
}
