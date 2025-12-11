import React from 'react'

const Cards = () => {
  const color = "#963520"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Travel Embassy Job Apply</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Travel Embassy Job Apply</p>
      
      <h1 ><b>What We Offer</b></h1>
        <h1><b>Start Your Journey Toward a Better Tomorrow</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          {[
            { icon: 'fa-money', title: 'Apply for Jobs as an Individual', desc: 'Clear requirements and simple updates, know exactly where your application stands at every stage.' },
            { icon: 'fa-suitcase', title: 'Business Job Applications', desc: 'A smooth, straightforward process with fast decisions and minimal paperwork.' },
            { icon: 'fa-eye', title: 'Home-Based Job Applications', desc: 'Get the support you need for home-related roles with a quick and easy application flow.' },
            { icon: 'fa-heart', title: 'Wedding Event Job Applications', desc: 'Find work for special events with flexible options and speedy approvals.' },
            { icon: 'fa-refresh', title: 'Car & Transport Job Applications', desc: 'Fast approvals and flexible opportunities for drivers and transport-related roles — without the hassle.' },
          ].map((card, i) => (
            <div className={`col-md-4 col-12 mt-4 ${i >= 3 ? 'mb-4' : ''}`} key={card.title}>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="h-100 card border-0 rounded-4"
                style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.08)', transition: 'transform .2s ease, box-shadow .2s ease', overflow: 'hidden' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 35px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'; }}
              >
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${color}, #ffb84d)` }} />
                <div className="card-body text-start p-4">
                  <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 56, height: 56, borderRadius: 12, background: 'rgba(255,119,41,0.12)' }}>
                    <i className={`fa ${card.icon}`} aria-hidden="true" style={{ fontSize: 26, color }}></i>
                  </div>
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text mb-4 text-muted">{card.desc}</p>
                  <a
                    href="/"
                    className="btn border-0"
                    style={{ backgroundColor: color, color: '#fff', boxShadow: '0 6px 16px rgba(255,119,41,0.35)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,119,41,0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 6px 16px rgba(255,119,41,0.35)'; }}
                  >
                    Contact Us&nbsp;→
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
