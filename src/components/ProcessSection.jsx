import React, { useState, useEffect } from "react";

const ProcessSection = () => {
  const [lang, setLang] = useState("te");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const isTelugu = lang === "te";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

        .info-section {
          width: 100%;
          padding: 70px 20px;
          position: relative;
          background-image: url("/paper-bg.jpg");
          background-size: cover;
          background-position: center;
        }

        /* Soft floating feather */
        .feather {
          position: absolute;
          top: 20px;
          right: 40px;
          width: 60px;
          opacity: 0.6;
          animation: floatFeather 4s ease-in-out infinite alternate;
        }

        @keyframes floatFeather {
          from { transform: translateY(0px) rotate(-6deg); }
          to { transform: translateY(18px) rotate(6deg); }
        }

        /* HEADER */
        .info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1050px;
          margin: 0 auto 50px auto;
        }

        .info-title {
          font-family: "NTR", sans-serif;
          font-size: 2.8rem;
          color: #7e4a0b;
          opacity: 0;
          transform: translateY(20px);
          transition: 1s ease-out;
        }

        .info-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .lang-toggle {
          padding: 8px 16px;
          background: #7e4a0b;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.9s ease-out;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .info-content {
          max-width: 1050px;
          margin: auto;
        }

        /* UNIVERSAL CARD STYLING */
        .info-card-block {
          margin-bottom: 45px;
          padding: 30px;
          background: rgba(255,245,230,0.85);
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0px 10px 30px rgba(0,0,0,0.15);
          position: relative;
          overflow: hidden;
        }

        /* BACKGROUND IMAGE LAYER */
        .info-card-block::before {
          content: "";
          position: absolute;
          inset: 0;
          background-size: contain;
          background-position: center bottom;
          background-repeat: no-repeat;
          opacity: 0.14;
          filter: blur(0.4px);
          pointer-events: none;
        }

        /* Different background for each card */
        .bg-how::before { background-image: url("/rama.jpg"); }
        .bg-lang::before { background-image: url("/lan.png"); }
        .bg-box::before { background-image: url("/krish.png"); }

        .info-card-block > * {
          position: relative;
          z-index: 2;
        }

        .info-block-title {
          font-size: 2rem;
          color: #7e4a0b;
          margin-bottom: 15px;
          font-family: "NTR", sans-serif;
        }

        .info-list {
          font-size: 1.2rem;
          color: #543416;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .info-block-title { font-size: 1.6rem; }
          .info-list { font-size: 1rem; }
          .info-card-block::before { opacity: 0.20; }
        }
      `}</style>

      <section className="info-section">

        {/* Feather */}
        <svg className="feather" viewBox="0 0 64 64" fill="none" stroke="#7e4a0b" strokeWidth="3" strokeLinecap="round">
          <path d="M10 50 C20 30, 40 10, 55 8" />
          <path d="M20 48 C33 30, 45 22, 52 20" />
        </svg>

        <div className="info-header">
          <h2 className="info-title reveal">
            {isTelugu ? "ప్రాసెస్ & సమాచారం" : "Process & Information"}
          </h2>

          <button
            className="lang-toggle"
            onClick={() => setLang(isTelugu ? "en" : "te")}
          >
            {isTelugu ? "English" : "తెలుగు"}
          </button>
        </div>

        <div className="info-content">

          {/* HOW IT WORKS — WITH BACKGROUND */}
          <div className="info-card-block reveal bg-how">
            <h3 className="info-block-title">
              {isTelugu ? "ఎలా పనిచేస్తాము" : "How it works"}
            </h3>

            <ol className="info-list">
              {isTelugu ? (
                <>
                  <li>మీరు చెప్తారు — బంధం, భావం, ఎవరికో.</li>
                  <li>దాని ఆధారంగా స్క్రిప్ట్ తయారు చేసి approval పంపుతాం.</li>
                  <li>ఓకే అనగానే రాయడం, ప్యాక్ చేయడం, డెలివరీ.</li>
                </>
              ) : (
                <>
                  <li>You share the bond and emotion.</li>
                  <li>We prepare a script and send for approval.</li>
                  <li>After approval — write, pack, deliver.</li>
                </>
              )}
            </ol>
          </div>

          {/* LANGUAGE CHARGES — WITH BACKGROUND */}
          <div className="info-card-block reveal bg-lang">
            <h3 className="info-block-title">
              {isTelugu ? "భాష & రచన ఛార్జెస్" : "Language & Writing Charges"}
            </h3>

            <ul className="info-list">
              <li>{isTelugu ? "Telugu (English letters) – ఎక్స్‌ట్రా లేదు" : "Telugu (English letters) – Free"}</li>
              <li>{isTelugu ? "తెలుగు రాత – +₹549" : "Telugu Script – +₹549"}</li>
              <li>{isTelugu ? "హిందీ (English letters) – +₹649" : "Hindi (English letters) – +₹649"}</li>
            </ul>
          </div>

          {/* BOX — WITH BACKGROUND */}
          <div className="info-card-block reveal bg-box">
            <h3 className="info-block-title">Manibhandham Box</h3>

            <ul className="info-list">
              <li>Medium – ₹1199</li>
              <li>Large (no mirror) – ₹2499</li>
              <li>Large (with mirror) – ₹2799</li>
              <li>{isTelugu ? "Delivery extra." : "Delivery extra based on location."}</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProcessSection;
