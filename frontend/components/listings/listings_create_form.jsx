import React from "react";

class ListingsCreateForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      host_id: this.props.sessionId,
      street_address: "",
      city: "",
      postal_code: "",
      country: "",
      longitude: "37.798967",
      latitude: "-122.403546",
      price: "",
      num_of_beds: "",
    }
    this.num1 = Math.floor(Math.random() * 30) + 1
    this.num2 = Math.floor(Math.random() * 100) + 30
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.history.push("/listings/")
    // this.props.createListing(this.state).then(
    //   (res) => {this.props.history.push(`/listing/${res.listing.id}`)})
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="listings-new-form">
          {/* TITLE */}
          <label htmlFor="listing-title">Create your title</label>
            <textarea onChange={this.update('title')} name='listing-title' type="text" value={this.state.title}/>
          {/* DESCRIPTION */}
          <label htmlFor="listing-description">Create your description</label>
            <textarea onChange={this.update('description')} name='listing-title' type="text" value={this.state.description}/>
          {/* LCOCATION */}
          <h2>Confirm your address</h2>
            <label htmlFor="listing-street_address">Street Address</label>
              <textarea onChange={this.update('street_address')} name='listing-street_address' type="text" value={this.state.street_address}/>
            <label htmlFor="listing-city">City</label>
              <textarea onChange={this.update('city')} name='listing-city' type="text" value={this.state.city}/>
            <label htmlFor="listing-postal_code">Zip Code</label>
              <textarea onChange={this.update('postal_code')} name='listing-postal_code' type="text" value={this.state.postal_code}/>
            <label htmlFor="listing-country">Country/Region</label>
              <textarea onChange={this.update('country')} name='listing-country' type="text" value={this.state.country}/>
          {/* GUESTS */}
          <label htmlFor="listing-num_of_beds">Number of dogs you can take in</label>
              <textarea onChange={this.update('num_of_beds')} name='listing-num_of_beds' type="text" value={this.state.num_of_beds}/>
          {/* PRICE */}
          <textarea onChange={this.update('price')} type="text" value={this.state.price} />
          <h5 className="cost-per-night">Doge Coins per night</h5>
          {this.state.num_of_beds === "" ? "" :
            <> 
              <h3 className="price-range">Places like yours usually range</h3>
              <h3 className="price-range">from {this.num1} to {this.num2} Doge Coins</h3>
              <button className="finish-button" type="submit">Finish</button>
            </>
          }
        </form>
      </div>
    )
  }
}

export default ListingsCreateForm