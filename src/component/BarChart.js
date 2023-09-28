import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

function PieChart({ storage }) {
  const data = {
    labels: [`Red `, "Aqua", "Green", "yellow", "Purple", "orange", "Blue"],
    axis: "x",
    plotOptions: {
      series: {
        pointWidth: 5,
      },
    },
    datasets: [
      {
        label: "# of hits",
        data: [
          storage?.Aqua,
          storage?.Blue,
          storage?.Green,
          storage?.Orange,
          storage?.Purple,
          storage?.Red,
          storage?.Yellow,
        ],
        backgroundColor: [
          "rgb(247,96,77)",
          "rgb(78,214,184)",
          "rgb(168,213,130)",
          "rgb(215,215,104)",
          "rgb(150,101,197)",
          "rgb(219,156,63)",
          "rgb(57,133,241)",
        ],
        borderColor: [
          "rgb(247,96,77)",
          "rgb(78,214,184)",
          "rgb(168,213,130)",
          "rgb(215,215,104)",
          "rgb(150,101,197)",
          "rgb(219,156,63)",
          "rgb(57,133,241)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Performance",
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
    elements: {
      bar: {
        borderWidth: "2px",
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        min: 20,
        ticks: {
          color: "white",
          stepSize: 10,
        },

        font: {
          size: "2rem",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        font: {
          size: "2rem",
        },
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
        <Bar data={data} options={option} />
      </div>
    </div>
  );
}

export default PieChart;
