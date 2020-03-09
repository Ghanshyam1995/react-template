import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signupform';
import { API_URL } from '../../config/consts';
import validateForm from '../../helpers/validation';
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
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name, email: this.state.email, password: this.state.email, confirmpassword:
        this.state.confirmpassword
    };

    const rules = {
      name: 'required',
      email: 'required|email',
      password: 'required',
      confirmpassword: 'required'
    }


    await validateForm(data, rules).then(data => {
      fetch(`${API_URL}/user/signup`, {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ name: this.state.name, email: this.state.email, password: this.state.email })
      }).then(res => res.json()).then(res => console.log(res));
    }).catch(errs => this.setState({
      errors: errs
    }));
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
