import React, { JSX } from "react";
import styles from "./Filters.module.scss";
import { FiltersProps } from "../../types";
import {
  FaParking,
  FaWind,
  FaPaw,
  FaBan,
  FaConciergeBell,
  FaWifi,
  FaCoffee,
} from "react-icons/fa";


const amenityIcons: Record<string, JSX.Element> = {
  "Free parking": <FaParking />,
  "Air conditioning": <FaWind />,
  "Pet-friendly": <FaPaw />,
  "Non-smoking rooms": <FaBan />,
  "Room service": <FaConciergeBell />,
  "Free Wi-Fi": <FaWifi />,
  "Breakfast included": <FaCoffee />,
};

const Filters: React.FC<FiltersProps> = ({
  filters,
  setFilters,
  allAmenities,
  allLocations,
}) => {
  return (
    <div>
      <select
        value={filters.location}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, location: e.target.value }))
        }
      >
        <option value="">All Locations</option>
        {allLocations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => {
          const value = e.target.value;
          if (value === "under500") {
            setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: 499 }));
          } else if (value === "500-800") {
            setFilters((prev) => ({ ...prev, minPrice: 500, maxPrice: 799 }));
          } else if (value === "800-1500") {
            setFilters((prev) => ({ ...prev, minPrice: 800, maxPrice: 1500 }));
          } else {
            setFilters((prev) => ({
              ...prev,
              minPrice: 0,
              maxPrice: Infinity,
            }));
          }
        }}
      >
        <option value="any">Any Price</option>
        <option value="under500">Less than $500</option>
        <option value="500-800">$500 - $800</option>
        <option value="800-1500">$800 - $1500</option>
      </select>

      <select
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            minRating: Number(e.target.value),
          }))
        }
      >
        <option value="0">Any Rating</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="4.5">4.5+</option>
      </select>
      <h3
        style={{
          marginBottom: "4px",
          color: "#d6af65",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <FaConciergeBell /> Choose amenities:
      </h3>

      <fieldset>
        <legend>Amenities</legend>
        <div className={styles.amenitiesGrid}>
          {allAmenities.map((amenity) => (
            <label key={amenity}>
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFilters((prev) => ({
                    ...prev,
                    amenities: checked
                      ? [...prev.amenities, amenity]
                      : prev.amenities.filter((a) => a !== amenity),
                  }));
                }}
              />
              {amenityIcons[amenity]} {amenity}
            </label>
          ))}
        </div>
      </fieldset>

      <button className={styles.button}
        type="button"
        onClick={() =>
          setFilters({
            location: "",
            minPrice: 0,
            maxPrice: Infinity,
            minRating: 0,
            amenities: [],
          })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
