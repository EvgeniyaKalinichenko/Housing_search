import { useEffect, useState } from "react";
import mockProperties from "../../mock_properties.json";
import CardComponent from "../../components/CardComponent";
import { Photo } from "..//../types.ts";
import { API_KEY } from "../../APY_KEY";
import styles from "./SearchPage.module.scss";

export const SearchPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=hotel&per_page=9&page=1", {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="src\assets\Pictures\SeachPage_Image.png"
        alt="SeachPage_Image"
        style={{
          width: "70vw",
          height: "50vh",
        }}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.filters}>dd</div>
        <div className={styles.cardContainer}>
          {mockProperties.map((property, idx) => (
            <CardComponent
              key={property.id}
              property={{
                ...property,
                imageUrl: photos[idx]?.src.medium ?? "/fallback.jpg",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
