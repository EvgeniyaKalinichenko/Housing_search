import { useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        const data = await response.json();
        return data.products || [];
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return [];
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
