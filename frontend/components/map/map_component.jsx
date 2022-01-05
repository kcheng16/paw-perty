import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidUpdate() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    // pan map to city location on search
    if(this.props.city !== "ALL"){
      let geocoder = new google.maps.Geocoder()
      geocoder.geocode(
        {address: this.props.city},
        (results, status) => {
          if (status == 'OK') {
            this.map.setCenter(results[0].geometry.location);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
            console.log("STATUS:",status)
            console.log("RESULTs:",results)
          }
        }
      )
    }
    // Marker manager
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings)
  }
  
  render(){
    // var latLng = new google.maps.LatLng(51.433373, -0.712251);
    // map.panTo(latLng);
    return(
      <div id='map-container' ref={ map => this.mapNode = map }>
        {/* // this ref gives us access to the map dom node */}
      </div>
    )
  }
}

export default Map