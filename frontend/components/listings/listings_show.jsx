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
      <div className="show-page"> 
        {/* need to add edit posting */}
        {this.props.listing.host_id === this.props.session.id ?
          (<button 
              className="delete-button"
              onClick={() => 
                {this.props.deleteListing(this.props.listing.id); 
                this.props.history.push("/listings")}}>
              Delete Listing</button>) : ("")
        }

        <h1 className="listing-title">{this.props.listing.title}</h1>
        <h1 className="listing-city">{this.props.listing.city}</h1>

{/* flex + row  */}
        <div className="listing-images">
          <img className="images-1" src={this.props.listing.images[0]} alt="" />
      {/* flex grid 2x2 */}
          <div className="images-4">
            {this.props.listing.images.slice(1, 4).map((imageURL, idx) => 
              <img key={idx} src={`${imageURL}`} />
            )}
          </div>
        </div>

        <div className="listing-info">
          <div>Loving home hosted by {this.props.listing.host_name}</div>
          <div>Hosts up to {this.props.listing.num_of_beds} dog/s</div>
          <div className="line"></div>
          <div>{this.props.listing.description}</div>
        </div>

        
      </div>
    )
  }
}

export default ListingsShow