import React from "react";
import Map from "../map/map_component";
import SearchIndexListingItem from "./search_index_listing_item";

class SearchIndexComponent extends React.Component {

  componentDidMount() {
    this.props.requestListings()
  }

  render() {
    return(
      <div className="search-index">
        <div className="search-index-container">
          {/* Listings */}
          <div className="search-index-listings">
            {this.props.listings.map( (listing, idx) => 
              <SearchIndexListingItem 
                listing={listing} 
                key={idx}
              />
            )}
          </div>

          {/* Maps */}
          <Map listings={this.props.listings}/>
        </div>
      </div>
    )
  }
}

export default SearchIndexComponent