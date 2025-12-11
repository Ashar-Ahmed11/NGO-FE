import React from 'react';
import centerImg from '../../Images/loangraphic.png'
import { getCdnUrl } from '../../utils/cdnImage'
const AkhuwatLoanBanner = () => {
  return (
    <div className="container my-4">
      <div className="row ">
        {/* Left column with text */}
        <div className="col-md-6 p-5 d-flex align-items-center order-2">
          <div>
            <p className="fs-6 fw-light">
            Welcome to Apna Ghar — compassionate support for seniors, widows, and families. We provide guidance and timely help when you need it most.
            </p>
            <p className="mt-3">
              How to Get Help – <a href="/" className="text-primary text-decoration-none fw-bold">Apna Ghar Services</a>:
            </p>
          </div>
        </div>

        {/* Right column with image content */}
        <div className="col-md-6  p-0 d-flex justify-content-center order-1 ">
          <img data-aos-duration="1500" data-aos="fade-left" src={getCdnUrl(centerImg)} alt="" style={{ maxWidth: "75%", height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default AkhuwatLoanBanner;