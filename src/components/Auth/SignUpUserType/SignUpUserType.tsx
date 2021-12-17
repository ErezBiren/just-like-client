import { useEffect, useState } from "react";
import BackgroundImage from "../../../assets/auth/girlSittingWifhLaptop.svg?component";
import Logo from "../../../assets/justLikeLogo.svg?component";
import RoundedButton from "../../Common/RoundedButton/RoundedButton";
import classes from "./SignUpUserType.module.css";
import ComboBox from "../../Common/ComboBox/ComboBox";
import useAuth from "../../../hooks/useAuth";
import { User } from "../../../store/models";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const SignUpUserType = () => {
  const { registerWithEmailAndPasswordAuth } = useAuth();

  const signupUser = useSelector((state: RootState) => state.auth.signupUser);

  const [data, setData] = useState<User>({
    firstName: "",
    lastName: "",
    phone: "",
    linkedin: "",
    email: "",
    password: "",
    accessToken: "",
  });

  useEffect(() => {
    if (signupUser) setData(signupUser);
  }, [signupUser]);

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    registerWithEmailAndPasswordAuth(data);
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

            <ComboBox
              placeHolder="סוג משתמש*"
              name="userType"
              items={userTypes}
              value={data.userType}
              handleChange={handleChange}
            />
            <ComboBox
              placeHolder="תחומי ענין*"
              name="interest"
              items={interests}
              value={data.interest}
              handleChange={handleChange}
            />
            <ComboBox
              placeHolder="תחום התמחות"
              name="speciality"
              items={specialties}
              value={data.speciality}
              handleChange={handleChange}
            />

            <RoundedButton style={{ width: "50px" }}>להרשמה</RoundedButton>
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
