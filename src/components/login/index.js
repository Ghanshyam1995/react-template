import React, { Component } from 'react'
import LoginForm from './loginform';
import { Link } from 'react-router-dom';
import validateForm from '../../helpers/validation';
import { API_URL } from '../../config/consts';
import { connect } from 'react-redux';
import { SaveUserData } from '../../store/actions/actions';

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

    handleSubmit = async (e) => {
        e.preventDefault();
        var data = Object.assign({}, this.state);
        delete data.error; // Remove prop error from data
        await validateForm(data).then(data => {
            this.setState({
                error: {}
            });

            fetch(`${API_URL}/user/login`, {
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(this.state),
                method: 'POST'
            }).then(res => res.json()).then(data => {
                if (data !== null) {
                    this.props.SaveUserData(data);
                    this.props.history.push('/');
                }

            }).catch(err => {
                alert(err);
            })
        }).catch(errs => this.setState({
            error: errs
        }));
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


export default connect(null, { SaveUserData })(Login);