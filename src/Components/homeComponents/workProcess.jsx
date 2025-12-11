import React from 'react';

const WorkProcess = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-warning mb-2" style={{borderLeft: '3px solid #963520', paddingLeft: '10px', display: 'inline-block'}}>
          Work Process
        </p>
        <h2 className="fw-bold mb-3">Our Streamlined Canada Visa Process</h2>
        <p className="text-muted">
          Enjoy a smooth, stress-free Canada job visa journey with clear steps and expert support.
        </p>
      </div>

      <div className="row g-4">
        {/* Personalized Guidance */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-52.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Personalized Guidance for Your Canada Job Visa</h5>
            <p className="text-muted small">
              "Get tailored advice from experienced consultants who help you prepare with confidence and clarity."
            </p>
          </div>
        </div>

        {/* Faster Processing Support */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-51.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Faster Processing Support for Your Visa Application</h5>
            <p className="text-muted small">
              "Move your application forward quickly with timely help, smart updates, and a process designed to avoid delays."
            </p>
          </div>
        </div>

        {/* Affordable Consultancy */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-50.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Affordable Consultancy With Real Value</h5>
            <p className="text-muted small">
              "Access expert Canada visa consultancy at a price that fits your budget, delivering reliable guidance without heavy costs."
            </p>
          </div>
        </div>

        {/* Trusted Worldwide */}
        <div className="col-md-6 col-lg-3">
          <div className="card border-0 text-center p-4">
            <div className="mb-3" style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/Frame-53.png" 
                alt="Affordable Consultancy"
                style={{width: '100px', height: '100px', objectFit: 'contain'}}
              />
            </div>
            <h5 className="fw-bold mb-3">Trusted Worldwide for Canada Visa Successe</h5>
            <p className="text-muted small">
              "Join thousands who rely on our transparent, professional, and trusted support for their Canada job visa applications."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;