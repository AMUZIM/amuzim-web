"use client";

export default function NetworkCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-6">
      {children}
    </div>
  );
}
