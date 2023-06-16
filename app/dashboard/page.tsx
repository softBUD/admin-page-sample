import Card from "@/components/cards/card";
import BarChartCard from "@/components/charts/bar-chart-card";
import Select from "@/components/input/select";

export default function dashboard() {
  const selectOptions = [
    { value: "January", name: "1월" },
    { value: "February", name: "2월" },
    { value: "March", name: "3월" },
    { value: "April", name: "4월" },
    { value: "May", name: "5월" },
    { value: "June", name: "6월" },
    { value: "July", name: "7월" },
    { value: "August", name: "8월" },
  ];

  return (
    <div className="w-full h-screen">
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
        <Card title="Form Card">
          <Select options={selectOptions} />
        </Card>
      </section>
    </div>
  );
}
