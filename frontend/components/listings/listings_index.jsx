import React from "react";
import ListingsIndexItem from "./listings_index_item";

class ListingsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestListings()
  }

  render(){
    return(
      <div className="listings-index">
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