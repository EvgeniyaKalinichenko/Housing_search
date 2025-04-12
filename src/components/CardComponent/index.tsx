import { Button } from "../Button";
import styles from "./CardComponent.module.scss";

type CardComponentProps = {
  id: string;
  name: string;
  priceCAD: number;
  priceUSD: number;
  rating: number;
  description: string;
  amenities: string[];
  location: string; 
  imageUrl: string;
  apartmentOpen: boolean;
  setApartmentOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
};
const PropertyCard = ({
  name,
  location,
  priceCAD,
  priceUSD,
  imageUrl,
  setApartmentOpen,
}: CardComponentProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.content}>
        <h3>{name}</h3>
        <div className={styles.location}>{location}</div>
        <p>${priceCAD} CAD</p>
        <p>${priceUSD} USD</p>
        <Button text="See availability" small onClick={() => setApartmentOpen(true)}/>
      </div>
    </div>
  );
};

export default PropertyCard;
