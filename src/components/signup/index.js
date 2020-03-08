import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <div>
        <h5 className="text-center modal-title">Register Now</h5>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6 mx-auto align-self-center">
              <img src="images/p3.png" className="img-fluid" alt="login_image" />
            </div>
            <div className="col-md-6">
              <form action="#" method="post">
                <div className="form-group">
                  <label htmlFor="recipient-name1" className="col-form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder=" " name="Name" id="recipient-name1" required />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-email" className="col-form-label">Email</label>
                  <input type="email" className="form-control" placeholder=" " name="Email" id="recipient-email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password1" className="col-form-label">Password</label>
                  <input type="password" className="form-control" placeholder=" " name="Password" id="password1" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password2" className="col-form-label">Confirm Password</label>
                  <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required />
                </div>
                <div className="sub-w3l">
                  <div className="sub-agile">
                    <input type="checkbox" id="brand2" defaultValue />
                    <label htmlFor="brand2" className="mb-3">
                      <span />I Accept to the Terms &amp; Conditions</label>
                  </div>
                </div>
                <div className="right-w3l">
                  <input type="submit" className="form-control" defaultValue="Register" />
                </div>
              </form>
              <p className="text-center mt-3">Already a member? 
                        <a href="#" data-toggle="modal" data-target="#exampleModal1" className="text-dark login_btn">
                   Login Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
