"use client";

import NetworkState from "./NetworkState";

type Props = {
  userId: string;
};

export default function NetworkNotifications({ userId }: Props) {
  return (
    <NetworkState
      type="empty"
      message="Notifications disabled (temp)"
    />
  );
}
