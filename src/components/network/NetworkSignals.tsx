import { networkSignals } from "@/data/networkSignals"

export default function NetworkSignals() {
  return (
    <div className="border border-neutral-800 rounded-xl p-5">

      <h3 className="font-medium mb-4">
        Signals
      </h3>

      <div className="space-y-4">

        {networkSignals.map((signal) => (

          <div key={signal.id}>

            <div className="text-sm font-medium">
              {signal.title}
            </div>

            <div className="text-xs text-neutral-500">
              {signal.description}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
