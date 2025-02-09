import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const LocationSearch = () => {
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const autocompleteRef = useRef(null);

  const handlePlaceSelect = async () => {
    const place = autocompleteRef.current.getPlace();

    var result=JSON.parse(JSON.stringify(place));
   
    let city, state, locality, country, country_code;

    result.address_components.forEach(component => {
        if (component.types.includes('locality')) {
            city = component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
            state = component.long_name;
        } else if (component.types.includes('sublocality_level_1')) {
            locality = component.long_name;
        } else if (component.types.includes('country')) {
            country = component.long_name;
            country_code = component.short_name;
        }
    });

    if(city==undefined){
        city=state;
    }   
    if(state==undefined){
        state =city;
    }
    if(locality==undefined){
        locality=city;
    }
    

    const formdata= {
      country:country,
      country_code: country_code,
      state:state,
      city:city,
      locality:locality,
    }

    const response = await fetch('http://localhost:8000/api/admin/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FkbWluL2xvZ2luIiwiaWF0IjoxNzEyMDMyNDQ4LCJleHAiOjE3MTIwMzYwNDgsIm5iZiI6MTcxMjAzMjQ0OCwianRpIjoiS0RzWlFhaktNZzE5bWJmTiIsInN1YiI6IjIiLCJwcnYiOiJhMjNiNTczZGM3M2E0MDdlOGRlNTNiNDg2ZjM2ODg2YWRmNzBjNDgzIn0.v2LMsrbVmYAecT5hH1ccygP1gKRzndn3Gji18OsyRaE"
        },
        body: JSON.stringify(formdata),
      });

      var result = await response.json();
      if(!result.status){
        alert(result.message);
      }else{
      }

    // call api 

    setSelectedPlace(place);
    if (map && place.geometry) {
      map.panTo(place.geometry.location);
    }
  };

  const handleMapLoad = (map) => {
    setMap(map);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD2mbxXISLWkdRVrm12QkliQYvAHurBrsk"
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={{ lat: 0, lng: 0 }}
        zoom={2}
        onLoad={handleMapLoad}
      >
        <Autocomplete
          onLoad={(autocomplete) => {
            autocompleteRef.current = autocomplete;
          }}
          onPlaceChanged={handlePlaceSelect}
        >
          <label htmlFor="location-input" className="visually-hidden">Enter a location</label>
          <input
          autoComplete="off" 
          id='location-input'
            type="text"
            placeholder="Enter a location"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '240px',
              height: '32px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              outline: 'none',
              textOverflow: 'ellipsis',
              position: 'absolute',
              left: '50%',
              marginLeft: '-120px'
            }}
            className='className="grayBorder"'
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationSearch;
