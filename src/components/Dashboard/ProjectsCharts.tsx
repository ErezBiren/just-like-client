import DoughnutChart from "../Common/DoughnutChart";
import styles from "./ProjectsCharts.module.css"

function ProjectsCharts() {
  return (
    <div className={styles.root}>
      <DoughnutChart />
      <DoughnutChart />
    </div>
  );
}

export default ProjectsCharts;
