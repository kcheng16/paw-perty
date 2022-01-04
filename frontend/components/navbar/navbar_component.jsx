import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar"

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

        <div className="search-bar">
          <SearchBar/>
        </div>

        <a href="https://www.linkedin.com/in/kcheng16/">
          <img className="linked-in" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
        </a>

        <a href="https://github.com/kcheng16">
          <img className="github" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
        </a>

      </div>
    )
  }
}

export default Navbar