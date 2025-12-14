import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
import asaanQarz15 from '../Images/29.png'
import asaanQarz16 from '../Images/30.png'
import asaanQarz17 from '../Images/31.png'
import { getCdnUrl } from '../utils/cdnImage'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: '21px' }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              
              <h1 className="fw-bold mb-4">About Us</h1>

              <h2 className="fw-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                Apna Ghar was born from a simple idea: everyone in Pakistan, regardless of income, should have access to fair, reliable support to build a better life. Today, we empower thousands of individuals, students, entrepreneurs, and families with transparent, flexible, and life-changing solutions.
              </p>

              <div className="my-5 text-center p-4">
                <img
                  src={getCdnUrl(asaanQarz15)}
                  alt="Apna Ghar Mission"
                  className="img-fluid rounded shadow-sm mw-100 h-100 card-img-top"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do</h2>
              <p className="mb-4">
                We make applying for support simple. From personal and business assistance to student support and home financing, our services remove barriers and provide solutions tailored to your needs. Our goal is to help you move forward with confidence, stability, and dignity.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Choose Apna Ghar?</h2>
              <ul className="fw-light mx-5">
                <li><b>Fast Approvals:</b> Get support when you need it most.</li>
                <li><b>Transparent Process:</b> No hidden terms—always clear and honest.</li>
                <li><b>Personalized Guidance:</b> Plans tailored to your situation and goals.</li>
                <li><b>Diverse Options:</b> Personal, business, student, home, and widow support.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Values</h2>
              <ul className="fw-light mx-5">
                <li><b>Trust & Honesty:</b> We build confidence through transparency.</li>
                <li><b>Customer-Focused:</b> Every solution is designed for your unique needs.</li>
                <li><b>Innovation:</b> Using modern tools to make support easier and faster.</li>
                <li><b>Community Impact:</b> Strengthening lives through sustainable support, including help for widows and orphans.</li>
              </ul>

              <div className="my-5 text-center">
                <img
                  src={getCdnUrl(asaanQarz16)}
                  alt="Apna Ghar Values"
                  className="img-fluid rounded shadow-sm"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">Our Promise</h2>
              <p className="mb-4">
                Apna Ghar is more than a service—it’s a partner in your journey. We’re here to help you study, start a business, support your family, or overcome life’s challenges, with fairness, care, and dignity.
              </p>

              <div className="my-5 text-center">
                <img
                  src={getCdnUrl(asaanQarz17)}
                  alt="Apna Ghar Promise"
                  className="img-fluid rounded shadow-sm card-img-top"
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">Join Us</h2>
              <p className="mb-4">
                Take the first step toward your goals today. With Apna Ghar, achieving your dreams has never been easier.
              </p>

            </article>
          </main>
        </div>

        {/* Sidebar */}
        {!isMobile && (
          <div className="col-lg-3">
            <div className="sticky-top pr-3" style={{ top: "0", paddingRight: "22px" }}>
              <Sidebar />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AboutUs;
