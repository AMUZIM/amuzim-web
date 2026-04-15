"use client";

type Props = {
  title: string;
  description?: string;
};

export default function NetworkEmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="text-sm font-medium">{title}</div>
      {description && (
        <div className="text-xs text-gray-500 mt-1">
          {description}
        </div>
      )}
    </div>
  );
}
