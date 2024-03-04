import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function TemperatureChart({ hours }) {
  const canvasRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (!hours || hours.length === 0) return;

    const labels = hours.map((hour) =>
      new Date(hour.time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
    const temperatures = hours.map((hour) => hour.temp_c);

    const ctx = canvasRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy();
    }

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temperature (°C)",
            data: temperatures,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    setChartInstance(myChart);

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [hours]);

  return (
    <>
      <div>
        <canvas ref={canvasRef} width={300} height={100}></canvas>
      </div>
    </>
  );
}

export default TemperatureChart;
