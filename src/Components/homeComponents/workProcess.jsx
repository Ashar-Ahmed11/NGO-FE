import React from 'react';

const WorkProcess = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-warning mb-2" style={{borderLeft: '3px solid #963520', paddingLeft: '10px', display: 'inline-block'}}>
          Support Process
        </p>
        <h2 className="fw-bold mb-3">How Apna Ghar Supports You</h2>
        <p className="text-muted">
          Experience compassionate, transparent assistance with clear steps and timely updates every step of the way.
        </p>
      </div>

      <div className="row g-4">
        {/* Personalized Guidance */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-52.png" 
                alt="Support Guidance"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Personalized Guidance</h5>
            <p className="text-muted small">
              Get advice tailored to your support request. Our team helps you apply with confidence and clarity.

            </p>
          </div>
        </div>

        {/* Faster Processing Support */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-51.png" 
                alt="Quick Verification"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Fast Verification</h5>
            <p className="text-muted small">
              We verify your details quickly and provide real-time updates so your application moves forward without delays.
            </p>
          </div>
        </div>

        {/* Affordable Consultancy */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-50.png" 
                alt="Transparent Process"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Clear and Fair Process</h5>
            <p className="text-muted small">
              Enjoy a simple, transparent process with easy documentation, clear criteria, and no hidden costs by providing you support that respects your dignity.
            </p>
          </div>
        </div>

        {/* Trusted Worldwide */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-53.png" 
                alt="Trusted Impact"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Trusted Impact</h5>
            <p className="text-muted small">
              Join thousands of families who rely on Apna Ghar for timely, caring support that truly makes a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;