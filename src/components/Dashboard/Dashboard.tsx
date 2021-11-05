import DoughnutChart from "../Common/DoughnutChart";
import styles from "./Dashboard.module.css";
import Department from "./Department";

const departments = [
  {
    name: "מחלקת עיצוב",
    color: "#5c3153",
    missions: [
      { name: "aa", completed: 100 },
      { name: "bb", completed: 30 },
      { name: "ccc", completed: 53 },
    ],
  },
  {
    name: "מחלקת הדרכות",
    color: "#C73CA8",
    missions: [
      { name: "aa", completed: 60 },
      { name: "bb", completed: 30 },
      { name: "ccc", completed: 100 },
    ],
  },
  {
    name: "מחלקת ניהול קהילה",
    color: "#3CC73C",
    missions: [
      { name: "aa", completed: 100 },
      { name: "ccc", completed: 63 },
    ],
  },
  {
    name: "מחלקת אסטרטגיה",
    color: "#FDBC4E",
    missions: [{ name: "aa", completed: 100 }],
  },
];

function Dashboard() {
  return (
    <div className={styles.root}>
      <div className={styles.charts}>
        <DoughnutChart />
        <DoughnutChart />
      </div>
      <div className={styles.departments}>
        {departments.map((department, idx) => (
          <Department
            key={idx}
            color={department.color}
            missions={department.missions}
            name={department.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
