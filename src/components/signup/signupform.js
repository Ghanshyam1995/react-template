import React from 'react';
import PropTypes from "prop-types";
const SignupForm = ({ handleChange, handleSubmit, errors }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="recipient-name1" className="col-form-label">Your Name</label>
                <input onChange={handleChange} type="text" className="form-control" name="name" id="recipient-name1" />
                {
                    errors['name'] &&
                    <p className='text-danger'>{errors['name']}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="recipient-email" className="col-form-label">Email</label>
                <input onChange={handleChange} type="email" className="form-control" name="email" id="recipient-email" />
                {
                    errors['email'] &&
                    <p className='text-danger'>{errors['email']}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password1" className="col-form-label">Password</label>
                <input onChange={handleChange} type="password" className="form-control" name="password" id="password1" />
                {
                    errors['password'] &&
                    <p className='text-danger'>{errors['password']}</p>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password2" className="col-form-label">Confirm Password</label>
                <input onChange={handleChange} type="password" className="form-control" name="confirmpassword" id="password2" />
                {
                    errors['confirmpassword'] &&
                    <p className='text-danger'>{errors['confirmpassword']}</p>
                }
            </div>
            <div className="right-w3l">
                <input type="submit" className="form-control" defaultValue="Register" />
            </div>
        </form>

    )
}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
export default SignupForm;
