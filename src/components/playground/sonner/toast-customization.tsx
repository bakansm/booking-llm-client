"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function CustomDurationToast() {
  return (
    <Button
      onClick={() =>
        toast("Short toast", {
          duration: 2000,
        })
      }
      variant="outline">
      Short Duration (2s)
    </Button>
  );
}

export function ActionToast() {
  return (
    <Button
      onClick={() =>
        toast("Document deleted", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
          },
        })
      }
      variant="outline">
      With Action
    </Button>
  );
}
