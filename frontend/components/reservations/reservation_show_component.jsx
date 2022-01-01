import React from "react";
import ReservationShowItem from "./reservation_show_item"

class ReservationShowComponent extends React.Component{
  constructor(props){
    super(props)

  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial
  // componentDidMount(){
    // this.props.requestReservation(this.props.match.params.id)
  // }

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
              <ReservationShowItem 
                key={idx} 
                reservation={reservation} 
                updateReservation={this.props.updateReservation}
                deleteReservation={this.props.deleteReservation}
              />
            )}
            </div>
          </div>
    )
  }
}

export default ReservationShowComponent