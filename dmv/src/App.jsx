import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Vehicles from "./components/Vehicles";
import People from "./components/People";
import Locations from "./components/Locations";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
  );
}

export default App;
