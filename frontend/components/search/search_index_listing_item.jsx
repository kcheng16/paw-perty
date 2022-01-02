import React from "react";
import { Link } from "react-router-dom";

class SearchIndexListingItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.index = 0
  }

  add(){
    if (this.state.counter < this.props.listing.images.length - 1){
      this.index++
      this.setState({counter: (this.index)})
    }
  }

  subtract(){
    if (this.state.counter >= 1){
      this.index--
      this.setState({counter: (this.index)})
    }
  }

  render(){
    // if(!this.props.listing.photos[0])return "loading..."
    console.log("image:",this.props.listing.images[0])
    return(
      <div className="search-index-listing-item">
        {/* listing images */}
        <div className="carousel">
        <button onClick={() => this.subtract() } className="carousel-control-prev" type="button">
          &lt;
        </button>

        <Link to={`/listings/${this.props.listing.id}`} >
          <img className="carousel-img" style={this.state.counter === 0 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos.length !== 0 ? this.props.listing.photos[this.state.counter] : this.props.listing.images[this.state.counter]}/>
          <img className="carousel-img" style={this.state.counter === 1 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos.length !== 0 ? this.props.listing.photos[this.state.counter] : this.props.listing.images[this.state.counter]}/>
          <img className="carousel-img" style={this.state.counter === 2 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos.length !== 0 ? this.props.listing.photos[this.state.counter] : this.props.listing.images[this.state.counter]}/>
          <img className="carousel-img" style={this.state.counter === 3 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos.length !== 0 ? this.props.listing.photos[this.state.counter] : this.props.listing.images[this.state.counter]}/>
          <img className="carousel-img" style={this.state.counter === 4 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos.length !== 0 ? this.props.listing.photos[this.state.counter] : this.props.listing.images[this.state.counter]}/>
        </Link>

        <button onClick={() => this.add() } className="carousel-control-next" type="button">
          &gt;
        </button>
      </div>
        {/* listings */}          
        <Link to={`/listings/${this.props.listing.id}`} className="search-listing-link" >
          <div className="search-city">{this.props.listing.city}</div>
          <div className="search-title">{this.props.listing.title}</div>
          <div className="search-line"></div>
          <div className="search-description">{this.props.listing.description}</div>

          <div className='search-review-and-cost'>
            <div className="search-review">{this.props.listing.average_rating ? this.props.listing.average_rating : "0 reviews"}</div>
            <div className="search-price">{this.props.listing.price} Doge Coins/night</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SearchIndexListingItem