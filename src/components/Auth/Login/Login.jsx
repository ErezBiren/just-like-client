import React from "react";
import { ReactComponent as BackgroundImage } from "../../../assets/auth/group100.svg";
import { ReactComponent as Logo } from "../../../assets/auth/PurpleLogo.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/auth/linkedinLogin.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/auth/googleLogin.svg";
import ButtonWithIcon from "../../Common/ButtonWithIcon/ButtonWithIcon";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import HorizontalSeparatorWithText from "../../Common/HorizontalSeparatorWithText/HorizontalSeparatorWithText";
import TextField from "../../Common/TextField/TextField";
import styles from "./Login.module.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("הרשמה");
  };
  const connectWithLinkedin = (e) => {
    e.preventDefault();
    alert("linkedin");
  };
  const connectWithGoogle = (e) => {
    e.preventDefault();
    alert("google");
  };

  const handleOpenResetPassword = (e) => {
    e.preventDefault();
    alert("handleOpenResetPassword");
  };

  return (
    <div class={styles.main}>
      <div class={styles.form}>
        <div class={styles.formContent}>
          <Logo width="125" height="125" />
          <form onSubmit={handleSubmit}>
            <h1>התחברות למערכת</h1>
            <div class={styles.community}>
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
            <HorizontalSeparatorWithText text="aaaa"> </HorizontalSeparatorWithText>
            <TextField placeholder="כתובת מייל*" />
            <TextField placeholder="סיסמא*" />
            {/* <button type="submit">להתחברות</button> */}
            <RoundedButton>להתחברות</RoundedButton>
            <a href="#">להרשמה</a>
          </form>
        </div>
      </div>

      <div>
        <BackgroundImage width="722" height="674" />
      </div>
    </div>
  );
}

export default Login;
