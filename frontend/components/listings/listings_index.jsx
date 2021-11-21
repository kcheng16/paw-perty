import React from "react";

class ListingsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  //!<Uncomment when listings databse is created, otherwise, error>!
  // componentDidMount(){
  //   this.props.fetchListings()
  // }

  render(){
    return(
      <div>
        <h1>LISTINGS INDEX</h1>
        {this.props.listings.map( (listing, idx) => 
          <li key={idx}>
            <h2>{listing.title}</h2>
            <h3>{listing.price} Dogecoins/night</h3>
            <h3>{listing.city}</h3>
            <h3>Cat {listing.cat_friendly ? "friendly" : "are not welcomed"}</h3>
          </li>
        )}
      </div>
    )
  }
}

export default ListingsIndex