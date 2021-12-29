import React from 'react';
import Link from 'react-router-dom/Link';

class UserReservationItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reservation: this.props.reservation,
      toggle: false
    }
  }

  toggleDropdown(){
    this.setState({toggle: !this.state.toggle})
  }

  render(){
    let start = new Date(this.props.reservation.start_date)
    let startMonth = start.toLocaleString('en-us', { month: 'short' })
    let startDay = start.getDate()

    let end = new Date(this.props.reservation.end_date)
    let endMonth = end.toLocaleString('en-us', { month: 'short' })
    let endDay = end.getDate()
    let endYear = end.getFullYear()

    return(
      <div>
        <Link 
          className="reservation-list" 
          to={`/listings/${this.props.reservation.listing_id}`}
        >
          <img className="user-reservation-icon" src={this.props.reservation.photos[0] ? this.props.reservation.photos[0] : this.props.reservation.listing.images[0]}/>
          <div className="reservation-info">
            <div>{this.props.reservation.listing.city}</div>
            <div className="res-info">{this.props.reservation.listing.street_address}</div>
            <div className="res-info">{this.props.reservation.total_price} Doge coins</div>
            <div>{startMonth} {startDay} - {endMonth} {endDay}, {endYear}</div>
          </div>
        </Link>
        <div className="res-buttons">
          <button onClick={() => this.toggleDropdown()}>Edit</button>
          <button onClick={() => this.props.deleteReservation(this.props.reservation.id)}>Delete</button>
          <div 
            style={this.state.toggle ? {display: "block"} : {display: "none"}} 
            className="modal-background" 
            onClick={() => this.toggleDropdown()}
          >
            <div className="modal-child" onClick={e => e.stopPropagation()}>
              <div>EDIT FORM</div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserReservationItem