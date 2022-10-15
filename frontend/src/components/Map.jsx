import {useEffect, useState, useRef, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Dimmer, Loader } from 'semantic-ui-react';

function Map({setCoords,draggable, coords, width, height, zoom}) {
  const[map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({
    lat: coords.lat,
    lng:coords.lng
  });
  const [markerPosition, setMarkerPosition]= useState();
  const markerRef = useRef(null);
  const mapRef = useRef(null);


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  });

  const containerStyle = {
    width: width || '850px',
    height: height || '400px'
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(currentPosition);
    geocodeLatLng();
    map.fitBounds(bounds);
    setMap(map);
    mapRef.current = map;
  }, [currentPosition]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);

  const geocodeLatLng = () => {
    var requestOptions = {
      method: 'GET',
    };
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${coords.lat}&lon=${coords.lng}&apiKey=${process.env.REACT_APP_REVERSE_GEOCODING_API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result =>{
        alert(`${result.features[0].properties.street } ${result.features[0].properties.city}`)
      })
      .catch(error => alert('error', error));
  }

  useEffect (() => {
    if(!coords) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          setCurrentPosition({
              lat:position.coords.latitude,
              lng: position.coords.longitude
          })
          setCoords((prevState)=>
           ({...prevState, ...currentPosition})
          );
        });
      } else {
        console.log("Not Available");
      }
    }
  }, [coords, currentPosition, setCoords]);

  const onMarkerLoad = useCallback(
    marker => {
      markerRef.current = marker;
    },
    []
  );

  function onDragEnd(...args) {
    setCurrentPosition((prevState)=> ({
      ...prevState,
      lat: markerRef.current.position.lat(),
      lng: markerRef.current.position.lng()
    }));
    setCoords((prevState)=> ({
      ...prevState,
      lat: markerRef.current.position.lat(),
      lng: markerRef.current.position.lng()
    }));
  }

  return isLoaded ? (
    <>
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom= {9}
          onLoad={onLoad}
          onUnmount={onUnmount}
      >
      <MarkerF
        onLoad={onMarkerLoad}
        position={markerPosition ? markerPosition : currentPosition}
        draggable={draggable}
        onDragEnd={onDragEnd}
      />
      </GoogleMap>
    </>
    ) :
    <>
      <Dimmer active={isLoaded} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </>
}

export default Map