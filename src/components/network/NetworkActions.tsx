"use client";

export default function NetworkActions({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 text-sm">
      {children}
    </div>
  );
}
