import React from "react";
import Link from "react-router-dom/Link";

class UserReservation extends React.Component{
  constructor(props){
    super(props)
  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial

  render(){
    return(
        <div className="reservation-container">
          <p className="res-text">Trips:</p>
          <div className="res-header">
            <div className="header-text">
              <i className="fas fa-dog"></i>
              <div className="res-book">Book upcoming trips!</div>
              <div className="res-desc">Time to dust off those paws and start planning their next adventure</div>
              <button onClick={() => this.props.history.push("/listings")}>Start searching</button>
            </div>
            <div className="header-img"></div>
          </div>
          <div className="user-reservations">
          {this.props.reservations.map((reservation, idx) => 
            <div key={idx}>
              <Link 
                className="reservation-list" 
                to={`/listings/${reservation.listing_id}`}
              >
                  <img className="user-reservation-icon" src={reservation.photos[0] ? reservation.photos[0] : reservation.listing.images[0]}/>
                  <div className="reservation-info">
                    <div>{reservation.listing.city}</div>
                    <div>{reservation.start_date.split("T")[0]} - {reservation.end_date.split("T")[0]}</div>
                    <div className="res-info">{reservation.listing.street_address}</div>
                    <div className="res-info">{reservation.num_of_guests} Dog/s</div>
                    <div className="res-info">{reservation.total_price} Doge coins</div>
                  </div>
              </Link>
              <div className="res-buttons">
                <button>Edit</button>
                <button onClick={() => this.props.deleteReservation(reservation.id)}>Delete</button>
              </div>
            </div>
            )}
            </div>
          </div>
    )
  }
}

export default UserReservation