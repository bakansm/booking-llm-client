"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function AnimatedProgress() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      color="secondary"
    />
  );
}
