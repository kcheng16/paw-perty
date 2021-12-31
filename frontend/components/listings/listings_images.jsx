import React from "react";
import { Link } from "react-router-dom";

class ListingsImages extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.index = 0
  }

  add(){
    if (this.state.counter < this.props.images.length - 1){
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
    return(
      <div className="carousel">
        <button onClick={() => this.subtract() } className="carousel-control-prev" type="button">
          &lt;
        </button>

        <Link to={`/listings/${this.props.id}`} >
          <img className="carousel-img" style={this.state.counter === 0 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos[0] ? `${this.props.listing.photos[this.state.counter]}` : `${this.props.images[this.state.counter]}`}/>
          <img className="carousel-img" style={this.state.counter === 1 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos[1] ? `${this.props.listing.photos[this.state.counter]}` : `${this.props.images[this.state.counter]}`}/>
          <img className="carousel-img" style={this.state.counter === 2 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos[2] ? `${this.props.listing.photos[this.state.counter]}` : `${this.props.images[this.state.counter]}`}/>
          <img className="carousel-img" style={this.state.counter === 3 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos[3] ? `${this.props.listing.photos[this.state.counter]}` : `${this.props.images[this.state.counter]}`}/>
          <img className="carousel-img" style={this.state.counter === 4 ? {display: "block"} : {display: "none"}} src={this.props.listing.photos[4] ? `${this.props.listing.photos[this.state.counter]}` : `${this.props.images[this.state.counter]}`}/>
        </Link>

        <button onClick={() => this.add() } className="carousel-control-next" type="button">
          &gt;
        </button>
      </div>
    )
  }

}

export default ListingsImages