import React, { useEffect } from "react";

const AboutAlanati = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

        .about-root {
          width: 100%;
          background: #f6efe3;
          color: #442c13;
          font-family: "NTR", sans-serif;
          overflow-x: hidden;
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.9s ease-out;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* SECTION GENERAL */
        .section {
          padding: 70px 22px;
          max-width: 950px;
          margin: auto;
        }

        .title {
          font-size: 2.2rem;
          color: #7a4a0b;
          text-align: center;
          margin-bottom: 20px;
        }

        .text {
          font-size: 1.22rem;
          color: #3c2711;
          line-height: 1.75;
          margin-bottom: 20px;
          text-align: center;
        }

        /* IMAGE */
        .full-img {
          width: 100%;
          border-radius: 16px;
          margin: 30px 0;
          box-shadow: 0px 15px 40px rgba(0,0,0,0.28);
        }

        /* WHY GRID */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .why-card {
          background: #fff8ec;
          padding: 25px;
          border-radius: 18px;
          border: 1px solid rgba(140,90,20,0.12);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
        }

        .why-title {
          font-size: 1.35rem;
          color: #7a4a0b;
          margin-bottom: 8px;
        }

        .why-text {
          font-size: 1.1rem;
          color: #4a3116;
          line-height: 1.6;
        }

        /* FOUNDER */
        .founder-pic {
          width: 165px;
          height: 165px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 12px 30px rgba(0,0,0,0.22);
          display: block;
          margin: auto;
          margin-bottom: 20px;
        }

        .founder-name {
          font-size: 1.7rem;
          text-align: center;
          color: #7a4a0b;
          margin-bottom: 5px;
        }

        .founder-role {
          font-size: 1.15rem;
          text-align: center;
          color: #b67933;
          margin-bottom: 15px;
        }

        /* VIDEO SECTION */
        .video-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 30px;
        }

        .video-box {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 32px rgba(0,0,0,0.25);
        }

        .video-box iframe,
        .video-box video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .video-grid {
            grid-template-columns: 1fr;
          }
        }

        /* CLOSING */
        .closing {
          padding: 70px 20px 100px;
          text-align: center;
          font-size: 1.35rem;
          color: #7a4a0b;
        }

      `}</style>

      <div className="about-root">

        {/* WHAT IS ALANATI */}
        <section className="section reveal">
          <h2 className="title">What is Alanati?</h2>

          <p className="text">
            Alanati is a return to the days when emotions were slow,  
            honest, warm, and handwritten.
          </p>

          <p className="text">
            “అలాటి” అంటే… మాటల్లో చెప్పలేని భావాలను  
            కాగితంపై పండించి ఎవరికో అందించే ఒక అందమైన ప్రయాణం.
          </p>

          <p className="text">
            Every letter we create is touched, felt, folded and sealed  
            with the warmth your heart wants to send.
          </p>
        </section>

        {/* SPECIAL IMAGE */}
        <section className="section reveal">
          <img
            src="/nenu.png"
            className="full-img"
            alt="Alanati Writing"
          />
        </section>

        {/* WHY WE EXIST */}
        <section className="section reveal">
          <h2 className="title">Why Alanati Exists</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3 className="why-title">Because emotions deserve time</h3>
              <p className="why-text">
                Typed messages disappear.  
                Handwritten words stay forever.
              </p>
            </div>

            <div className="why-card">
              <h3 className="why-title">Because effort matters</h3>
              <p className="why-text">
                A letter says — “నీ కోసం రాసిన సమయం నాకు విలువైంది.”
              </p>
            </div>

            <div className="why-card">
              <h3 className="why-title">Because memories need to be held</h3>
              <p className="why-text">
                Letters stay in diaries, saree cupboards, gift boxes…  
                in lives.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section reveal">
          <img src="/rupa.jpg" className="founder-pic" alt="Founder" />

          <h3 className="founder-name">Rupa</h3>
          <p className="founder-role">Founder — Alanati</p>

          <p className="text">
            “Letters are not business for me.  
            They are the last beautiful things  
            we still send with our own hands.”
          </p>
        </section>

        {/* NEWLY LAUNCHED SECTION WITH VIDEOS */}
        <section className="section reveal">
          <h2 className="title">Newly Launched</h2>

          <div className="video-grid">
            {/* VIDEO 1 */}
            <div className="video-box">
              <video src="/k.mp4" controls />
            </div>

            {/* VIDEO 2 */}
            <div className="video-box">
              <video src="/l.mp4" controls />
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <div className="closing reveal">
          Alanati is not just a brand…  
          <br />
          it is an emotion written slowly, beautifully, and forever.
        </div>

      </div>
    </>
  );
};

export default AboutAlanati;
