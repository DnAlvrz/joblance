import {useEffect, useState, useRef, useCallback} from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Dimmer, Loader, Form } from 'semantic-ui-react';

function Map({onMarkerChange, setCoords, coords}) {
  const[map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState();
  const [markerPosition, setMarkerPosition]= useState();
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
  });

  const containerStyle = {
    width: '850px',
    height: '400px'
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(currentPosition);
    map.fitBounds(bounds);
    setMap(map)
    mapRef.current = map;
  }, [currentPosition]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, []);


  useEffect (() => {
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
  }, []);

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
    console.log(coords)
  }
  
  return isLoaded ? (
    <>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Latitude'  readOnly value={coords.lat} />
          <Form.Input fluid label='Longitude' readOnly value={coords.lng}/>
        </Form.Group>
      </Form>

      <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={9}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF
            onLoad={onMarkerLoad}
            position={markerPosition ? markerPosition : currentPosition}
            draggable={true}
            onDragEnd={onDragEnd}
        />
      </GoogleMap>
    </>
    ) : <>
      <Dimmer active={isLoaded} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </>
}

export default Map