import { useEffect, useState } from "react";
import {API_KEY} from "..//../APY_KEY"; 
import mockProperties from "../../mock_properties.json";
import CardComponent from "../../components/CardComponent";
import styles from "./SeachPage.module.scss";

export const SeachPage = () => {
  const [photos, setPhotos] = useState<
    {
      id: string | number | null | undefined;
      src: { id: number; large: string; medium: string };
      alt: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // https://cors-anywhere.herokuapp.com/
          `https://api.pexels.com/v1/search?query=hotel&per_page=50&page=1`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        const data = await response.json();
        return data.photos || [];
      } catch (error) {
        console.error("Error retrieving data:", error);
        return [];
      }
    };

    fetchData().then((fetchedPhotos) => setPhotos(fetchedPhotos));
  }, []);
  return (
    <>
      <div className={styles.cardContainer}>
        {mockProperties.map((property, index) => (
          <CardComponent
            key={property.id}
            name={property.name}
            location={property.location}
            priceUSD={property.priceUSD}
            imageUrl={photos[index]?.src.large || "/fallback.jpg"}
            id={""}
            priceCAD={property.priceCAD}
            rating={property.rating}
            description={property.description}
            amenities={[]}
          />
        ))}
      </div>
    </>
  );
};

export default SeachPage;
