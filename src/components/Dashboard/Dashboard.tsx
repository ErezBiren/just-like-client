import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import DoughnutChart from "../Common/DoughnutChart";
import styles from "./Dashboard.module.css";
import Department from "./Department";

function Dashboard() {
  const departments = useSelector(
    (state: RootState) => state.dashboard.departments
  );
  const labels = ["מחלקה 1", "מחלקה 2", "מחלקה 3"];
  const datasetsData = [12, 30, 20];
  const backgroundColors = ["#C73CA8", "#3CC73C", "#FDBC4E"];

  return (
    <div className={styles.root}>
      <h2>היי שמעון, צהריים טובים</h2>
      <div className={styles.charts}>
        <DoughnutChart
          labels={labels}
          datasetsData={datasetsData}
          backgroundColors={backgroundColors}
        />
        <DoughnutChart
          labels={labels}
          datasetsData={datasetsData}
          backgroundColors={backgroundColors}
        />
      </div>
      <div className={styles.departments}>
        {departments.map((department, idx) => (
          <Department
            key={idx}
            color={department.color}
            projects={department.projects}
            name={department.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
