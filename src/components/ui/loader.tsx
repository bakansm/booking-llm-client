import { LoaderCircleIcon, LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  type: "spinner" | "dots";
}

const Loader = ({ className, type = "spinner" }: LoaderProps) => {
  switch (type) {
    case "spinner":
      return (
        <LoaderCircleIcon className={cn("size-4 animate-spin", className)} />
      );
    case "dots":
      return <LoaderIcon className={cn("size-4 animate-spin", className)} />;

    default:
      return null;
  }
};

Loader.displayName = "Loader";

export default Loader;
