"use client";

export default function NetworkTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="text-xs border rounded-full px-2 py-1">
      {children}
    </span>
  );
}
