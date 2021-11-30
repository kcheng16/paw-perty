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
      num_of_beds: 0,
    }
    this.dogCount = 0;
    this.pageIndex = 0;
    this.num1 = Math.floor(Math.random() * 30) + 1
    this.num2 = Math.floor(Math.random() * 100) + 30
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.createListing(this.state).then(
      (res) => {this.props.history.push(`/listings/${res.listing.id}`)})
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  addPageIndex(){
    if (this.pageIndex < 5) this.pageIndex++
  }

  subPageIndex(){
    if (this.pageIndex > 0) this.pageIndex--
  }

  addDogs(){
    if (this.dogCount < 10) {
      this.dogCount++
      this.setState({num_of_beds: this.dogCount})
  }}

  subDogs(){
    if (this.dogCount > 0){
      --this.dogCount
      this.setState({num_of_beds: this.dogCount})
    }
  }

  render(){
    return(
      <div className="listings-create">
        <div className="sidebar">
          <div className="sidebar-bg">
            <h1 style={this.pageIndex === 0 ? { display: "block" } : { display: "none" }}>Let's give your place a name</h1>
            <h1 style={this.pageIndex === 1 ? { display: "block" } : { display: "none" }}>Now, let's describe your place</h1>
            <h1 style={this.pageIndex === 2 ? { display: "block" } : { display: "none" }}>Where's your place located?</h1>
            <h1 style={this.pageIndex === 3 ? { display: "block" } : { display: "none" }}>How many dogs would you like to welcome?</h1>
            <h1 style={this.pageIndex === 4 ? { display: "block" } : { display: "none" }}>Now for the fun part - set your price</h1>
          </div>
        </div>

        <form onSubmit={this.handleSubmit} className="listings-new-form">
          {/* TITLE */}
          <div 
            style={this.pageIndex === 0 ? { display: "block" } : { display: "none" }}
            className="listing-title"
          >
              <h1>Create your title</h1>
              <textarea onChange={this.update('title')} name='listing-title' type="text" placeholder="Relax your paws with us!" value={this.state.title}/>
          </div>

          {/* DESCRIPTION */}
          <div 
            style={this.pageIndex === 1 ? { display: "block" } : { display: "none" }}
            className="listing-title">
              <h1>Create your description</h1>
              <textarea onChange={this.update('description')} name='listing-description' type="text" placeholder="We provide pacious area for zoomies, and natural delicious treats. " value={this.state.description}/>
          </div>

          {/* LOCATION */}
            <div 
              style={this.pageIndex === 2 ? { display: "block" } : { display: "none" }}
              className="listing-address-bg"
            >
              <div className="listing-box">
                <h2>Confirm your address</h2>
                <div className="listing-info">
                  <div className="address">
                    <h5>Street</h5>
                    <input onChange={this.update('street_address')} name='listing-street_address' type="text" value={this.state.street_address}/>
                  </div>
                  <div className="city">
                    <h5>City</h5>
                    <input onChange={this.update('city')} name='listing-city' type="text" value={this.state.city}/>
                  </div>
                  <div className="postal-code">
                    <h5>Zip Code</h5>
                    <input onChange={this.update('postal_code')} name='listing-postal_code' type="text" value={this.state.postal_code}/>
                  </div>
                  <div className="country">
                    <h5>Country/Region</h5>
                    <input onChange={this.update('country')} name='listing-country' type="text" value={this.state.country}/>
                  </div>
                </div>
              </div>
            </div>
          {/* GUESTS */}
            <div 
              style={this.pageIndex === 3 ? { display: "grid" } : { display: "none" }}
              className="add-guest"
            >
              <h1>Dogs</h1>
              <div className="dog-count">
                <div onClick={() => this.subDogs()}>&#8722;</div>
                <div>{this.state.num_of_beds}</div>
                <div onClick={() => this.addDogs()}>&#43;</div>
              </div>

            </div>
            {/* PRICE */}
            <textarea className="cost-input" onChange={this.update('price')} type="text" value={this.state.price} />
            <h5 className="cost-per-night">Doge Coins per night</h5>

            {this.state.num_of_beds === "" ? "" :
              <> 
                <h3 className="price-range1">Places like yours usually range</h3>
                <h3 className="price-range2">from {this.num1} to {this.num2} Doge Coins</h3>
              </>
            }
          
        { this.state.price === "" ? "" : <button className="finish-button" type="submit">Finish</button>}
        

          <div className="buttons">
            <button onClick={() => this.subPageIndex()}>Back</button>
            <div></div>
            <button onClick={() => this.addPageIndex()}>Next</button>
          </div>

        </form>
        

        <ul className="listing-create-errors"> 
          {Array.isArray(this.props.errors) ? this.props.errors.map((error, idx) => <li key={idx}>{error}</li>) : "" } 
        </ul>

      </div>
    )
  }
}

export default ListingsCreateForm