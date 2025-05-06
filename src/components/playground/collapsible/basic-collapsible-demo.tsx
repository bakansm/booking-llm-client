"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function BasicCollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle Content</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-4 rounded-md border p-4">
          This content is collapsible. Click the button to show/hide.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
