import React from "react";

function Footer() {
  return (
    <div className="container-fluid bg-dark pb-5" data-bs-theme="dark">
      <div className="w-75 mx-auto px-1 pb-5">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-4 mb-3 lh-lg">
              <h5 className="text-secondary-emphasis mb-3">CATEGORIES</h5>
              <ul className="nav flex-column stars">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Web Builder
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Hosting
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Data Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Robotics-Automation
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mb-3 lh-lg">
              <h5 className="text-secondary-emphasis mb-3">Contact</h5>
              <ul className="nav flex-column stars">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Terms of service
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Categories
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4  mb-5 pb-3 d-flex align-items-center justify-content-start text-body-tertiary">
              <div className="btn-group">
                <a
                  className="dropdown-toggle text-decoration-none text-body-secondary"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  United States
                </a>
                <ul className="dropdown-menu">...</ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
