"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function OpenByDefaultCollapsible() {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="outlined">Toggle</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-4 rounded-md border p-4">
          This collapsible is open by default.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
