"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleWithIcon() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outlined">
          <span className="mr-2">▼</span> Toggle
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-4 rounded-md border p-4">
          Collapsible with an icon in the trigger.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
