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
  reservationHasExpired(endDate){
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()

    let endDay = endDate.getDate()
    let endMonth = endDate.getMonth()+1
    let endYear = endDate.getFullYear()

    // console.log("todayDATE", today.getDate())
    // console.log("todayMONTH", today.getMonth()+1)
    // console.log("todayYEAR", today.getFullYear())

    // console.log("endDateDATE", endDate.getDate())
    // console.log("endDateMONTH", endDate.getMonth()+1)
    // console.log("endDateYEAR", endDate.getFullYear())
    // console.log("TIME:", today.getTime())
    console.log("TODAY:", today)
    console.log("END DATE:", endDate)
    console.log("RETURN:", today.toLocaleDateString() < endDate.toLocaleDateString())
    return today.toLocaleDateString() > endDate.toLocaleDateString()
    // return day < endDay && month <= endMonth && year <= endYear
    // console.log("DAY:",day < endDay)
    // console.log("MONTH:",month <= endMonth)
    // console.log("YEAR:", year <= endYear)

  }

  render(){
    this.props.reservations.map( reservation => {
      let endDate = new Date(reservation.end_date)

      // console.log("has expired?",this.reservationHasExpired(endDate))
      if(this.reservationHasExpired(endDate)){
        this.pastReservations.push(reservation)
      } else {
        this.upcomingReservations.push(reservation)
      }
    })
    console.log("UPCOMING:", this.upcomingReservations)
    console.log("PAST:",this.pastReservations)
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
              :
              ""
            }
          </div>
    )
  }
}

export default ReservationShowComponent