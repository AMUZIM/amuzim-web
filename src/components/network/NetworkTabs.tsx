"use client";

type Tab = {
  key: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
  className?: string;
};

export default function NetworkTabs({
  tabs,
  active,
  onChange,
  className = "",
}: Props) {
  return (
    <div className={`flex gap-2 border-b pb-2 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-3 py-1 text-sm rounded-lg transition ${
            active === tab.key
              ? "bg-black text-white"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
