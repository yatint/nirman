import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Hero, Stats, Mission, Programs, Approach, Stories, Gallery, NewsSection, CtaBand } from "../components/HomeSections";

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="App bg-[#faf6ee]">
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Programs />
      <Approach />
      <Stories />
      <Gallery />
      <NewsSection />
      <CtaBand />
      <Footer />
    </div>
  );
};

export default Home;
