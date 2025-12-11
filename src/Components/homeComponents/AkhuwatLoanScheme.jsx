import React from 'react';
import Akhuwat12 from '../../Images/17.png'
import { getCdnUrl } from '../../utils/cdnImage'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Find Your Dream Job Abroad – Apply Online Today</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Looking for exciting opportunities in Canada, Saudi Arabia, Dubai, or Bahrain? Whether it’s teaching jobs, security positions, driver roles, or hotel vacancies, we make online job apply simple and fast. Explore Canada online jobs apply, Saudi jobs online apply, Dubai jobs online apply, or Bahrain jobs for Pakistani applicants—all in one place.
            </p>
            <p className="mb-4 fw-bold mt-1">
            With our platform, you can easily apply for jobs in Canada, Dubai company jobs online apply, bahrain police jobs, or bahrain hotel job vacancies without stress. Track your application, get clear guidance, and take the first step toward a rewarding career abroad.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              When you contribute or participate, you become part of a movement that uplifts communities and spreads kindness, showing that even small acts of support can create lasting change in someone’s life.

              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src={getCdnUrl(Akhuwat12)}
              alt="Travel Embassy Job Apply Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;