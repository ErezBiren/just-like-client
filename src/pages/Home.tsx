import classes from "./Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import { ReactComponent as UserPlusIcon } from "../assets/dashboard/user-plus.svg";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import Department from "./Department";
import NotificationsIcon from "../components/TopBar/NotificationsIcon";
import { Avatar } from "@mui/material";
import MessagesIcon from "../components/TopBar/MessagesIcon";

const Home = () => {
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <div className={classes.topControls}>
          <div className={classes.searchContainer}>
            <TextField
              style={{
                backgroundColor: "white",
              }}
              type="search"
              variant="outlined"
              margin="normal"
              placeholder="חיפוש"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.leftTopControls}>
            <div className={classes.userPlusContainer}>
              <UserPlusIcon />
            </div>
            <div className={classes.messageIconContainer}>
              <MessagesIcon />
            </div>
            <div className={classes.bellContainer}>
              <NotificationsIcon />
            </div>
            <div className={classes.userContainer}>
              <Avatar sx={{ bgcolor: "#9869E4" }}>שמ</Avatar>
            </div>
          </div>
        </div>
        <div className={classes.mainArea}>
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="departments/:departmentId" element={<Department />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
