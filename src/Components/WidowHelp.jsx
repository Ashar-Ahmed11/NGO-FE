import React from 'react';
import CountUp from 'react-countup';

import Akhuwat14 from '../Images/23.png'
import Akhuwat15 from '../Images/24.png'

const WidowHelp = () => {
  return (
     <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-3">Apna Ghar: Support for Families, Students, Entrepreneurs, and Widows</h1>
            <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
            Take confident steps toward a brighter future with Apna Ghar. From education to business growth, homeownership, and help for widows, we make support simple, transparent, and compassionate.
            </p>
              <h1 className="fw-bold mb-3">Personal Support for Urgent Needs</h1>
          </div>
    
          {/* Personal Applications Section */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              {/* <h2 className="fw-bold mb-3">1. Personal Applications: Achieve Your Life Goals</h2> */}
              <p>
               Whether it’s medical emergencies, family events, or life projects, our personal support ensures you get timely assistance. Special programs provide help for widows, helping them regain stability, dignity, and peace of mind.
    
    
              </p>
              <ul>
                <li>Easy Application: Clear, simple steps for everyone.</li>
                <li>Flexible Plans: Affordable repayments tailored to your needs.</li>
                <li>Fast Support: Quick approvals when you need it most.</li>
              </ul>
              <p>Join thousands of families and widows who have received life-changing support through our programs.</p>
            </div>
            <div className="col-lg-5 col-md-6 text-center"
                    >
                      <img
                        src={Akhuwat14}
                        alt="Money Received"
                        className="img-fluid  wm-100 h-100 mt-5 card-img-top"
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className="start-0 text-white p-0"
                        style={{ maxWidth: "100%" , backgroundColor:'#FF7729'}}
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
              <h2 className="fw-bold mb-3">2. Empowering Entrepreneurs</h2>
              <p>
              Apna Ghar helps business owners start, grow, or invest in new ventures. Funding is available for multiple industries with transparent terms and no hidden costs.Grow your business while contributing to social causes, including charities that help widows, making your success part of a bigger impact.
              </p>
              {/* <ul>
                <li><b>Support for Various Goals:</b> Funding options cover both short-term and long-term business needs.</li>
                <li><b>Transparent Terms:</b> No extra costs or hidden charges.</li>
                <li><b>Accessible for Many Industries:</b> Applications available for a wide range of businesses, from tech startups to retail stores.</li>
              </ul>
              <p>
              These applications allow entrepreneurs to focus on growth and building a strong business.
              </p> */}
            </div>
            
          </div>
    
          {/* Education Applications Section */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">3. Investing in Students’ Futures
</h2>
              <p>
           Education transforms lives. Our student support covers tuition, books, and living expenses, giving students the freedom to focus on their studies without financial stress.

              </p>
              <ul>
                <li><b>Interest-Free Support</b></li>
                <li><b>Flexible Repayment after Graduation</b></li>
                {/* <li><b>Flexible Repayment:</b> Repayments begin after graduation to allow you to establish your career first.</li> */}
              </ul>
              {/* <p>
           These applications give students the chance to pursue their dreams and build a successful future.
              </p> */}
            </div>
    
            <div className="col-lg-5 col-md-6 text-center p-3 "
                    >
                      <img
                        src={Akhuwat15}
                        alt="Money Received"
                        className="img-fluid  wm-100 h-80 mt-5 card-img-top"
                        style={{ objectFit: "cover" }}
                      />
                      {/* <div
                        className="start-0 bg-success text-white p-0"
                        style={{ maxWidth: "100%" }}
                      >
                        <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                        <h2 className="display-4 text-center fw-bold">14K+</h2>
                      </div>*/}
                    
          </div>
          </div>
                
    
          {/* Housing Applications Section */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-md-6">
              <h2 className="fw-bold mb-3">4. Making Homeownership Possible</h2>
              <p>
               Turn your dream of owning or renovating a home into reality with minimal paperwork, fast approvals, and flexible repayment plans.

              </p>
              {/* <ul>
                <li>Multiple Options: Applications for purchasing new homes or improving existing ones.</li>
                <li>Simple Process: Minimal paperwork and fast approvals.</li>
                <li>Affordable Repayment: Flexible plans that make homeownership truly achievable.</li>
              </ul> */}
              <h2 className="fw-bold mb-3">Widow & Orphan Support: Restore Dignity, Offer Hope
</h2>
              <p>
               
    
     Apna Ghar provides dedicated programs helping widows and orphans with financial aid, education support, and basic necessities. By contributing or applying, you can be part of a movement that uplifts vulnerable families and creates lasting change. Learn how to help a widow and make a real difference today.

    
              </p>
            </div>
            
            
          </div>
        </div>
  )
}

export default WidowHelp
