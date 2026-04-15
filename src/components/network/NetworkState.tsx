"use client";

type Props = {
  type: "loading" | "empty" | "error";
  message?: string;
};

export default function NetworkState({ type, message }: Props) {
  if (type === "loading") {
    return (
      <div className="text-sm text-gray-500">
        Loading...
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="text-sm text-red-500">
        {message || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="text-sm text-gray-400">
      {message || "No data"}
    </div>
  );
}
