import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';
import CountryLanding from './CountryLanding';





function App(props) {

  return (
    <div>
      <CountryLanding></CountryLanding>
    </div>
  );
}


export default App
