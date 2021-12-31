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
    // listings = [
    //   {
    //     id: 1, 
        latitude: 37.798967,
        longitude: -122.403546,
    //     title: "This listing #1"
    //   },
    //   {
    //     id: 2, 
    //     latitude: 37.7758,
    //     longitude: -122.435,
    //     title: "This listing #2"
    //   },
    // ]
    
    console.log("MARKER MGR LISTING:", listings)
    let thisMap = this.map
    let marker;

    listings.forEach(listing => {
      console.log("ID:",listing.id)
      if(!(listing.id in this.markers)){
        console.log("not in marker")

        this.markers[listing.id] = listing
        
        marker = this.createMarker(listing)
        console.log("MARKER", marker)

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

  
}

export default MarkerManager