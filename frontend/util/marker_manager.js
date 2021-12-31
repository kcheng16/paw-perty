import React from 'react';
import Link from 'react-router-dom/Link';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerInfoWindow(listing){
    const contentString = 
    `<a href="/#/listings/${listing.id}">`+
      `<div>${listing.average_rating ? listing.average_rating : "no reviews"}</div>`+
      `<div>${listing.title}</div>`+
      `<b>${listing.price}Doge coins/night</b>`+
    "</a>"

    // set info window
    let infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    return infoWindow 
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

        let infoWindow = this.createMarkerInfoWindow(listing)
        marker = this.createMarker(listing)

        // add event listener for info window:
        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            thisMap,
            shouldFocus: false,
          });
        });

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