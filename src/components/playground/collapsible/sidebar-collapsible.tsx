"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function SidebarCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="ghost">Toggle Sidebar Section</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-2 rounded p-2 text-sm">
          This could be a collapsible section in a sidebar navigation.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
