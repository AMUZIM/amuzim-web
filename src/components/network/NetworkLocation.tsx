"use client";

export default function NetworkLocation({
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
