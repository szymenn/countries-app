import logo from './logo.svg';
import './App.css';
import {MapWrapper} from "./components/map-wrapper.component";
import {AppBar} from "@material-ui/core";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/home.container";

export const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}

