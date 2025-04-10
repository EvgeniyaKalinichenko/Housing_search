import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import SeachPage from "./pages/SeachPage";
import ApartmentPage from "./pages/ApartmentPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/seach" element={<SeachPage />} />
        <Route path="/apartment" element={<ApartmentPage photos={[]} />} />
      </Routes>
    </Router>
  );
}

export default App;
