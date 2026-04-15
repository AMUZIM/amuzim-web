"use client";

type Tab = {
  key: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
};

export default function NetworkTabs({
  tabs,
  active,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2 border-b pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-3 py-1 text-sm rounded-lg ${
            active === tab.key
              ? "bg-black text-white"
              : "text-gray-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
