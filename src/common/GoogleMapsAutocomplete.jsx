import React, { useRef } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import Form from 'react-bootstrap/Form';

const GoogleMapsAutocomplete = ({ handlePlaceSelect }) => {
  const autocompleteRef = useRef(null);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD2mbxXISLWkdRVrm12QkliQYvAHurBrsk"
      libraries={['places']}
    >
      <Form.Group>
  <Form.Label htmlFor="location" className='visually-hidden'>Project Location*</Form.Label>
  <Autocomplete
    onLoad={(autocomplete) => {
      autocompleteRef.current = autocomplete;
    }}
    onPlaceChanged={() => handlePlaceSelect(autocompleteRef.current.getPlace())}
  >
    <Form.Control
      id="location"
      type="text"
      placeholder="Enter project Location"
    />
  </Autocomplete>
</Form.Group>

    </LoadScript>
  );
};

export default GoogleMapsAutocomplete;




