import Card from "@/components/Cards/card";
import BarChartCard from "@/components/Cards/bar-chart-card";

export default function dashboard() {
  return (
    <div className="bg-slate-100 w-screen h-screen">
      <div className="p-4">
        <Card title="Title Preview">
          <BarChartCard />
        </Card>
      </div>
    </div>
  );
}
