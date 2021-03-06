import React from "react";

class ListingEditComponent extends React.Component{
  constructor(props){
    super(props)
    const localState = {localState: {pageIndex: 1}}
    const newState = Object.assign({}, this.props.listing, localState)
    this.state = newState
    this.photos = this.state.photos
    this.imagesToDelete = []

    this.style1 = { display: "block", backgroundImage: `url(https://res.cloudinary.com/de8carnhu/image/upload/c_scale,h_2232/v1638254345/linda-segerfeldt-oEcsvUfCr1c-unsplash_l8e34q.jpg)`}
    this.style2 = { display: "block", backgroundImage: `url(https://res.cloudinary.com/de8carnhu/image/upload/v1638257975/alvan-nee-T-0EW-SEbsE-unsplash_jlyvgo.jpg)`}
    this.style3 = { display: "block", backgroundImage: `url(https://res.cloudinary.com/de8carnhu/image/upload/v1638259085/chris-osmond-v3vQRPbiwL8-unsplash_kp9gzl.jpg)`}
    this.style4 = { display: "block", backgroundImage: `url(https://res.cloudinary.com/de8carnhu/image/upload/v1638258964/hannah-lim-U6nlG0Y5sfs-unsplash_rdz9wu.jpg)`}
    // this.style5 = { display: "block", backgroundImage: `url(http://res.cloudinary.com/de8carnhu/image/upload/v1638322488/sarandy-westfall-fLKRaBoa4-E-unsplash_jw2zee.jpg)`}
    this.style5 = { display: "block", backgroundImage: `url(https://res.cloudinary.com/de8carnhu/image/upload/v1638258925/avi-naim-JfpjgnVhpmM-unsplash_g4eovt.jpg)`}
    
    this.num1 = Math.floor(Math.random() * 30) + 1
    this.num2 = Math.floor(Math.random() * 100) + 30
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleFile = this.handleFile.bind(this)
  }

  componentDidMount(){
    this.props.requestListing(this.props.match.params.id)
  }

  componentDidUpdate(){
    if (!this.state) this.setState(this.props.listing)
  }

  handleSubmit(e){
    e.preventDefault();
    // geocode
    let geocoder = new google.maps.Geocoder()

    geocoder.geocode(
      {address: `${this.state.street_address},${this.state.city}, ${this.state.postal_code},${this.state.country}`},
      (results, status) => {
        if (status == 'OK') {
          this.setState(
            {longitude: results[0].geometry.location.lng(), latitude: results[0].geometry.location.lat()},
            () => {
              const formData = new FormData();
                formData.append("id", this.props.listing.id);
                formData.append("listing[host_id]", this.props.sessionId);
                formData.append("listing[title]", this.state.title);
                formData.append("listing[description]", this.state.description);
                formData.append("listing[street_address]", this.state.street_address);
                formData.append("listing[city]", this.state.city);
                formData.append("listing[country]", this.state.country);
                formData.append("listing[price]", this.state.price);
                formData.append("listing[num_of_beds]", this.state.num_of_beds);
                formData.append("listing[longitude]", this.state.longitude);
                formData.append("listing[latitude]", this.state.latitude);
                formData.append("listing[postal_code]", this.state.postal_code);
                // For updating/deleting img:
                // if(this.state.images_to_delete){
                //   formData.append("listing[images_to_delete]", this.state.images_to_delete);
                // }
                            
                // for (var i = 0; i < this.state.photos.length; i++) {
                //   formData.append("listing[photos][]", this.state.photos[i]);
                // }
              
              
              //update the listing
              this.props.updateListing(formData, this.props.listing.id)
              .then((res) => {this.props.history.push(`/listings/${res.payload.listing.id}`)})
          })
        } 
      }
    )
  }
// ===========================FOR UPDATING IMAGES:
  // handleFile(e){
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     this.photos.push(URL.createObjectURL(e.target.files[i]));
  //   }

  // loads a "blob" ("blob:http://localhost:3000/cdddfbb7-a51e-4aac-b7bb-5e527ba65fd3") when trying up upload a photo, unsure why
  //   console.log("this.photos:",this.photos)
  //   let photos = this.state.photos
  //   console.log("photos:",photos)

  //   this.setState({photos: [...e.currentTarget.files, ...this.state.photos]})
  // }
  
  // removeImage(idx){
  //   let statePhotos = this.state.photos;
    
  //   this.imagesToDelete.push(idx)
    
  //   this.photos.splice(idx, 1);
  //   this.setState({ photos: statePhotos, images_to_delete: this.imagesToDelete });
  // }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  
  addPageIndex(){
    if (this.state.localState.pageIndex < 5) {
      this.setState({
        ...this.state,
        localState: {
          ...this.state.localState,
          pageIndex: (this.state.localState.pageIndex + 1)
      }});
    }
  }

  subPageIndex(){
    if (this.state.localState.pageIndex > 1) {
      this.setState({
        ...this.state,
        localState: {
          ...this.state.localState,
          pageIndex: (this.state.localState.pageIndex - 1)
      }});
    }
  }

  addDogs(){
    if (this.state.num_of_beds < 10) {
      this.setState({num_of_beds: this.state.num_of_beds + 1})
  }}

  subDogs(){
    if (this.state.num_of_beds > 0) {
      this.setState({num_of_beds: this.state.num_of_beds - 1})
  }}

  addPrice(){
    this.setState({price: this.state.price + 1})
  }

  subPrice(){
    if (this.state.price > 0) {
      this.setState({price: this.state.price - 1})
    }
  }

