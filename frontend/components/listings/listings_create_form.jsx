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
    this.props.createListing(this.state)
    this.props.history.push("/listings/")
    // this.props.createListing(this.state).then(
    //   (res) => {this.props.history.push(`/listing/${res.listing.id}`)})
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return(
      <div className="listings-create">
        <div className="sidebar">
          <div className="sidebar-bg">
            <h1>Let's give your place a name</h1>
            <h1>Now, let's describe your place</h1>
            <h1>Where's your place located?</h1>
            <h1>How many pets can you watch?</h1>
            <h1>Now for the fun part - set your price</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="listings-new-form">
          {/* TITLE */}
          <label className="listing-title" htmlFor="listing-title">Create your title
            <textarea onChange={this.update('title')} name='listing-title' type="text" value={this.state.title}/>
          </label>
          {/* DESCRIPTION */}
          <label className="listing-description" htmlFor="listing-description">Create your description
            <textarea onChange={this.update('description')} name='listing-description' type="text" value={this.state.description}/>
          </label>
          {/* LCOCATION */}
            <label className="listing-street-address" htmlFor="listing-street_address">Street Address
              <textarea onChange={this.update('street_address')} name='listing-street_address' type="text" value={this.state.street_address}/>
            </label>
            <label className="listing-city" htmlFor="listing-city">City
              <textarea onChange={this.update('city')} name='listing-city' type="text" value={this.state.city}/>
            </label>
            <label className="listing-postal-code" htmlFor="listing-postal_code">Zip Code
              <textarea onChange={this.update('postal_code')} name='listing-postal_code' type="text" value={this.state.postal_code}/>
            </label>
            <label className="listing-country" htmlFor="listing-country">Country/Region
              <textarea onChange={this.update('country')} name='listing-country' type="text" value={this.state.country}/>
            </label>
          {/* GUESTS */}
          <label className="listing-num_of_beds" htmlFor="listing-num_of_beds">Number of dogs you can take in
            <textarea onChange={this.update('num_of_beds')} name='listing-num_of_beds' type="text" value={this.state.num_of_beds}/>
          </label>
          {/* PRICE */}
          <textarea className="cost-input" onChange={this.update('price')} type="text" value={this.state.price} />
          <h5 className="cost-per-night">Doge Coins per night</h5>

          {this.state.num_of_beds === "" ? "" :
            <> 
              <h3 className="price-range1">Places like yours usually range</h3>
              <h3 className="price-range2">from {this.num1} to {this.num2} Doge Coins</h3>
              <button className="finish-button" type="submit">Finish</button>
            </>
          }
        </form>
      </div>
    )
  }
}

export default ListingsCreateForm