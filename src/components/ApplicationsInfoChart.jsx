import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 15,
        padding: 15,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
      beginAtZero: true,
      ticks: {
        min: 1000,
        max: 4000,
        stepSize: 1000,
        callback: function (value, index, values) {
          return value.toLocaleString();
        },
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Processed",
      borderColor: "#002B55BD",
      pointRadius: 0,
      borderWidth: 5,
      fill: true,
      data: [
        2000, 1200, 1000, 3000, 4000, 3200, 2800, 1800, 600, 1300, 2500, 2700,
      ],
      tension: 0.4,
    },
    {
      type: "bar",
      label: "Received",
      backgroundColor: "#0A66C2",
      data: [
        2000, 2800, 3200, 2700, 3600, 1600, 3100, 2200, 4000, 500, 2900, 3800,
      ],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

const ApplicationsInfoChart = () => (
  <>
    <div className="header  mt-5">
      <h3 className="title">Application's Info</h3>
      <hr />
    </div>
    <Bar options={options} data={data} height={80} />
  </>
);

export default ApplicationsInfoChart;
