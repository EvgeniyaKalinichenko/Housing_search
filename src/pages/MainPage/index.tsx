import { Button } from "../../components/Button";
import mainImage from "../../assets/Pictures/Main_Image.png";
import styles from "./MainPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
      <div className="pageWrapper">
      <h1 className={styles.h1}>Find your next stay</h1>
      <p className={styles.paragraph}>
        Search deals on hotels, homes, and much more.
      </p>
      <p className={styles.paragraph}>Feel freedom and quality of life.</p>
      <div className={styles.button}>
        <Button
          text="Search"
          onClick={() => navigate("/search")}
          {...(isMobile ? { small: true } : {})}
        />
      </div>
      </div>
    </div>
  );
};

export default MainPage;
