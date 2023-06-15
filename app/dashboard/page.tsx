import Card from "@/components/cards/card";
import BarChartCard from "@/components/charts/bar-chart-card";

export default function dashboard() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row">
        <section className="pt-4 pl-4 pr-4 pb-4 min-w-[33.3%]">
          <Card title="section1">children</Card>
        </section>
        <section className="pt-4 pr-4 pb-4 min-w-[33.3%]">
          <Card title="section2">children</Card>
        </section>
        <section className="pt-4 pr-3.5 pb-4 min-w-[33.3%]">
          <Card title="section3">children</Card>
        </section>
      </div>
      <section className="pl-4 pr-4 pb-4">
        <Card title="Title Preview">
          <BarChartCard />
        </Card>
      </section>
      <section className="pl-4 pr-4">
        <Card title="Title Preview">
          <select>
            <option>옵션1</option>
            <option>옵션2</option>
            <option>옵션3</option>
          </select>
        </Card>
      </section>
    </div>
  );
}
