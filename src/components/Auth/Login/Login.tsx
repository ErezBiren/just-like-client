import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../../assets/auth/coupleDancing.svg?component";
import Logo from "../../../assets/justLikeLogo.svg?component";
import LinkedinIcon from "../../../assets/auth/linkedinLogin.svg?component";
import GoogleIcon from "../../../assets/auth/googleLogin.svg?component";
import ButtonWithIcon from "../../Common/ButtonWithIcon/ButtonWithIcon";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import HorizontalSeparatorWithText from "../../Common/HorizontalSeparatorWithText/HorizontalSeparatorWithText";
import TextField from "../../Common/TextField/TextField";
import classes from "./Login.module.css";
import { validateEmail } from "../../../services/validationsService";
import { Box } from "@mui/system";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { signInWithGoogleAuth, signInEmailPassAuth } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        // error = "כתובת דואר לא חוקית";
      }
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInEmailPassAuth(data.email, data.password);
  };

  const connectWithGoogle = (e: any) => {
    e.preventDefault();
    signInWithGoogleAuth();
    navigate("/");
  };

  // const handleOpenResetPassword = (e) => {
  //   e.preventDefault();
  //   alert("handleOpenResetPassword");
  // };

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formContent}>
            <Logo width="125" height="125" />
            <div className={classes.spacing}>
              <h1>התחברות למערכת</h1>
            </div>
            <div className={classes.spacing}>
              <div className={classes.communityButtons}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Box sx={{ width: 1 / 2.1 }}>
                    <ButtonWithIcon
                      text="התחברות עם לינקדאין"
                      onClick={() => {}}
                      Icon={LinkedinIcon}
                    />
                  </Box>
                  <Box sx={{ width: 1 / 2.1 }}>
                    <ButtonWithIcon
                      text="התחברות עם גוגל"
                      onClick={connectWithGoogle}
                      Icon={GoogleIcon}
                    />
                  </Box>
                </Box>
              </div>
            </div>
            <div className={classes.spacing}>
              <HorizontalSeparatorWithText text="או התחברו עם">
                {" "}
              </HorizontalSeparatorWithText>
            </div>
            <div className={classes.spacing}>
              <TextField
                placeholder="כתובת מייל*"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className={classes.spacing}>
              <TextField
                placeholder="סיסמא*"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className={classes.spacing}>
              <RoundedButton>התחברות</RoundedButton>
            </div>
            <div className={classes.spacing}>
              <div className={classes.signupContainer}>
                <span>לא נרשמת?</span>
                <Link to="/signup">להרשמה</Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className={classes.backgoundImageContainer}>
        <BackgroundImage width="722" height="674" />
      </div>
    </div>
  );
};

export default Login;
