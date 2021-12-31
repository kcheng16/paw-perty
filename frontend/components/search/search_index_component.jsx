import React from "react";
import ListingsIndexItem from "../listings/listings_index_item";
import Map from "../map/map_component";

class SearchIndexComponent extends React.Component {

  componentDidMount() {
    this.props.requestListings()
  }

  render() {
    return(
      <div className="search-index">
        {/* Maps */}
        <Map listings={this.props.listings}/>

        {/* Listings */}
        {/* {this.props.listings.map( (listing, idx) => 
          <ListingsIndexItem 
            listing={listing} 
            key={idx}
          />
        )} */}
      </div>
    )
  }
}

export default SearchIndexComponent