import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";


function ContentHeader() {
  return (
    <>
      <div className=" bg-warnig pt-3 ">
        <p className="content-heading display-3">Best Website builders in US</p>
      </div>
      <div className="row boder border-bottom border-top border-secondary text-center py-2">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-0 text-lg-start">
          <span className="lead heading-2">
            <IoIosCheckmarkCircleOutline /> Last updated - February 22, 2020
          </span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-start">
          <span className="lead heading-2">
            <CiCircleInfo /> Advertizing Disclosure
          </span>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-lg-end">
          <span className="lead heading-2">
            <span
              className=" dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Top Relevant
            </span>
            <ul className="dropdown-menu">...</ul>
          </span>
        </div>
      </div>

      <div className="row w-75 py-4">
        <div className="col-4 col-sm-4 col-md-2 p-0">
          {" "}
          <span className="bg-light  p-1"> Tools</span>
        </div>
        <div className="col-4 col-sm-4 col-md-2 p-0">
          {" "}
          <span className="bg-light  p-1"> AWS Builder</span>{" "}
        </div>
        <div className="col-4 col-sm-4 col-md-2 p-0">
          {" "}
          <span className="bg-light  p-1"> Start Build</span>{" "}
        </div>
        <div className="col-4 col-sm-4 col-md-2 p-0">
          {" "}
          <span className="bg-light  p-1"> Build Supplies</span>{" "}
        </div>
        <div className="col-4 col-sm-4 col-md-2 p-0">
          {" "}
          <span className="bg-light  p-1"> Tooling</span>{" "}
        </div>
        <div className="col-4 col-sm-4 col-md-2 p-0">
          {" "}
          <span className="bg-light  p-1"> BlueHosting</span>{" "}
        </div>
      </div>

      <div className="lead mt-2 ps-0 mb-5">
        Home &gt; Hosting for AI &gt; Hosting &gt; Hosting6 &gt; Hosting5
      </div>
    </>
  );
}

export default ContentHeader;
