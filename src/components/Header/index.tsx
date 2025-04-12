import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/search" className={styles.link}>
          Search
        </Link>
        {/* <Link to="/apartment" className={styles.link}>
          Apartment
        </Link>
        <Link to="#" className={styles.link}>
          Sales
        </Link>
        <Link to="#" className={styles.link}>
          About us
        </Link>
        <Link to="#" className={styles.link}>
          Contacts
        </Link> */}
      </div>
    </>
  );
};

export default Header;
