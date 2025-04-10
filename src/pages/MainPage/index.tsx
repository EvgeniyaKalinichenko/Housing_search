import { Button } from "../../components/Button";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1>Find your next stay</h1>
      <p>Search deals on hotels, homes, and much more. </p>
      <p>Feel freedom and quality of life.</p>
      <div className={styles.button}>
      <Button text="Search" small={false} />
      </div>
    </div>
  );
};

export default MainPage;
