"use client";

import { useState } from "react";
import NetworkTabs from "@/components/network/NetworkTabs";
import NetworkFeed from "@/components/network/NetworkFeed";
import NetworkNotifications from "@/components/network/NetworkNotifications";

export default function NetworkPage() {
  const [active, setActive] = useState("feed");

  const userId = "user_1";

  return (
    <div className="p-6 flex flex-col gap-4">
      <NetworkTabs
        tabs={[
          { key: "feed", label: "Feed" },
          { key: "notifications", label: "Notifications" },
        ]}
        active={active}
        onChange={setActive}
      />

      {active === "feed" && <NetworkFeed userId={userId} />}

      {active === "notifications" && (
        <NetworkNotifications userId={userId} />
      )}
    </div>
  );
}
