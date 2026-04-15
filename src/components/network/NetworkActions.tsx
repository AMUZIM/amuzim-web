"use client";

type Props = {
  onMessage?: () => void;
  onFollow?: () => void;
};

export default function NetworkActions({
  onMessage,
  onFollow,
}: Props) {
  return (
    <div className="flex gap-2">
      {onMessage && (
        <button
          onClick={onMessage}
          className="px-3 py-1 text-xs border rounded-lg"
        >
          Message
        </button>
      )}

      {onFollow && (
        <button
          onClick={onFollow}
          className="px-3 py-1 text-xs border rounded-lg"
        >
          Follow
        </button>
      )}
    </div>
  );
}
