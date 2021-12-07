import { useState } from "react";
import { ReactComponent as BackgroundImage } from "../../../assets/auth/girlSittingWifhLaptop.svg";
import { ReactComponent as Logo } from "../../../assets/auth/justLikeLogo.svg";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import classes from "./SignUpUserType.module.css";
import { logIn } from "../../../services/AuthService";
import ComboBox from "../../Common/ComboBox/ComboBox";

const SignUpUserType = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    linkedin: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    logIn(data.email, data.password);
  };

  const userTypes = ["ג'וניורים\\מחפשי עבודה", "מתנדבים", "מנהלי משימות"];
  const interests = ["חיפוש עבודה", "הרצאות", "סדנאות"];
  const specialties = [
    "תכנון",
    "אפיון ועיצוב",
    "ניהול מוצר",
    "בדיקות תוכנה",
    "אחר",
  ];

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formContent}>
            <Logo width="125" height="125" />
            <h1>נשמח להכיר אותך</h1>

            <ComboBox placeHolder="סוג משתמש*" items={userTypes} />
            <ComboBox placeHolder="תחומי ענין*" items={interests} />
            <ComboBox placeHolder="תחום התמחות" items={specialties} />

            <RoundedButton style="width:50px">להרשמה</RoundedButton>
            <div className={classes.signupContainer}>
              <span>כבר נרשמת?</span>
              <a href="#">להתחברות</a>
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

export default SignUpUserType;
