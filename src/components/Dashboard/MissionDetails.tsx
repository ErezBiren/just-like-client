import classes from "./MissionDetails.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, AvatarGroup, IconButton } from "@mui/material";
import { IMission } from "../../store/models";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import AddIcon from "@mui/icons-material/Add";

export interface IMissionDetailsProps {
  onClose: () => void;
  mission: IMission;
}

function MissionDetails(props: IMissionDetailsProps) {
  const { onClose, mission } = props;

  return (
    <div className={classes.root}>
      <div className={classes.window}>
        <div className={classes.topBar}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.main}>
          <div className={classes.rightSide}>
            <div className={classes.missionDetails}>
              <h4>{mission.title}</h4>

              <div className={classes.row}>
                <div className={classes.header}>
                  <ScheduleIcon />
                  <h5>נוצר בתאריך</h5>
                </div>
                <h5>ריק</h5>
              </div>
              <div className={classes.row}>
                <div className={classes.header}>
                  <DescriptionOutlinedIcon />
                  <h5>פרוייקט</h5>
                </div>
                <h5>ריק</h5>
              </div>
              <div className={classes.row}>
                <div className={classes.header}>
                  <ArrowDropDownCircleOutlinedIcon />
                  <h5>סטטוס</h5>
                </div>
                <h5>ריק</h5>
              </div>
              <div className={classes.row}>
                <div className={classes.header}>
                  <StarIcon />
                  <h5>עדיפות</h5>
                </div>
                <h5>ריק</h5>
              </div>
              <div className={classes.row}>
                <div className={classes.header}>
                  <CalendarTodayOutlinedIcon />
                  <h5>ציר זמן</h5>
                </div>
                <h5>ריק</h5>
              </div>
              <div className={classes.row}>
                <div className={classes.header}>
                  <PeopleOutlineIcon />
                  <h5>מתנדבים</h5>
                </div>
                <AvatarGroup max={3}>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: "#E5BB69" }}>נב</Avatar>
                  <Avatar sx={{ bgcolor: "#E569E0" }}>עש</Avatar>
                  <Avatar sx={{ bgcolor: "#69E5C0" }}>מג</Avatar>
                  <Avatar sx={{ bgcolor: "#69B1E5" }}>מג</Avatar>
                </AvatarGroup>
              </div>
              <div className={classes.row}>
                <div className={classes.header}>
                  <PeopleOutlineIcon />
                  <h5>ג'וניורים</h5>
                </div>
                <h5>ריק</h5>
              </div>
            </div>
          </div>
          <div className={classes.leftSide}></div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetails;
