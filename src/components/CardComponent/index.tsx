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

const CardComponent = ({ property, onClick, currency }: CardComponentProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${property.imageUrl})` }}
    >
      <div className={styles.content}>
        <h3 className={styles.h3}>{property.name}</h3>
        <div className={styles.location}>{property.location}</div>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: currency,
            }).format(
              currency === "USD" ? property.priceUSD : property.priceCAD
            )}
          </p>

        <p>Review score {property.rating}</p>
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
