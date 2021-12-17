import classes from "./NotificationsIcon.module.css";
import { Avatar, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import MessageCircleIcon  from "../../assets/dashboard/message-circle.svg?component";
import Badge from "@mui/material/Badge";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MessagesIcon = () => {
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
          badgeContent={3}
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "var(--main-color)",
            },
          }}
        >
          <MessageCircleIcon />
        </Badge>
      </IconButton>

      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
        <div className={classes.root}>
          <div className={classes.header}>
            <h3>הודעות</h3>
            <MoreHorizIcon />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Badge
                badgeContent={""}
                overlap="circular"
                variant="dot"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#11D548",
                  },
                }}
              >
                <Avatar sx={{ bgcolor: "#BA11D5" }}>רפ</Avatar>
              </Badge>
              <div className={classes.text}>
                <h4 className={classes.h4}>רחל פריימן</h4>
                <p className={classes.p}>12:30 מעדכנת לגבי פרוייקט לביאה...</p>
              </div>
            </div>

            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#11D548" }}>עפ</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>עדי פורת</h4>
                <p className={classes.p}>09:02 איך מתקדמת התחרות...</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#E5BB69" }}>אמ</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>איריס מירוני</h4>
                <p className={classes.p}>08:25 אני רוצה לקבוע מפגש השבוע...</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default MessagesIcon;
