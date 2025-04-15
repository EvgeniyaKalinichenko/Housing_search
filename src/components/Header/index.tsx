import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

type HeaderProps = {
  currency: "USD" | "CAD";
  setCurrency: React.Dispatch<React.SetStateAction<"USD" | "CAD">>;
};

export const Header = ({currency, setCurrency} : HeaderProps) => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/search" className={styles.link}>
          Search
        </Link>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as "USD" | "CAD")}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #d6af65",
            backgroundColor: "#fdf8ef",
            color: "#333",
            fontWeight: 500,
            marginLeft: "16px",
          }}
        >
          <option value="USD">🇺🇸 USD</option>
          <option value="CAD">🇨🇦 CAD</option>
        </select>
      </div>
    </>
  );
};

export default Header;
