import styles from "./MainPage.module.scss";
import { SlArrowRightCircle } from "react-icons/sl";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <h1>Find your next stay</h1>
      <p>Search deals on hotels, homes, and much more. </p>
      <p>Feel freedom and quality of life.</p>
      <button className={styles.button}>
        Search
        <SlArrowRightCircle />
      </button>
    </div>
  );
};

export default MainPage;
