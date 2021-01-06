import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { Container, Grid } from "@material-ui/core";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';


const MapWrapper = withScriptjs(withGoogleMap((props) => {
    const google = window.google

    const markers = props.countries.map((country) => {
        if (country.latlng.length !== 0) {
            return (

                <div key={country.name}>
                    <MarkerWithLabel
                        position={{ lat: country.latlng[0], lng: country.latlng[1] }}
                        labelAnchor={new google.maps.Point(0, 0)}
                        labelStyle={{ fontSize: "10px", backgroundColor: 'none', color: 'red' }}
                    >
                        <div>{country.name}</div>
                    </MarkerWithLabel>
                </div>
            )
        }
    });

    return (
            <GoogleMap
                defaultZoom={2}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {markers}
            </GoogleMap>
    )
}))

export default MapWrapper;

    //     return <MarkerWithLabel key={country.name} position={{ lat: country.latlng[0], lng: country.latlng[1] }} 
    //   labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}>
    //         HEHEHE
    //     </MarkerWithLabel>