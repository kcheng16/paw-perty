import React from "react";

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  // search(){

  // }

  render(){
    return(
      <>
        <input className="navbar-input" type="text" />
        {/* <img src="" onClick={()=> this.search()/> */}
        <img className="navbar-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637696527/searchicon_tb3x3e.png" />
      </>
    )
  }
}

export default Navbar