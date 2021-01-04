import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography, InputBase, Input, List, ListItem } from "@material-ui/core";
import { Search } from '@material-ui/icons';
import { connect } from 'react-redux';
import { SearchCountriesByNameRequest } from '../redux/actions/countries';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

const mapStateToProps = (state) => ({
    countries: state.countries.countries
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        color: 'white'
    },
    searchButton: {
        color: 'white'
    }
}));

const NavMenu = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
        if (e.target.value !== '') {
            props.dispatch(SearchCountriesByNameRequest(e.target.value));
        }
    }

    const handleClick = (e) => {
        console.log(value);
        props.dispatch(SearchCountriesByNameRequest(value));
    }

    return (
        <AppBar position="static" children={<input />}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Countries 
                </Typography>
              
                <Input
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    onChange={handleChange}
                >
                </Input>
            </Toolbar>
        </AppBar>
    )
}

export default connect(mapStateToProps)(NavMenu)



    // return (
    //     <AppBar position="static" children={<input />}>
    //         <Toolbar>
    //             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //             </IconButton>
    //             <Typography variant="h6" className={classes.title}>
    //                 Countries 
    //             </Typography>
    //             <Input
    //                 placeholder="Search"
    //                 classes={{
    //                     root: classes.inputRoot,
    //                     input: classes.inputInput
    //                 }}
    //                 onChange={handleChange}
    //             >
    //             </Input>
    //             <IconButton onClick={handleClick} aria-label="search"><Search className={classes.searchButton}></Search></IconButton>
    //         </Toolbar>
    //     </AppBar>
    // )