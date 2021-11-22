import React from "react";

class UserDropdown extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dropdownhidden: true
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown(){
    if (this.state.dropdownhidden){
      this.setState({dropdownhidden: false})
      console.log("set to false")
    } else {
      this.setState({dropdownhidden: true})
      console.log("set to true")
    }
  }

  render(){
    return(
      <div>
        <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1637623686/user_dropdown_ruxk4o.png"
          onClick={() => this.toggleDropdown()} />

        <ul className="dropdown-ul" style={this.state.dropdownhidden ? { display: "none" } : { display: "block" }}> 
          <li onClick={() => dispatch(openModal('signup'))}>Sign Up</li>
          <li onClick={() => dispatch(openModal('login'))}>Sign Up</li>
        </ul>
      </div>
      
    )
  }
}

export default UserDropdown