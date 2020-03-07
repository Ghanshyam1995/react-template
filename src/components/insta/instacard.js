import React from 'react';
import PropTypes from "prop-types";
const InstaCard = ({ likes, comments, image }) => {
    return (
        <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={image} className="img-fluid" alt="" />
            <div className="gallery-item-info">
                <ul>
                    <li className="gallery-item-likes">
                        <i className="fas fa-heart"></i> {likes}}</li>
                    <li className="gallery-item-comments">
                        <i className="fas fa-comment"></i> {comments}}</li>
                </ul>
            </div>
        </div>
    )
}

InstaCard.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    image : PropTypes.string.isRequired
}

export default InstaCard;
