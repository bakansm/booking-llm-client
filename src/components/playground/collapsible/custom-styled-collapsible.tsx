"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CustomStyledCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Custom Trigger
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-4 rounded-md border-2 border-blue-500 bg-blue-50 p-4 text-blue-900">
          Custom styled collapsible content.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
