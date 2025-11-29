import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThoranamSection from "./components/ThoranamSection";
import ProcessSection from "./components/ProcessSection";
import LetterTypesSection from "./components/LetterTypesSection";
import GallerySection from "./components/GallerySection";
import AudioSection from "./components/AudioSection";
import ContactSection from "./pages/ContactSection";
import About from "./pages/About";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app-root">
      <div className="page-wrapper">

        {/* HEADER ALWAYS RECEIVES setCurrentPage */}
        <Header setCurrentPage={setCurrentPage} />

        {/* HOME PAGE */}
        {currentPage === "home" && (
          <>
            {/* Pass setCurrentPage into components that need navigation */}
            <Hero setCurrentPage={setCurrentPage} />
            <ThoranamSection setCurrentPage={setCurrentPage} />
            <ProcessSection setCurrentPage={setCurrentPage} />
            <LetterTypesSection setCurrentPage={setCurrentPage} />
            <GallerySection setCurrentPage={setCurrentPage} />
            <AudioSection setCurrentPage={setCurrentPage} />
          </>
        )}

        {/* ABOUT PAGE */}
        {currentPage === "about" && <About setCurrentPage={setCurrentPage} />}

        {/* CONTACT PAGE */}
        {currentPage === "contact" && <ContactSection />}

        <footer className="footer">
          <p className="footer-line">
            This isn&apos;t just a letter, it&apos;s a feeling that stays forever ♾️
          </p>
          <p className="footer-credit">Designed &amp; Developed by MK</p>
        </footer>

      </div>
    </div>
  );
};

export default App;
