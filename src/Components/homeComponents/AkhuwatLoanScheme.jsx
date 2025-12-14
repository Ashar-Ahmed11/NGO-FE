import React from 'react';
import Akhuwat12 from '../../Images/17.png'
import { getCdnUrl } from '../../utils/cdnImage'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Get the Support You Need — Apply Online Today</h1>
            
            <p className="mb-4 fw-bold mt-1">
            Apna Ghar makes it easy to access timely, transparent help. Find help NGO, help NGO Karachi, NGO help for poor students, or NGO help for education by applying in minutes for Old Age Help, Widow Help, Home Financing, or Loan Services.
You can now track your application, receive clear guidance, and access NGO help for poor students and education, with compassionate support designed to protect dignity and stability for needy families.

            </p>
            {/* <p className="mb-4 fw-bold mt-1">
            Track your request, get clear guidance, and receive compassionate assistance designed to protect dignity and stability for families.
            </p> */}
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              Track your application, get clear guidance, and access help NGO with compassionate support that protects dignity and brings stability to families in need.

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