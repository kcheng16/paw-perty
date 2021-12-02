import React from "react";
import { FaStar } from 'react-icons/fa'

class ReviewsCreateComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reviewer_id: this.props.sessionId,
      listing_id: this.props.listingId,
      rating: 0,
      body: ""
    },
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createReview(this.state)
  }

  render(){
    if (!this.props.listing) return "...loading"
    
    return(
      <form className="reviews-form" onSubmit={this.handleSubmit}>
        <div className="review-rating">
        <label>
          <input className='radio' type='radio' value='1' onClick={this.update('rating')}/>
          <FaStar key='1' size={30}
            color={(this.state.rating) >= 1 ? 'gold' : 'gray'} />
        </label>
        <label>
          <input className='radio' type='radio' value='2' onClick={this.update('rating')} />
          <FaStar key='2' size={30}
            color={(this.state.rating) >= 2 ? 'gold' : 'gray'} />
        </label>
        <label>
          <input className='radio' type='radio' value='3' onClick={this.update('rating')} />
          <FaStar key='3' size={30}
            color={(this.state.rating) >= 3 ? 'gold' : 'gray'} />
        </label>
        <label>
          <input className='radio' type='radio' value='4' onClick={this.update('rating')} />
          <FaStar key='4' size={30}
            color={(this.state.rating) >= 4 ? 'gold' : 'gray'} />
        </label>
        <label>
          <input className='radio' type='radio' value='5' onClick={this.update('rating')} />
          <FaStar key='5' size={30}
            color={(this.state.rating) >= 5 ? 'gold' : 'gray'} />
        </label>
        </div>

        <textarea onChange={this.update('body')} placeholder="Type your review here" className="reviews-body"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default ReviewsCreateComponent