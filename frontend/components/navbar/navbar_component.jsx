import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_component"

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  goToListings(){
    this.props.history.push("/listings")
  }

  render(){
    return(
      <div>
        <SearchBar/>
        <img className="navbar-img" onClick={() => this.goToListings()}  src="https://res.cloudinary.com/de8carnhu/image/upload/v1637696527/searchicon_tb3x3e.png" />
        
        <Link to="/">
          <img className="logo" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637652441/pawperty-logo_bemkc9.png"/>
        </Link>

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