import React, { Component } from 'react'
import InstaCard from './instacard'

class Insta extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <section className="py-lg-5">
                <h5 className="head_agileinfo text-center text-capitalize pb-5">
                    <span>s</span>hop on insta</h5>
                <div className="gallery row no-gutters pt-lg-5"></div>
                <InstaCard />
            </section>
        )
    }
}

export default Insta;