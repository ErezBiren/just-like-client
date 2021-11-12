import { useParams } from "react-router";
import { useSelector } from "react-redux";
import classes from "./Department.module.css";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { IProject } from "../store/models";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import MissionTable from "../components/Dashboard/MissionsTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Department() {
  const params = useParams();
  const [projects, setProjects] = useState<IProject[]>([]);

  const departments = useSelector(
    (state: RootState) => state.dashboard.departments
  );
  useEffect(() => {
    const selectedDepartment = departments.find(
      (d) => d.id === params.departmentId
    );

    if (selectedDepartment) {
      setProjects(selectedDepartment.projects);
    }
  }, [departments, params.departmentId]);

  return (
    <div>
      <div className={classes.root}>
       
        <h2>פרוייקטים</h2>
        {projects?.map((project, idx) => (
          <div className={classes.accordion} key={idx}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box mx={2}>
                  <Typography color="#3CC73C">{project.name}</Typography>
                </Box>
              </AccordionSummary>
              <div className={classes.missionsTable}>
                <MissionTable missions={project.missions} />
              </div>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;
