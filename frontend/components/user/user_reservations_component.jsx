import React from "react";
import Link from "react-router-dom/Link";

class UserReservation extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  render(){
    console.log("reservations",this.props.reservations)
    return(
        <div className="listings-container">
          <p className="listing-text">Listings</p>
          <div className="user-listings">
            {this.props.reservations.length === 0 ?
            "no reserveration"
            :
              this.props.reservations.map((reservation, idx) => 
                <Link key={idx} to={`/listings/${reservation.listing_id}`}>
                  <div key={idx} className="user-listing">
                                        {/* NEEED ROUTE TO EDIT RESERVATION BUTTON */}
                    <div className="user-listing-title">{reservation.listing.title}</div>
                    <div className="user-listing-address">
                      <div className="user-listing-street">{reservation.listing.street_address}</div>
                      <p>{reservation.listing.country}</p>
                      <div className="user-listing-price">{reservation.listing.price} Doge Coins/night</div>
                    </div>
                  </div>
                </Link>
              )
            }
            </div>
          </div>
    )
  }
}

export default UserReservation