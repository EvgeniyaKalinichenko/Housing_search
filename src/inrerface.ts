import { Key } from "react";

export interface Photo {
  src: {
    large: string;
  };
  alt?: string;
}

export interface SeachPageProps {
  photos: Photo[];
}

export interface ApartmentPageProps {
  photos: {
    id: Key | null | undefined;
    src: { medium: string | undefined };
    alt: string | undefined;
  }[];
}
