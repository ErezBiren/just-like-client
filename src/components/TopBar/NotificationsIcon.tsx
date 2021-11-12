import classes from "./NotificationsIcon.module.css";
import { Avatar, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { ReactComponent as BellIcon } from "../../assets/dashboard/bell.svg";
import Badge from "@mui/material/Badge";
import CircleIcon from "@mui/icons-material/Circle";

function NotificationsIcon() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={4} color="secondary">
          <BellIcon />
        </Badge>
      </IconButton>

      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
        <div className={classes.root}>
          <h4>התראות</h4>
          <div className={classes.row}>
            <Avatar sx={{ bgcolor: "#E5BB69" }}>נב</Avatar>
            <div>
              <p>שלום שלום</p>
              <p>לפני 20 דקות</p>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <Avatar sx={{ bgcolor: "#E5BB69" }}>נב</Avatar>
            <div>
              <p>שלום שלום</p>
              <p>לפני 20 דקות</p>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <Avatar sx={{ bgcolor: "#E5BB69" }}>נב</Avatar>
            <div>
              <p>שלום שלום</p>
              <p>לפני 20 דקות</p>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <Avatar sx={{ bgcolor: "#E5BB69" }}>נב</Avatar>
            <div>
              <p>שלום שלום</p>
              <p>לפני 20 דקות</p>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default NotificationsIcon;
