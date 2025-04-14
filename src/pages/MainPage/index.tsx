import { Button } from "../../components/Button";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Find your next stay</h1>
      <p className={styles.paragraph}>Search deals on hotels, homes, and much more. </p>
      <p className={styles.paragraph}>Feel freedom and quality of life.</p>
      <div className={styles.button}>
      <Button text="Search" onClick={() => window.location.href = "/search"} />
      </div>
    </div>
  );
};

export default MainPage;
