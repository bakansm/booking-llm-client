"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function NotificationSwitch() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="flex max-w-md items-center gap-4">
      <Switch
        checked={notifications}
        onCheckedChange={setNotifications}
        id="notif-switch"
      />
      <label
        htmlFor="notif-switch"
        className="text-sm">
        Email Notifications {notifications ? "Enabled" : "Disabled"}
      </label>
    </div>
  );
}
