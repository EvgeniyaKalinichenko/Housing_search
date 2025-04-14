import React from "react";

type FiltersProps = {
  filters: {
    location: string;
    maxPrice: number;
    minRating: number;
    amenities: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      location: string;
      maxPrice: number;
      minRating: number;
      amenities: string[];
    }>
  >;
  allAmenities: string[];
  allLocations: string[];
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
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
        }
      >
        <option value={Infinity}>Any Price</option>
        <option value="500">$500</option>
        <option value="700">$700</option>
        <option value="1000">$1000</option>
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

      <fieldset>
        <legend>Amenities</legend>
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
            {amenity}
          </label>
        ))}
      </fieldset>

      <button
        type="button"
        onClick={() =>
          setFilters({
            location: "",
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
