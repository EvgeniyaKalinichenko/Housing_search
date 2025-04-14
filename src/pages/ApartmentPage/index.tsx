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

export const ApartmentPage = () => {
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
      alt={photo.alt}
      style={{ width: "100%", height: "auto" }}
    />
  ));

  useEffect(() => {
    const found = properties.find((p) => p.id === id) ?? null;
    setProperty(found);

    fetch("https://api.pexels.com/v1/search?query=hotel&per_page=9", {
      headers: { Authorization: API_KEY },
    })
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
        src="/src/assets/Pictures/ApartmentPage_Image_copy.png"
        alt="ApartmentPage_Image"
        style={{
          width: "70vw",
          height: "50vh",
        }}
        className={styles.image}
      />
      <h1 className={styles.h1}>Hotel {property.name.toUpperCase()}</h1>
      <div className={styles.mainInformation}>
        <div className={styles.gallery}>
          <AliceCarousel
            mouseTracking
            items={carouselItems}
            // autoPlay
            infinite
            disableButtonsControls={false}
            disableDotsControls={false}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.infoBlock}>
          <div>
            <span>{property.location}</span>
            <p>$ {property.priceUSD} USD</p>
            <p>$ {property.priceCAD} CAD</p>
            <p>Review score {property.rating}</p>
          </div>
          <div>
            <h4 className={styles.h4}>Facilities of {property.name}:</h4>
            <div className={styles.amenities}>
              {property.amenities.map((a) => (
                <span key={a} className={styles.li}>
                  <SlCheck /> {a}
                </span>
              ))}
            </div>
            <Button
              text="Book Now"
              onClick={() => {
                setIsActive(true);
              }}
            />
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
