import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import SeachPage from "./pages/SeachPage";
import ApartmentPage from "./pages/ApartmentPage";
import { Key, useEffect, useState } from "react";
import { API_KEY } from "./APY_KEY";

function App() {
  const [photos, setPhotos] = useState<
  {
    id: Key | null | undefined;
    src: { id: number; large: string; medium: string };
    alt: string;
  }[]
>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search?query=hotel&per_page=15&page=1`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      return data.photos || [];
    } catch (error) {
      console.error("Error retrieving data:", error);
      return [];
    }
  };

  fetchData().then((fetchedPhotos) => setPhotos(fetchedPhotos));
}, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/seach" element={<SeachPage photos={photos}/>} />
        <Route path="/apartment" element={<ApartmentPage photos={photos}  />} />
      </Routes>
    </Router>
  );
}

export default App;
