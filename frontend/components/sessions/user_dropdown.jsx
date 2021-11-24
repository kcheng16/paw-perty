import React from "react";
import { Link } from "react-router-dom";

class UserDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dropdownhidden: true
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown(){
    this.setState({dropdownhidden: !this.state.dropdownhidden})
  } 



  render(){
    return(
      <div>
        <img className="dropdown-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637623686/user_dropdown_ruxk4o.png"
          onClick={() => this.toggleDropdown()} />

        {!this.props.currentUserId ? (
            <ul className="dropdown-ul" style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}> 
              <li onClick={() => {this.props.openSignupModal('signup'); (this.toggleDropdown())}}>Sign Up</li>
              <li onClick={() => {this.props.openLoginModal('login'); (this.toggleDropdown())}}>Login</li>
            </ul>
          ) : (
            <ul className="dropdown-list">
              <li
                className="dropdown-list-item"
                onClick={() => this.props.history.push("/listings/new")} 
                style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}>
                Host your home
              </li>
              <li
                className="dropdown-list-item"
                onClick={() => this.props.logout()} 
                style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}>
                Logout
              </li>
            </ul>
            )
        }
      </div>
    )
  }
}

export default UserDropdown