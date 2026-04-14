"use client";

export default function NetworkBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="text-xs bg-muted rounded-full px-2 py-1">
      {children}
    </span>
  );
}
