class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    // listings = {1:
    //   {
    //   id: 1, 
    //   latitude: 37.798967,
    //   longitude: -122.403546,
    //   title: "This listing"
    //   }
    // }
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
    // listing = {
    //   id: 1, 
    //   latitude: 37.798967,
    //   longitude: -122.403546,
    //   title: "This listing"
    // }
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

  createMarker(listing){
    return new google.maps.Marker({
      position: {lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude)},
      title: listing.title,
      listingId: listing.id
    });
  }
}

export default MarkerManager