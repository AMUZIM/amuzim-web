import { networkGroups } from "@/data/networkGroups"

export default function NetworkGroups() {
  return (
    <div className="border border-neutral-800 rounded-xl p-5">

      <h3 className="font-medium mb-4">
        Groups
      </h3>

      <div className="space-y-3 text-sm">

        {networkGroups.map((group) => (
          <div
            key={group.id}
            className="cursor-pointer hover:text-white text-neutral-400"
          >
            <div className="font-medium">
              {group.name}
            </div>

            <div className="text-xs text-neutral-500">
              {group.members} members
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}
