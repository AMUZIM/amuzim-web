"use client";

export default function NetworkSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium">
        {title}
      </h2>

      {children}
    </div>
  );
}
