"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export function ControlledRadioGroup() {
  const [selected, setSelected] = useState("option-1");

  return (
    <>
      <RadioGroup
        value={selected}
        onValueChange={setSelected}>
        <div className="mb-2 flex items-center gap-2">
          <RadioGroupItem
            value="option-1"
            id="c1"
            color="primary"
            size="md"
          />
          <Label htmlFor="c1">Option 1</Label>
        </div>
        <div className="mb-2 flex items-center gap-2">
          <RadioGroupItem
            value="option-2"
            id="c2"
            color="error"
            size="md"
          />
          <Label htmlFor="c2">Option 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="option-3"
            id="c3"
            color="success"
            size="md"
          />
          <Label htmlFor="c3">Option 3</Label>
        </div>
      </RadioGroup>
      <div className="text-muted-foreground mt-2 text-xs">
        Selected: {selected}
      </div>
    </>
  );
}
