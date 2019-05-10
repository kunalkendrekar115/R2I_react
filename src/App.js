import './App.css';

import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router } from "react-router-dom";

import CountryLanding from './CountryLanding';
import CountryList from './CountryList';
import CountrySelection from './CountrySelection';
import Login from './Login';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import logo from './logo.svg';

function App(props) {

  return (
    <div>
      <Router>
         <Route path="/" exact component={CountrySelection} /> 
        <Route path="/countryLanding" exact component={CountryLanding} />
        <Route path="/countryList" exact component={CountryList} />
        <Route path="/login" exact component={Login} />
    
      </Router>

    </div>
  );
}


export default App
