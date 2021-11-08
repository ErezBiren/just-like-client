import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import DoughnutChart from "../Common/DoughnutChart";
import RoundedButton from "../Common/RoundedButton/RoundedButton";
import Subscribers from "../Subscribers/Subscribers";
import classes from "./Dashboard.module.css";
import Department from "./Department";

function Dashboard() {
  const departments = useSelector(
    (state: RootState) => state.dashboard.departments
  );

  const labels = ["מחלקה 1", "מחלקה 2", "מחלקה 3"];
  const datasetsData = [12, 30, 20];
  const backgroundColors = ["#C73CA8", "#3CC73C", "#FDBC4E"];

  return (
    <div className={classes.root}>
      <div className={classes.rightSide}>
        <h2>היי שמעון, צהריים טובים</h2>
        <div className={classes.departments}>
          <div className={classes.chartContainer}>
            <DoughnutChart
              labels={labels}
              datasetsData={datasetsData}
              backgroundColors={backgroundColors}
            />
          </div>
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
      <div className={classes.leftSide}>
        <div className={classes.subscribers}>
          <Subscribers />
        </div>
        <div className={classes.createMissionBtnContainer}>
          <RoundedButton>+ צור משימה</RoundedButton>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
