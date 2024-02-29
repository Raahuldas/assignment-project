import React from 'react'

function RelatedDeals() {
  return (
    <div className="album py-5 bg-body-tertiary">
    <div className="container">
  <div className="lead fw-medium mb-3">Related Deals you might like for</div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
           <img src="img1.png" alt="image" />
            <div className="card-body">
            <span className="badge text-primary bg-primary-subtle m-1">24% off</span>
            <span className="badge text-primary bg-primary-subtle m-1">Limited Time</span>

            <p className="card-text text-center fw-semibold px-1 mb-0">
                Webbuilder 1
            </p>

              <p className="card-text px-1 mb-0">
                Computer modern classic with wix support
              </p>
              <div className="mb-1 px-1">
                <span className="fs-5">
                  $39.96
                </span>
                <span className="text-secondary ms-3">$49.96</span>
                <span className="text-danger ms-3">(20% Off)</span>
                </div>
                <button className="btn btn-primary w-100">
                  View Deals
                </button>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
           <img src="img1.png" alt="image" />
            <div className="card-body">
            <span className="badge text-primary bg-primary-subtle m-1">24% off</span>
            <span className="badge text-primary bg-primary-subtle m-1">Limited Time</span>
            <p className="card-text text-center fw-semibold px-1 mb-0">
                Webbuilder 1
            </p>
              <p className="card-text px-1 mb-0">
                Computer modern classic with wix support
              </p>
              <div className="mb-1 px-1">
                <span className="fs-5">
                  $39.96
                </span>
                <span className="text-secondary ms-3">$49.96</span>
                <span className="text-danger ms-3">(20% Off)</span>
                </div>
                <button className="btn btn-primary w-100">
                  View Deals
                </button>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
           <img src="img1.png" alt="image" />
            <div className="card-body">
            <span className="badge text-primary bg-primary-subtle m-1">24% off</span>
            <span className="badge text-primary bg-primary-subtle m-1">Limited Time</span>
            <p className="card-text text-center fw-semibold px-1 mb-0">
                Webbuilder 1
            </p>
              <p className="card-text px-1 mb-0">
                Computer modern classic with wix support
              </p>
              <div className="mb-1 px-1">
                <span className="fs-5">
                  $39.96
                </span>
                <span className="text-secondary ms-3">$49.96</span>
                <span className="text-danger ms-3">(20% Off)</span>
                </div>
                <button className="btn btn-primary w-100">
                  View Deals
                </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
)
}

export default RelatedDeals