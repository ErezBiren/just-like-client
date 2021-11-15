import { IconButton, Avatar } from "@mui/material";
import classes from "./NotificationDetails.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@material-ui/core";

export interface NotificationDetailsParams {
  onClose: () => void;
}

function NotificationDetails(props: NotificationDetailsParams) {
  const { onClose } = props;

  return (
    <div className={classes.root}>
      <div className={classes.window}>
        <div className={classes.topBar}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.main}>
          <Avatar sx={{ bgcolor: "#11D548", width: 56, height: 56 }}>לכ</Avatar>
          <h2 className={classes.h2}>ליאור כהן</h2>
          <div className={classes.row}>
            <div className={classes.header}>
              <h5>אימייל</h5>
            </div>
            <h5>talbarel@gmail.com</h5>
          </div>
          <div className={classes.row}>
            <div className={classes.header}>
              <h5>פרופיל לינקדאין</h5>
            </div>

            <Link target="_blank" href="http:\\www.linkedin.com\in\talbarel">
              <h5>linkedin.com\talbarel</h5>
            </Link>
          </div>
          <div className={classes.row}>
            <div className={classes.header}>
              <h5>תחום</h5>
            </div>
            <h5>פיתוח</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationDetails;
