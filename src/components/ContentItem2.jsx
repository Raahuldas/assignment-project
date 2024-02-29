import React from 'react'

function ContentItem2() {
  return (
    <div className="container my-5 position-relative bg-white">
    <div className="row align-items-center gx-5 gy-3 ">
      <div className="col-10 col-sm-8 col-lg-3">
        <span className="index border border-2 px-2 rounded-circle bg-white">4</span>
        <img
          src="img1.png"
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
          />
        <div className='text-center'>CDK</div>
      </div>
      <div className="col-lg-6 ">
        <p className="lead lh-sm">
          <span className="fw-semibold">
          WixPro 72-inch Responsive Website Builder-{" "}
          </span>
          Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <div className='badge bg-primary-subtle text-primary'>26% off</div>
        <p className="lead lh-sm">
          <span className="fw-semibold">Main Highlights</span>
        </p>
        
        <div className='ms-5 rounded'>
          <ul className='list-group '>
            <li className='list-group-item list-group-item-danger border-0 '><span className='bg-white py-1 px-2 rounded'>9.9</span> Building Responsive</li>
            <li className='list-group-item list-group-item-danger border-0 '><span className='bg-white py-1 px-2 rounded'>8.9</span> Cool</li>
            <li className='list-group-item list-group-item-danger border-0 '><span className='bg-white py-1 px-2 rounded'>8.9</span> Docs</li>
          </ul>
        </div>
       
        <div >
          <div className="fw-medium mb-1 mt-1">Why we love it</div>
          <div><input type="checkbox" readOnly defaultChecked /> Documentation</div>
          <div><input type="checkbox" readOnly defaultChecked /> Easy use</div>
          <div><input type="checkbox" readOnly defaultChecked /> Out of box</div>
        </div>

        <div className="btn-group mb-3">
          <a
            className="dropdown-toggle text-decoration-none"
            href="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            show more
          </a>
          <ul className="dropdown-menu">...</ul>
        </div>

      </div>
      <div className="col-lg-3">
        <div className="text-center">
          <div className="container text-primary rounded bg-primary-subtle w-75 mx-auto mb-5 ">
            <h1 className='pt-2'>9.9</h1>
            <div className='py-2'>Very good</div>
            <div className='pb-2 stars'>⭐⭐⭐⭐</div>
          </div>

          <div>
            <a href="#" className="btn btn-primary w-100">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContentItem2