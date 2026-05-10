"use client";

import ShortFeed from "@/components/shorts/ShortFeed";
import { useState } from "react";
import NetworkTabs from "@/components/network/NetworkTabs";
import NetworkFeed from "@/components/network/NetworkFeed";
import NetworkNotifications from "@/components/network/NetworkNotifications";

export default function NetworkPage() {
  const [active, setActive] = useState("shorts");

  const userId = "user_1";

  return (
    <div className="p-6 flex flex-col gap-4">
      <NetworkTabs
   tabs={[
     { key: "feed", label: "Feed" },
     { key: "shorts", label: "Shorts" },
     { key: "notifications", label: "Notifications" },
   ]}
   active={active}
   onChange={setActive}
 />

<a
  href="/network/create"
  className="w-fit px-4 py-2 border rounded-lg text-sm"
>
  Upload
</a>

      {active === "feed" && <NetworkFeed userId={userId} />}
      
      {active === "shorts" && <ShortFeed />}
      
      {active === "notifications" && (
        <NetworkNotifications userId={userId} />
      )}
    </div>
  );
}
