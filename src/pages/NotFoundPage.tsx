import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={classes.main}>
      <h1>אופס!</h1>
      <h2>מה אתם עושים פה?</h2>
      <Link to="/">לחזרה למסך הבית</Link>
    </div>
  );
};
// Todo: Design this page

export default NotFoundPage;
