import React, { useEffect, useRef} from "react";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Histogram = ({keywordData}) => {
  const chartRef = useRef();
  let data = keywordData;

  useEffect(() => {
    console.log('GRAPH: ' + data[0]);
    console.log('GRAPH: ' + data[1]);
    let chartInstance = null;
    const chartCanvas = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: data[0],
        datasets: [
          {
            label: "Words",
            data: data[1],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
    });

    return () => {
      chartInstance.destroy();
    };
  });

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default Histogram;