import React from "react";
import Link from "react-router-dom/Link";

class UserReservation extends React.Component{
  constructor(props){
    super(props)
  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial

  render(){

    return(
        <div className="listings-container">
          <p className="listing-text">Upcoming Trips:</p>
          <div className="user-listings">
          {this.props.reservations.map((reservation, idx) => 
              <Link key={idx} to={`/listings/${reservation.listing_id}`}>
                <div key={idx} className="user-listing">
                                      {/* NEEED ROUTE TO EDIT LISTINGS BUTTON */}    
                  <img className="user-listing-icon" src={reservation.images[0] ? reservation.images[0] : reservation.photos[0]}/>
                  <div>Start: {reservation.start_date.split("T")[0]}</div>
                  <div>End: {reservation.end_date.split("T")[0]}</div>
                  <div>{reservation.num_of_guests} Dogs</div>
                  <div className="user-listing-price">{reservation.total_price} Doge Coins/night</div>
                </div>
              </Link>
            )}
            </div>
          </div>
    )
  }
}

export default UserReservation