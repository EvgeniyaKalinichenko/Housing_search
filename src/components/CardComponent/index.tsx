import { useNavigate } from "react-router-dom";
import { Property } from "..//../types.ts";
import { Button } from "../Button";
import styles from "./CardComponent.module.scss";

export interface CardComponentProps {
  property: Property;
  onClick?: () => void; 
}

const CardComponent = ({ property, onClick }: CardComponentProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${property.imageUrl})` }}
    >
      <div className={styles.content}>
        <h3>{property.name}</h3>
        <div className={styles.location}>{property.location}</div>
        <p>${property.priceUSD} USD </p>
        <p>${property.priceCAD} CAD</p>
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
