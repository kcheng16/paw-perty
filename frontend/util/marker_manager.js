class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarker(listing){
    console.log("CREATE MARKER:", listing.latitude)
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