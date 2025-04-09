import { Key } from "react";
import { ApartmentPageProps } from "../../inrerface";

export const ApartmentPage = ({ photos }: ApartmentPageProps) => {
  return (
    <>
      <div>ApartmentPage</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {photos.map(
          (photo: {
            id: Key | null | undefined;
            src: { medium: string | undefined };
            alt: string | undefined;
          }) => (
            <img
              key={photo.id}
              src={photo.src.medium}
              alt={photo.alt}
              style={{ width: "200px", borderRadius: "8px" }}
            />
          )
        )}
      </div>
    </>
  );
};

export default ApartmentPage;
