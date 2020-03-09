import React from 'react'
import InnerBanner from '../banner/innerBanner';
import { validateAll } from 'indicative/validator';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import ContactusForm from './form';
import { PostMessage } from "../../store/actions/actions";
class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: {}
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const rules = {
            name: 'required',
            email: 'required|email',
            message: 'required',
        }

        const messages = {
            required: (field) => `${field} is required`,
            'email.email': 'Please enter a valid email address',
        }

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        validateAll(data, rules, messages)
            .then(data => {
                this.setState({
                    formErrors: {}
                });
                this.props.PostMessage(data);
            })
            .catch(errors => {
                var formattedErrors = {};
                errors.forEach(err => {
                    formattedErrors[err.field] = err.message
                });
                this.setState({
                    formErrors: formattedErrors
                })
            });
    }

    render() {

        return (
            <div>
                <InnerBanner />
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav>
                <section className="wthree-row pt-3 pb-sm-5 w3-contact">
                    <div className="container py-sm-5 pb-5">
                        <h5 className="head_agileinfo text-center text-capitalize pb-5">
                            <span>C</span>ontact us</h5>
                        <div className="row contact-form pt-lg-5">
                            <div className="col-lg-6 wthree-form-left">
                                <div className="contact-top1">
                                    <h5 className="text-dark mb-4 text-capitalize">send us a note</h5>
                                    <ContactusForm formErrors={this.state.formErrors} onChange={this.handleChange} onSubmit={this.handleSubmit} />
                                </div>
                            </div>
                            <div className="col-lg-6 contact-bottom pl-5 mt-lg-0 mt-5">
                                <div className="address">
                                    <h5 className="pb-3 text-capitalize">Address</h5>
                                    <address>
                                        <p className="c-txt">D-105, Tinsel Town, Phase 2</p>
                                        <p className="c-txt">Hinjewadi, Pune 411057.</p>
                                    </address>
                                </div>

                                <div className="address my-5">
                                    <h5 className="pb-3 text-capitalize">phone</h5>
                                    <p> +91 7021356235</p>
                                </div>
                                <div className="address mt-md-0 mt-3">
                                    <h5 className="pb-3 text-capitalize">Email</h5>
                                    <p>
                                        <a href="mailto:ghanshyam3303@gmail.com">ghanshyam3303@gmail.com</a>
                                    </p>
                                    <p>
                                        <a href="mailto:ghanshyam.singh@wwindia.com">ghanshyam.singh@wwindia.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(null, { PostMessage })(ContactUs);
