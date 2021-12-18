import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../../assets/auth/team.svg?component";
import Logo from "../../../assets/justLikeLogo.svg?component";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import TextField from "../../Common/TextField/TextField";
import classes from "./SignUp.module.css";
import { validateEmail } from "../../../services/validationsService";
import { Box } from "@mui/material";
import { User } from "../../../store/models";
import { authActions } from "../../../store/auth-Slice";
import { useForm } from "react-hook-form";

const REQUIRED_FIELD_MESSAGE = "שדה חובה";

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
                    <span style={{ position: "relative" }}>
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
                  {errors.lastName && <span>{errors.lastName.message}</span>}
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
                {errors.linkedin && <span>{errors.linkedin.message}</span>}
              </>
            </Box>
            <Box>
              <>
                <TextField placeholder="נייד*" {...register("phone")} />
                {errors.phone && <span>{errors.phone.message}</span>}
              </>
            </Box>
            <Box>
              <>
                <TextField
                  placeholder="כתובת מייל*"
                  {...register("email", {
                    required: REQUIRED_FIELD_MESSAGE,
                    minLength: 5,
                  })}
                  type="text"
                />
                {errors.email && <span>{errors.email.message}</span>}
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
                {errors.password && <span>{errors.password.message}</span>}
              </>
            </Box>
            <Box>
              <RoundedButton>להמשך הרשמה</RoundedButton>
            </Box>
            <div className={classes.signupContainer}>
              <span>נרשמת?</span>
              <Link to="/login">להתחברות</Link>
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
