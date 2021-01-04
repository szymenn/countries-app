import React from 'react';
import NavMenu from "./nav-menu.container";
import MapWrapper from "../components/map-wrapper.component";
import { Box, Container, Grid, List, ListItem, makeStyles, Paper, Card, Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { connect } from 'react-redux';
import Charts from '../components/charts.component';
import { SearchCountriesByRegionRequest } from '../redux/actions/countries';


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
    },
    card: {
        minWidth: 275,
    }
}));

const Home = (props) => {

    const classes = useStyles();



    const handleClick = (name) => {
        props.dispatch(SearchCountriesByRegionRequest(name));
    }


    return (
        <div style={{ width: '100%' }}>
         <NavMenu />

            <Box display="flex" flexDirection="row">
                <Box>
                <List>
                            <ListItem button onClick={() => handleClick('Africa')}>Africa</ListItem>
                            <ListItem button onClick={() => handleClick('Americas')}>Americas</ListItem>
                            <ListItem button onClick={() => handleClick('Asia')}>Asia</ListItem>
                            <ListItem button onClick={() => handleClick('Europe')}>Europe</ListItem>
                            <ListItem button onClick={() => handleClick('Oceania')}>Oceania</ListItem>
                        </List> 
                    </Box>
                    <Box alignSelf="center" style={{ width: '100%' }}>
                        <MapWrapper
                            countries={props.countries}
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpJFnOEgJOdSsSSd3jzGdVqzz4EGqb5s0&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `50vh` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Box>
            </Box>
        <Box flexDirection="column">
                    <Box alignSelf="center" style={{ width: '100%' }}>
                        <Charts countries={props.countries}></Charts>
                    </Box>
        </Box>

        </div>
    )

}

export default connect(mapStateToProps)(Home);








    // <div style={{width: '100%'}}>
    //     <NavMenu></NavMenu>

    //     <div className={classes.root}>
    //   <Grid container spacing={0}>
    //   <Grid item xs={4}>
    //         <List>
    //             <ListItem button  onClick={() => handleClick('Africa')}>Africa</ListItem>
    //             <ListItem button onClick={() => handleClick('Americas')}>Americas</ListItem>
    //             <ListItem button onClick={() => handleClick('Asia')}>Asia</ListItem>
    //             <ListItem button onClick={() => handleClick('Europe')}>Europe</ListItem>
    //             <ListItem button onClick={() => handleClick('Oceania')}>Oceania</ListItem>
    //         </List>
    //     </Grid>

    //     <Grid item xs={8} >
    //     <MapWrapper 
    //              countries={props.countries}
    //              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    //              loadingElement={<div style={{ height: `50%` }} />}
    //              containerElement={<div style={{ height: `100vh` }} />}
    //              mapElement={<div style={{ height: `50%` }} />}
    //          />
    //     </Grid>

    //     <Grid item xs={12} >
    //         <Charts countries={props.countries}></Charts>
    //     </Grid>
    //   </Grid>
    // </div>
    // </div>