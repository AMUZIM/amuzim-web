"use client";

export default function NetworkButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="border rounded-lg px-3 py-1 text-sm hover:bg-muted">
      {children}
    </button>
  );
}
