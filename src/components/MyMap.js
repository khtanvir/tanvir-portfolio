import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: 22.330370,
  lng: 91.832626
};

const MyMap = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA9R-gJ9ETqckpMNptzcr3cnUKZIFomQag"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

// export default React.memo(MyMap)
export default MyMap
