import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EbookPage from "./pages/EbookPage";
import StrategyLab from "./pages/StrategyLab";
import JumpStart from "./pages/JumpStart";
import Member from "./pages/Member";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ebook" element={<EbookPage />} />
      <Route path="/strategy-lab" element={<StrategyLab />} />
      <Route path="/jumpstart" element={<JumpStart />} />
      <Route path="/member" element={<Member />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}