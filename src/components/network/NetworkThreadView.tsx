"use client";

type Props = {
  threadId: string;
};

export default function NetworkThreadView({ threadId }: Props) {
  return (
    <div className="text-sm text-gray-500">
      Thread: {threadId}
    </div>
  );
}
