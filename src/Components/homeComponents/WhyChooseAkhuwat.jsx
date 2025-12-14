import React from "react";
import CountUp from 'react-countup';
import Akhuwat4 from '../../Images/15.png'
import Akhuwat5 from '../../Images/16.png'
import { getCdnUrl } from '../../utils/cdnImage'

const WhyChooseAkhuwat = () => {

  let color = "#963520" 

  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">SERVICES</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Why Apna Ghar Stands Out as Your Ideal Choice
            </h2>
            <p>
           Apna Ghar is a helping hands NGO built on trust and care. We proudly stand as an NGO helping the poor by providing financial help from an NGO for seniors, widows, and families, along with support for education and medical treatment by providing interest-free loans. From help NGO Karachi to families seeking hope beyond borders, our hands for help NGO make support easy and accessible. Apply online in minutes or visit your nearest centre and take the first step toward dignity, stability, and a better future.

            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={getCdnUrl(Akhuwat4)}
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 text-white p-4 rounded-bottom"
                    style={{ width: "100%", backgroundColor: color }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src={getCdnUrl(Akhuwat5)}
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;
