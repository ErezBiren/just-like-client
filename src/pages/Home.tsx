import classes from "./Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import { ReactComponent as BellIcon } from "../assets/dashboard/bell.svg";
import { ReactComponent as MessageCircleIcon } from "../assets/dashboard/message-circle.svg";
import { ReactComponent as UserPlusIcon } from "../assets/dashboard/user-plus.svg";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import DepartmentPage from "./DepartmentPage";

function Home() {
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <div className={classes.topControls}>
          <div className={classes.searchContainer}>
            <TextField
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
              <MessageCircleIcon />
            </div>
            <div className={classes.bellContainer}>
              <BellIcon />
            </div>
          </div>
        </div>
        <div className={classes.mainArea}>
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route
              path="departments/:departmentId"
              element={<DepartmentPage />}
            />
            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;