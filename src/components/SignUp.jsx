import React from 'react'

function SignUp() {
  return (
<div className="container my-3">
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-6"><p className="fs-2 px-5">Sign up and get exclusive special deals</p></div>
              <div className="col-12 col-sm-12 col-md-6">
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control py-3"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary px-4"
                    type="button"
                    id="button-addon2"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>  )
}

export default SignUp