  isCurrentPageInputFilled(){
    switch (this.state.localState.pageIndex){
      case 1:
        return this.state.title.length !== 0
      case 2:
        return this.state.description.length !== 0
      case 3:
        return this.state.street_address.length !== 0 &&
          this.state.city.length !== 0 &&
          this.state.postal_code.length !== 0 &&
          this.state.country.length !== 0
      case 4:
        return this.state.num_of_beds !== 0
      // case 5:
      //   return this.state.photos.length >= 5 //GREATER THAN 5, not EQUAL
      case 5:
        return this.state.price !== 0
      
      default: 
        return false
    }
  }

  render(){
    if(!this.props.listing) return "loading";
    return(
      <div className="listings-create">
        <div className="sidebar">
          <div className="sidebar-bg">
            <h1 style={this.state.localState.pageIndex === 1 ? this.style1 : { display: "none" }}>Let's give your place a name</h1>
            <h1 style={this.state.localState.pageIndex === 2 ? this.style2 : { display: "none" }}>Now, let's describe your place</h1>
            <h1 style={this.state.localState.pageIndex === 3 ? this.style3 : { display: "none" }}>Where's your place located?</h1>
            <h1 style={this.state.localState.pageIndex === 4 ? this.style4 : { display: "none" }}>How many dogs would you like to welcome?</h1>
            {/* <h1 style={this.state.localState.pageIndex === 4 ? this.style5 : { display: "none" }}>Next, let's add some photos of your place</h1> */}
            <h1 style={this.state.localState.pageIndex === 5 ? this.style5 : { display: "none" }}>Now for the fun part - set your price</h1>
          </div>
        </div>

        <form 
          onSubmit={(e)=> e.preventDefault()}
          className="listings-new-form">

          {/* TITLE */}
          <div 
            style={this.state.localState.pageIndex === 1 ? { display: "block" } : { display: "none" }}
            className="listing-title"
          >
            <h1>Create your title</h1>
            <textarea onChange={this.update('title')} name='listing-title' type="text" placeholder="Relax your paws with us!" value={this.state.title}/>
          </div>

          {/* DESCRIPTION */}
          <div 
            style={this.state.localState.pageIndex === 2 ? { display: "block" } : { display: "none" }}
            className="listing-title">
              <h1>Create your description</h1>
              <textarea onChange={this.update('description')} name='listing-description' type="text" placeholder="We provide pacious area for zoomies, and natural delicious treats. " value={this.state.description}/>
          </div>

          {/* LOCATION */}
            <div 
              style={this.state.localState.pageIndex === 3 ? { display: "block" } : { display: "none" }}
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
              style={this.state.localState.pageIndex === 4 ? { display: "grid" } : { display: "none" }}
              className="add-guest"
            >
              <h1>Dogs</h1>
              <div className="dog-count">
                <div id="subtract" onClick={() => this.subDogs()}>&#8722;</div>
                <div>{this.state.num_of_beds}</div>
                <div id="add" onClick={() => this.addDogs()}>&#43;</div>
              </div>
            </div>

            {/* PHOTOS: need to change page-index */}
            {/* <div 
              style={this.state.localState.pageIndex === XXXX ? { display: "flex" } : { display: "none" }}
              className="photos"
            >
              <div className="inner-photo">
                <h1>Add 5 photos here!</h1>
                <input
                  type="file"
                  onChange={e => this.handleFile(e)}
                  multiple
                />
                  <div className="uploaded-img-container">
                    {this.photos.map((photo, idx) => 
                      <div key={idx} className="uploaded-img-container-2">
                      <i className="far fa-times-circle" onClick={() => this.removeImage(idx)}></i>
                      <img 
                        src={photo}
                        className="uploaded-img"
                      />                
                      </div>
                    )}
                  </div>
              </div>
            </div> */}
            {/* PRICE */}
            <div
              style={this.state.localState.pageIndex === 5 ? { display: "flex" } : { display: "none" }}
              className="price"
            >
              <div className="price-counter">
                <div id="subtract" onClick={() => this.subPrice()}>&#8722;</div>
                <div>{this.state.price}</div>
                <div id="add" onClick={() => this.addPrice()}>&#43;</div>
              </div>
              
              <div className="price-range"> 
                <h5>per night</h5>
                <h3>Places like yours usually range from</h3>
                <h3>{this.num1} to {this.num2} Doge Coins.</h3>
              </div>
            </div>
        
          <div className="buttons-container">
            <div className="buttons">
              <button style={
                this.state.localState.pageIndex === 1 ? {opacity: "0%", cursor: "auto"} : {display: "block"}} 
                onClick={() => this.state.localState.pageIndex === 1 ? "" : this.subPageIndex()}
              >Back
              </button>
              <div></div>
              {this.isCurrentPageInputFilled() ? 
                <button 
                  style={ this.state.localState.pageIndex !== 5 ? {backgroundColor: "black"} : {backgroundColor: "#E30C79"}}
                  onClick={(e) => {
                    if (this.state.localState.pageIndex !== 5 ) {
                      this.addPageIndex();
                    } else {
                      this.handleSubmit(e);
                    }
                  }}
                >
                  {this.state.localState.pageIndex !== 5 ? "Next" : "Submit"}
                </button>
                : ""
              } 
            </div>
          </div>
        </form>

        <ul className="listing-create-errors"> 
          {Array.isArray(this.props.errors) ? this.props.errors.map((error, idx) => <li key={idx}>{error}</li>) : "" } 
        </ul>

      </div>
    )
  }
}
  
export default ListingEditComponent