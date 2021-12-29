import React from "react";
import ReviewsCreateContainer from "../reviews/reviews_create_container";
import ReviewsIndexItem from "../reviews/reviews_index_item";
import { FaStar } from 'react-icons/fa'

class ListingsShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reservation: {
        start_date: "",
        end_date: "",
        listing_id: this.props.match.params.id,
        guest_id: this.props.session.id,
        total_price: 0,
        num_of_guests: 0
      },
      calculate: true,
      days: 0
    }
    this.setReservation = this.setReservation.bind(this)
  }

  componentDidMount(){
    this.props.requestListing(this.props.match.params.id)
  }

  setReservation(field, e){
    this.setState({
      ...this.state.calculate,
      reservation: {
        ...this.state.reservation, 
        [field]: e.currentTarget.value, 
      }})

    if (!this.state.calculate){
      this.setState({
        ...this.state.reservation,
        calculate: !this.state.calculate
      })
    }
  }

  toggleCalculate(){
    if (this.state.reservation.start_date && this.state.reservation.end_date && this.state.reservation.num_of_guests){
      this.setPrice()
      this.setState({
        ...this.state.reservation,
        calculate: !this.state.calculate
      })
    }
  }

  setPrice(){
    let startTime = new Date(this.state.reservation.start_date)
    let endTime = new Date(this.state.reservation.end_date)
    let differenceInDays = (endTime - startTime) / (1000 * 3600 * 24)
    let pricePerDaysAndDogs = this.props.listing.price * differenceInDays * this.state.reservation.num_of_guests

    this.setState({
      days: differenceInDays, 
      reservation: {
        ...this.state.reservation, 
        total_price: pricePerDaysAndDogs 
      }
    })
  }

  createReservation(e){
    e.preventDefault()
    this.props.createReservation(this.state.reservation)
    this.props.history.push(`/user/${this.props.session.id}/reservations/`)
  }

  render(){
    if(!this.props.listing) return "loading..."

    let choices = []
    for (let i = 1; i <= this.props.listing.num_of_beds; i++) {
      choices.push(<option key={i} value={i} >{i} Dogs</option>)
    }

    return(
      <div className="show-page"> 
        {this.props.listing.host_id === this.props.session.id ?
          (<div>
            <button 
              className="update-button"
              onClick={() => 
                this.props.history.push(`/listings/${this.props.listing.id}/edit`)}> 
              Update Listing
            </button>

            <button 
                className="delete-button"
                onClick={() => 
                  {this.props.deleteListing(this.props.listing.id); 
                  this.props.history.push("/listings")}}>
                Delete Listing
            </button>
          </div>) : ("")
        }

        <h1 className="listing-title">{this.props.listing.title}</h1>
        <h1 className="listing-city">{this.props.listing.city}</h1>

        <div className="listing-images">
          <img className="images-1" src={this.props.listing.photos[0] ? this.props.listing.photos[0] : this.props.listing.images[0]}/>
          <div className="images-4">
            {this.props.listing.images[0] ? 
              (this.props.listing.images.slice(1, 5).map((imageURL, idx) => 
                <img key={idx} src={`${imageURL}`} />
              )) : (this.props.listing.photos.slice(1,5).map((img, idx) => 
                      <img src={img} key={idx}/>
              ))
            }
          </div>
        </div>

        <div className="listing-info">
          <div className='listing-info2'>
            <div>Loving home hosted by {this.props.listing.host_name}</div>
            <div className="up-to">Hosts up to {this.props.listing.num_of_beds} dog/s</div>
            <div className="line"></div>
            <div className="icons">
              <div className="icon1">
                <i className="fas fa-home"></i>
                <div>
                  <h5>Your dog will have access to the whole home</h5>
                  <h4>Free to roam inside or out.</h4>
                </div>
              </div>
              <div className="icon2">
                <i className="fas fa-clock"></i>
                <div>
                  <h5>Scheduled meal times</h5>
                  <h4>The Host committed to Paw-perty's 5-step food service process.</h4>
                </div>
              </div>
              <div className="icon3">
                <i className="fas fa-eye"></i>
                <div>
                  <h5>24-hour supervision</h5>
                  <h4>Make sure they're always playing safe.</h4>
                </div>
              </div>
              <div className="icon4">
                <i className="fas fa-calendar"></i>
                <div>
                  <h5>Free cancellation for 48 hours</h5>
                </div>
              </div>
            </div>
            <div className="line"></div>

            <div className="description">{this.props.listing.description}</div>
            
            <div className="line"></div>

            <h3 className="offers-title">What this place offers</h3>
            <div className="offers">
              <i className="fas fa-bone"></i>
              <h5>Food provided</h5>
              <i className="fas fa-bed"></i>
              <h5>Comfy beds</h5>
              <i className="fas fa-hand-sparkles"></i>
              <h5>Lots of petting</h5>
              <i className="fas fa-images"></i>
              <h5>Update images and video</h5>
              <i className="fas fa-capsules"></i>
              <h5>Oral medication administration</h5>
              <i className="fas fa-gamepad"></i>
              <h5>Stimulating games</h5>
              <i className="fas fa-bath"></i>
              <h5>Baths</h5>
              <i className="fas fa-heart"></i>
              <h5>Love and affection</h5>
            </div>

            <div className="line"></div>

            <div className="reviews">
              <div className="reviews-title">
                <i className="fas fa-star"></i>
                <h4>{this.props.listing.average_rating}</h4>
                <h1 className="dot">   &#183;   </h1>
                <h4>{this.props.reviews.length} reviews</h4>
              </div>

              <div className="reviews-grid">
                {this.props.reviews.map((review, idx) =>
                  <ReviewsIndexItem 
                    review={review} 
                    key={idx} 
                    sessionId={this.props.session.id}
                    reviewerId={review.reviewer_id}
                    updateReview={this.props.updateReview}
                    deleteReview={this.props.deleteReview}
                  />
                )}
              </div>
              <div className="line"></div>

              {this.props.reviews.some(review => review.reviewer_id === this.props.session.id) || this.props.listing.host_id === this.props.session.id || this.props.session.id === null ? 
                "" : <ReviewsCreateContainer listing={this.props.listing}/>
              }
            </div>
        </div>
          
          <div className="sticky-parent">
            <div className="reservation-info">
              <div className="sticky-header">
                <div className="price">{this.props.listing.price}</div>
                <div className="price-per-night"> Doge Coins/night</div>
                <div className="sticky-header-review">
                  <div>
                    <FaStar size={20} color={'gold'} />
                    {this.props.listing.average_rating}
                  </div>
                  <div>{this.props.reviews.length} reviews</div>
                </div>
              </div>

              <form className="check-in-out" onSubmit={this.createReservation}>
                <div className='check-in-out-container'>
                  <div id="check-in">
                    <div>CHECK-IN</div>
                    <label htmlFor="start_date">
                      <input type="date" name="start_date" onChange={ e => this.setReservation('start_date', e)} value={this.state.reservation.start_date}/>
                    </label>
                  </div>
                  <div id="check-out">
                    <div>CHECK-OUT</div>
                    <label htmlFor="start_date">
                      <input type="date" name="start_date" onChange={e => this.setReservation('end_date', e)} value={this.state.reservation.end_date}/>
                    </label>
                  </div>
                </div>
                <div className="select-guests">
                  <div className="title">Guests</div>
                  <select className="guest-dropdown" onChange={e => this.setReservation('num_of_guests', e)}>
                    <option value="" disabled>select number of dogs</option>
                    {choices}
                  </select>
                </div>
                <button 
                  type={this.state.calculate ? "button" : "submit"} 
                  className={this.state.calculate ? "reserve-button-inactive" : "reserve-button"}
                  onClick={ (e) => {
                    if (this.state.calculate){
                      this.toggleCalculate();
                    } else {
                      this.createReservation(e)
                    }
                  }}
                > 
                  {this.state.calculate ? "Calculate Price" : "Reserve"}
                </button>
                <div className="cost-calculation">
                  <div>{this.props.listing.price} coins x {this.state.days} nights</div>
                  <div>{this.state.reservation.total_price}</div>
                </div>
                <div className="line"></div>
                <div className="total">
                  <div>Total</div>
                  <div>{this.state.reservation.total_price ? this.state.reservation.total_price : "0"} Doge Coins</div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ListingsShow