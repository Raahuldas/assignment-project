import React from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body navbar navbar-expand-md bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto" role="search">
            <div className="input-group mt-3 mt-md-0">
              <span
                className="input-group-text bg-light text-dark border-end-0 "
                id="basic-addon1"
              >
                <CiSearch />
              </span>
              <input
                className="form-control bg-light me-2 border-start-0"
                type="search"
                placeholder=""
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>

          <ul className="navbar-nav me-auto ms-5 gap-md-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Website Builders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Today's deals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
