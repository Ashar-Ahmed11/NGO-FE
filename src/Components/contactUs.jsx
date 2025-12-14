import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              
              <h1 className="fw-bold mb-4">Contact Us – We’re Here to Help</h1>

              <p className="mb-4">
                At Apna Ghar, every application journey matters. Whether you’re applying for personal support, business assistance, student funding, or home financing, our team is ready to guide you with care, clarity, and attention. Your questions matter, and we’re here to make the process smooth and stress-free.
              </p>

              <h2 className="fw-bold mt-5 mb-4">How to Reach Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Send Us a Message</h3>
                  <p>
                    Have a question or need guidance? Email our customer support team, and we’ll respond within 24 hours. From application help to clarifying your options, we provide clear, helpful answers.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Speak to a Friendly Voice</h3>
                  <p>
                    Sometimes it’s easier to talk directly. Call us Monday to Friday, 9 AM to 6 PM (Pakistan Standard Time). Our experts are happy to assist with eligibility, application status, or any concerns you have.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Visit Our Office</h3>
                  <p>
                    Prefer face-to-face support? Our Islamabad office welcomes you. Meet a specialist, get personalized guidance, and explore solutions tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address</h2>
                <p>
                  <b>Apna Ghar</b><br />
                  F-6, Islamabad, Islamabad Capital Territory, Pakistan
                </p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png"
                  alt="Office Location Map"
                  className="img-fluid rounded p-5"
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Your Questions, Our Commitment</h3>
                <p>
                  Every message, call, or visit is an opportunity for us to help you move closer to your goals. At Apna Ghar, we don’t just process applications—we provide guidance, clarity, and support to help you move forward with confidence.
                </p>
              </div>

            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
