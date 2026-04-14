"use client";

export default function NetworkCreate({
  title,
}: {
  title: string;
}) {
  return (
    <div className="border rounded-xl p-6">
      {title}
    </div>
  );
}
