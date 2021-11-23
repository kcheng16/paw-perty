import React from "react";

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  goToListings(){
    this.props.history.push("/listings")
  }

  render(){
    return(
      <>
        <input className="navbar-input" type="text" />
        <img className="navbar-img" onClick={() => this.goToListings()}  src="https://res.cloudinary.com/de8carnhu/image/upload/v1637696527/searchicon_tb3x3e.png" />
      </>
    )
  }
}

export default Navbar