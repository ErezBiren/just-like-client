import UserPlusIcon from "../assets/dashboard/user-plus.svg?component";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import MessagesIcon from "../components/TopBar/MessagesIcon";
import NotificationsIcon from "../components/TopBar/NotificationsIcon";
import { User } from "../store/models";
import { RootState } from "../store/store";
import Department from "./Department";
import classes from "./Home.module.css";
import Users from "./Users";

const Home = () => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  const getShortName = (firstName: string, lastName: string) => {
    return firstName[0] + lastName[0];
  };

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
              {user?.photoURL && (
                <Avatar
                  alt={user?.displayName}
                  src="https://lh3.googleusercontent.com/a/AATXAJw_PGhdz23kT5kvNjAYcKJQrSIJfGaF5fkTI2Sw=s96-c"
                />
              )}
              {!user?.photoURL && (
                <Avatar sx={{ bgcolor: "#9869E4" }}>
                  {getShortName(user?.firstName || "", user?.lastName || "")}
                </Avatar> // todo: show displayName in 2 letters
              )}
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
