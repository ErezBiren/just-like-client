import classes from "./Subscribers.module.css";
import VerticalProgressBar from "../Common/VerticalProgressBar/VerticalProgressBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ISubsribersData } from "../../store/models";

function Subscribers() {
  const subscribers = useSelector(
    (state: RootState) => state.dashboard.subscribers
  );

  return (
    <div className={classes.root}>
      <h5>נרשמים</h5>
      <h2>1,500</h2>
      <h5 className={classes.date}>15 נובמבר 2021</h5>
      <div className={classes.charts}>
        {subscribers?.map((subscriber: ISubsribersData, idx: any) => (
          <VerticalProgressBar
            key={idx}
            bgcolor={"#9869E4"}
            title={subscriber.title}
            percentage={subscriber.percentage}
            amount={subscriber.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default Subscribers;
