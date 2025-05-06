"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function NestedCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle Outer</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-4 rounded-md border p-4">
          Outer content
          <Collapsible className="mt-4">
            <CollapsibleTrigger asChild>
              <Button
                size="sm"
                variant="secondary">
                Toggle Inner
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="bg-muted mt-2 rounded p-2 text-xs">
                Inner collapsible content
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
