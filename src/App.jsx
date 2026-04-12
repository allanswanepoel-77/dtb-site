import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import EbookPage from "./pages/EbookPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/ebook" element={<EbookPage />} />
    </Routes>
  );
}
