type Props = {
  type: "loading" | "empty" | "error" | "search-empty";
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

  if (type === "search-empty") {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16 text-center">
        <h3 className="text-lg font-semibold text-neutral-900">
          No results found
        </h3>
        <p className="text-sm text-neutral-500 mt-2">
          Try a different search or check spelling
        </p>
      </div>
    );
  }

  if (type === "empty") {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16 text-center">
        <h3 className="text-lg font-semibold text-neutral-900">
          No profiles yet
        </h3>
        <p className="text-sm text-neutral-500 mt-2">
          Check back later or explore other sections
        </p>
      </div>
    );
  }

  return null;
}
