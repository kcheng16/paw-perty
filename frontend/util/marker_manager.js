import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.infoWindow;
  }

  createMarkerInfoWindow(listing, marker, thisMap){
    const contentString =
    `<a className="info-window" href="/#/listings/${listing.id}">`+
      `<div><img style="display: inline-block; height: 200px; width: 100%; object-fit: cover;" src="${listing.images[0] ? listing.images[0] : listing.photos[0]}"/></div>`+
      `<div>${listing.average_rating ? listing.average_rating : "0 reviews"}</div>`+
      `<div style="padding: 5px 0 10px 0; font-size: 18px;">${listing.title}</div>`+
      `<div style="display: flex;">
        <div style="font-weight: 800;">${listing.price} Doge coins / night</div>
      </div>`+
    "</a>";
      
    // set info window
    let infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    // add event listener for info window:
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        thisMap,
        shouldFocus: true,
      });
      this.infoWindow = infoWindow
    });

    // Click of the map closes all infoWindows
    thisMap.addListener('click', function() {
      if (infoWindow) infoWindow.close();
    });
  }

  createMarker(listing){
    return new google.maps.Marker({
      position: {lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude)},
      title: listing.title,
      listingId: listing.id
    });
    
  }

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

  createMarkerFromListing(listing){
    if(!(listing.id in this.markers)){
      this.markers[listing.id] = listing
      let marker = this.createMarker(listing, this.map)
      marker.setMap(this.map)
    }
  }

  removeMarker(marker){
    delete this.markers[marker.listingId]
    marker.setMap(null)
  }

  
}

export default MarkerManager