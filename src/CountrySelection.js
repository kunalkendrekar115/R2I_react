import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Paper';
import logo from './logo.svg';

import { BACKGROUND, US, UK, AUS, CAN, IRE, LOGO } from './assets';
import { installPromptEvent } from '.';


class CountrySelection extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            countries: [{ id: 1, name: 'United States' },
            { id: 2, name: 'United Kingdom' }, { id: 3, name: 'Austrelia' }
                , { id: 5, name: 'Ireland' }, { id: 4, name: 'Canada' }]
            , installPromptEvent: null
        }
    }

    componentDidMount() {
        window.addEventListener('beforeinstallprompt', (event) => {
            // Prevent Chrome <= 67 from automatically showing the prompt
            event.preventDefault();
            // Stash the event so it can be triggered later.
            this.setState({ installPromptEvent: event })
        });
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
                <Grid container>
                    {this.state.countries.map((country) => this.renderCountry(country))}
                </Grid>

                {this.state.installPromptEvent && <Button style={{
                    marginTop: 40,
                    width: '80%', height: 50,
                    borderRadius: 25,
                    alignItems: 'center', justifyContent: 'center',
                    background: '#faa62a', display: 'flex'
                }} onClick={() => this.state.installPromptEvent.prompt()}>
                    <span style={{ fontSize: 20 }}>Add R2I to Home Screen</span>
                </Button>}
            </div >
        );
    }

    renderCountry(country) {

        let flag = ''

        switch (country.id) {
            case 1:
                flag = US
                break
            case 2:
                flag = UK
                break
            case 3:
                flag = AUS
                break
            case 4:
                flag = CAN
                break
            case 5:
                flag = IRE
                break
            default:

        }
        return (

            <Grid item xs={4} style={{ marginTop: 45, cursor: 'pointer' }} align="center">
                <div style={{
                    flexDirection: 'column',
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    display: 'flex',
                }}
                    onClick={() => {
                        this.props.history.push('countryLanding', country)
                    }}
                >
                    <img alt="" style={{ width: 60, height: 60 }} src={flag} />

                    <span style={{ fontSize: 14, boxShadow: '0 0 0 0', marginTop: 10 }}>
                        {country.name}
                    </span>
                </div>
            </Grid>
        )
    }
}

export default CountrySelection;