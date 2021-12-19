import BackgroundImage from "../../../assets/auth/team.svg?component";
import Logo from "../../../assets/justLikeLogo.svg?component";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  emailRegExp,
  phoneRegExp,
  REQUIRED_FIELD_MESSAGE,
} from "../../../services/validationsService";
import { authActions } from "../../../store/auth-Slice";
import { User } from "../../../store/models";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import TextField from "../../Common/TextField/TextField";
import classes from "./SignUp.module.css";

const defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
  linkedin: "",
  email: "",
  password: "",
  displayName: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues,
  });

  const onSubmit = (data: any) => {
    const displayName = `${data.firstName}  ${data.lastName}`;
    dispatch(authActions.setSignupUser({ ...data, displayName }));
    navigate("/SignUpUserType");
  };

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.formContent}>
            <Logo width="125" height="125" />
            <h1>הרשמה למערכת</h1>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ ml: 3 }}>
                <>
                  <TextField
                    placeholder="שם פרטי*"
                    {...register("firstName", {
                      required: REQUIRED_FIELD_MESSAGE,
                    })}
                    type="text"
                  />
                  {errors.firstName && (
                    <span className={classes.error}>
                      {errors.firstName.message}
                    </span>
                  )}
                </>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <>
                  <TextField
                    placeholder="שם משפחה*"
                    {...register("lastName", {
                      required: REQUIRED_FIELD_MESSAGE,
                    })}
                    type="text"
                  />
                  {errors.lastName && (
                    <span className={classes.error}>
                      {errors.lastName.message}
                    </span>
                  )}
                </>
              </Box>
            </Box>
            <Box>
              <>
                <TextField
                  placeholder="קישור לפרופיל לינקדאין*"
                  {...register("linkedin")}
                  type="text"
                />
                {errors.linkedin && (
                  <span className={classes.error}>
                    {errors.linkedin.message}
                  </span>
                )}
              </>
            </Box>
            <Box>
              <>
                <TextField
                  placeholder="נייד*"
                  {...register("phone", {
                    pattern: {
                      value: phoneRegExp,
                      message: "מספר טלפון לא תקין",
                    },
                  })}
                />
                {errors.phone && (
                  <span className={classes.error}>{errors.phone.message}</span>
                )}
              </>
            </Box>
            <Box>
              <>
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
              </>
            </Box>
            <Box>
              <>
                <TextField
                  placeholder="סיסמא*"
                  {...register("password", {
                    required: REQUIRED_FIELD_MESSAGE,
                  })}
                  type="password"
                />
                {errors.password && (
                  <span className={classes.error}>
                    {errors.password.message}
                  </span>
                )}
              </>
            </Box>
            <Box>
              <RoundedButton>להמשך הרשמה</RoundedButton>
            </Box>
            <div className={classes.signupContainer}>
              <span>נרשמת? </span>
              <Link to="/login" className={classes.link}>
                <b>להתחברות</b>
              </Link>
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

export default SignUp;
