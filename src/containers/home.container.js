import React from 'react';
import NavMenu from "./nav-menu.container";
import MapWrapper from "../components/map-wrapper.component";
import { Box, Container, Grid, List, ListItem, makeStyles, Paper } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { connect } from 'react-redux';
import Charts from '../components/charts.component';


const mapStateToProps = (state) => ({
    countries: state.countries.countries
})


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    charts: {
        padding: theme.spacing(2),
        textAlign: 'center'
    }
}));

const Home = (props) => {

    const classes = useStyles();

    return (
        <div style={{width: '100%'}}>
        <NavMenu></NavMenu>

        <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6} style={{width: '80%'}}>
            <Charts countries={props.countries}></Charts>
        </Grid>
        <Grid item xs={6} style={{width: '80%'}}>
        <MapWrapper 
                 countries={props.countries}
                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpJFnOEgJOdSsSSd3jzGdVqzz4EGqb5s0&v=3.exp&libraries=geometry,drawing,places"
                 loadingElement={<div style={{ height: `100%` }} />}
                 containerElement={<div style={{ height: `100vh` }} />}
                 mapElement={<div style={{ height: `100%` }} />}
             />
        </Grid>
      </Grid>
    </div>
    </div>
    )

}

export default connect(mapStateToProps)(Home);





// <div style={{ width: '100%' }}>
//     <Box display="flex" flexDirection="column">
//         <NavMenu />
//         <Box alignSelf="center" style={{ width: '80%' }}>
//             <MapWrapper
//                 countries={props.countries}
//                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpJFnOEgJOdSsSSd3jzGdVqzz4EGqb5s0&v=3.exp&libraries=geometry,drawing,places"
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `100vh` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//         </Box>
//         <Box alignSelf="center" style={{ width: '80%' }}>
//             <Charts></Charts>
//         </Box>

//     </Box>
// </div>