import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, Menu, X } from "lucide-react";
import logo from "../assets/brand/dtb-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "System", to: "/#system" },
  { label: "Free eBook", to: "/ebook" },
  { label: "Components", to: "/#components" },
  { label: "DTB Strategy Lab", to: "/strategy-lab" },
  { label: "Results", to: "/#results" },
  { label: "Jump Start", to: "/jumpstart" },
  { label: "Resources", to: "/resources" },
  { label: "Risk Disclosure", to: "/#risk-disclosure" },
  { label: "FAQ", to: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const openMemberstackModal = async () => {
    if (!window.$memberstackDom) {
      console.error("Memberstack has not loaded yet.");
      return;
    }
    await window.$memberstackDom.openModal("LOGIN");
    const member = await window.$memberstackDom.getCurrentMember();
    if (member?.data) window.location.href = "/member";
  };

  return (
    <header className="border-b border-white/10 bg-slate-950 text-white sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center shrink-0" onClick={() => setMenuOpen(false)} aria-label="DTB Traders home">
          <img src={logo} alt="DTB Traders" className="h-16 md:h-20 w-auto" />
        </Link>
        <nav className="hidden lg:flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm text-white/70" aria-label="Main navigation">
          {links.map(({ label, to }) => (
            to.includes("#") ? (
              <a key={label} href={to} className="hover:text-white">{label}</a>
            ) : (
              <Link key={label} to={to} className={`hover:text-white ${pathname === to ? "text-white font-semibold" : ""}`}>{label}</Link>
            )
          ))}
        </nav>
        <button type="button" className="lg:hidden rounded-lg border border-white/20 p-2" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="lg:hidden mx-auto max-w-6xl px-4 pb-4 grid grid-cols-2 gap-3 text-sm" aria-label="Mobile navigation">
          {links.map(({ label, to }) => to.includes("#") ? (
            <a key={label} href={to} onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white">{label}</a>
          ) : (
            <Link key={label} to={to} onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-white">{label}</Link>
          ))}
        </nav>
      )}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap justify-end gap-2 sm:gap-3">
          <button type="button" onClick={openMemberstackModal} className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/5">Member Login</button>
          <Link to="/ebook" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/5">Free eBook <BookOpen size={16} /></Link>
          <Link to="/jumpstart" className="inline-flex items-center justify-center gap-2 rounded-xl bg-dtb px-4 py-2 text-sm font-semibold hover:bg-dtb-hover">Join Now <ArrowRight size={16} /></Link>
        </div>
      </div>
    </header>
  );
}
