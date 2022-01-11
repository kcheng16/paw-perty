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
* 
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

* User will be allowed to change to the next "page" once the input field is filled and clicking the "Next" button which adds or subtracts the component's state: page index. The form can be submitted once they reach the "final page".

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
Listings are fetched depending on the search field city name input. Only listings similar to that city name will be displayed and marked within Google Maps API.
![search](https://github.com/kcheng16/paw-perty/blob/main/app/assets/images/search.gif)
The app reads the `:city` wildcard from the URL to construct its query. 

## Google Maps marker manager
Map markers are created using a single function managed by the marker manager utility, and set onto the map for each listing provided within the user's city search. 
```
#frontend/util/marker_manager.js

  updateMarkers(listings) {
    let thisMap = this.map
    let marker;

    listings.forEach(listing => {
      if(!(listing.id in this.markers)){
        this.markers[listing.id] = listing
        marker = this.createMarker(listing)

        // marker's event listener to close PREVIOUS infoWindow
        marker.addListener("click", () => {
          if(this.infoWindow){
            this.infoWindow.close()
          }
        })
        this.createMarkerInfoWindow(listing, marker, thisMap)
        // set marker into map
        marker.setMap(thisMap)
      }
    });
  }
 ```
* Newly created markers are given its own information window. Information windows will hold content on how that listings information will be displayed upon triggering of an on-click event listener. It's marker location will then be set onto the map using the listings longitude and latitude. Upon opening a new information window, the previous information window will be closed.
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


* Create, update, and delete a review on a listing
* Create, update, and delete upcoming reservations 
