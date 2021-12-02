import React from "react";
import { FaStar } from 'react-icons/fa'

const ReviewsIndexItem = props => {
  let stars = []

  for (let i = 0; i < props.review.rating; i++) {
    stars.push(<FaStar key={i} size={20} color={'gold'} />)
  }

  while (stars.length < 5) {
    let i = stars.length
    stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
  }

    return(
      <div className="reviews-index-item">
        <div className="rating">
          {stars}
        </div>
        <div className="body">{props.review.body}</div>
      </div>
    )
}

export default ReviewsIndexItem