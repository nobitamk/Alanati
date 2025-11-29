import React from "react";

const Section2 = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

        .section2 {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          margin: 0;
          padding: 0;

          background-image: url("/letters.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .text-wrap {
          position: relative;
          z-index: 5;
          font-family: "NTR", sans-serif;
          color: #ae6511ff;
          -webkit-text-stroke: 0.5px rgba(10, 10, 10, 0.25);
          width: 85%;
          max-width: 750px;
          line-height: 1.45;
        }

        .line1 {
          font-size: 2.4rem;
          margin-bottom: 20px;
        }

        .line2 {
          font-size: 1.6rem;
          margin-bottom: 25px;
        }

        /* SAME ICON ROW DESIGN */
        .icons {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 10px;
          opacity: 0.9;
        }

        /* SVG icon styling */
        .svg-icon {
          width: 42px;
          height: 42px;
          stroke: #ae6511ff;
          stroke-width: 2.4;
          opacity: 0.95;
          filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.4));
        }

        @media (max-width: 768px) {
          .section2 {
            height: 75vh;
          }
          .line1 { font-size: 1.7rem; }
          .line2 { font-size: 1.2rem; }
          .svg-icon { width: 30px; height: 30px; }
        }
      `}</style>

      <div className="section2">
        <div className="text-wrap">

          <div className="line1">
            “ఒక లేఖ… ఒక సువాసన… ఒక జ్ఞాపకం.”
          </div>

          <div className="line2">
            ఎవరికి పంపినా హృదయం తడిపే చిన్న చిన్న గిఫ్ట్స్ —<br />
            మీ భావాల్ని మాటలలో మాత్రమే కాదు… అనుభూతిలో కూడా చెప్పడానికి.
          </div>

          {/* SAME POSITION — but SVGs instead of emojis */}
          <div className="icons">

            {/* Vintage Letter SVG */}
            <svg className="svg-icon" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="14" width="48" height="36" rx="3" />
              <path d="M8 18 L32 34 L56 18" />
            </svg>

            {/* Fountain Pen Nib SVG */}
            <svg className="svg-icon" viewBox="0 0 64 64" fill="none">
              <path d="M32 4 L40 20 L24 20 Z" />
              <circle cx="32" cy="28" r="5" />
              <path d="M28 33 L20 60 L44 60 L36 33" />
            </svg>

          </div>

        </div>
      </div>
    </>
  );
};

export default Section2;
