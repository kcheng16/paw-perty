import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar"
import UserDropdown from "./user_dropdown_container";

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="navbar-container">
        
        <Link to="/">
          <img className="logo" src="https://res.cloudinary.com/de8carnhu/image/upload/v1641338296/pawperty-logo-white_rfw9jb.png"/>
        </Link>

        <div className="search-bar-container">
          <SearchBar/>
        </div>

        <UserDropdown />
      </div>
    )
  }
}

export default Navbar