import { useEffect, useState } from "react";
import mockProperties from "../../mock_properties.json";
import CardComponent from "../../components/CardComponent";
import { Photo } from "..//../types.ts";
import { API_KEY } from "../../APY_KEY";
import Filters from "../../components/Filters";
import styles from "./SearchPage.module.scss";

export const SearchPage = ({ currency }: { currency: "USD" | "CAD" }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filters, setFilters] = useState({
    location: "",
    maxPrice: Infinity,
    minPrice: 0,
    minRating: 0,
    amenities: [] as string[],
  });
  const allAmenities = Array.from(
    new Set(mockProperties.flatMap((p) => p.amenities))
  );
  const allLocations = Array.from(
    new Set(mockProperties.map((p) => p.location))
  );

  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=hotel&per_page=9&page=1", {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos))
      .catch(console.error);
  }, []);

  const filteredProperties = mockProperties.filter((property) => {
    const locationMatch =
      !filters.location || property.location === filters.location;

    const priceMatch = (() => {
      const price = currency === "USD" ? property.priceUSD : property.priceCAD;
      return price >= filters.minPrice && price <= filters.maxPrice;
    })();

    const ratingMatch = property.rating >= filters.minRating;

    const amenitiesMatch = filters.amenities.every((a) =>
      property.amenities.includes(a)
    );

    return locationMatch && priceMatch && ratingMatch && amenitiesMatch;
  });

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
        <div className={styles.filters}>
          <Filters
            filters={filters}
            setFilters={setFilters}
            allAmenities={allAmenities}
            allLocations={allLocations}
            currency={currency}
          />
        </div>
        <div className={styles.cardContainer}>
          {filteredProperties.map((property, idx) => (
            <CardComponent
              key={property.id}
              property={property}
              currency={currency}
              imageUrl={photos[idx]?.src.medium ?? "/fallback.jpg"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
