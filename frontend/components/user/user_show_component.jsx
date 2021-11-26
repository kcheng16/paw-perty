import React from "react"

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
        <div className="user-personal-info">
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
        <p className="listings">Listings</p>
        <div className="user-listings">
          {this.props.listings.map((listing, idx) => 
            <div key={idx} className="user-listing">
              <div >{listing.title}</div>
              <div>

                <div>{listing.description}</div>
              </div>
              {/* <div>{listing.street_address}</div>
              <div>{listing.postal_code}</div>
              <div>{listing.country}</div>
              <div>{listing.price}</div> */}
            </div>
          )}
          <div className="user-listing-images">
            {this.props.listings.map((listing, idx) =>
              listing.images.map( (imageUrl, idx) => 
                <img className="user-listing-img" key={idx} src={`${imageUrl}`} />
                )
            )}
          </div>
          </div>
        </div>
    )
  }
}

export default UserShowComponent