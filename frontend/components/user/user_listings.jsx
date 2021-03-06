import React from "react";
import Link from "react-router-dom/Link";

class UserListings extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listings: []
    }
  }
  // No longer need componentDidMount 2/2 putting listing+reservations within partial
  componentDidMount(){
    this.props.currentUser.listings ? this.setState({listings: Object.values(this.props.currentUser.listings)}) : ""
  }

  removeUserListing(listingId, idx){
    let listings = this.state.listings
    listings.splice(idx, 1)
    this.setState({listings: listings})

    this.props.deleteListing(listingId)
  }

  noListings(){
    return(
      <div className="no-listing-container">
        <div className="no-listing-text">
          <div className="no-listing-header">You currently have no listings.</div>
          <button onClick={() => this.props.history.push("/listings/new")}>Become a host</button>
        </div>
        <div className="no-listing-bg"></div>
      </div>
    )
  }

  render(){
    return(
        <div className="listings-container">
          <p className="listing-text">Manage listings</p>
          <div className="user-listings">
            {this.state.listings.length > 0 ? this.state.listings.map((listing, idx) => 
              <div key={idx} >
                <Link key={idx} to={`/listings/${listing.id}`} className="user-listing">
                  <img className="user-listing-icon" src={listing.images[0] ? listing.images[0] : listing.photos[0]}/>
                  
                  <div className="user-listing-title">{listing.title}</div>
                  <div className="user-listing-address">
                    <div className="line"></div>
                    <div className="user-listing-street">{listing.street_address}</div>
                    <p>{listing.country}</p>
                    <div className="user-listing-price">{listing.price} Doge Coins/night</div>
                  </div>
                </Link>
                <div className="user-listing-buttons">
                  <button 
                    className="update-button"
                    onClick={() => this.props.history.push(`/listings/${listing.id}/edit`)}
                  > 
                    Edit
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => {this.removeUserListing(listing.id, idx)}}
                  >
                    Delete
                  </button>
                </div>
              </div>
              ): this.noListings()}
            </div>
          </div>
    )
  }
}

export default UserListings