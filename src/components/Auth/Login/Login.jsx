import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as BackgroundImage } from "../../../assets/auth/coupleDancing.svg";
import { ReactComponent as Logo } from "../../../assets/auth/justLikeLogo.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/auth/linkedinLogin.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/auth/googleLogin.svg";
import ButtonWithIcon from "../../Common/ButtonWithIcon/ButtonWithIcon";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import HorizontalSeparatorWithText from "../../Common/HorizontalSeparatorWithText/HorizontalSeparatorWithText";
import TextField from "../../Common/TextField/TextField";
import styles from "./Login.module.css";
import { logIn } from "./../../../services/AuthService";
import { validateEmail } from "./../../../services/validationsService";

function Login() {
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn(data.email, data.password);

    history.push("/home");
  };
  const connectWithLinkedin = (e) => {
    e.preventDefault();
    alert("linkedin");
  };
  const connectWithGoogle = (e) => {
    e.preventDefault();
    alert("google");
  };

  // const handleOpenResetPassword = (e) => {
  //   e.preventDefault();
  //   alert("handleOpenResetPassword");
  // };

  return (
    <div class={styles.main}>
      <div class={styles.form}>
        <form onSubmit={handleSubmit}>
          <div class={styles.formContent}>
            <Logo width="125" height="125" />
            <h1>התחברות למערכת</h1>
            <div class={styles.communityButtons}>
              <ButtonWithIcon
                text="התחברות עם לינקדאין"
                onClick={connectWithLinkedin}
                Icon={LinkedinIcon}
              />
              <ButtonWithIcon
                text="התחברות עם גוגל"
                onClick={connectWithGoogle}
                Icon={GoogleIcon}
              />
            </div>
            <HorizontalSeparatorWithText text="או התחברו עם">
              {" "}
            </HorizontalSeparatorWithText>
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
            <RoundedButton>התחברות</RoundedButton>
            <div className={styles.signupContainer}>
              <span>לא נרשמת?</span>
              <Link to="/signup">להרשמה</Link>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.backgoundImageContainer}>
        <BackgroundImage width="722" height="674" />
      </div>
    </div>
  );
}

export default Login;
