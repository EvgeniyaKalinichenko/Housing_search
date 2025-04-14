
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

