import classes from "./Subscribers.module.css";
import VerticalProgressBar from "../Common/VerticalProgressBar/VerticalProgressBar";

const subscribersList = [
  {
    title: "מתנדבים",
    amount: 290,
    percentage: 100,
  },
  {
    title: "ג'וניורים",
    amount: 320,
    percentage: 10,
  },
  {
    title: "אפרוחים",
    amount: 750,
    percentage: 50,
  },
];

function subscribers() {
  return (
    <div className={classes.root}>
      <h5>נרשמים</h5>
      <h2>1,500</h2>
      <h5 className={classes.date}>15 נובמבר 2021</h5>
      <div className={classes.charts}>
        {subscribersList.map((subscriber, idx) => (
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

export default subscribers;
