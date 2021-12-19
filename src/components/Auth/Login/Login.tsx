import BackgroundImage from "../../../assets/auth/coupleDancing.svg?component";
import GoogleIcon from "../../../assets/auth/googleLogin.svg?component";
import LinkedinIcon from "../../../assets/auth/linkedinLogin.svg?component";
import Logo from "../../../assets/justLikeLogo.svg?component";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import {
  emailRegExp,
  REQUIRED_FIELD_MESSAGE,
} from "../../../services/validationsService";
import ButtonWithIcon from "../../Common/ButtonWithIcon/ButtonWithIcon";
import HorizontalSeparatorWithText from "../../Common/HorizontalSeparatorWithText/HorizontalSeparatorWithText";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import TextField from "../../Common/TextField/TextField";
import classes from "./Login.module.css";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const { signInWithGoogleAuth, signInEmailPassAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues,
  });

  const onSubmit = (data: any) => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email", {
                  required: REQUIRED_FIELD_MESSAGE,
                  pattern: {
                    value: emailRegExp,
                    message: 'כתובת דוא"ל לא חוקית',
                  },
                })}
                type="text"
              />
              {errors.email && (
                <span className={classes.error}>{errors.email.message}</span>
              )}
            </div>
            <div className={classes.spacing}>
              <TextField
                placeholder="סיסמא*"
                {...register("password", {
                  required: REQUIRED_FIELD_MESSAGE,
                })}
                type="password"
              />
              {errors.password && (
                <span className={classes.error}>{errors.password.message}</span>
              )}
            </div>
            <div className={classes.spacing}>
              <RoundedButton>התחברות</RoundedButton>
            </div>
            <div className={classes.spacing}>
              <div className={classes.signupContainer}>
                <span>לא נרשמת?</span>
                <Link to="/signup" className={classes.link}>
                  <b>להרשמה</b>
                </Link>
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
