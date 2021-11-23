import classes from "./Subscribers.module.css";
import VerticalProgressBar from "../Common/VerticalProgressBar/VerticalProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SubsribersData, UserCategory } from "../../store/models";
import { useEffect, useState } from "react";
import { getUsers } from "../../store/dashboardActions";

const Subscribers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state: RootState) => state.dashboard.users);

  const [subscribers, setSubscribers] = useState<SubsribersData[]>([]);

  useEffect(() => {
    const tempSubscribers = [];

    const total = users.length;

    const juniorsCount = users.filter(
      (user) => user.category === UserCategory.Junior
    ).length;
    const chicksCount = users.filter(
      (user) => user.category === UserCategory.Chick
    ).length;
    const volunteersCount = users.filter(
      (user) => user.category === UserCategory.Volunteer
    ).length;

    tempSubscribers.push({
      id: "1",
      title: "מתנדבים",
      amount: volunteersCount,
      percentage: (100 * volunteersCount) / total,
    });
    tempSubscribers.push({
      id: "2",
      title: "ג'וניורים",
      amount: juniorsCount,
      percentage: (100 * juniorsCount) / total,
    });
    tempSubscribers.push({
      id: "3",
      title: "אפרוחים",
      amount: chicksCount,
      percentage: (100 * chicksCount) / total,
    });

    setSubscribers(tempSubscribers);
  }, [users]);

  return (
    <div className={classes.root}>
      <h5>נרשמים</h5>
      <h2>{users?.length}</h2>
      <h5 className={classes.date}>15 נובמבר 2021</h5>
      <div className={classes.charts}>
        {subscribers?.map((subscriber: SubsribersData, idx: any) => (
          <VerticalProgressBar
            key={subscriber.id}
            bgcolor={"#9869E4"}
            title={subscriber.title}
            percentage={subscriber.percentage}
            amount={subscriber.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscribers;
