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
            borderRadius: "2px",
            border: "1px solid white",
            background: "none",
            color: "#dc9223",
            textShadow: "0 0 1px black, 0 0 1px black",
            fontWeight: 500,
            marginLeft: "16px",
          }}
        >
          <option value="USD">$ USD</option>
          <option value="CAD">$ CAD</option>
        </select>
      </div>
    </>
  );
};

export default Header;
