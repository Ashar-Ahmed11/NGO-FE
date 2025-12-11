import React, { useState } from 'react';
import coverImage from '../Images/faqcover.jpeg'

export default function VisaFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs =[
  {
    "question": "What is a Canadian Work Visa?",
    "answer": "A Canada job visa is a work permit that gives foreign nationals the legal right to work in Canada for a set period. Some work permits are tied to one employer, while others allow you to work for multiple employers. Our consultancy can guide you in choosing the right visa type for your career goals."
  },
  {
    "question": "How do I apply for a Canadian Work Visa?",
    "answer": "To apply for a Canadian work visa, you typically need a job offer from a Canadian employer. Some applications require a Labour Market Impact Assessment (LMIA), which proves that hiring a foreign worker will not negatively affect the Canadian job market. You then gather all necessary documents and submit your application online through the IRCC portal or at a visa application center. Travels Embassy provides step-by-step guidance to make this process simple and accurate."
  },
  {
    "question": "How long does it take to get a Canada job visa?",
    "answer": "Processing times for a Canada job visa depend on the type of work permit and the country you are applying from. Standard applications can take several weeks to months, while Express Entry applications are typically processed faster. Our consultancy helps you track your application and stay informed at each stage."
  },
  {
    "question": "Can Travels Embassy help me apply for jobs abroad?",
    "answer": "Yes. Travels Embassy provides consultancy for Canada online jobs apply, Dubai jobs online apply, Saudi jobs online apply, and Bahrain job online apply. Their team helps you understand eligibility, gather documents, submit applications, and track your progress so your application process is smooth and efficient."
  },
  {
    "question": "Do I need to visit your office to get assistance?",
    "answer": "No, you can start your application and get consultancy support online. Travels Embassy offers remote guidance for document review, job application support, and visa consultancy, making it easy for applicants from all over Pakistan to apply for jobs in Canada, driver jobs in Dubai, or Bahrain jobs for Pakistani workers."
  },
  {
    "question": "Why choose Travels Embassy for my job visa application?",
    "answer": "Travels Embassy offers professional, reliable, and transparent guidance at every step. Their services cover Canada job visa applications, Dubai jobs for Pakistani online apply, Saudi jobs online apply, and Bahrain police jobs. They ensure your application is accurate, complete, and aligned with the latest immigration policies, giving you the best chance of success."
  }
]


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* Carousel Section */}
      <div id="contactCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div 
              className="d-flex align-items-center justify-content-center text-white text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                padding: '60px 20px'
              }}
            >
              <div className="container">
                <h1 className="display-4 fw-bold mb-4">Travels Embassy FAQ – Your Guide to Jobs Abroad and Visa Applications</h1>
                <p className="mb-2">Our FAQ section is designed to answer the most common questions about applying for Canada job visas, Dubai jobs online apply, Saudi jobs online apply, and other international work opportunities. We provide clear, reliable guidance to help you navigate each step of the application process.</p>
                {/* <p className="mb-2">From understanding visa types and document requirements to learning about processing times and LMIA details,</p>
                <p className="mb-2">we provide clear, reliable information to guide you through each stage of the application process.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left side - Image */}
            <div className="col-lg-5 mb-4 mb-lg-0 text-center">
              <img 
                src="https://canadajobguide.com/wp-content/uploads/2025/08/skills-1.png" 
                alt="Family with luggage" 
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Right side - FAQ */}
            <div className="col-lg-7">
              <div className="mb-2" style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>
                Frequent Answer Question
              </div>
              <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#333' }}>
                Quick Answers To Your Visa Queries
              </h2>

              <div className="accordion" id="visaAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card border-0 mb-3" style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <div className="card-header bg-white border-0 p-0">
                      <button
                        className="btn btn-link text-decoration-none w-100 text-start d-flex justify-content-between align-items-center p-3"
                        style={{ color: '#333', fontSize: '16px', fontWeight: '600' }}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{faq.question}</span>
                        <span style={{ fontSize: '20px', color: '#999', transition: 'transform 0.3s', transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    <div 
                      className="collapse show"
                      style={{ 
                        display: openIndex === index ? 'block' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="card-body pt-0 px-3 pb-3" style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
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
    </>
  );
}