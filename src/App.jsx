import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EbookPage from "./pages/EbookPage";
import JumpStart from "./pages/JumpStart";
import Member from "./pages/Member";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ebook" element={<EbookPage />} />
      <Route path="/jumpstart" element={<JumpStart />} />
      <Route path="/member" element={<Member />} />
    </Routes>
  );
}