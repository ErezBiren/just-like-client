import styles from "./Home.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.topControls}>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <InputLabel htmlFor="outlined-adornment-password">
                חיפוש
              </InputLabel>
            </FormControl>
          </div>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Home;
