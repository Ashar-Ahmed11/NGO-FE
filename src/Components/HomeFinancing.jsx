import React from 'react';
import CountUp from 'react-countup';

import Akhuwat14 from '../Images/25.png'
import Akhuwat15 from '../Images/26.png'

const HomeFinancing = () => {
  return (
     <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-3">Travel Embassy Job Apply Services: Helping You Build a Brighter Future</h1>
            <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
              Travel Embassy empowers individuals, students, business owners, and families across Pakistan with tailored application solutions. With a simple process and clear terms, take confident steps toward your goals.
            </p>
            <h1 className="fw-bold mb-3">What We Offer to Our Customers:</h1>
          </div>

          {/* Personal Applications Section */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">1. Personal Applications: Achieve Your Life Goals</h2>
              <p>
                Personal Job Apply from Travel Embassy supports urgent needs — from medical to family events or projects.
              </p>
              <ul>
                <li>Easy Eligibility: Simple and clear requirements make applying straightforward for everyone.</li>
                <li>Flexible Repayments: Plans are designed to match your budget, so payments remain manageable.</li>
                <li>Fast Approval: Quick processing ensures you receive funds when you need them most.</li>
              </ul>
              <p>Thousands of people have used personal applications to secure their future and meet urgent needs.</p>
            </div>
            <div className="col-lg-5 col-md-6 text-center">
              <img
                src={Akhuwat14}
                alt="Money Received"
                className="img-fluid wm-100 h-100 mt-5 card-img-top"
                style={{ objectFit: "cover" }}
              />
              <div
                className="start-0 text-white p-0"
                style={{ maxWidth: "100%", backgroundColor:'#FF7729' }}
              >
                <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                <h2 className="display-4 text-center fw-bold">
                  <CountUp end={14} duration={3} suffix="K+" />
                </h2>
              </div>
            </div>
          </div>

          {/* Business Applications Section */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">2. Business Applications: Empowering Entrepreneurs</h2>
              <p>
                Travel Embassy supports businesses to start, expand, or invest in new resources. Whether your venture is in technology, retail, or any other industry, this process supports long-term growth.
              </p>
              <ul>
                <li><b>Support for Various Goals:</b> Funding options cover both short-term and long-term business needs.</li>
                <li><b>Transparent Terms:</b> No extra costs or hidden charges.</li>
                <li><b>Accessible for Many Industries:</b> Applications available for a wide range of businesses.</li>
              </ul>
              <p>
                These applications allow entrepreneurs to focus on growth and building a strong business.
              </p>
            </div>
          </div>

          {/* Education Applications Section */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">3. Student Applications: Investing in Your Future</h2>
              <p>
                Education transforms lives. Travel Embassy’s student Job Apply helps with tuition, books, and living expenses so you can focus on studies.
              </p>
              <ul>
                <li><b>Comprehensive Support:</b> Covers all or part of educational expenses.</li>
                <li><b>Interest-Free:</b> No added financial burden.</li>
                <li><b>Flexible Repayment:</b> Repayment starts after graduation.</li>
              </ul>
              <p>
                These applications give students the chance to pursue their dreams.
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

          {/* Housing Applications Section (UPDATED CONTENT) */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">4. Home Financing: Make Your Dream Home a Reality</h2>
              <p>
                Owning a home is one of life’s biggest milestones, and Apna Ghar makes it simple and achievable. With tailored home financing solutions, families across Pakistan can buy, build, or renovate their homes without stress.
              </p>

              <h4 className="fw-bold mt-4">Why Choose Apna Ghar Home Financing?</h4>
              <ul>
                <li><b>Multiple Options:</b> Support for new home purchases, renovations, and home appliances finance.</li>
                <li><b>Simple Process:</b> Minimal paperwork, clear requirements, and fast approvals.</li>
                <li><b>Affordable Repayment Plans:</b> Flexible schedules designed to fit your budget.</li>
                <li><b>Smart Planning:</b> Use our home finance calculator to estimate repayments confidently.</li>
              </ul>

              <h4 className="fw-bold mt-4">Tips for Smart Home Financing</h4>
              <ul>
                <li>Assess your budget before applying.</li>
                <li>Combine home financing with home appliances finance for a complete solution.</li>
                <li>Choose repayment plans aligned with long-term financial goals.</li>
              </ul>

              <p>
                Thousands of families have already turned their dream of owning a home into reality with Apna Ghar’s support. Start your journey today and experience stress-free home financing.
              </p>
            </div>
          </div>
        </div>
  )
}

export default HomeFinancing;
