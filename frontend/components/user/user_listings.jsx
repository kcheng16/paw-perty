import React from "react";
import Link from "react-router-dom/Link";

class UserListings extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  render(){
    return(
        <div className="listings-container">
          <p className="listing-text">Listings</p>
          <div className="user-listings">
            {this.props.listings.map((listing, idx) => 
              <Link key={idx} to={`/listings/${listing.id}`}>
                  <div key={idx} className="user-listing">
                                        {/* NEEED ROUTE TO EDIT LISTINGS BUTTON */}
                      <img className="user-listing-icon" src={listing.images[0] ? listing.images[0] : listing.photos[0]}/>
                    
                    <div className="user-listing-title">{listing.title}</div>
                    <div className="user-listing-address">
                      <div className="line"></div>
                      <div className="user-listing-street">{listing.street_address}</div>
                      <p>{listing.country}</p>
                      <div className="user-listing-price">{listing.price} Doge Coins/night</div>
                    </div>
                  </div>
                </Link>
            )}
            </div>
          </div>
    )
  }
}

export default UserListings