import React from 'react';
import Akhuwat12 from '../../Images/17.png'
import { getCdnUrl } from '../../utils/cdnImage'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Find the Right Support — Apply Online Today</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Apna Ghar connects you with timely, transparent support. Choose Old Age Help, Widow Help, Home Financing, or Loan Services and apply in minutes.
            </p>
            <p className="mb-4 fw-bold mt-1">
            Track your request, get clear guidance, and receive compassionate assistance designed to protect dignity and stability for families.
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
              alt="Apna Ghar Support Details" 
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