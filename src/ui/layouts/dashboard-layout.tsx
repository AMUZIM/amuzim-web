import DashboardNavigation from "@/ui/navigation/dashboard-navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashboardNavigation />

      {children}
    </main>
  );
}
