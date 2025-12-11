import React from 'react'
import coverImage1 from '../Images/aboutus1.jpeg'
import coverImage2 from '../Images/aboutus2.jpeg'
import coverImage3 from '../Images/faqcover.jpeg'

const VisaAboutUs = () => {
  return (
    <div>
       <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div 
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coverImage3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              padding: '60px 20px'
            }}
          >
            <div className="container">
              <h1 className="display-4 fw-bold mb-4">About Us</h1>
              {/* <h5 className="mb-3">Need Help with Canada Job Visas?</h5>
              <p className="mb-2">Have questions about Canadian job visas or related immigration options?</p>
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
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src={coverImage1}
              alt="Visa Documents"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6">
            <p className="text-muted mb-2">About Us</p>
            <h2 className="fw-bold mb-3">Your Gateway to Global Opportunities</h2>
            <p className="text-muted mb-3">
              At Travels Embassy, we believe that the right guidance can turn your dreams of working abroad into reality. From Canada online jobs apply to Dubai jobs online apply and Bahrain jobs for Pakistani, our mission is to make your visa and job application process seamless, clear, and stress-free.
              We understand the challenges of applying for online jobs in Saudi Arabia or Bahrain police jobs for Pakistani, and our experienced consultants are here to guide you at every step. We review your documents, provide personalized advice, and ensure your applications are organized and complete. Our goal is to empower you to confidently apply for your dream opportunities abroad.
            </p>
            <p className="text-muted mb-4">
              We help you understand the visa application process and its criteria; we support you in 
              organizing and completing forms correctly.
            </p>
            <p className="text-muted mb-4">
              Disclaimer: Canada Job Guide is a private consultancy. We are not affiliated with the 
              Government of Canada and do not guarantee visa approval.
            </p>
            
            <div className="row mb-4">
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">5 Years Of Experience</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Answer Pending Replies</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Expert Team Members</span>
              </div>
              <div className="col-md-6 mb-2">
                <span className="text-warning me-2">✓</span>
                <span className="text-muted">Best Quality Services</span>
              </div>
            </div>
            
            <button className="btn btn-warning text-white px-4">Learn more</button>
          </div>
        </div>
      </div>

      {/* Middle Section - Values */}
      <div className="py-5" style={{backgroundColor: '#2d1b4e'}}>
        <div className="container">
          <div className="text-center text-white mb-5">
            <p className="mb-2">Our Values</p>
            <h2 className="fw-bold">Take The First Step: Unlock Your Visa Potential</h2>
          </div>
          
          <div className="row g-4">
            {/* Our Mission */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/Glyph_-undefined.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">Our Mission</h5>
                <p className="text-muted small">
                  To make global career opportunities accessible, Travels Embassy provides accurate, professional, and personalized consultancy for individuals aiming for online job apply, driver jobs in Dubai, teaching jobs in Bahrain, and more. We guide you through the entire process so you can focus on your goals with clarity and confidence.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="col-lg-4">
              <div className="card h-100 p-4" style={{backgroundColor: '#ff6b35', color: 'white'}}>
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/eye.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">Our Vision</h5>
                <p className="small">
                  Travels Embassy strives to be the most trusted source for Canada online jobs apply, Dubai company jobs online apply, and other international employment opportunities. We aim to simplify the complex visa and job application process, offering clear guidance, document support, and practical tips to help you succeed.
                </p>
              </div>
            </div>

            {/* Our Achievements */}
            <div className="col-lg-4">
              <div className="card h-100 p-4">
                <div className="mb-3" style={{width: '50px', height: '50px', backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'}}>
                  <img src="https://canadajobguide.com/wp-content/uploads/2025/08/1.png" alt="" />
                </div>
                <h5 className="fw-bold mb-3">Our Achievements</h5>
                <p className="text-muted small">
                  We have helped hundreds of applicants pursue Bahrain airport jobs, Dubai jobs for Pakistani online apply, bahrain hotel job vacancy, and other exciting opportunities worldwide. Known for our client-friendly approach and reliable guidance, Travels Embassy has built a reputation for trust, accuracy, and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Hassle-Free */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3 ">Experience a Hassle-Free Application</h2>
            <p className=" mb-4">
              With Travels Embassy, applying for international jobs and visas is simple. Our consultants guide you from initial documentation to submission and ensure you are fully prepared for online apply for jobs in Saudi Arabia, jobs in Bahrain, and US embassy Bahrain jobs. Join the thousands who have successfully applied with our support and step confidently toward your global career.
            </p>
            <button className="btn btn-warning text-white px-4">Contact Now</button>
          </div>
          <div className="col-lg-6">
            <img 
              src={coverImage2}
              alt="Canadian Flag"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div>
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
    </div>
  )
}

export default VisaAboutUs
