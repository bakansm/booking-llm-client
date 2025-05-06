"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function BasicToast() {
  return (
    <Button
      onClick={() => toast("This is a toast notification")}
      variant="outline">
      Show Toast
    </Button>
  );
}
