import React from 'react';
import Link from 'react-router-dom/Link';

class UserReservationItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
  }

  toggleDropdown(){
    this.setState({toggle: !this.state.toggle})
  }

  render(){
    return(
      <div>
        <Link 
          className="reservation-list" 
          to={`/listings/${this.props.reservation.listing_id}`}
        >
          <img className="user-reservation-icon" src={this.props.reservation.photos[0] ? this.props.reservation.photos[0] : this.props.reservation.listing.images[0]}/>
          <div className="reservation-info">
            <div>{this.props.reservation.listing.city}</div>
            <div>{this.props.reservation.start_date.split("T")[0]} - {this.props.reservation.end_date.split("T")[0]}</div>
            <div className="res-info">{this.props.reservation.listing.street_address}</div>
            <div className="res-info">{this.props.reservation.num_of_guests} Dog/s</div>
            <div className="res-info">{this.props.reservation.total_price} Doge coins</div>
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