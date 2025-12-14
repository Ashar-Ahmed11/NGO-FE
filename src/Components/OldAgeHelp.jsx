import React from 'react';
import CountUp from 'react-countup';
import Akhuwat14 from '../Images/21.png'
import Akhuwat15 from '../Images/22.png'

const OldAgeHelp = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Apna Ghar Support Services: Helping You Build a Brighter Future</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        
 Apna Ghar empowers individuals, students, business owners, and families across Pakistan with tailored application solutions. With a simple process and transparent guidance, take confident steps toward your goals.

        </p>
          <h1 className="fw-bold mb-3">What We Offer:</h1>
      </div>

      {/* Personal Applications Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1.  Personal Applications: Achieve Your Life Goals</h2>
          <p>
           Apna Ghar’s personal support helps meet urgent needs—whether for medical emergencies, family events, or life projects.


          </p>
          <ul>
            <li>Easy Eligibility: Clear, simple requirements make applying straightforward for everyone.</li>
            <li>Flexible Repayments: Plans are designed to match your budget.</li>
            <li>Fast Approval: Quick processing ensures timely access to support.</li>
          </ul>
          <p>Thousands of people have used personal applications to secure their future and meet urgent needs, including old age benefits for seniors and old age home support for those in need.Thousands of people have used personal applications to secure their future and meet urgent needs, including old age benefits for seniors and old age home support for those in need.</p>
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
          <h2 className="fw-bold mb-3">2. Business Applications: Empowering Entrepreneurs</h2>
          <p>
          We support businesses to start, expand, or invest in new resources. From technology to retail, our applications help entrepreneurs grow with confidence.
          </p>
          <ul>
            <li><b>Support for Various Goals:</b> Funding options cover short-term and long-term business needs.</li>
            <li><b>Transparent Terms:</b> No hidden costs.</li>
            <li><b>Accessible for Many Industries:</b> Ideal for startups, retail, and beyond.</li>
          </ul>
          <p>
          These applications allow business owners to focus on growth while accessing reliable support, including schemes similar to employees old age benefits institution programs that protect long-term stability.
          </p>
        </div>
        
      </div>

      {/* Education Applications Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Student Applications: Investing in Your Future</h2>
          <p>
       Education transforms lives. Apna Ghar helps students cover tuition, books, and living expenses so they can focus on studies.
          </p>
          <ul>
            <li><b>Comprehensive Support:</b> Covers all or part of educational expenses.</li>
            <li><b>Interest-Free:</b> No added financial burden.
</li>
            <li><b>Flexible Repayment:</b> Begin repayments after graduation.</li>
          </ul>
          <p>
       Our student applications provide opportunities to pursue dreams and secure a successful future.
          </p>
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
          <h2 className="fw-bold mb-3">4. Home Applications: Making Your Dream Home a Reality</h2>
          <p>
            Owning a home is a life milestone. Apna Ghar supports applications for purchasing or renovating homes, making it accessible and stress-free.
          </p>
          <ul>
            <li>Multiple Options: Purchase new homes or improve existing ones</li>
            <li>Simple Process: Minimal paperwork and fast approvals.</li>
            <li>Affordable Repayment: Flexible plans make homeownership achievable.</li>
          </ul>
          <p>
           



Thousands of families have turned their dream of owning a home into reality with Apna Ghar’s support, while also benefiting from programs like old age benefits that protect families’ long-term stability.


          </p>
        </div>
        
        
      </div>
    </div>
  )
}

export default OldAgeHelp
