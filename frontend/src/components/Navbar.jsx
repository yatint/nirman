import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Heart, Sprout } from "lucide-react";
import { Button } from "./ui/button";
import { site } from "../mock/mock";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Work", to: "/#programs" },
  { label: "Stories", to: "/#stories" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const solid = scrolled || location.pathname !== "/";

  const handleNav = (to) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <button onClick={() => handleNav("/")} className="flex items-center gap-2.5">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#16714f] text-white">
            <Sprout size={22} />
          </span>
          <span className="leading-tight text-left">
            <span className={`block font-head font-extrabold text-lg ${solid ? "text-[#16714f]" : "text-white"}`}>
              Nirman
            </span>
            <span className={`block text-[11px] tracking-widest uppercase ${solid ? "text-[#f39019]" : "text-[#ffd9a8]"}`}>
              Foundation
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.to)}
              className={`text-sm font-semibold transition-colors hover:text-[#f39019] ${
                solid ? "text-[#1f2a28]" : "text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={site.phoneHref} className={`flex items-center gap-1.5 text-sm font-semibold ${solid ? "text-[#16714f]" : "text-white"}`}>
            <Phone size={16} /> {site.phone}
          </a>
          <Button onClick={() => handleNav("/contact")} className="bg-[#f39019] hover:bg-[#e07b0e] text-white rounded-full font-semibold">
            <Heart size={16} className="mr-1.5" /> Donate
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className={solid ? "text-[#16714f]" : "text-white"} /> : <Menu className={solid ? "text-[#16714f]" : "text-white"} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t mt-2 shadow-lg">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button key={l.label} onClick={() => handleNav(l.to)} className="text-left py-2.5 font-semibold text-[#1f2a28] border-b border-gray-100">
                {l.label}
              </button>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-2 py-2.5 font-semibold text-[#16714f]">
              <Phone size={16} /> {site.phone}
            </a>
            <Button onClick={() => handleNav("/contact")} className="mt-2 bg-[#f39019] hover:bg-[#e07b0e] text-white rounded-full">
              <Heart size={16} className="mr-1.5" /> Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
