import React from "react";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import classes from "./DoughnutChart.module.css";

interface DougnatParams {
  labels: string[];
  backgroundColors: string[];
  datasetsData: number[];
}

const DoughnutChart = React.memo<DougnatParams>((props) => {
  const { labels, backgroundColors, datasetsData } = props;

  const [numOfMissions, setNumOfMissions] = useState(0);

  useEffect(() => {
    if (datasetsData.length > 0) {
      const mumOfMissions = datasetsData?.reduce(
        (previousNumber, currentNumber) => previousNumber + currentNumber
      );
      setNumOfMissions(mumOfMissions);
    }
  }, [datasetsData]);

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
      <div className={classes.chart}>
        <Doughnut data={data} options={options} />
      </div>
      <div className={classes.textContainer}>
        <div>משימות</div>
        <h1 className={classes.h1}>{numOfMissions}</h1>
      </div>
    </div>
  );
});

export default DoughnutChart;
