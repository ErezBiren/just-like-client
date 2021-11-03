import styles from "./Home.module.css";
import { ReactComponent as Logo } from "../assets/auth/justLikeLogo.svg";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.drawer}>
        <Logo width="125" height="125" />
      </div>
    </div>
  );
}

export default Home;
