import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signupform';
import { API_URL } from '../../config/consts';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      errors: {}
    }
  }

  handleChange = (e) => {
    [e.target.name] = e.target.value
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/user/signup`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name: this.state.name, email: this.state.email, password: this.state.email })
    }).then(res => res.json()).then(res => console.log(res));
  }

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
              <SignupForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={this.state.errors} />
              <p className="text-center mt-3">Already a member?
                        <Link to="/login" className="text-dark login_btn">
                  Login Now
                  </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;
