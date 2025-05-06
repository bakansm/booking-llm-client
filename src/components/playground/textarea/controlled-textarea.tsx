"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ControlledTextarea() {
  const [value, setValue] = useState("");

  return (
    <>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled textarea"
      />
      <div className="text-muted-foreground mt-2 text-xs">
        {value.length} characters
      </div>
    </>
  );
}
