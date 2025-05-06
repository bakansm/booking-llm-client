import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavItem {
  name: string;
  href: string;
}

interface DesktopNavProps {
  items: NavItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const [currentPath, setCurrentPath] = React.useState("");

  // Update current path when component mounts and when route changes
  React.useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <ScrollArea className="flex-1 px-6 pb-20">
      <div className="mb-4 flex items-center">
        <span className="text-muted-foreground text-xs font-medium">
          {items.length} components
        </span>
      </div>
      <nav className="flex flex-col space-y-1">
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
