import ProgressBar from "../Common/ProgressBar/ProgressBar";
import styles from "./Department.module.css";

const testData = [
  { bgcolor: "#C73CA8", completed: 60 },
  { bgcolor: "#3CC73C", completed: 30 },
  { bgcolor: "#FDBC4E", completed: 53 },
];

interface Mission {
  completed: Number;
}

interface Department {
  name: string;
  color: string;
  missions: Mission[];
}

function Department({ color, missions, name }: Department) {
  return (
    <div className={styles.root}>
      <div className={styles.topPart}>
        <div className={styles.headers}>
          <h3>{name}</h3>
          <h5>משימות שהושלמו</h5>
        </div>
        <div className={styles.userIcon}></div>
      </div>
      <div className={styles.missions}>
        {missions.map((mission, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={color}
            completed={mission.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default Department;
