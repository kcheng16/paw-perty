import React from "react";
import ReservationShowItem from "./reservation_show_item"

class ReservationShowComponent extends React.Component{
  constructor(props){
    super(props)
    this.upcomingReservations = [],
    this.pastReservations = []
  }
  // No longer need componentDidMount 2/2 putting listing+reservations nested within partial for user
  
  reservationHasExpired(endDate){
    let today = new Date()
    return today.toLocaleDateString() > endDate.toLocaleDateString()
  }

  render(){
    console.log(this.props.reservations)
    // filter listings to see if date has passed TODAYS date
    if (this.props.reservations.length > 0){ 
      this.props.reservations.map( reservation => {
        let endDate = new Date(reservation.end_date)

        if(this.reservationHasExpired(endDate)){
          this.pastReservations.push(reservation)
        } else {
          this.upcomingReservations.push(reservation)
        }
      })
    }

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
          <div className="user-reservations-header">Upcoming Trips</div>
          <div className="user-reservations">
            {this.upcomingReservations.length > 0 ? 
              this.upcomingReservations.map((reservation, idx) => 
                <ReservationShowItem 
                  key={idx} 
                  reservation={reservation} 
                  updateReservation={this.props.updateReservation}
                  deleteReservation={this.props.deleteReservation}
                />
              )
            :
              <div className="no-trips">You don't have any upcoming trips at the moment.</div>
            }
            </div>
          
            {this.pastReservations.length > 0 ? 
              <>
                <div className="past-reservations-header">Where you've been</div>
                <div className="past-reservations">
                  {this.pastReservations.map((reservation, idx) => 
                    <ReservationShowItem 
                      key={idx} 
                      reservation={reservation} 
                      pastReservations={true}
                    />
                )}
                </div>
              </>
              : ""
            }
          </div>
    )
  }
}

export default ReservationShowComponent