import React from "react";

class ListingsCreateForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: "",
      host_id: "",
      street_address: "",
      city: "",
      postal_code: "",
      country: "",
      longitude: "",
      latitude: "",
      price: "",
      num_of_beds: "",
      cat_friendly: ""
    }
    this.num1 = Math.floor(Math.random() * 30) + 1
    this.num2 = Math.floor(Math.random() * 100) + 30
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({ host_id: this.props.sessionId })
    this.props.createListing(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){ //unable to submit 2/2 no longitude+latitude
    return(
      <form onSubmit={this.handleSubmit}>
        {/* TITLE */}
        <label htmlFor="listing-title">Create your title</label>
          <input onChange={this.update('title')} name='listing-title' type="text" value={this.state.title}/>
        {/* DESCRIPTION */}
        <label htmlFor="listing-description">Create your description</label>
          <input onChange={this.update('description')} name='listing-title' type="text" value={this.state.description}/>
        {/* LCOCATION */}
        <h2>Where's your place located?</h2>
          <label htmlFor="listing-street_address">Street Address</label>
            <input onChange={this.update('street_address')} name='listing-street_address' type="text" value={this.state.street_address}/>
          <label htmlFor="listing-city">City</label>
            <input onChange={this.update('city')} name='listing-city' type="text" value={this.state.city}/>
          <label htmlFor="listing-postal_code">Zip Code</label>
            <input onChange={this.update('postal_code')} name='listing-postal_code' type="text" value={this.state.postal_code}/>
          <label htmlFor="listing-country">Country/Region</label>
            <input onChange={this.update('country')} name='listing-country' type="text" value={this.state.country}/>
        {/* GUESTS */}
        <label htmlFor="listing-num_of_beds">Number of woofers</label>
            <input onChange={this.update('num_of_beds')} name='listing-num_of_beds' type="text" value={this.state.num_of_beds}/>
        {/* PRICE */}
        <input onChange={this.update('price')} type="text" value={this.state.price} />
        <h5 className="cost-per-night">Doge Coins per night</h5>
        <h3>Places like yours usually range</h3>
        <h3>from {this.num1} to {this.num2} Doge Coins</h3>
        <button type="submit">Publish</button>
      </form>
    )
  }
}

export default ListingsCreateForm