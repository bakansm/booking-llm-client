"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function FaqCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">What is your return policy?</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted mt-4 rounded-md border p-4">
          You can return any item within 30 days of purchase for a full refund.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
