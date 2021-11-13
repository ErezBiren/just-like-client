import classes from "./NotificationsIcon.module.css";
import { Avatar, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { ReactComponent as BellIcon } from "../../assets/dashboard/bell.svg";
import Badge from "@mui/material/Badge";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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
        <Badge
          badgeContent={4}
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "var(--main-color)",
            },
          }}
        >
          <BellIcon />
        </Badge>
      </IconButton>

      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
        <div className={classes.root}>
          <div className={classes.header}>
            <h3>התראות</h3>
            <MoreHorizIcon />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#BA11D5" }}>טב</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>שלום שלום</h4>
                <p className={classes.p}>לפני 20 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#11D548" }}>לכ</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>שלום שלום</h4>
                <p className={classes.p}>לפני 20 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#E5BB69" }}>יא</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>שלום שלום</h4>
                <p className={classes.p}>לפני 20 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#699BE5" }}>נב</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>שלום שלום</h4>
                <p className={classes.p}>לפני 20 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default NotificationsIcon;
