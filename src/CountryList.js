import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Paper';
import logo from './logo.svg';

import { BACKGROUND, US, UK, AUS, CAN, IRE, LOGO, CLOSE } from './assets';

class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [{ id: 1, name: 'United States' }, { id: 2, name: 'United Kingdom' }, { id: 3, name: 'Austrelia' }
                , { id: 5, name: 'Ireland' }, { id: 4, name: 'Canada' }]
        }
    }
    render() {
        return (
            <div style={{
                backgroundImage: 'url(' + BACKGROUND + ')', width: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                height: '90vh',
                paddingTop: 80

            }}>

                <img alt="" style={{ width: 200, height: 50 }} src={LOGO} />

                <span style={{ marginTop: 40, fontSize: 18 }}>Where are you sending money from</span>

                <div style={{
                    padding: 20,
                    margin: 20,
                    background: '#20bad2',
                    borderRadius: 20,
                    display: 'flex', width: 'auto', justifyContent: 'center',
                }}>
                    <Grid container>
                        {this.state.countries.map((country, index) => this.renderCountry(country, index))}
                    </Grid>
                </div>

                <img alt="close" src={CLOSE} style={{
                    width: 30,
                    height: 30, marginTop: 40
                }} onClick={() => this.props.history.goBack()}></img>
            </div >
        );
    }

    renderCountry(country, index) {

        return (

            <Grid item xs={6} style={{ marginTop: index > 1 ? 15 : 0, cursor: 'pointer' }}>
                <div style={{
                    flexDirection: 'column',
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    display: 'flex',
                }}
                    onClick={() => {
                        this.props.history.replace('countryLanding', country)
                    }}
                >
                    <span style={{ fontSize: 16 }}>
                        {country.name}
                    </span>
                </div>
            </Grid>
        )
    }
}

export default CountryList;