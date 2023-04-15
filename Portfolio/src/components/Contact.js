import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>
      <div className="contact-info">
        <div className="contact-info-item">
          <h2>Phone</h2>
          <p>123-456-7890</p>
        </div>
        <div className="contact-info-item">
          <h2>Email</h2>
          <p>
            <a
              href="mailto:
                    "
            ></a>
          </p>
        </div>
        <div className="contact-info-item">
          <h2>Address</h2>
          <p>123 Main St, Anytown, USA</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
