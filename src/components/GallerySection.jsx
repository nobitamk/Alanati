import React from "react";

const PolaroidVideoSection = ({ lang }) => {
  const isTelugu = lang === "te";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&family=NTR&display=swap');

        .polaroid-section {
          padding: 35px 15px;
          text-align: center;

          /* 🔥 FULL BACKGROUND IMAGE */
          background-image: url("/logo.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          /* 🔥 subtle color overlay to match old style */
          background-color: #f5eee3;
          background-blend-mode: soft-light;
        }

        /* Heading */
        .polaroid-title {
          font-family: "NTR", sans-serif;
          font-size: 1.9rem;
          color: #6e3c0a;
          margin-bottom: 20px;
        }

        /* Polaroid Frame (small) */
        .polaroid-wrapper {
          width: 260px;
          margin: auto;
          background: #fffdf8;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
        }

        .polaroid-video {
          width: 100%;
          border-radius: 6px;
        }

        .polaroid-caption {
          font-family: "Homemade Apple", cursive;
          margin-top: 8px;
          font-size: 0.95rem;
          color: #6d4b21;
        }

        @media (max-width: 420px) {
          .polaroid-wrapper {
            width: 230px;
            padding: 8px;
          }
          .polaroid-caption {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="polaroid-section">
        <h2 className="polaroid-title">
          {isTelugu ? "మా కస్టమర్ వీడియో" : "ᴛʜᴇ ꜰᴀᴍɪʟʏ ɪ ᴏᴡɴ"}
        </h2>

        <div className="polaroid-wrapper">
          <video className="polaroid-video" controls>
            <source src="/m.mp4" type="video/mp4" />
          </video>

          <p className="polaroid-caption">
            {isTelugu 
              ? "వాళ్లు ఎంతో ఇష్టపడ్డ క్షణం ❤️"
              : "A moment they truly loved ❤️"}
          </p>
        </div>
      </section>
    </>
  );
};

export default PolaroidVideoSection;
