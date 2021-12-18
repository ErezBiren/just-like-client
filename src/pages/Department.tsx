import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import MissionTable from "../components/Dashboard/MissionsTable";
import { Project } from "../store/models";
import { RootState } from "../store/store";
import classes from "./Department.module.css";

const Department = () => {

  const params = useParams();
  const [projects, setProjects] = useState<Project[]>([]);

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
};

export default Department;
