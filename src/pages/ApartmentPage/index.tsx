import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Property, Photo } from "../../types";
import properties from "../../mock_properties.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { API_KEY } from "../../APY_KEY";
import styles from "./ApartmentPage.module.scss";
import { Button } from "../../components/Button";
import { SlCheck } from "react-icons/sl";
import ModalWindow from "../../components/ModalWindow";
import apartmentImage from "../../assets/Pictures/ApartmentPage_Image_copy.png";

type ApartmentProps = {
  currency: "USD" | "CAD";
  setCurrency: React.Dispatch<React.SetStateAction<"USD" | "CAD">>;
};

export const ApartmentPage = ({ currency }: ApartmentProps) => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();
  const [IsActive, setIsActive] = useState(false);
  const horizontalPhotos = photos.filter((photo) => photo.width > photo.height);
  const carouselItems = horizontalPhotos.map((photo) => (
    <img
      key={photo.id}
      src={photo.src.medium}
      onDragStart={handleDragStart}
      role="presentation"
      alt={photo.alt ?? "Hotel photo"}
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "2px",
      }}
    />
  ));

  useEffect(() => {
    const found = properties.find((p) => p.id === id) ?? null;
    setProperty(found);

    const pageNumber = Number(id?.replace(/\D/g, "")) % 10 || 1;

    fetch(
      `https://api.pexels.com/v1/search?query=hotel&per_page=9&page=${pageNumber}`,
      {
        headers: { Authorization: API_KEY },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading…</div>;
  if (!property) return <div>Option not found</div>;

  return (
    <div className={styles.container}>
      <img
        src={apartmentImage}
        alt="ApartmentPage_Image"
        style={{
          width: "70vw",
          height: "50vh",
        }}
        className={styles.image}
      />
      <h1 className={styles.h1}>
        Hotel {property.name.toUpperCase() ?? "Name"}
      </h1>
      <div className={styles.mainInformation}>
        <div className={styles.gallery}>
            <AliceCarousel
              mouseTracking
              items={carouselItems}
              autoPlay
              autoPlayInterval={3000}
              animationDuration={1000}
              infinite
              disableButtonsControls={false}
              disableDotsControls={false}
            />
        </div>
        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <div>
              <h4 className={styles.h4}>{property.location}</h4>
              <p className={styles.price}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: currency,
                }).format(
                  currency === "USD" ? property.priceUSD : property.priceCAD
                )}
              </p>
              <p className={styles.score}>
                Review score{" "}
                <span className={styles.rating}>{property.rating}</span>
              </p>
              <div className={styles.buttonContainer}>
                <Button
                  text="Book Now"
                  onClick={() => {
                    setIsActive(true);
                  }}
                />
              </div>
            </div>

            <div>
              <div className={styles.facilitiesCard}>
                <h4 className={styles.h4}>Facilities of {property.name}:</h4>
                <div className={styles.amenities}>
                  {property.amenities.map((a) => (
                    <span key={a} className={styles.li}>
                      <SlCheck /> {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description}>{property.description}</div>
        </div>
      </div>

      <ModalWindow IsActive={IsActive} setIsActive={setIsActive} />
    </div>
  );
};

export default ApartmentPage;
