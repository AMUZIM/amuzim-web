"use client";

export default function NetworkEmpty({
  title,
}: {
  title: string;
}) {
  return (
    <div className="border rounded-xl p-8 text-center text-muted-foreground">
      {title}
    </div>
  );
}
