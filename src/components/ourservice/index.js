import React from 'react';
import PropTypes from "prop-types";

const Services = ({ icon, title }) => {
    return (
        <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
            <span className={`${icon} p-4`} />
            <h4 className="mt-2 mb-3">{title}</h4>
        </div>

    )
}

Services.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


export default Services;
