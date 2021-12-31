class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerInfoWindow(listing){
    const contentString = 
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia."

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