"use client";

export default function NetworkSubtitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-sm text-muted-foreground">
      {children}
    </div>
  );
}
