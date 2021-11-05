import ProgressBar from "../Common/ProgressBar/ProgressBar";
import styles from "./Department.module.css";
import { IDepartment } from "../../store/dashboard-Slice";

function Department({ color, projects, name }: IDepartment) {
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
        {projects.map((project, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={color}
            percentage={project.percentage}
            completed={project.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default Department;
