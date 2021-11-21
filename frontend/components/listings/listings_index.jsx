import React from "react";
import ListingsIndexItem from "./listings_index_item";

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
          <ListingsIndexItem 
            listing={listing} 
            key={idx}
          />
        )}
      </div>
    )
  }
}

export default ListingsIndex