import React from 'react'
import b1 from '../Images/b1.jpg'
import b2 from '../Images/b2.jpg'
import b3 from '../Images/b3.jpg'
import b4 from '../Images/blog4.jpg'
import b5 from '../Images/blog5.jpg'
import Blogimg from '../Images/blog.jpg'



const Blog = () => {
  return (
    <div>
         <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Blogimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Travel Embassy Blog and Insights</h1>
              <h5>Stay Updated on Visa Applications, Jobs Abroad, and International Opportunities</h5>
              <p className="mb-2">“At Travels Embassy, our blog brings you the latest updates, tips, and practical guidance on online job apply, Canada online jobs apply, Dubai jobs online apply, Saudi jobs online apply, and other international work opportunities. We cover immigration policies, work permits, study abroad programs, and career options, giving you reliable information to make confident decisions about your global career journey.”

 

</p>
              {/* <h5 className="mb-3">Need Help with Canada Job Visas?</h5>
              <p className="mb-2">At Canada Job Guide, we provide consultancy services,</p>
              <p className="mb-2">offering clear information and step-by-step support based on publicly available guidelines.</p>
              <p className="mb-4">Our team is here to assist you with personalized advice and guidance.</p>
              <p className="small fst-italic">
                Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with<br/>
                the Government of Canada and do not guarantee visa approval.
              </p> */}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* <div className="carousel-item">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Get Started Today</h1>
              <h5 className="mb-3">Professional Visa Consultancy Services</h5>
              <p className="mb-2">Expert guidance for your Canadian immigration journey</p>
              <p className="mb-2">Personalized support tailored to your needs</p>
              <p className="mb-4">Let us help you achieve your Canadian dream</p>
            </div>
          </div>
        </div> */}

        {/* Slide 3 */}
        {/* <div className="carousel-item">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">Reach Out Now</h1>
              <h5 className="mb-3">We're Here to Help</h5>
              <p className="mb-2">Connect with our experienced consultants</p>
              <p className="mb-2">Get answers to all your visa questions</p>
              <p className="mb-4">Start your application process with confidence</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Carousel Controls */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#contactCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#contactCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}

      {/* Carousel Indicators */}
      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#contactCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
    </div>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Explore Our Latest Articles</h2>
        <h2 className="fw-bold"> and Expert Advice</h2>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Blog 1 - Lee Cadesky */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b3}
              className="card-img-top" 
              alt="Restaurant"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                How to Apply for a Canadian Job Visa – Step by Step
              </h5>
              <p className="text-muted small">
                Applying for a Canada job visa can seem overwhelming, but Travels Embassy makes the process simple. Learn how to prepare essential documents such as your passport, job offer letter, proof of work experience, and educational certificates. Understand employer requirements and LMIA rules so you can apply for jobs in Canada with confidence. Our consultancy helps you stay organized, informed, and ready to secure your dream opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Blog 2 - Visible Support */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b1}
              className="card-img-top" 
              alt="Visa Documents"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                Dubai Jobs for Pakistani Online Apply – Tips to Get Started
              </h5>
              <p className="text-muted small">
                Looking to work in Dubai? From driver jobs in Dubai to Dubai company jobs online apply, we guide you on how to find reliable openings and submit applications that stand out. Get practical tips on documentation, eligibility, and interview preparation to increase your chances of landing the right role in the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Blog 3 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b2}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                Jobs in Saudi Arabia Online Apply – Your Complete Guide
              </h5>
              <p className="text-muted small">
                Saudi Arabia offers exciting career options for skilled and unskilled workers. Our blogs explain how to online apply for jobs in Saudi Arabia, from hotel positions to administrative roles. Learn how to submit a complete application, meet visa requirements, and understand cultural expectations so your work experience abroad is smooth and rewarding.
              </p>
            </div>
          </div>
        </div>
        {/* Blog 4 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b4}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                Bahrain Job Online Apply – Opportunities for Pakistani Workers
              </h5>
              <p className="text-muted small">
                Discover tips for applying to Bahrain jobs for Pakistani, including Bahrain police jobs, security guard jobs in Bahrain, teaching jobs in Bahrain, and Bahrain hotel job vacancy. Travels Embassy shares insights on eligibility, documentation, and recruitment trends to help you confidently pursue employment opportunities in Bahrain.
              </p>
            </div>
          </div>
        </div>
        {/* Blog 5 - How To Apply */}
        <div className="col-lg-4">
          <div className="card h-100 border-0 shadow-sm">
            <img 
              src={b5}
              className="card-img-top" 
              alt="Passports and Flags"
              style={{height: '200px', objectFit: 'cover'}}
            />
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3" style={{color: '#ff6b35'}}>
                Expert Advice and News for Your Career Abroad
              </h5>
              <p className="text-muted small">
                Our blog also provides updates on international travel, immigration policies, and career pathways, helping you make informed decisions for apply for jobs in Canada, Dubai jobs online apply, and US embassy Bahrain jobs. From work permits to visas, our guides are designed to simplify the application process and help you reach your global career goals.
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  <div className="py-5" style={{backgroundColor: '#ff7f50'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Stay Informed With Our Newsletter</h2>
            <p className="mb-0">Get updated information, news, insight or promotions.</p>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <input 
                type="email" 
                className="form-control py-3" 
                placeholder="Enter your email address"
                style={{borderRadius: '5px 0 0 5px'}}
              />
              <button 
                className="btn btn-dark px-4" 
                type="button"
                style={{borderRadius: '0 5px 5px 0'}}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog
