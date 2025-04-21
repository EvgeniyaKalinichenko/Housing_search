import { useNavigate } from "react-router-dom";
import { Property } from "..//../types.ts";
import { Button } from "../Button";
import styles from "./CardComponent.module.scss";

export interface CardComponentProps {
  property: Property;
  onClick?: () => void;
  currency: "USD" | "CAD";
  imageUrl: string;
}

const CardComponent = ({ property, onClick, currency, imageUrl }: CardComponentProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}

    >
      <div className={styles.content}>
        <h3 className={styles.h3}>{property.name}</h3>
        <div className={styles.location}>{property.location}</div>
        <p className={styles.price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency,
          }).format(currency === "USD" ? property.priceUSD : property.priceCAD)}
        </p>

        <p className={styles.score}>
          Review score{" "}
          <span className={styles.scoreSpan}>{property.rating}</span>
        </p>
        <Button
          text="See availability"
          small
          onClick={onClick ?? (() => navigate(`/apartment/${property.id}`))}
        />
      </div>
    </div>
  );
};

export default CardComponent;
