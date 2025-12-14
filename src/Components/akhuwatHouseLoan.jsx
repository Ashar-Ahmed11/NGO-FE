
import React from 'react';
import CountUp from 'react-countup';
import asaanQarz13 from '../Images/newAkhuwat18.jpg'
import asaanQarz14 from '../Images/newAkhuwat19.jpg'


const akhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Home Financing: Make Your Dream Home a Reality</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          Owning a home is one of life’s biggest milestones, and Apna Ghar makes it simple and achievable. With our tailored home finance solutions, families across Pakistan can buy, build, or renovate their homes without stress.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Why Choose Apna Ghar Home Financing?</h2>
          {/* <p>
          Whether you want to buy a house or fix up the one you already have, Travel Embassy makes the process easy and doable.
          </p> */}
          <ul>
            <li><strong>Multiple Options:</strong> Support for new home purchases, renovations, and home appliances finance to make settling in easier.</li>
            <li><strong>Simple Process:</strong> Minimal paperwork, clear requirements, and fast approvals.</li>
            <li><strong>Affordable Repayment Plans:</strong> Flexible schedules designed to fit your budget.</li>
            <li><strong>Smart Planning:</strong> Use our home finance calculator to estimate repayments and plan confidently.</li>
            {/* <li>Making living conditions better:The main goal of Akhuwat Foundation's housing loan is to make families' lives better by giving them safe, secure, and nice places to live.</li> */}
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={asaanQarz13}
            alt="Money Received"
            className="img-fluid wm-100 h-100 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 text-white p-0" style={{ maxWidth: "100%" , backgroundColor:'#FF7729' }}>
            <p className="mb-0 text-center">Families Supported</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Tips for Smart Home Financing</h2>
          <ul>
            <li>Assess your budget before applying.</li>
            <li>Consider combining home financing with home appliances finance for a complete solution.</li>
            <li>Explore repayment plans that suit your long-term financial goals.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={asaanQarz14}
            alt="Housing Help"
            className="img-fluid wm-100 h-80 card-img-top"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 text-white p-0" style={{ maxWidth: "100%", backgroundColor:'#FF7729' }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">Make Your Dream Home a Reality Today</h2>
          <p className=''>Thousands of families have already turned their dream of owning a home into reality with Apna Ghar’s support. Start your journey today and discover how simple, stress-free home financing can be.</p>
        </div>

      </div>
    </div>
  );
};

export default akhuwatHouseLoan;

