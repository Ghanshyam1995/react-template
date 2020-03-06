import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ContactusForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {

        return (
            <form onSubmit={this.props.onSubmit} className="f-color">
                <div className="form-group">
                    <label htmlFor="contactusername">Name</label>
                    <input onChange={this.props.onChange} name="name" type="text" className="form-control" id="contactusername" />
                    {
                        this.props.formErrors["name"] &&
                        <label className="text-danger">{this.props.formErrors["name"]}</label>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="contactemail">Email</label>
                    <input onChange={this.props.onChange} name="email" type="text" className="form-control" id="contactemail" />
                    {
                        this.props.formErrors["email"] &&
                        <label className="text-danger">{this.props.formErrors["email"]}</label>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="contactcomment">Your Message</label>
                    <textarea onChange={this.props.onChange} name="message" className="form-control" rows={5} id="contactcomment" />
                    {
                        this.props.formErrors["message"] &&
                        <label className="text-danger">{this.props.formErrors["message"]}</label>
                    }
                </div>
                <button type="submit" className="btn btn-info btn-block">Submit</button>
            </form>
        )
    }
}
ContactusForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}
export default ContactusForm;
