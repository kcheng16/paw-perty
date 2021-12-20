import React from "react";
import { FaStar } from 'react-icons/fa'

class ReviewsIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.review
    this.stars = [];
    console.log("STATE:", this.state)
    for (let i = 0; i < props.review.rating; i++) {
      this.stars.push(<FaStar key={i} size={20} color={'gold'} />)
    }
  
    while (this.stars.length < 5) {
      let i = this.stars.length
      this.stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.updateReview(this.state)
  }
  
  render(){
    console.log("RENDER-STATE:",this.state)
    return(
      <div className="reviews-index-item">
        
        {this.props.sessionId === this.props.reviewerId ? 
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
            <div className="review-body1">
              <textarea onChange={this.update('body')} className="reviews-body" value={this.state.body}/>
              <button type="submit">Update</button>
            </div>
          </form>
        :
          <div>
            <div className="rating">
              {this.stars}
            </div>
            <div className="body">{this.props.review.body}</div>
          </div>
        }
      </div>
    )
  }
}


export default ReviewsIndexItem