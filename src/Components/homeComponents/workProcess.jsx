import React from 'react';

const WorkProcess = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-warning mb-2" style={{borderLeft: '3px solid #963520', paddingLeft: '10px', display: 'inline-block'}}>
          Support Process
        </p>
        <h2 className="fw-bold mb-3">Our Support Process at Apna Ghar</h2>
        <p className="text-muted">
          Get compassionate, transparent help with clear steps and timely updates.
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
            <h5 className="fw-bold mb-3">Personalized Guidance for Your Support Request</h5>
            <p className="text-muted small">
              "Get tailored advice from our team to apply with confidence and clarity."
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
            <h5 className="fw-bold mb-3">Quick Verification and Status Updates</h5>
            <p className="text-muted small">
              "We verify details promptly and keep you updated at every step to avoid delays."
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
            <h5 className="fw-bold mb-3">Fair and Transparent Process</h5>
            <p className="text-muted small">
              "Clear criteria, simple documentation, and zero hidden costs—support with dignity."
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
            <h5 className="fw-bold mb-3">Trusted Community Impact</h5>
            <p className="text-muted small">
              "Join thousands of families who trust Apna Ghar for timely, compassionate support."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;