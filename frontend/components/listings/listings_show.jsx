import React from "react";

class ListingsShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestListing(this.props.match.params.id)
  }

  render(){
    if(!this.props.listing) return "loading..."
    
    return(
      <div> 
        <h1>listings show </h1>
        <h1>{this.props.listing.title}</h1>
        
        {this.props.listing.host_id === this.props.session.id ?
          (<button onClick={() => this.props.deleteListing(this.props.listing.id)}>
            Delete Listing</button>) : ("")
        }
        </div>
    )
  }
}

export default ListingsShow