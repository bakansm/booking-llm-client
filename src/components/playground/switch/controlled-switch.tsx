"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function ControlledSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={enabled}
        onCheckedChange={setEnabled}
        id="controlled-switch"
      />
      <label
        htmlFor="controlled-switch"
        className="text-sm">
        {enabled ? "On" : "Off"}
      </label>
    </div>
  );
}
