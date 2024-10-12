// PieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: any) => {
  const chartData = {
    labels: data.map((item: any) => item.status),
    datasets: [
      {
        label: 'Status Distribution',
        data: data.map((item: any) => item.count),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie data={chartData} options={{ maintainAspectRatio: false }} />
  );
};

export default PieChart;
