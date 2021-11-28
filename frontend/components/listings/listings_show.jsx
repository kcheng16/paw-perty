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
// flex + column
      <div> 
        {/* need to add edit posting */}
        {this.props.listing.host_id === this.props.session.id ?
          (<button onClick={() => 
            {this.props.deleteListing(this.props.listing.id); 
            this.props.history.push("/listings")}}>
            Delete Listing</button>) : ("")
        }

        <h1 className="listing-title">{this.props.listing.title}</h1>

{/* flex + row  */}
        <div className="listing-images">
          <img className="images-1" src={this.props.listing.images[0]} alt="" />
      {/* flex grid 2x2 */}
          <div className="images-4">
            {this.props.listing.images.map((imageURL, idx) => 
              <img key={idx} src={`${imageURL}`} />
            )}
          </div>
        </div>

        <div className="listing-info">
          <div>Cozy home hosted by {this.props.listing.host_name}</div>
          <div>Hosts up to {this.props.listing.num_of_beds} dog/s</div>
          <div>{this.props.listing.description}</div>
        </div>

        
      </div>
    )
  }
}

export default ListingsShow