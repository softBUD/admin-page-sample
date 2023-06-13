import React from "react";
import Card from "@/components/card";

export default function dashboard() {
  return (
    <div className="bg-slate-100 w-screen h-screen">
      <div className="max-w-xl p-4">
        <Card title="타이틀" content="콘텐트" />
      </div>
    </div>
  );
}
