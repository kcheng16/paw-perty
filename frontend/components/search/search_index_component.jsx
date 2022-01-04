import React from "react";
import Map from "../map/map_component";
import SearchIndexListingItem from "./search_index_listing_item";

class SearchIndexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.city === "all" ? 
        this.props.listings
        :
        this.props.listings.filter(
          listing => listing.city === this.props.city
        ),
    };
    console.log("state.listings", this.state.listings)
  }

  componentDidMount() {
    if(this.props.city !== "all")
      this.props.requestListings(this.props.city)
        .then( res => console.log("result:", res))
    this.setState({listings: this.props.listings})
  }
  componentDidUpdate(prevProps) {
    console.log("updating")
    if(this.props.city !== prevProps.city)
      this.props.requestListings(this.props.city)
        .then( res => this.setState({listings: res.listings}))
    
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
    
  //   if( nextProps.match.params.city !== prevState.city){
  //     nextProps.requestListings(nextProps.match.params.city)
  //   } 
  //   return {
  //     listings: nextProps.listings,
  //     city: nextProps.match.params.city,
  //   } 
  // }

  render() {
    let noListingMsg;
    if (!this.state.listings || Object.values(this.state.listings) === 0) {
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
            Object.values(this.state.listings).map( (listing, idx) => 
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