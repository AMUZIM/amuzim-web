import NetworkGroups from "./NetworkGroups"
import NetworkSignals from "./NetworkSignals"

export default function NetworkSidebar() {
  return (
    <aside className="space-y-6">
      <NetworkSignals />
      <NetworkGroups />
    </aside>
  );
}
