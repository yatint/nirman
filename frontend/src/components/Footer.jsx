import React from "react";
import { Link } from "react-router-dom";
import { Sprout, Phone, MapPin, Mail, Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { site } from "../mock/mock";

const Footer = () => {
  return (
    <footer className="bg-[#0f3b2e] text-white">
      <div className="max-w-7xl mx-auto px-5 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#f39019]"><Sprout size={22} /></span>
            <span className="font-head font-extrabold text-xl">Nirman Foundation</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            {site.tagline}. Working with rural and tribal communities across Nashik, Maharashtra to build a self-reliant future.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-[#f39019] transition-colors">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-head font-semibold mb-4 text-[#ffd9a8]">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-head font-semibold mb-4 text-[#ffd9a8]">Our Programs</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Education</li>
            <li>Health &amp; Nutrition</li>
            <li>Livelihood</li>
            <li>Rural Development</li>
          </ul>
        </div>

        <div>
          <h4 className="font-head font-semibold mb-4 text-[#ffd9a8]">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5"><MapPin size={18} className="text-[#f39019] mt-0.5" /> {site.location}</li>
            <li className="flex items-center gap-2.5"><Phone size={18} className="text-[#f39019]" /> <a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li className="flex items-center gap-2.5"><Mail size={18} className="text-[#f39019]" /> info@nirmanfoundation.org</li>
          </ul>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#f39019] hover:gap-3 transition-all">
            Support our mission <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Nirman Foundation. All rights reserved.</p>
          <p>Made with care in Nashik, Maharashtra · Data shown is illustrative.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
