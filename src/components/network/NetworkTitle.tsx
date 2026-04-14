"use client";

export default function NetworkTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-medium">
      {children}
    </div>
  );
}
