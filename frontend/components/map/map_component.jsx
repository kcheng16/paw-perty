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

    // Marker manager
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings)
    console.log("COMPONENT-DID-MOUNT:", this.props.listings)
  }
  
  render(){

    return(
      <div id='map-container' ref={ map => this.mapNode = map }>
        {/* // this ref gives us access to the map dom node */}
      </div>
    )
  }
}

export default Map