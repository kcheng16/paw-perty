import React from "react";
import ReviewsIndexItem from "./reviews_index_item";

class ReviewsIndexComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestReviews()
  }

  render(){
    return(
      <div className="reviews-index">
        {this.props.reviews.map( (review, idx) =>
          <ReviewsIndexItem 
            review={review}
            key={idx}
          />
        )}
      </div>
    )
  }
}

export default ReviewsIndexComponent