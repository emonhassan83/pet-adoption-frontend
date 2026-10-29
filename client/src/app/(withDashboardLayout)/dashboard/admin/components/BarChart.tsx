// BarChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }: any) => {
  const chartData = {
    labels: data.map((item: any) => new Date(item.month).toLocaleString('default', { month: 'long' })),
    datasets: [
      {
        label: 'Monthly Counts',
        data: data.map((item: any) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar data={chartData} options={{ maintainAspectRatio: false }} />
  );
};

export default BarChart;
