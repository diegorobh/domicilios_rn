import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const DomicilioDetail = ()=>{

// }

const MapComponent = ()=>{
    return (
      <MapView
         style={{width:'100%', height:220, backgroundColor:'blue', margin:0, padding:0 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />
    );
}

export default MapComponent;