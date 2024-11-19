import React from "react";
import "../style.css"; // Ensure your CSS is correctly linked

const ContactMe = () => {
  return (
    <footer className="footer" id="footer">
      <div className="text2">
        <h2>Excited to Work Together? Reach Out!</h2>
      </div>
      <div className="footer__container">
        {/* Address Section */}
        <div className="footer__section">
          <div className="location">
            <div className="footer-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h3>Physical Address</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8679576873888!2d18.849989575133264!3d-34.1241299729255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdcaff64d8ed9f%3A0xc9f7d05817efa0e7!2s34%2016th%20St%2C%20Rusthof%2C%20Cape%20Town%2C%207140!5e0!3m2!1sen!2sza!4v1714640507387!5m2!1sen!2sza"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          ></iframe>
        </div>

        {/* Contact Details Section */}
        <div className="footer__section">
          <div className="contact2">
            <div className="footer-icon">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <h3>Get In Touch</h3>
          </div>
          <p>Phone1: 073 552 2380</p>
          <p>Phone2: 065 235 9052</p>
          <p>
            <a href="#footer">Email: ksandile127@gmail.com</a>
          </p>
        </div>

        {/* Email Form Section */}
        <div className="footer__section">
          <div className="contact2">
            <div className="footer-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3>Send An Email</h3>
          </div>
          <form
            action="https://formspree.io/f/xpzvnylz"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
