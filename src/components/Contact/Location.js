import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 52.40409, lng: 16.92206 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Location() {
  return (
    <WrappedMap
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAdwD9lcuvW1GdCzWdFyDuKQ1vk6Lay__w"
      }
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
}
