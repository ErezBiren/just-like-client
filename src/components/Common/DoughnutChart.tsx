import { Doughnut } from "react-chartjs-2";
import styles from "./DoughnutChart.module.css";

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
        hoverOffset: 4,
      },
    ],
    text: "23%",
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
        borderWidth: 10,
        borderColor: "#f5f5f5",
        weight: 3,
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options}></Doughnut>
      {/* <div className={styles.legend}>
        {datasetsData.map((datasetData, idx) => (
          <div
            key={idx}
            //bgcolor={backgroundColors[idx]}
            //percentage={project.percentage}
            //completed={project.completed}
          >
            {datasetData}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default DoughnutChart;
