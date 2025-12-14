import React from 'react';
import CountUp from 'react-countup';

import Akhuwat14 from '../Images/27.png'
import Akhuwat15 from '../Images/28.png'

const LoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
         <div className="text-center mb-5">
           <h1 className="fw-bold mb-3">Apna Ghar Loan Services: Helping You Build a Brighter Future</h1>
           <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
             Apna Ghar empowers individuals, students, business owners, and families across Pakistan with tailored financial loan services. With a simple process, clear terms, and fast approvals, you can take confident steps toward achieving your goals.

           </p>
             <h1 className="fw-bold mb-3">Our Loan Services</h1>
         </div>
   
         {/* Personal Applications Section */}
         <div className="row mb-5 align-items-center">
           <div className="col-lg-7 col-md-6">
             <h2 className="fw-bold mb-3">1. Personal Loans: Support When You Need It Most</h2>
             <p>
              Apna Ghar’s personal loan services help cover urgent needs, from medical emergencies to family events and projects.
   
   
             </p>
             <ul>
               <li>Easy Eligibility: Clear requirements make applying straightforward for everyone.</li>
               <li>Flexible Repayments: Plans are designed to match your budget.</li>
               <li>Fast Approval: Quick processing ensures funds are available when you need them.</li>
             </ul>
             <p>Thousands of people have used our personal loans to secure their future and meet urgent needs.</p>
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
             <h2 className="fw-bold mb-3">2. Business Loans: Empowering Entrepreneurs</h2>
             <p>
             Our business loan services help entrepreneurs start, grow, or expand their ventures. From technology startups to retail shops, we provide tailored solutions for long-term growth.
             </p>
             <ul>
               <li><b>Support for Various Goals:</b> Funding for short-term and long-term business needs.</li>
               <li><b>Transparent Terms:</b> No hidden costs or extra charges.</li>
               <li><b>Accessible for Many Industries:</b> Solutions designed for a wide range of businesses.</li>
             </ul>
             <p>
             These loans allow entrepreneurs to focus on growth while accessing reliable financial support.

             </p>
           </div>
           
         </div>
   
         {/* Education Applications Section */}
         <div className="row mb-5 align-items-center">
           <div className="col-lg-7 col-md-6">
             <h2 className="fw-bold mb-3">3.  Student Loans: Investing in Education</h2>
             <p>
           Apna Ghar’s student loan services support tuition, books, and living expenses, helping students pursue education without financial stress.

             </p>
             <ul>
               <li><b>Comprehensive Support:</b> Cover all or part of educational costs.</li>
               <li><b>Interest-Free Options:</b>  Reduce financial burden while studying.</li>
               <li><b>Flexible Repayment:</b> Start repayment after graduation to focus on career development.</li>
             </ul>
             <p>
          These loans help students build a successful future and achieve their dreams.
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
             <h2 className="fw-bold mb-3">4. Home Loans: Turning Dreams into Reality</h2>
             <p>
               Owning a home is a major milestone. Our home loan services make buying or renovating a house simple, affordable, and stress-free.
             </p>
             <ul>
               <li>Multiple Options: Loans for new homes or home improvements.</li>
               <li>Simple Process: Minimal paperwork and fast approvals.</li>
               <li>Affordable Repayment: Flexible plans to make homeownership achievable.</li>
             </ul>
             <p>
              
   
   Thousands of families have turned their dream of owning a home into reality with Apna Ghar’s support.

   
             </p>
           </div>
           
           
         </div>
       </div>
  )
}

export default LoanServices
