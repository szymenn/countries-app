import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { SearchCountriesByNameRequest, SearchCountriesByRegionRequest } from '../redux/actions/countries';
import MapIcon from '@material-ui/icons/Map';
import BarChartIcon from '@material-ui/icons/BarChart';
import { OpenCloseDrawer } from '../redux/actions/drawer';
import { ChangeComponent } from '../redux/actions/drawer';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const mapStateToProps = (state) => ({
    countries: state.countries.countries,
    drawer: state.drawer.drawer
})

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        margin: 0
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    inputRoot: {
        margin: theme.spacing(1),
        color: 'inherit',
    },
    inputInput: {
        marginTop: theme.spacing(2),
        color: 'white'
    },
    title: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: 'white'

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        borderColor: 'white',
        color: 'white'
    },
    inputLabel: {
        color: 'white'
    }
}));

const NavMenu = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = useState('');

    const [region, setRegion] = useState('');

    const handleOpenCloseDrawer = () => {
        props.dispatch(OpenCloseDrawer());
    };


    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
        if (e.target.value !== '') {
            props.dispatch(SearchCountriesByNameRequest(e.target.value));
        }
    }

    const handleSelectChange = (e) => {
        setRegion(e.target.value);
        props.dispatch(SearchCountriesByRegionRequest(e.target.value));
    }

    const handleClick = (component) => {
        props.dispatch(ChangeComponent(component));
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.drawer.open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleOpenCloseDrawer}
                        edge="start"
                        className={clsx(classes.menuButton, props.drawer.open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Persistent drawer
          </Typography>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label" className={classes.inputLabel}>Region</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={region}
                            onChange={handleSelectChange}
                            className={classes.select}
                        >
                            <MenuItem value={'Africa'}>Africa</MenuItem>
                            <MenuItem value={'Americas'}>Americas</MenuItem>
                            <MenuItem value={'Asia'}>Asia</MenuItem>
                            <MenuItem value={'Europe'}>Europe</MenuItem>
                            <MenuItem value={'Oceania'}>Oceania</MenuItem>

                        </Select>
                    </FormControl>
                    
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
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.drawer.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleOpenCloseDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Map', 'Chart'].map((text, index) => (
                        <ListItem button key={text} onClick={() => handleClick(text)}>
                            <ListItemIcon>{index === 0 ? <MapIcon /> : <BarChartIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: props.drawer.open,
                })}
            >
                <div className={classes.drawerHeader} />
            </main>
        </div>
    )
}

export default connect(mapStateToProps)(NavMenu)



        // <AppBar position="static" children={<input />}>
        //     <Toolbar>
        //         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        //         </IconButton>
        //         <Typography variant="h6" className={classes.title}>
        //             Countries 
        //         </Typography>

        //         <Input
        //             placeholder="Search"
        //             classes={{
        //                 root: classes.inputRoot,
        //                 input: classes.inputInput
        //             }}
        //             onChange={handleChange}
        //         >
        //         </Input>
        //     </Toolbar>
        // </AppBar>

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