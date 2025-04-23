import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = {
  currency: "USD" | "CAD";
  setCurrency: React.Dispatch<React.SetStateAction<"USD" | "CAD">>;
};

export const Header = ({ currency, setCurrency }: HeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className="pageWrapper">
          <nav className={styles.nav}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/search" className={styles.link}>
              Search
            </Link>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as "USD" | "CAD")}
              className={styles.select}
            >
              <option value="USD">$ USD</option>
              <option value="CAD">$ CAD</option>
            </select>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
