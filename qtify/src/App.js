import React from "react"; 

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import Songs from "./components/Songs/Songs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
      <Songs />
      <FAQ />
      <Footer />
    </div>
  );
}
