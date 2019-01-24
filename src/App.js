import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Header from './components/header/Header';
import Results from './components/results/Results';
import './App.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.95,
      lng: 0.33
    },
    zoom: 11,
  };


  render() {
    // Colors of the map
    const mapOptions = {
      styles: [
       {
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#ffffff"
           },
           {
             "visibility": "on"
           }
         ]
       },
       {
         "elementType": "labels.icon",
         "stylers": [
           {
             "visibility": "off"
           }
         ]
       },
       {
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#616161"
           }
         ]
       },
       {
         "elementType": "labels.text.stroke",
         "stylers": [
           {
             "color": "#ffffff"
           }
         ]
       },
       {
         "featureType": "administrative.land_parcel",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#bdbdbd"
           }
         ]
       },
       {
         "featureType": "poi",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#eeeeee"
           }
         ]
       },
       {
         "featureType": "poi",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#edf1f8"
           }
         ]
       },
       {
         "featureType": "poi.park",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#9e9e9e"
           }
         ]
       },
       {
         "featureType": "road",
         "stylers": [
           {
             "color": "#edf1f8"
           }
         ]
       },
       {
         "featureType": "road",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#ebebeb"
           }
         ]
       },
       {
         "featureType": "road.arterial",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#757575"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "stylers": [
           {
             "color": "#d6d6d6"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#dadada"
           }
         ]
       },
       {
         "featureType": "road.highway",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#616161"
           }
         ]
       },
       {
         "featureType": "road.local",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#9e9e9e"
           }
         ]
       },
       {
         "featureType": "transit.line",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#e5e5e5"
           }
         ]
       },
       {
         "featureType": "transit.station",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#eeeeee"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [
           {
             "color": "#c9c9c9"
           }
         ]
       },
       {
         "featureType": "water",
         "elementType": "labels.text.fill",
         "stylers": [
           {
             "color": "#9e9e9e"
           }
         ]
       }
      ]
    };

    return (
      // Important! Always set the container height explicitly
      <div className="home-wrap">
        <Header/>
        <div className="flexbox">
          <Results/>
          <div className="map-wrap" style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyASlU-M3oV-RY9yQwGkI_FffiRiU87VyPw' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              options={mapOptions}
            >
              <AnyReactComponent
                lat={48.955413}
                lng={0.337844}
                text="My Marker"
              />
              <AnyReactComponent
                lat={49.955413}
                lng={0.337844}
                text="My Marker 2"
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="copyright">
          © Copyright La Poste 2018. Tous droits réservés
        </div>
      </div>
    );
  }
}

export default SimpleMap;