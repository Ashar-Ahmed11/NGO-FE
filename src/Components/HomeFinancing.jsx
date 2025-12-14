import React from 'react';

import Akhuwat14 from '../Images/25.png'
import Akhuwat15 from '../Images/26.png'

const HomeFinancing = () => {
  return (
     <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-3">Home Financing: Make Your Dream Home a Reality</h1>
            <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
              Owning a home is one of life’s biggest milestones, and Apna Ghar makes it simple and achievable. With our tailored home finance solutions, families across Pakistan can buy, build, or renovate their homes without stress.
            </p>
          </div>

          {/* Why Choose */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h4 className="fw-bold mb-3">Why Choose Apna Ghar Home Financing?</h4>
              <ul>
                <li><b>Multiple Options:</b> Support for new home purchases, renovations, and even home appliances finance to make settling in easier.</li>
                <li><b>Simple Process:</b> Minimal paperwork, clear requirements, and fast approvals.</li>
                <li><b>Affordable Repayment Plans:</b> Flexible schedules designed to fit your budget.</li>
                <li><b>Smart Planning:</b> Use our home finance calculator to estimate repayments and plan your investment confidently.</li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 text-center">
              <img
                src={Akhuwat14}
                alt="Money Received"
                className="img-fluid wm-100 h-100 mt-5 card-img-top"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Tips + Image */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h4 className="fw-bold mb-3">Tips for Smart Home Financing</h4>
              <ul>
                <li>Assess your budget before applying.</li>
                <li>Consider combining home financing with home appliances finance for a complete solution.</li>
                <li>Explore repayment plans that suit your long-term financial goals.</li>
              </ul>
              <p>
                Thousands of families have already turned their dream of owning a home into reality with Apna Ghar’s support. Start your journey today and discover how simple, stress-free home financing can be.
              </p>
            </div>
            <div className="col-lg-5 col-md-6 text-center p-3">
              <img
                src={Akhuwat15}
                alt="Students Support"
                className="img-fluid wm-100 h-80 mt-5 card-img-top"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
  )
}

export default HomeFinancing;
