import classes from "./NotificationsIcon.module.css";
import { Avatar, IconButton, Modal } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { ReactComponent as BellIcon } from "../../assets/dashboard/bell.svg";
import Badge from "@mui/material/Badge";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationDetails from "./NotificationDetails";

const NotificationsIcon = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const [openModal, setOpenModal] = useState(false);

  const handleNotificationsIConClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
    setOpenModal(false);
  };

  const handleRowClicked = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <IconButton onClick={handleNotificationsIConClick}>
        <Badge
          badgeContent={2}
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
          {/* <div className={classes.row}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#BA11D5" }}>טב</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>טל בראל רוצה להירשם לאפרוחיה</h4>
                <p className={classes.p}>לפני 10 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div> */}
          <div className={classes.row} onClick={handleRowClicked}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#11D548" }}>לכ</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>ליאור כהן רוצה להירשם לאפרוחיה</h4>
                <p className={classes.p}>לפני 22 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
          <div className={classes.row} onClick={handleRowClicked}>
            <div className={classes.rightSide}>
              <Avatar sx={{ bgcolor: "#E5BB69" }}>יא</Avatar>
              <div className={classes.text}>
                <h4 className={classes.h4}>יונתן איינשטיין אישר השתתפות</h4>
                <p className={classes.p}>לפני 30 דקות</p>
              </div>
            </div>
            <CircleIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
          </div>
        </div>
      </Menu>

      <Modal open={openModal} onClose={handleClose}>
        <NotificationDetails onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default NotificationsIcon;
