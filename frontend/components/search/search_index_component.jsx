import React from "react";
import Link from "react-router-dom/Link";
import Map from "../map/map_component";
import SearchIndexListingItem from "./search_index_listing_item";

class SearchIndexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings
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
    if(this.props.city === "ALL" && this.props.city !== prevProps.city){ //checking if new search (not initial search) is 'ALL', and if there was a previous search before 'ALL, if not, will continue to requestListing() from mounting & updating for only checking if city == 'ALL'
      this.props.requestListings()
        .then( res => this.setState({listings: Object.values(res.listings)})) 
    } else if(this.props.city !== prevProps.city){
      this.props.requestListings(this.props.city)
        .then( res => this.setState({listings: Object.values(res.listings)}))
    } 
  }

  render() {
    let noListing;
    if (this.state.listings.length === 0) {
      noListing = (
        <div className="no-listing">
          <div>No listings found in {this.props.match.params.city}</div>
          <div>Travel the world with paw-perty</div>
          <div className="no-listing-cities">
            <Link to="/search/PARIS" className="no-listing-city">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1641367085/search-no-listing/daniel-bounliane-_oveYdYjZQw-unsplash_dj9sms.jpg"/>
              <div>Paris</div>
            </Link>
            <Link to="/search/NEW%20YORK" className="no-listing-city">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1641407000/search-no-listing/richard-tao-zlwPOGpwuWc-unsplash_s4fjob.jpg"/>
              <div>New York</div>
            </Link>
            <Link to="/search/SYDNEY" className="no-listing-city">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1641367085/search-no-listing/ghiffari-haris-IEYpQcaY598-unsplash_uppecm.jpg"/>
              <div>Sydney</div>
            </Link>
            <Link to="/search/CAPETOWN" className="no-listing-city">
              <img src="https://res.cloudinary.com/de8carnhu/image/upload/v1641367085/search-no-listing/daniel-vogel-5lnBe2NfeK0-unsplash_xdiowj.jpg"/>
              <div>Capetown</div>
            </Link>
          </div>
        </div>
      )
    }
    
    return(
      <div className="search-index">
        <div className="search-index-container">
          {/* Listings */}
          <div className="search-index-listings">
            {noListing ? 
              noListing 
              : 
              this.state.listings.map( (listing, idx) => 
                <SearchIndexListingItem 
                  listing={listing} 
                  key={idx}
                />
              )
            }
          </div>

          {/* Maps */}
          <div className="search-maps-container">
            <Map 
              listings={this.props.listings}
              city={this.props.city}
            />
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchIndexComponent