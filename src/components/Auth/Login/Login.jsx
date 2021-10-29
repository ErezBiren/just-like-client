import React from "react";
import { ReactComponent as BackgroundImage } from "../../../assets/auth/group100.svg";
import { ReactComponent as Logo } from "../../../assets/auth/PurpleLogo.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/auth/linkedinLogin.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/auth/googleLogin.svg";
import ButtonWithIcon from "../../Common/ButtonWithIcon/ButtonWithIcon";
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

  return (
    <div class={styles.main}>
      <div class={styles.form}>
        <Logo width="40" height="40" />
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
          <div class={styles.regularSign}>
            <input type="text" placeholder="כתובת מייל*" />
            <input type="text" placeholder="סיסמא*" />
            <button type="submit">להתחברות</button>
          </div>
        </form>
      </div>

      <div>
        <BackgroundImage width="222" height="674" />
      </div>
    </div>
  );
}

export default Login;
