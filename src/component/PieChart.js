import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function PieChart({ storage }) {
  const data = {
    labels: [
      `use storage ${storage?.used}`,
      `system storage ${storage?.system}`,
      `available storage ${storage?.available}`,
    ],
    datasets: [
      {
        data: [storage?.used, storage?.system, storage?.available],
        backgroundColor: [
          "rgb(247,96,77)",
          "rgb(78,214,184)",
          "rgb(168,213,130)",
        ],
        borderColor: ["rgb(247,96,77)", "rgb(78,214,184)", "rgb(168,213,130)"],
        borderWidth: 1,
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Storage Information",
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
  };
  return (
    <div
      style={{
        // marginTop: "5rem",
        // marginLeft: "15rem",
        width: "40rem",
        height: "30rem",
        backgroundColor: "rgb(67,92,112)",
      }}
    >
      <div
        style={{
          padding: "2rem",
          position: "relative",
          left: "5rem",
          width: "30rem",
          height: "25rem",
        }}
      >
        <Pie data={data} options={option} />
      </div>
    </div>
  );
}

export default PieChart;
