import React from "react";
import Link from "react-router-dom/Link";
import UserReservationItem from "./user_reservation_item"

class UserReservation extends React.Component{
  constructor(props){
    super(props)

  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial
  componentDidMount(){
    // console.log("MOUNT:", this.props.match.params.id)
    this.props.requestReservation(this.props.match.params.id)
  }

  render(){
    return(
        <div className="reservation-container">
          <p className="res-text">Trips:</p>
          <div className="res-header">
            <div className="header-text">
              <i className="fas fa-dog"></i>
              <div className="res-book">Book upcoming trips!</div>
              <div className="res-desc">Time to dust off those paws and start planning the next adventure</div>
              <button onClick={() => this.props.history.push("/listings")}>Start searching</button>
            </div>
            <div className="header-img"></div>
          </div>
          <div className="user-reservations">
            {this.props.reservations.map((reservation, idx) => 
              <UserReservationItem key={idx} reservation={reservation} />
            )}
            </div>
          </div>
    )
  }
}

export default UserReservation