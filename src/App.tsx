import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import ApartmentPage from "./pages/ApartmentPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/apartment/:id" element={<ApartmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
