import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import ApartmentPage from "./pages/ApartmentPage";
import { useState } from "react";


function App() {
  const [currency, setCurrency] = useState<"USD" | "CAD">("USD");

  return (
    <Router>
      <Header currency={currency} setCurrency={setCurrency}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage currency={currency} />} />
        <Route path="/apartment/:id" element={<ApartmentPage currency={currency} setCurrency={setCurrency}/>} />
      </Routes>
    </Router>
  );
}

export default App;
