import React from 'react';
import PropTypes from "prop-types";

const FashionCard = ({ title, imagePath }) => {
    return (
        <div className="col-sm-4">
            <div className="hovereffect">
                <img className="img-fluid" src={imagePath} alt={title} />
                <div className="overlay">
                    <h5>{title}</h5>
                    <a className="info" href="women.html">Shop Now</a>
                </div>
            </div>
        </div>
    )
}

FashionCard.propTypes = {
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired
}
export default FashionCard;
