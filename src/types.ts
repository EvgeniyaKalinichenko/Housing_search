
export interface Photo {
  id: number;
  width: number;
  height: number;
  src: {
    medium: string;
    original: string;
  };
  alt: string;
}

export interface Property {
  id: string;
  name: string;
  priceUSD: number;
  priceCAD: number;
  rating: number;
  description: string;
  amenities: string[];
  location: string;
  imageUrl: string;
}

export interface FiltersProps {
  filters: {
    location: string;
    minPrice: number;
    maxPrice: number;
    minRating: number;
    amenities: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      location: string;
      minPrice: number;
      maxPrice: number;
      minRating: number;
      amenities: string[];
    }>
  >;
  allAmenities: string[];
  allLocations: string[];
  currency?: "USD" | "CAD";
};