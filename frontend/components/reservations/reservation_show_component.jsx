import React from "react";
import ReservationShowItem from "./reservation_show_item"

class ReservationShowComponent extends React.Component{
  constructor(props){
    super(props)
    this.upcomingReservations = [],
    this.pastReservations = []
  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial
  // componentDidMount(){
    // this.props.requestReservation(this.props.match.params.id)
  // }

  // filter listings to see if date has passed TODAYS date
  componentDidMount(){
    console.log("MOUNTING")
    
  }

  render(){
    let today = new Date()

    this.props.reservations.map( reservation => {
      let endDate = new Date(reservation.end_date)

      if(Date.parse(today) < Date.parse(endDate)){
        this.upcomingReservations.push(reservation)
      } else {
        this.pastReservations.push(reservation)
      }
    })

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
          <div>Upcoming Trips</div>
          <div className="user-reservations">
            {this.upcomingReservations.map((reservation, idx) => 
              <ReservationShowItem 
                key={idx} 
                reservation={reservation} 
                updateReservation={this.props.updateReservation}
                deleteReservation={this.props.deleteReservation}
              />
            )}
            </div>
          
            {this.pastReservations.length > 0 ? 
              <>
                <div>Where you've been</div>
                <div className="past-reservations">
                  {this.pastReservations.map((reservation, idx) => 
                    <ReservationShowItem 
                      key={idx} 
                      reservation={reservation} 
                      updateReservation={this.props.updateReservation} //DONT NEED THIS===================
                      deleteReservation={this.props.deleteReservation}
                      pastReservations={true}
                    />
                )}
                </div>
              </>
              :
              ""
            }
          </div>
    )
  }
}

export default ReservationShowComponent