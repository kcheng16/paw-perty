import React from "react";

class ListingsShow extends React.Component{
  constructor(props){
    super(props)
  }

  // componentdidMount(){
  //   this.props.requestListing(this.props.listing.id)
  // }

  render(){
    return(
      <div> 
        <h1>listings show </h1>
        <h1>{this.props.listing.title}</h1>
      </div>
    )
  }
}

export default ListingsShow