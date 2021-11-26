import React from "react"
import Link from "react-router-dom/Link";

class UserShowComponent extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   username: this.props.currentUser.username,
    //   email: this.props.currentUser.email,
    //   bio: this.props.currentUser.bio
    // }
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  //will need in future for update
  // update(field){
  //   return e => this.setState({[field]: e.currentTarget.value})
  // }

  //will need in future for update
  // handleSubmit(e){
  //   e.preventDefault();
  // }

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
        <p className="reservations">Upcoming visits</p>
        <div className="user-reservations">
          
        </div>
{/* Listings */}
        <div className="listings-container">
          <p className="listing-text">Listings</p>
          <div className="user-listings">
            {this.props.listings.map((listing, idx) => 
              <div key={idx} className="user-listing">
                                    {/* NEEED ROUTE TO EDIT LISTINGS */}
                {/* <Link> */}
                  <img className="user-listing-icon" src={listing.images[0]}/>
                {/* </Link> */}
                <div className="user-listing-title">{listing.title}</div>
                <div className="user-listing-address">
                  <div className="line"></div>
                  <div className="user-listing-street">{listing.street_address}</div>
                  <p>{listing.postal_code}</p>
                  <p>{listing.country}</p>
                  <div className="user-listing-price">{listing.price} Doge Coins/night</div>
                </div>
              </div>
            )}
            {/* <div className="user-listing-images">
              {this.props.listings.map((listing, idx) =>
                listing.images.map( (imageUrl, idx) => 
                  <img className="user-listing-img" key={idx} src={`${imageUrl}`} />
                  )
              )}
            </div> */}
            </div>
          </div>
        </div>
    )
  }
}

export default UserShowComponent