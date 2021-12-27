import React from "react";

class UserDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dropdownhidden: true
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(){
    this.setState({dropdownhidden: !this.state.dropdownhidden})
  } 

  render(){
    return(
      <div>
        <img
          className="dropdown-img" 
          src="https://res.cloudinary.com/de8carnhu/image/upload/v1637780625/dropdown-user_hpvvu3.png"
          onClick={() => this.toggleDropdown()} 
        />

        {!this.props.currentUserId ? (
            <ul className="dropdown-ul" style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}> 
              <li onClick={() => {this.props.openSignupModal('signup'); (this.toggleDropdown())}}>Sign Up</li>
              <li onClick={() => {this.props.openLoginModal('login'); (this.toggleDropdown())}}>Login</li>
            </ul>
          ) : (
            <div className="dropdown-list">
              <div
                onClick={() => {this.props.history.push(`/user/${this.props.currentUserId}/listings`); (this.toggleDropdown())}}
                style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}>
                Manage listings
              </div>

              <div
                className="dropdown-list-item"
                onClick={() => {this.props.history.push("/listings/new"); this.toggleDropdown()}} 
                style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}>
                Host your home
              </div>
              
              <div
                onClick={() => {this.props.history.push(`/user/${this.props.currentUserId}`); (this.toggleDropdown())}}
                style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}>
                Account
              </div>
              <div
                className="dropdown-list-logout"
                onClick={() => {this.props.logout(); this.toggleDropdown(); this.props.history.push("/")}} 
                style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}>
                Logout
              </div>
            </div>
            )
        }
      </div>
    )
  }
}

export default UserDropdown