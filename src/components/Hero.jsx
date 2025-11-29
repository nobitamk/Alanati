import React, { useEffect, useState } from "react";

const Hero = () => {
  const text = "నేను రూప... ప్రతి పదమూ నీ కోసం, మనసు నిండా..";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');

        .hero {
          width: 100%;
          min-height: 48vh; /* 🔥 compact hero height */
          padding: 30px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          background: linear-gradient(135deg, #fff7ef, #f6e3cd);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .left-photo {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .owner-img {
          width: 160px;
          height: 210px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0px 6px 15px rgba(0,0,0,0.18);
        }

        .right-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .title-telugu {
          font-family: 'NTR', sans-serif;
          font-size: 40px;
          background: linear-gradient(90deg, #9a3d15, #c05b22);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 4px;
          margin-left:50px;
        }

        .tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #8a3d1b;
          margin-bottom: 12px;
        }

        .typing-box {
          background: rgba(255, 255, 255, 0.6);
          padding: 14px 18px;
          border-radius: 10px;
          max-width: 380px;
          font-family: Georgia, serif;
          color: #3b2a1f;
          font-size: 16px;
          line-height: 1.5;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.10);
        }

        .cursor {
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 20px 15px;
            gap: 15px;
          }

          .owner-img {
            width: 95px;
            height: 125px;
            border-radius: 10px;
          }

          .title-telugu {
            font-size: 28px;
          }

          .tagline {
            font-size: 14px;
          }

          .typing-box {
            font-size: 14px;
            padding: 10px 14px;
            max-width: 100%;
          }

          .right-content {
            flex: 1;
          }
        }
      `}</style>

      <div className="hero">

        {/* LEFT */}
        <div className="left-photo">
          <img src="/rupa.jpg" alt="Rupa" className="owner-img" />
        </div>

        {/* RIGHT */}
        <div className="right-content">
          <div className="title-telugu">అలనాటి</div>
          <div className="tagline">Scent of Memory – Touch of Love</div>

          <div className="typing-box">
            {displayText}
            <span className="cursor">|</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
