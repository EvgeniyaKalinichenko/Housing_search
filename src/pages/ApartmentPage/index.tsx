
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property, Photo } from '../../types';
import properties from '../../mock_properties.json'; // нужно настроить импортер JSON
// import {ApartmentComponent} from '../../components/ApartmentComponent';
import { API_KEY } from '../../APY_KEY';

export const ApartmentPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [photos, setPhotos]     = useState<Photo[]>([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    const found = properties.find(p => p.id === id) ?? null;
    setProperty(found);

    fetch('https://api.pexels.com/v1/search?query=hotel&per_page=9', {
      headers: { Authorization: API_KEY }
    })
      .then(res => res.json())
      .then(data => {
        setPhotos(data.photos);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Загружаем…</div>;
  if (!property) return <div>Квартира не найдена</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{property.name}</h1>
      <p>{property.location}</p>
      <p>USD {property.priceUSD} • CAD {property.priceCAD}</p>
      <p>Рейтинг: {property.rating}</p>
      <p>{property.description}</p>
      <ul>
        {property.amenities.map(a => <li key={a}>{a}</li>)}
      </ul>

      <h2>Фотографии</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.src.medium}
            alt={photo.alt}
            style={{ width: 200, height: 150, objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ApartmentPage;
