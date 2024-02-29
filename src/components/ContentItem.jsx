import React from 'react'
import { GoTrophy } from "react-icons/go";


function ContentItem({item}) {
  return (
  <>
    <div className="container my-5 position-relative bg-white">
    {item.bestChoice && <span className="item-badge position-absolute top-0 left-0 p-2 rounded-end-3 bg-warning">
      <GoTrophy /> Best choices
    </span>}
    <div className="row align-items-center gx-5 gy-3 ">
      <div className="col-10 col-sm-8 col-lg-3">
        <span className="index border border-2 px-2 rounded-circle bg-white">{item.id}</span>
        <img
          src="img1.png"
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
          />
        <div className='text-center'>{item.imgName}</div>
      </div>
      <div className="col-lg-6 ">
        <p className="lead lh-sm">
          <span className="fw-semibold">
            {item.title}-{" "}
          </span>
          {item.disc}
        </p>
        <p className="lead lh-sm">
          <span className="fw-semibold mb-1">Main Highlights</span>
        </p>
        <p className="lead lh-sm ps-3">
          {item.highlight}
        </p>
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
            <h1 className='pt-2'>{item.feedback.rating}</h1>
            <div className='py-2'>{item.feedback.review}</div>
            <div className='pb-2 stars'>⭐⭐⭐⭐⭐</div>
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

            </>
  )
}

export default ContentItem