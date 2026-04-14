"use client";

export default function NetworkMeta({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-xs text-muted-foreground">
      {children}
    </div>
  );
}
