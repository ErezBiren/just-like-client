import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import DoughnutChart from "../Common/DoughnutChart";
import RoundedButton from "../Common/RoundedButton/RoundedButton";
import Subscribers from "../Subscribers/Subscribers";
import classes from "./Dashboard.module.css";
import DepartmentCard from "./DepartmentCard";
import { getDepartments } from "../../store/dashboardActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const departments = useSelector(
    (state: RootState) => state.dashboard.departments
  );

  const userFirstName = useSelector(
    (state: RootState) => state.auth.user?.firstName
  );

  const [labels, setLabels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  useEffect(() => {
    const labels: string[] = departments?.map((department) =>
      department.name.replace("מחלקת", "")
    );
    setLabels(labels);

    const colors: string[] = departments?.map((department) => department.color);
    setColors(colors);

    const chartData: number[] = departments?.map((department) =>
      department.projects.reduce(
        (previousValue, b) => previousValue + b.total,
        0
      )
    );
    setChartData(chartData);
  }, [departments]);

  return (
    <div className={classes.root}>
      <div className={classes.rightSide}>
        <h2>היי {userFirstName}, צהריים טובים!</h2>
        <div className={classes.departments}>
          <div className={classes.chartContainer}>
            <DoughnutChart
              labels={labels}
              datasetsData={chartData}
              backgroundColors={colors}
            />
          </div>
          {departments?.map((department) => (
            <DepartmentCard
              key={department.id}
              id={department.id}
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
};

export default Dashboard;
