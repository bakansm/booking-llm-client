"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function FormSubmissionToast() {
  return (
    <Button
      onClick={() =>
        toast.success("Form submitted", {
          description:
            "We've received your submission and will contact you soon.",
          action: {
            label: "View",
            onClick: () => console.log("View clicked"),
          },
        })
      }
      variant="outlined">
      Submit Form
    </Button>
  );
}

export function PromiseToast() {
  const handlePromiseToast = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve({ name: "Data loaded" }), 2000);
    });

    toast.promise(promise, {
      loading: "Loading data...",
      success: () => {
        return `Data loaded successfully`;
      },
      error: "Failed to load data",
    });
  };

  return (
    <Button
      onClick={handlePromiseToast}
      variant="outlined">
      Load Data
    </Button>
  );
}
