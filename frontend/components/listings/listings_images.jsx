import React from "react";

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
    console.log(this.state.counter)
  }

  subtract(){
    if (this.state.counter >= 1){
      this.index--
      this.setState({counter: (this.index)})
    }
    console.log(this.state.counter)
  }

  render(){
    return(
      <div className="carousel">
        <img className="carousel-img" src={`${this.props.images[this.state.counter]}`}/>

        <button onClick={() => this.subtract() } className="carousel-control-prev" type="button">
          Previous
        </button>

        <button onClick={() => this.add() } className="carousel-control-next" type="button">
          Next
        </button>
      </div>
    )
  }

}

export default ListingsImages