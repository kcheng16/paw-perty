import React from "react";
import Map from "../map/map_component";
import SearchIndexListingItem from "./search_index_listing_item";

class SearchIndexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.city === "ALL" ? 
        this.props.listings
        :
        this.props.listings.filter(
          listing => listing.city === this.props.city
        ),
    };
  }

  componentDidMount() {
    if(this.props.city === "ALL"){
      this.props.requestListings()
        .then( res => this.setState({listings: Object.values(res.listings)}))
    } else {
      this.props.requestListings(this.props.city)
        .then( res => this.setState({listings: Object.values(res.listings)}))
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.city === "ALL" && this.props.city !== prevProps.city){
      this.props.requestListings()
        .then( res => this.setState({listings: Object.values(res.listings)})) 
    } else if(this.props.city !== prevProps.city){
      this.props.requestListings(this.props.city)
        .then( res => this.setState({listings: Object.values(res.listings)}))
    } 
  }

  render() {
    let noListingMsg;
    if (this.state.listings.length === 0) {
      noListingMsg = (
        <p className="no-listing-msg">
          No listings found in {this.props.match.params.city}
        </p>
      );
    } else {
      noListingMsg = null;
    }
    return(
      <div className="search-index">
        <div className="search-index-container">
          {/* Listings */}
          <div className="search-index-listings">
            {noListingMsg ? 
            noListingMsg 
            : 
            this.state.listings.map( (listing, idx) => 
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