"use client";
import dynamic from "next/dynamic";

const EmbeddedDashboard = dynamic(
  () =>
    import("~/components/good-data/Dashboard").then((mod) => ({
      default: mod.EmbeddedDashboard,
    })),
  {
    loading: () => <div>Loading dashboard...</div>,
    ssr: false,
  }
);

export default function InsightsPage() {
  return (
    <div>
      <EmbeddedDashboard />
    </div>
  );
}
