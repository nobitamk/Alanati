import React from "react";

const SignatureStorySection = ({ lang, setCurrentPage }) => {
  const isTelugu = lang === "te";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&family=NTR:wght@400;700&display=swap');

        .story-section {
          padding: 70px 20px;
          text-align: center;
          background: #f9f3e8;
          position: relative;
        }

        .gold-glow {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(255,200,80,0.3), rgba(255,200,80,0));
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          filter: blur(18px);
          opacity: 0.7;
          pointer-events: none;
        }

        .story-line {
          font-size: 2rem;
          max-width: 700px;
          margin: 0 auto;
          font-family: "NTR", sans-serif;
          line-height: 1.5;
          color: #5b3a15;
        }

        .signature {
          margin-top: 20px;
          font-family: "Homemade Apple", cursive;
          font-size: 1.8rem;
          color: #7c5528;
        }

        .underline {
          width: 120px;
          height: 4px;
          background: linear-gradient(to right, transparent, #c49b46, transparent);
          margin: 18px auto 30px auto;
          border-radius: 50px;
        }

        .story-cta-btn {
          background: #7a4a0b;
          color: white;
          padding: 12px 32px;
          font-size: 1.2rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-family: "NTR", sans-serif;
          box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
          transition: 0.3s ease;
        }

        .story-cta-btn:hover {
          background: #945c16;
          transform: translateY(-3px);
          box-shadow: 0px 14px 30px rgba(0,0,0,0.3);
        }
      `}</style>

      <section className="story-section">
        <div className="gold-glow"></div>

        <p className="story-line">
          {isTelugu
            ? "మేము లేఖలు రాయడం కాదు... భావాలను నింపుతాం."
            : "We don’t write letters… we craft emotions."}
        </p>

        <p className="signature">
          {isTelugu ? "— అరాధ్య" : "— NenuRupa"}
        </p>

        <div className="underline"></div>

        {/* CTA BUTTON (FINAL WORKING VERSION) */}
        <button 
          className="story-cta-btn"
          onClick={() => setCurrentPage("contact")}
        >
          {isTelugu ? "మీ లేఖను ప్రారంభించండి" : "Start Your Letter"}
        </button>

      </section>
    </>
  );
};

export default SignatureStorySection;
