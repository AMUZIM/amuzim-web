"use client";

import { useRef } from "react";
import NetworkThreadView, { ThreadViewRef } from "./NetworkThreadView";
import NetworkMessageBox from "./NetworkMessageBox";

type Props = {
  threadId: string;
  currentUserId: string;
  targetUserId: string;
};

export default function NetworkMessageContainer({
  threadId,
  currentUserId,
  targetUserId,
}: Props) {
  const threadRef = useRef<ThreadViewRef>(null);

  return (
    <div className="flex flex-col gap-2">
      <NetworkThreadView
        ref={threadRef}
        threadId={threadId}
        currentUserId={currentUserId}
      />

      <NetworkMessageBox
        currentUserId={currentUserId}
        targetUserId={targetUserId}
        onMessageSent={() => {
          threadRef.current?.refresh();
        }}
      />
    </div>
  );
}
