"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Card from "../cards/card";
Chart.register(...registerables);

export default function BarChartCard() {
  const data = {
    id: "bar-charts",
    labels: [
      "data1",
      "data2",
      "data3",
      "data4",
      "data5",
      "data6",
      "data7",
      "data8",
      "data9",
      "data10",
    ],
    datasets: [
      {
        label: "dataset 1",
        data: [7, 10, 13, 18, 15, 10, 5, 18, 3, 2],
        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderWidth: 0,
        barThickness: 20,
        borderRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    usePointStyle: true,
    maintainAspectRatio: false,
    pointStyle: "circle",
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        // 범례 스타일링
        labels: {
          usePointStyle: true,
          // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시됩니다.
          padding: 10,
          // 범례 간 가로 간격을 조정할 수 있습니다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않아요. ㅠㅠ
          font: {
            // 범례의 폰트 스타일도 지정할 수 있습니다.
            family: "'Noto Sans KR', 'serif'",
            lineHeight: 1,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
        },
      },
      y: {
        display: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
