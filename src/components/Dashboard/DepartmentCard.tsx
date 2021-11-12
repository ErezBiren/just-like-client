import { IDepartment } from "../../store/models";
import ProgressBar from "../Common/ProgressBar/ProgressBar";
import classes from "./DepartmentCard.module.css";

function DepartmentCard({ color, projects, name, id }: IDepartment) {
  return (
    <div className={classes.root}>
      <div className={classes.topPart}>
        <div className={classes.headers}>
          <h3>{name}</h3>
          <h5>משימות שהושלמו</h5>
        </div>
        <div className={classes.userIcon}></div>
      </div>
      <div className={classes.missions}>
        {projects?.map((project, idx) => (
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

export default DepartmentCard;
