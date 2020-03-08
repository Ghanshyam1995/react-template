import React, { Component } from 'react'
import PropTypes from "prop-types";
class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input  type="text" onChange={this.props.handleChange} autoComplete="off" className="form-control" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input type="password"  onChange={this.props.handleChange} autoComplete="off"  className="form-control"  name="password" />
                </div>
                <div className="right-w3l">
                    <input type="submit" className="form-control" defaultValue="Login" />
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formErrors: PropTypes.object
}

export default LoginForm;