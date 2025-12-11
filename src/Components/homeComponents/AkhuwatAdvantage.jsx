import React from 'react';

const AkhuwatAdvantage = () => {
  return (
    <div className="container-fluid py-5" style={{ maxWidth: '100%' }}>
      <h1 className="text-center mb-5 display-4 fw-light">Why Apna Ghar Makes a Difference</h1>
      
      <div className="d-flex justify-content-center">
        <div className="row mx-auto" style={{ width: '85%', maxWidth: '1200px' }}>
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">A Trust You Can Rely On</h2>
                <p className="card-text">
                Apna Ghar offers a simple, accessible process with minimal paperwork. Every request is treated with dignity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">A Sign That<br /> You Can Truly Rely On</h2>
                <p className="card-text">
                Dependable, easy‑to‑use support trusted for accessibility and fairness across the country.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">Catering to Your Needs</h2>
                <p className="card-text">
                At Apna Ghar, your needs come first. We provide personalized support and clear communication at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  AkhuwatAdvantage;