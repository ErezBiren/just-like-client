import { Doughnut, Chart } from "react-chartjs-2";

const data = {
  labels: ["מחלקה 1", "Blue", "Yellow"],
  datasets: [
    {
      data: [12, 30, 20],
      backgroundColor: ["#C73CA8", "#3CC73C", "#FDBC4E"],
      hoverOffset: 4,
    },
  ],
  text: "23%",
};

const options = {
  legend: {
    display: false,
    position: "bottom",
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

function DoughnutChart() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
