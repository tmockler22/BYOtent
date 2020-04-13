import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MyMap extends React.Component {
    constructor(props) {
      super(props);
    }

    displayMarkers() {
      const markerLi = Object.values(this.props.campsites);
      return markerLi.map((campsite, index) => {
        return <Marker title={campsite.title} key={index} id={index} position={{
          lat: campsite.lat,
          lng: campsite.lng,
          title: campsite.title
          }}
          onClick={() => this.props.history.push(`campsites/${campsite.id}`)} />
      })
    }

    render() {
      const center = { lat: this.props.latLng.latLng.lat, lng: this.props.latLng.latLng.lng };
      const containerStyle = {
        position: 'relative',
        width: '500px',
        height: '550px',
        margin: '20px 0px 0px 20px'
      };
      const mapStyles = {
        width: '500px',
        height: '550px',
      };  

    return (
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          containerStyle={containerStyle}
        initialCenter={center}
        >{this.displayMarkers()}
        </Map>
    
    );
  }
}

export default withRouter(GoogleApiWrapper({
  apiKey: 'AIzaSyCKTX6BIhzhCr42ljYJLS8vyidqP2kJAXE'
})(MyMap));