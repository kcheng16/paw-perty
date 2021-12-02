import React from "react";

const ReviewsIndexItem = props => (
  <div className="reviews-index-item">
    <div>{props.review.rating}</div>
    <div>{props.review.body}</div>
  </div>
)

export default ReviewsIndexItem