import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function LineChart({ storage }) {
  console.log(storage);
  const data = {
    labels: storage?.months,
    datasets: [
      {
        label: "Latesthits",
        data: storage?.latest,
        borderColor: "rgb(74,180,182)",
        borderWidth: 1,
        lineTension: 0.4,
      },
      {
        label: "Popular hits",
        data: storage?.popular,
        borderColor: "rgb(255,99,132)",
        borderWidth: 1,
        lineTension: 0.4,
      },
      {
        label: "featured",
        data: storage?.featured,
        borderColor: "rgb(153,102,255)",
        borderWidth: 1,
        lineTension: 0.4,
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Latest Hits",
        color: "white",
        font: {
          size: "20rem",
        },
        align: "start",
      },
      legend: {
        labels: { color: "white" },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "40rem",
        height: "30rem",
        backgroundColor: "rgb(67,92,112)",
      }}
    >
      <div
        style={{
          padding: "2rem",
          position: "relative",

          width: "30rem",
          height: "25rem",
          margin: "0rem auto",
        }}
      >
        <Line data={data} options={option} />
      </div>
    </div>
  );
}

export default LineChart;
