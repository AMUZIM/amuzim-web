"use client";

export default function NetworkStatus({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-xs text-green-500">
      {children}
    </div>
  );
}
