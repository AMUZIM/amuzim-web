"use client";

type Props = {
  children?: React.ReactNode;
  onMessage?: () => void;
  onFollow?: () => void;
};

export default function NetworkActions({
  children,
  onMessage,
  onFollow,
}: Props) {
  // modo wrapper (como ya lo usas en NetworkItem)
  if (children) {
    return <div className="flex gap-2">{children}</div>;
  }

  // modo acciones controladas
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
