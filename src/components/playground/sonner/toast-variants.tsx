"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SuccessToast() {
  return (
    <Button
      onClick={() => toast.success("Operation completed successfully")}
      variant="outlined">
      Success Toast
    </Button>
  );
}

export function ErrorToast() {
  return (
    <Button
      onClick={() => toast.error("An error occurred")}
      variant="outlined">
      Error Toast
    </Button>
  );
}

export function DescriptionToast() {
  return (
    <Button
      onClick={() =>
        toast("Item saved", {
          description: "Your item has been saved to the database.",
        })
      }
      variant="outlined">
      With Description
    </Button>
  );
}
