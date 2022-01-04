import React from "react";
import Map from "../map/map_component";
import SearchIndexListingItem from "./search_index_listing_item";

class SearchIndexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      city: 'all'
    };
  }

  componentDidMount() {
    this.props.requestListings(this.props.match.params.city)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    
    if( nextProps.match.params.city !== prevState.city){
      nextProps.requestListings(nextProps.match.params.city)
    } 
    return {
      listings: nextProps.listings,
      city: nextProps.match.params.city,
    } 
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    
    if( nextProps.match.params.city !== prevState.city){
      nextProps.requestListings(nextProps.match.params.city)
    } 
    return {
      listings: nextProps.listings,
      city: nextProps.match.params.city,
    } 
  }

  render() {
    let msg;
    if (!this.state.listings.length) {
      msg = (
        <p className="msg">
          No listings found in {this.props.match.params.city}
        </p>
      );
    } else {
      msg = null;
    }
    return(
      <div className="search-index">
        <div className="search-index-container">
          {/* Listings */}
          <div className="search-index-listings">
            {this.state.listings.map( (listing, idx) => 
              <SearchIndexListingItem 
                listing={listing} 
                key={idx}
              />
            )}
          </div>

          {/* Maps */}
          <div className="search-maps-container">
            <Map listings={this.props.listings}/>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchIndexComponent