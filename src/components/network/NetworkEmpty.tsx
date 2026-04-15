"use client";

import NetworkEmptyState from "./NetworkEmptyState";

type Props = {
  title?: string;
  description?: string;
};

export default function NetworkEmpty({
  title = "No data",
  description = "Nothing to display yet",
}: Props) {
  return (
    <NetworkEmptyState
      title={title}
      description={description}
    />
  );
}
