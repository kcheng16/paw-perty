import React from "react";

class ListingsShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestListing(this.props.match.params.id)
  }

  render(){
    if(!this.props.listing) return "loading..."
    console.log(this.props.listing.photos[0])
    return(
      <div className="show-page"> 
        {/* need to add edit posting */}
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
              )) : (
                this.props.listing.photos.slice(1,5).map((img, idx) => 
                <img src={img} key={idx}/>
              ))
            }
          </div>
        </div>

        <div className="listing-info">
          <div className='listing-info2'>
            <div>Loving home hosted by {this.props.listing.host_name}</div>
            <div>Hosts up to {this.props.listing.num_of_beds} dog/s</div>
            <div className="line"></div>
            <div className="icons">
              <div className="icon1">
                <i className="fas fa-home"></i>
                <div>
                  <h5>Your dog will have access to the whole home</h5>
                  <h7>Free to roam inside or out.</h7>
                </div>
              </div>
              <div className="icon2">
                <i class="fas fa-clock"></i>
                <div>
                  <h5>Scheduled meal times</h5>
                  <h7>The Host committed to Paw-perty's 5-step food service process.</h7>
                </div>
              </div>
              <div className="icon3">
                <i class="fas fa-eye"></i>
                <div>
                  <h5>24-hour supervision</h5>
                  <h7>Make sure they're always playing safe.</h7>
                </div>
              </div>
              <div className="icon4">
                <i class="fas fa-calendar"></i>
                <div>
                  <h5>Free cancellation for 48 hours</h5>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div>{this.props.listing.description}</div>
          </div>
          
          <div className="sticky-parent">
            <div className="reservation-info">
              <div className="price">{this.props.listing.price}Doge Coins/night</div>
              <div className="check-in-out">
                <div className='check-in-out-container'>
                  <div id="check-in">CHECK-IN
                    <div>calendar</div>
                  </div>
                  <div>CHECK-OUT
                    <div>calendar</div>
                  </div>
                </div>
                <div className="select-guests">Guests</div>
              </div>
              <div className="reserve-button">Reserve</div>
              <div className="line"></div>
              <div className="total">
                <div>Total</div>
                <div>$</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default ListingsShow