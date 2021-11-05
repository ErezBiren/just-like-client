import styles from "./Dashboard.module.css";
import ProjectsCharts from "./ProjectsCharts";

function Dashboard() {
  return (
    <div className={styles.root}>
      <div className={styles.charts}>
          <ProjectsCharts/>
      </div>
      <div className={styles.departments}></div>
    </div>
  );
}

export default Dashboard;
