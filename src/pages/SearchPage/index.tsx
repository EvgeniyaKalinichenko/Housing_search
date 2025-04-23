import { useEffect, useState } from "react";
import mockProperties from "../../mock_properties.json";
import CardComponent from "../../components/CardComponent";
import { Photo } from "..//../types.ts";
import { API_KEY } from "../../APY_KEY";
import Filters from "../../components/Filters";
import styles from "./SearchPage.module.scss";
import ReactPaginate from "react-paginate";
import searchImage from "../../assets/Pictures/SeachPage_Image.png";

export const SearchPage = ({ currency }: { currency: "USD" | "CAD" }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filters, setFilters] = useState({
    location: "",
    maxPrice: Infinity,
    minPrice: 0,
    minRating: 0,
    amenities: [] as string[],
  });

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const allAmenities = Array.from(
    new Set(mockProperties.flatMap((p) => p.amenities))
  );
  const allLocations = Array.from(
    new Set(mockProperties.map((p) => p.location))
  );

  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=hotel&per_page=50&page=1", {
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

  const pageCount = Math.ceil(filteredProperties.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredProperties.slice(offset, offset + itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className={styles.container}>
      <img
        src={searchImage}
        alt="SeachPage_Image"
        style={{ width: "100%", height: "50vh" }}
        className={styles.image}
      />
      <h1 className={styles.title}>Find your dream hotel</h1>
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
          {currentItems.map((property, idx) => (
            <CardComponent
              key={property.id}
              property={property}
              currency={currency}
              imageUrl={photos[idx + offset]?.src.medium ?? "https://via.placeholder.com/400x300"}

            />
          ))}
        </div>
      </div>
      <div className={styles.pagination_container}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="< Prev"
          containerClassName={styles.pagination}
          activeClassName={styles.active}
          pageClassName={styles["page-item"]}
          pageLinkClassName="page-link"
          previousClassName={styles["page-item"]}
          nextClassName={styles["page-item"]}
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName={styles["page-item"]}
          breakLinkClassName="page-link"
        />
      </div>
    </div>
  );
};

export default SearchPage;