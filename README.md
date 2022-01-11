# [Paw-perty - Try it live!](http://paw-perty.herokuapp.com/)
![pawperty-logo-github](https://user-images.githubusercontent.com/88124383/148818540-49e0350b-1158-4501-bdcf-2ab00569bb94.png)
<p align="center">
  <img src="https://github.com/kcheng16/paw-perty/blob/main/app/assets/images/splash.gif">
</p>

Paw-perty, an AirBnB clone, is a dog-siting booking application that allows users to:
* Freely explore listings in various cities
* Reserve a spot in a friendly new home
* Become a super-host by creating your own listing
* Leave a trail of ratings and reviews of a previous stay

# Table of Contents
* [Technologies](#technologies)
* [Installation](#installation)
* [Features](#features)

# Technologies
### Frontend
* Javascript
* React.js
* Redux
* HTML5 / CSS / Sass
* JQuery
* JBuilder

### Backend
* Ruby on Rails
* PostgreSQL

### Additional Technologies
* Google Maps API
* Amazon Web Services - S3
* Webpack

# Installation
* **Clone this repo git clone:** https://github.com/kcheng16/paw-perty
* **Ensure to have postgreSQL installed and running**
* **Install NPM packages:** *npm install*
* **Install Ruby gems:** *bundle install*
* **Create the Database:** *rails db:create*
* **Setup the datebase:** *rails db:setup*
* **Start your local server:** *rails s*
* **Start webpack bundlers:** *npm run start*

# Features
## Multi-page experience for creating a listing using a single form
Users are given a similar AirBnB experience of filling in a form and publishing a listing. Each page is displayed using the component's state to determine which information to render by taking advantage of Reacts single-page application feature. 

User will be allowed to change to the next "page" once the current page's input field is filled and saved into the component's state. The "Next" button will appear which adds or subtracts the component's state: page index. The button will change to a submit button and all information from previous pages can be submitted once they reach the "final page".
![button](https://user-images.githubusercontent.com/88124383/149002247-ef5c79e5-4716-4278-8fed-7b1934abc1aa.png)

```  
  isCurrentPageInputFilled(){
    switch (this.state.localState.pageIndex){
      case 0:
        return this.state.title.length !== 0
      case 1:
        return this.state.description.length !== 0
      case 2:
        return this.state.street_address.length !== 0 &&
          this.state.city.length !== 0 &&
          this.state.postal_code.length !== 0 &&
          this.state.country.length !== 0
      case 3:
        return this.state.num_of_beds !== 0
      case 4:
        return this.state.photoFile.length === 5
      case 5:
        return this.state.price !== 0
      
      default: 
        return false
    }
  }
  
  ...
  
  {this.isCurrentPageInputFilled() ? 
    <button 
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
  ```
## Search for listings by city name
Listings are fetched depending on the search field city name input. The app reads the `:city` wildcard from the URL to construct its query to the database. Only listings similar to that city name will be displayed and marked within Google Maps. The map will pan over to the closest city to the user's input. Users can then click on the customized marker and view the information window about that listing.

![search](https://github.com/kcheng16/paw-perty/blob/main/app/assets/images/search.gif)
``` 
/app/controllers/api/listings_controller.rb

  def index
    @listings = Listing.with_attached_photos.all
    if params[:city]
      @listings = Listing.where(city: params[:city])
      render :index
    else 
        render :index
    end
  end
```

## Google Maps 
### Geocoding
The listing being created will be marked on the map using geocoding, searching for the best possible result on the map using the listings: address, city, postal code, and country.
```
/frontend/components/listings/listings_create_form.jsx

  handleSubmit(e){
    e.preventDefault();
    let geocoder = new google.maps.Geocoder()

    geocoder.geocode(
      {address: `${this.state.street_address},${this.state.city}, ${this.state.postal_code},${this.state.country}`},
      (results, status) => {
        if (status == 'OK') {
          this.setState(
            {longitude: results[0].geometry.location.lng(), latitude: results[0].geometry.location.lat()},
            () => {
              const formData = new FormData();
                formData.append("listing[host_id]", this.state.host_id);
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
          
              if (this.state.photoFile.length === 5) {
                for (let i = 0; i < this.state.photoFile.length; i++) {
                  formData.append("listing[photos][]", this.state.photoFile[i]);
                }
              }

              this.props.createListing(formData)
              .then((res) => {this.props.history.push(`/listings/${res.payload.listing.id}`)})
          })
        }
      }
    )
  }
 ```
 ### Marker Manager
 Map markers are created using a single imported function managed from the marker manager utility. Markers are set onto the map using the longitude and latitude for each listing provided within the user's city search. Event listeners are provided to only display a single info-window at a time before being set to the map.
 ``` 
  #frontend/util/marker_manager.js

  updateMarkers(listings) {
    let thisMap = this.map
    let marker;

    listings.forEach(listing => {
      if(!(listing.id in this.markers)){
        this.markers[listing.id] = listing
        marker = this.createMarker(listing)

        marker.addListener("click", () => {
          if(this.infoWindow){
            this.infoWindow.close()
          }
        })
        this.createMarkerInfoWindow(listing, marker, thisMap)
        marker.setMap(thisMap)
      }
    });
  }
 ```
### Marker information window
Newly created markers are given its own information window. Information windows will hold content on how that listings information will be displayed upon triggering of an on-click event listener. It's marker location will then be set onto the map using the listings longitude and latitude. Upon opening a new information window, the previous information window will be closed.
```
createMarkerInfoWindow(listing, marker, thisMap){
    const contentString =
    `<a className="info-window" href="/#/listings/${listing.id}">`+
      `<div><img style="display: inline-block; height: 200px; width: 100%; object-fit: cover;" src="${listing.images[0] ? listing.images[0] : listing.photos[0]}"/></div>`+
      `<div class="info-window-text">`+
        `<div>${listing.average_rating ? listing.average_rating : "0 reviews"}</div>`+
        `<div style="padding: 5px 0 10px 0; font-size: 18px;">${listing.title}</div>`+
        `<div style="font-weight: 800;">${listing.price} Doge coins / night</div>`+
      `</div>`+
    "</a>";
      
    let infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        thisMap,
        shouldFocus: true,
      });
      this.infoWindow = infoWindow
    });

    thisMap.addListener('click', function() {
      if (infoWindow) infoWindow.close();
    });
  }
```

# Future Features
* Update listing images using Active Storage
* Reservation black-out dates


