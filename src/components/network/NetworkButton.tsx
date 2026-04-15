"use client";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "primary";
};

export default function NetworkButton({
  children,
  onClick,
  variant = "default",
}: Props) {
  const base = "px-3 py-1 text-xs rounded-lg transition";

  const styles =
    variant === "primary"
      ? "bg-black text-white"
      : "border text-black";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
