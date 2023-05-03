import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { StyledDashboardChart } from "../../constats/styles";
import useGetSummaryChart from "../../hooks/invoices/useGetChart";
import useGetChart from "../../hooks/invoices/useGetChart";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = [
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

const CHART_DATA_INIT = {
  labels: [],
  datasets: [
    {
      label: "Dataset 1",
      data: [],
      backgroundColor: "#D1FADF",
      borderColor: "#32D583",
      borderWidth: 1,
      borderRadius: 8,
      maxBarThickness: 32,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        color: "#475467",
      },
      border: {
        color: "#F2F4F7",
      },
    },
    y: {
      grid: {
        color: "#F2F4F7",
        drawBorder: false,
      },
      ticks: {
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        color: "#344054",
        stepSize: 200,
      },
      border: {
        display: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  events: [],
};

export const Chart = () => {
  const { chart } = useGetChart();
  const [chartData, setChartData] = useState(CHART_DATA_INIT);

  const handleGetMonth = (d) => {
    const date = new Date(d);
    const monthNumber = date.getMonth();
    return months[monthNumber];
  };

  const handleFormatChartData = (data) => {
    if (data) {
      let labels = [];
      let values = [];

      Object.entries(data).forEach((e) => {
        labels.push(handleGetMonth(e[0]));
        values.push(e[1]);
      });

      setChartData({
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data: values,
            backgroundColor: "#D1FADF",
            borderColor: "#32D583",
            borderWidth: 1,
            borderRadius: 8,
            maxBarThickness: 32,
          },
        ],
      });
    }
  };

  useEffect(() => {
    if (chart) {
      handleFormatChartData(chart);
    }
  }, [chart]);

  return (
    <StyledDashboardChart>
      <div className="title">Cash Flow</div>
      <div className="chart">
        <Bar options={options} data={chartData} />
      </div>
    </StyledDashboardChart>
  );
};
