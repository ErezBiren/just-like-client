import classes from "./Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import { ReactComponent as BellIcon } from "../assets/dashboard/bell.svg";
import { ReactComponent as MessageCircleIcon } from "../assets/dashboard/message-circle.svg";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RoundedButton from "../components/Common/RoundedButton/RoundedButton";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "@mui/icons-material";
import SignUp from "../components/Auth/SignUp/SignUp";
import SignUp2 from "../components/Auth/SignUp2/SignUp2";
import NotFoundPage from "./NotFoundPage";
import Users from "./Users";
import Subscribers from "../components/Subscribers/Subscribers";

function Home() {
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <div className={classes.mainInner}>
          <div className={classes.topControls}>
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
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </div>
      </div>
      <div className={classes.leftPanel}>
        <div className={classes.leftTopControls}>
          <div className={classes.bellContainer}>
            <BellIcon />
          </div>
          <div className={classes.messageIconContainer}>
            <MessageCircleIcon />
          </div>
        </div>
        <div className={classes.subscribers}>
          <Subscribers />
        </div>
        <div className={classes.createMissionBtnContainer}>
          <RoundedButton>+ צור משימה</RoundedButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
