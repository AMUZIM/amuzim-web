"use client";

export default function NetworkStats({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 text-xs text-muted-foreground">
      {children}
    </div>
  );
}
