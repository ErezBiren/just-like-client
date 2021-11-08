import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BackgroundImage } from "../../../assets/auth/team.svg";
import { ReactComponent as Logo } from "../../../assets/auth/justLikeLogo.svg";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import TextField from "../../Common/TextField/TextField";
import classes from "./SignUp.module.css";
import { logIn } from "../../../services/AuthService";
import { validateEmail } from "../../../services/validationsService";

function SignUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    linkedin: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    let error = "";

    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        error = "כתובת דואר לא חוקית";
      }
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    logIn(data.email, data.password);
  };

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formContent}>
            <Logo width="125" height="125" />
            <h1>הרשמה למערכת</h1>
            <TextField
              placeholder="שם פרטי*"
              onChange={handleChange}
              name="firstName"
            />
            <TextField
              placeholder="שם משפחה*"
              onChange={handleChange}
              name="lastName"
            />
            <TextField
              placeholder="קישור לפרופיל לינקדאין*"
              onChange={handleChange}
              name="linkedin"
            />
            <TextField
              placeholder="נייד*"
              onChange={handleChange}
              name="phone"
            />
            <TextField
              placeholder="כתובת מייל*"
              onChange={handleChange}
              name="email"
            />
            <TextField
              placeholder="סיסמא*"
              onChange={handleChange}
              name="password"
            />
            <RoundedButton style="width:50px">להרשמה</RoundedButton>
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
}

export default SignUp;
