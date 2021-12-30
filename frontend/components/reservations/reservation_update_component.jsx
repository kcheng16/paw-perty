import React from "react";

const ReservationUpdateComponent = props => {

  return(
    <div className="modal-child" onClick={e => e.stopPropagation()}>
              <div>Update reservation</div>
              <div className="update-parent">
                <div className="check-in-out">
                  <div className='check-in-out-container'>
                    <div id="check-in">
                      <div>CHECK-IN</div>
                      <label htmlFor="start_date">
                        <input type="date" name="start_date" onChange={ e => props.setReservation('start_date', e)} value={props.startDate}/>
                      </label>
                    </div>
                    <div id="check-out">
                      <div>CHECK-OUT</div>
                      <label htmlFor="start_date">
                        <input type="date" name="start_date" onChange={e => props.setReservation('end_date', e)} value={props.endDate}/>
                      </label>
                    </div>
                  </div>
                  <div className="select-guests">
                    <div className="title">Guests</div>
                    <select className="guest-dropdown" onChange={e => props.setReservation('num_of_guests', e)} defaultValue={props.reservation.num_of_guests}>
                      <option value="0" disabled>select number of dogs</option>
                      {props.choices}
                    </select>
                  </div>
                  <button 
                    type={props.calculate ? "button" : "submit"} 
                    className={props.calculate ? "reserve-button-inactive" : "reserve-button"}
                    onClick={ (e) => {
                      if (props.calculate){
                        props.toggleCalculate();
                      } else {
                        props.updateReservation(e)
                      }
                    }}
                  > 
                    {props.calculate ? "Calculate Price" : "Update"}
                  </button>
                  <div className="cost-calculation">
                    <div>{props.reservation.listing.price} coins x {props.days} nights</div>
                    <div>{props.reservation.total_price}</div>
                  </div>
                  <div className="update-line"></div>
                  <div className="total">
                    <div>Total</div>
                    <div>{props.reservation.total_price ? props.reservation.total_price : "0"} Doge Coins</div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ReservationUpdateComponent