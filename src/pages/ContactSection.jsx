import React from "react";

const ContactAlanati = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

        .contact-root {
          background: #f6efe3;
          padding: 70px 20px;
          font-family: "NTR", sans-serif;
          color: #462b14;
          min-height: 100vh;
        }

        .contact-container {
          max-width: 850px;
          margin: auto;
          background: #fff8ec;
          padding: 40px 28px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(130,90,30,0.18);
        }

        .title {
          font-size: 2.3rem;
          text-align: center;
          margin-bottom: 10px;
          color: #7a4a0b;
        }

        .subtext {
          text-align: center;
          color: #5a3718;
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .label {
          font-size: 1.1rem;
          margin-bottom: 6px;
          display: block;
          color: #7a4a0b;
          font-weight: 600;
        }

        .input-box,
        .textarea {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid rgba(130,90,30,0.25);
          background: #fffdf7;
          font-size: 1.1rem;
          color: #4a2c14;
          outline: none;
          transition: 0.2s ease;
        }

        .input-box:focus,
        .textarea:focus {
          border-color: #c78e40;
          box-shadow: 0 0 0 3px rgba(199,142,64,0.15);
        }

        .textarea {
          height: 130px;
          resize: none;
        }

        .submit-btn {
          width: 100%;
          background: #b37429;
          color: white;
          padding: 14px;
          border-radius: 12px;
          font-size: 1.2rem;
          border: none;
          cursor: pointer;
          transition: 0.25s ease;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #8c541d;
        }

        .contact-info {
          margin-top: 40px;
          text-align: center;
          font-size: 1.15rem;
          color: #5a3718;
        }

        .contact-info p {
          margin: 6px 0;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-container">

          <h2 className="title">Contact Alanati</h2>

          <p className="subtext">
            Have a story, a memory, or a feeling you want to turn into a letter?  
            Reach out to us — we are here to create something unforgettable for you 🤍
          </p>

          {/* NAME */}
          <div className="input-group">
            <label className="label">Your Name</label>
            <input type="text" className="input-box" placeholder="Enter your name" />
          </div>

          {/* PHONE */}
          <div className="input-group">
            <label className="label">Phone Number</label>
            <input type="text" className="input-box" placeholder="Enter your phone number" />
          </div>

          {/* MESSAGE */}
          <div className="input-group">
            <label className="label">Your Message</label>
            <textarea className="textarea" placeholder="Tell us about your letter..." />
          </div>

          {/* BUTTON */}
          <button className="submit-btn">
            Send Message
          </button>

          <div className="contact-info">
            <p>📞 Phone: +91 88888 88888</p>
            <p>📬 Email: alanati.letters@gmail.com</p>
            <p>📍 India — Delivering emotions nationwide</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactAlanati;
