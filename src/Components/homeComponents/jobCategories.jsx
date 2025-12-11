import React, { useContext } from 'react';
import AppContext from '../context/appContext';
import img1 from '../../Images/jo1.png'
import img2 from '../../Images/1.png'
import img3 from '../../Images/2.png'
import img4 from '../../Images/3.png'
import img5 from '../../Images/4.png'
import img6 from '../../Images/5.png'
import img7 from '../../Images/6.png'
import img8 from '../../Images/7.png'
import img9 from '../../Images/8.png'
import { getCdnUrl } from '../../utils/cdnImage'

const JobCategories = () => {
  const { setUserData, userData } = useContext(AppContext);

  const handleApply = (job) => {
    setUserData({ ...userData, job });
    const el = document.getElementById('loan-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">NGO Services</h2>
        <p className="text-muted">Support for seniors, widows, home financing, and loan services.</p>
      </div>

      <div className="row g-4">
        {/* Old Age Help */}
        <div data-aos="fade-right" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img1)}
              className="card-img-top" 
              alt="Old Age Help"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Old Age Help</h5>
              <p className="text-muted small">Care, essentials, and dignity for senior citizens.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Old Age Help')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Widow Help */}
        <div data-aos="fade-left" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img2)}
              className="card-img-top" 
              alt="Widow Help"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Widow Help</h5>
              <p className="text-muted small">Monthly aid and emergency assistance for widows.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Widow Help')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Home Financing */}
        <div data-aos="fade-right" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img3)}
              className="card-img-top" 
              alt="Home Financing"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Home Financing</h5>
              <p className="text-muted small">Support for building, rent, or essential home needs.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Home Financing')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Loan Services */}
        <div data-aos="fade-left" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img4)}
              className="card-img-top" 
              alt="Loan Services"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Loan Services</h5>
              <p className="text-muted small">Interest‑free microloans for urgent and family needs.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Loan Services')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Healthcare Assistance */}
        <div data-aos="fade-right" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img5)}
              className="card-img-top" 
              alt="Healthcare Assistance"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Healthcare Assistance</h5>
              <p className="text-muted small">Medical aid and medicines for deserving families.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Healthcare Assistance')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Education Support */}
        <div data-aos="fade-left" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img6)}
              className="card-img-top" 
              alt="Education Support"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Education Support</h5>
              <p className="text-muted small">School fees, books, and essentials for students.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Education Support')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Livelihood Support */}
        <div data-aos="fade-right" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img7)}
              className="card-img-top" 
              alt="Livelihood Support"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Livelihood Support</h5>
              <p className="text-muted small">Tools and small grants to start micro‑business.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Livelihood Support')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Emergency Relief */}
        <div data-aos="fade-left" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img8)}
              className="card-img-top" 
              alt="Emergency Relief"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Emergency Relief</h5>
              <p className="text-muted small">Immediate help during crises and emergencies.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Emergency Relief')}>Get Support</button>
            </div>
          </div>
        </div>

        {/* Disability Support */}
        <div data-aos="fade-right" data-aos-duration="500" className="col-md-6 col-lg-3">
          <div className="card h-100 shadow-lg border-0">
            <img 
              src={getCdnUrl(img9)}
              className="card-img-top" 
              alt="Disability Support"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Disability Support</h5>
              <p className="text-muted small">Assistive devices and monthly care for PWDs.</p>
              <button className="btn px-4 mt-3" style={{backgroundColor:'#963520', color: 'white'}} onClick={() => handleApply('Disability Support')}>Get Support</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobCategories;