import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/fn.css";
import "./assets/styles/intercepter.css";
import "./assets/styles/font-lato.css";
import "./assets/styles/font-poppins.css";
import "./services/i18n";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import FreyaGallery from "./pages/FreyaGallery";
import FreyanationGallery from "./pages/FreyanationGallery";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";
import Freyanation from "./pages/Freyanation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/galeri-freya" element={<FreyaGallery />} />
          <Route path="/galeri-freyanation" element={<FreyanationGallery />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/freyanation" element={<Freyanation />} />
          <Route path="/jadwal" element={<Schedule />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
