import { Doughnut } from "react-chartjs-2";
import classes from "./DoughnutChart.module.css";

interface IDougnatProps {
  labels: string[];
  backgroundColors: string[];
  datasetsData: number[];
}

function DoughnutChart(props: IDougnatProps) {
  const { labels, backgroundColors, datasetsData } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        data: datasetsData,
        backgroundColor: backgroundColors,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    cutout: 95,
    elements: {
      arc: {
        borderWidth: 0,
        borderColor: "#ffffff",
        weight: 3,
      },
    },
  };

  return (
    <div className={classes.root}>
      <Doughnut data={data} options={options}></Doughnut>
      {
        // <div className={classes.legend}>
        //   {datasetsData?.map((datasetData, idx) => (
        //     <div key={idx}>{datasetData}</div>
        //   ))}
        // </div>
      }
    </div>
  );
}

export default DoughnutChart;
