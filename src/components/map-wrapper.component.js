import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { Container, Grid } from "@material-ui/core";


const MapWrapper = withScriptjs(withGoogleMap((props) => {
    const markers = props.countries.map((country) => {
        return <Marker key={country.name} position={{ lat: country.latlng[0], lng: country.latlng[1] }} />
    });

    return (
        <Grid>
            <GoogleMap
                defaultZoom={1}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                {markers}
            </GoogleMap>
        </Grid>
    )
}))

export default MapWrapper;

