import React from "react";
import { FaStar } from 'react-icons/fa'

const ReservationCreateComponent = props => {
  let n =  new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();

  if(m < 10){
    m = '0' + m.toString();
  }
  if (d < 10){
    d = '0' + d.toString();
  }

  let minDate = y + '-' + m + '-' + d
  let maxDate = (y+1) + '-' + "0"+(parseFloat(0+m) + 1) + '-' + d
  
  // console.log(props.startDate)
  return(
    <div className="sticky-parent">
      <div className="reservation-info">
        <div className="sticky-header">
          <div className="price">{props.listing.price}</div>
          <div className="price-per-night"> Doge Coins/night</div>
          <div className="sticky-header-review">
            <div>
              <FaStar size={20} color={'gold'} />
              {props.listing.average_rating}
            </div>
            <div>{props.reviews.length} reviews</div>
          </div>
        </div>

        <form className="check-in-out" onSubmit={props.createReservation}>
          <div className='check-in-out-container'>
            <div id="check-in">
              <div>CHECK-IN</div>
              <label htmlFor="start_date">
                <input 
                  type="date" 
                  min={minDate}
                  max={maxDate}
                  name="start_date" 
                  onChange={ e => props.setReservation('start_date', e)} 
                  value={props.reservation.start_date}
                />
              </label>
            </div>
            <div id="check-out">
              <div>CHECK-OUT</div>
              <label htmlFor="start_date">
                <input 
                  type="date" 
                  min={props.reservation.start_date ? props.reservation.start_date : minDate}
                  max={maxDate}
                  name="start_date" 
                  onChange={e => props.setReservation('end_date', e)} 
                  value={props.reservation.end_date}
                />
              </label>
            </div>
          </div>
          <div className="select-guests">
            <div className="title">Guests</div>
            <select className="guest-dropdown" onChange={e => props.setReservation('num_of_guests', e)} defaultValue={"0"}>
              <option value="0" disabled >select number of dogs</option>
              {props.choices}
            </select>
          </div>
          {props.listing.host_id === props.sessionId ? 
            ""
            :
            <button 
            type={props.calculate ? "button" : "submit"} 
            className={props.calculate ? "reserve-button-inactive" : "reserve-button"}
            onClick={ (e) => {
              if (props.calculate){
                props.toggleCalculate(e);
              } else {
                props.createReservation(e)
              }
            }}
            > 
              {props.calculate ? "Calculate Price" : "Reserve"}
            </button>}
          <div className="cost-calculation">
            <div>{props.listing.price} Ɖ x {props.days} nights</div>
            <div>{props.reservation.total_price}</div>
          </div>
          <div className="line"></div>
          <div className="total">
            <div>Total</div>
            <div>{props.reservation.total_price ? props.reservation.total_price : "0"} Doge Coins</div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ReservationCreateComponent