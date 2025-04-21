import { Button } from "../../components/Button";
import mainImage from "../../assets/Pictures/Main_Image.png";
import styles from "./MainPage.module.scss";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "70vw",
        height: "90vh",
      }}
    >
      <h1 className={styles.h1}>Find your next stay</h1>
      <p className={styles.paragraph}>
        Search deals on hotels, homes, and much more.
      </p>
      <p className={styles.paragraph}>Feel freedom and quality of life.</p>
      <div className={styles.button}>
        <Button text="Search" onClick={() => navigate("/search")} />
      </div>
    </div>
  );
};

export default MainPage;
