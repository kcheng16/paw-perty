import React from 'react';
import Link from 'react-router-dom/Link';

class UserReservationItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reservation: this.props.reservation,
      toggle: false,
      calculate: true,
      days: 0
    }
  }

  toggleDropdown(){
    this.setState({toggle: !this.state.toggle})
  }

  setReservation(field, e){
    this.setState({
      ...this.state.calculate,
      reservation: {
        ...this.state.reservation, 
        [field]: e.currentTarget.value, 
      }})

    if (!this.state.calculate){
      this.setState({
        ...this.state.reservation,
        calculate: !this.state.calculate
      })
    }
  }

  toggleCalculate(){
    if (this.state.reservation.start_date && this.state.reservation.end_date && this.state.reservation.num_of_guests){
      this.setPrice()
      this.setState({
        ...this.state.reservation,
        calculate: !this.state.calculate
      })
    }
  }

  setPrice(){
    let startTime = new Date(this.state.reservation.start_date)
    let endTime = new Date(this.state.reservation.end_date)
    let differenceInDays = (endTime - startTime) / (1000 * 3600 * 24)
    let pricePerDaysAndDogs = this.props.reservation.listing.price * differenceInDays * this.state.reservation.num_of_guests
    console.log("DIFF DAYS:", differenceInDays)
    this.setState({
      ...this.state.toggle,
      days: differenceInDays,
      reservation: {
        ...this.state.reservation, 
        total_price: pricePerDaysAndDogs 
      }
    })
  }

  updateReservation(e){
    e.preventDefault()
    this.props.updateReservation(this.state.reservation)
    // this.props.history.push(`/user/${this.props.session.id}/reservations/`)
  }

  render(){

    let start = new Date(this.props.reservation.start_date)
    let startMonth = start.toLocaleString('en-us', { month: 'short' })
    let startDay = start.getDate()
    
    let end = new Date(this.props.reservation.end_date)
    let endMonth = end.toLocaleString('en-us', { month: 'short' })
    let endDay = end.getDate()
    let endYear = end.getFullYear()
    
    // Prefill input(type= date), must use this format and can't use "/" or change order of date
    let preStartDate = start.getFullYear() + "-" + parseInt(start.getMonth()+1) + "-" + start.getDate();
    let preEndDate = end.getFullYear() + "-" + parseInt(end.getMonth()+1) + "-" + end.getDate();

    let choices = []
    for (let i = 1; i <= this.props.reservation.listing.num_of_beds; i++) {
      if(i === this.state.reservation.num_of_guests){
        choices.push(<option key={i} value={i} selected>{i} Dogs </option>)
      } else {
        choices.push(<option key={i} value={i} >{i} Dogs </option>)
      }
    }
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
              <div className="check-in-out">
                <div className='check-in-out-container'>
                  <div id="check-in">
                    <div>CHECK-IN</div>
                    <label htmlFor="start_date">
                      <input type="date" name="start_date" onChange={ e => this.setReservation('start_date', e)} value={preStartDate}/>
                    </label>
                  </div>
                  <div id="check-out">
                    <div>CHECK-OUT</div>
                    <label htmlFor="start_date">
                      <input type="date" name="start_date" onChange={e => this.setReservation('end_date', e)} value={preEndDate}/>
                    </label>
                  </div>
                </div>
                <div className="select-guests">
                  <div className="title">Guests</div>
                  <select className="guest-dropdown" onChange={e => this.setReservation('num_of_guests', e)}>
                    <option value="">select number of dogs</option>
                    {choices}
                  </select>
                </div>
                  <button 
                    type={this.state.calculate ? "button" : "submit"} 
                    className={this.state.calculate ? "reserve-button-inactive" : "reserve-button"}
                    onClick={ (e) => {
                      if (this.state.calculate){
                        this.toggleCalculate();
                      } else {
                        this.createReservation(e)
                      }
                    }}
                  > 
                    {this.state.calculate ? "Calculate Price" : "Update"}
                  </button>
                <div className="cost-calculation">
                  <div>{this.props.reservation.listing.price} coins x {this.state.days} nights</div>
                  <div>{this.state.reservation.total_price}</div>
                </div>
                <div className="line"></div>
                <div className="total">
                  <div>Total</div>
                  <div>{this.state.reservation.total_price ? this.state.reservation.total_price : "0"} Doge Coins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserReservationItem