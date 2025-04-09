import { SeachPageProps } from "../../inrerface";

export const SeachPage = ({ photos }: SeachPageProps) => {
  return (
    <>
      <div>SeachPage</div>

      {photos.length > 0 && (
        <img
          src={photos[0].src.large}
          alt={photos[0].alt || "Hotel"}
          style={{ width: "100%", maxWidth: "600px", borderRadius: "12px" }}
        />
      )}
    </>
  );
};

export default SeachPage;
