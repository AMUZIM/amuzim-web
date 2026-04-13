import NetworkHero from "@/components/network/NetworkHero";
import NetworkFeed from "@/components/network/NetworkFeed";
import NetworkSidebar from "@/components/network/NetworkSidebar";

export default function NetworkAppPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <NetworkHero />

      <div className="grid grid-cols-12 gap-6 px-6 py-8 max-w-7xl mx-auto">

        <div className="col-span-8">
          <NetworkFeed />
        </div>

        <div className="col-span-4">
          <NetworkSidebar />
        </div>

      </div>

    </main>
  );
}
