import React from "react"
import Link from "react-router-dom/Link";

class UserShowComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  render(){
    if (!this.props.currentUser) return "loading...";
    return(
      <div className="user-show">
        <div className="user-personal-info-container">
          {/* Need an 'edit profile' <Link> */}
{/* Personal Info */}
          <p className="personal-info">Personal info</p>
          <div className="user-username">
            <label>Username</label>
            <div>{this.props.currentUser.username}</div>
          </div>

          <div className="user-email">
            <label>Email</label>
            <div>{this.props.currentUser.email}</div>
          </div>

          <div className="user-bio">
            <label>About your dog</label>
            <div>{this.props.currentUser.bio}</div>
          </div>
        </div>
{/* Reservations */}
        {/* <div className="user-reservations-container">
          <p className="reservations-text">Upcoming visits</p>
          <div>
            {this.props.reservations.map((reservation, idx) => 
              <div key={idx} className="user-reservation">
                {/* <Link> */}
                {/* <img className="user-reservation-icon" src={reservation.images[0]}/>
                {/* </Link> */}
                {/* <div className="user-reservation-title">{reservation.title}</div>
                <div className="user-reservation-date">
                  <div className="line"></div>
                  <div className="user-reservation-start-date">{reservation.start_date}</div>
                </div>
              </div>
            )}
          </div>
        </div> */}
        
        </div>
    )
  }
}

export default UserShowComponent