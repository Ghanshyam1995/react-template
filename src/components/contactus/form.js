import React, { Component } from 'react'
import ContactUs from '.'

class ContactusForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form action="#" method="get" className="f-color">
                <div className="form-group">
                    <label htmlFor="contactusername">Name</label>
                    <input type="text" className="form-control" id="contactusername" required />
                </div>
                <div className="form-group">
                    <label htmlFor="contactemail">Email</label>
                    <input type="email" className="form-control" id="contactemail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="contactcomment">Your Message</label>
                    <textarea className="form-control" rows={5} id="contactcomment" required defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-info btn-block">Submit</button>
            </form>
        )
    }
}

export default ContactusForm;
