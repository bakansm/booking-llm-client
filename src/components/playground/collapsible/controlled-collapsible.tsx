"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function ControlledCollapsible() {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant={open ? "destructive" : "outline"}>
          {open ? "Hide" : "Show"} Content
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-4 rounded-md border p-4">
          This collapsible is controlled by state.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
