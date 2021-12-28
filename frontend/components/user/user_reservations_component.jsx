import React from "react";
import Link from "react-router-dom/Link";

class UserReservation extends React.Component{
  constructor(props){
    super(props)
  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial

  componentDidMount(){
    this.props.requestReservation(this.props.match.params.id)
  }

  render(){
    console.log("reservation:", this.props.reservations)
    return(
        <div className="listings-container">
          <p className="listing-text">Upcoming Trips:</p>
          <div className="user-listings">
          {this.props.reservations.map((reservation, idx) => 
              <Link key={idx} to={`/listings/${reservation.listing_id}`}>
                <div key={idx} className="user-listing">
                                      {/* NEEED ROUTE TO EDIT LISTINGS BUTTON */}    
                  <img className="user-listing-icon" src={reservation.photos ? reservation.photos[0] : reservation.listing.images[0]}/>
                  
                  <div>{reservation.listing.city}</div>
                  <div>{reservation.listing.street_address}</div>
                  <div>{reservation.start_date.split("T")[0]} - {reservation.end_date.split("T")[0]}</div>
                  <div>{reservation.num_of_guests} Dogs</div>
                </div>
              </Link>
            )}
            </div>
          </div>
    )
  }
}

export default UserReservation