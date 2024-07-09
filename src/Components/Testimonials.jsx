import React from 'react'

function Testimonials({data}) {
  return <>
  
  <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={data.timage} alt="..." />
                            <h5>{data.tname}</h5>
                            <p className="font-weight-light mb-0">{data.tdesc}</p>
                        </div>
                    </div>
  
  </>
}

export default Testimonials
