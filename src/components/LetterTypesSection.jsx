import React, { useEffect } from "react";

const LetterTypesSection = ({ lang }) => {
  const isTelugu = lang === "te";

  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card");

    const revealOnScroll = () => {
      cards.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

        .letters-section {
          padding: 60px 20px;
          background: #f3e7d4;
          text-align: center;
        }

        .letters-heading {
          font-size: 2.4rem;
          font-family: "NTR", sans-serif;
          color: #6e3c0a;
          margin-bottom: 5px;
        }

        .letters-sub {
          font-size: 1.1rem;
          color: #5a3a19;
          margin-bottom: 35px;
        }

        /* DESKTOP GRID */
        .letters-grid {
          display: grid;
          grid-template-areas:
            "left right"
            "middle middle";
          gap: 25px;
          max-width: 1150px;
          margin: 0 auto;
        }

        .card-left { grid-area: left; }
        .card-right { grid-area: right; }
        .card-middle { grid-area: middle; }

        /* CARD STYLE */
        .letters-card {
          padding: 28px;
          background: rgba(255,248,238,0.92);
          border-radius: 16px;
          border: 1px solid rgba(120,80,20,0.25);
          box-shadow: 0 12px 32px rgba(0,0,0,0.18);
          position: relative;
          overflow: hidden;
          text-align: left;
          transform: translateY(40px);
          opacity: 0;
          transition: 0.8s ease-out;
        }

        .letters-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .letters-card h3 {
          font-size: 1.4rem;
          font-family: "NTR", sans-serif;
          color: #704414;
          margin-bottom: 4px;
        }

        .tagline {
          font-size: 1rem;
          color: #b26b1c;
          margin-bottom: 6px;
        }

        .letters-price {
          font-size: 1.3rem;
          font-weight: bold;
          color: #a3520c;
          margin-bottom: 12px;
        }

        .letters-card p {
          color: #3d290e;
          font-size: 1rem;
          line-height: 1.45;
        }

        /* MOBILE — MAKE CARDS TINY */
        @media (max-width: 768px) {
          .letters-grid {
            grid-template-areas:
              "left right"
              "middle middle";
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .letters-card {
            padding: 15px;
            border-radius: 12px;
          }

          /* tiny headings */
          .letters-card h3 {
            font-size: 1.1rem;
          }
          .letters-price {
            font-size: 1.1rem;
          }
          .letters-card p {
            font-size: 0.92rem;
          }
          .tagline {
            font-size: 0.9rem;
          }

          /* Middle card full width + bigger */
          .card-middle {
            grid-column: span 2;
            padding: 18px !important;
            border-width: 2px;
          }
        }

        /* EXTRA SMALL */
        @media (max-width: 500px) {
          .letters-grid {
            grid-template-areas:
              "left right"
              "middle middle";
          }
        }
      `}</style>

      <section className="letters-section">
        <h2 className="letters-heading">
          {isTelugu ? "పత్రాల రకాలు" : "Types of Letters"}
        </h2>

        <p className="letters-sub">
          {isTelugu
            ? "మీ భావానికి సరిపోయే సరైన లేఖను ఎంచుకోండి."
            : "Choose the perfect style to match your emotion."}
        </p>

        <div className="letters-grid">

          {/* CARD 1 */}
          <div className="letters-card reveal-card card-left">
            <h3>{isTelugu ? "వింటేజ్ లేఖ" : "Vintage Letter"}</h3>
            <p className="tagline">{isTelugu ? "సాఫ్ట్ & సింపుల్" : "Soft & Simple"}</p>
            <p className="letters-price">₹1399</p>
            <p>
              {isTelugu
                ? "సాధారణ భావాలు చెప్పడానికి అద్భుతంగా ఉంటుంది."
                : "Perfect for soft, simple emotions."}
            </p>
          </div>

          {/* CARD 2 */}
          <div className="letters-card reveal-card card-right">
            <h3>{isTelugu ? "రోలింగ్ లేఖ" : "Rolling Sheet"}</h3>
            <p className="tagline">{isTelugu ? "స్క్రోల్ స్టైల్" : "Scroll Style"}</p>
            <p className="letters-price">₹1699</p>
            <p>
              {isTelugu
                ? "తెరిచే అనుభవమే ప్రత్యేకం."
                : "The unrolling experience itself is special."}
            </p>
          </div>

          {/* CARD 3 (Full width below on mobile) */}
          <div className="letters-card reveal-card card-middle">
            <h3>{isTelugu ? "డీటైల్ ఓపెనింగ్ లేఖ" : "Detailed Opening Letter"}</h3>
            <p className="tagline">
              {isTelugu ? "ప్రత్యేక క్షణాలకు" : "For special emotional moments"}
            </p>
            <p className="letters-price">₹2499</p>
            <p>
              {isTelugu
                ? "ప్రపోజల్ లేదా భావోద్వేగ క్షణాలకు అద్భుతంగా సరిపోతుంది."
                : "Perfect for proposals, apologies and emotional revelations."}
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default LetterTypesSection;
