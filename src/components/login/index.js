import React, { Component } from 'react'
import LoginForm from './loginform';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {}
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h5 className="text-center modal-title" id="exampleModalLabel">Login</h5>
                <div className="modal-body  pt-3 pb-5 px-sm-5">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <img src="images/p3.png" className="img-fluid" alt="login_image" />
                        </div>
                        <div className="col-md-6">
                            <LoginForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} formErrors={this.state.error} />
                            <p className="text-center mt-3">Not a member?
                        <Link to="/signup" className="text-dark login_btn">
                                    Signup Now</Link>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;