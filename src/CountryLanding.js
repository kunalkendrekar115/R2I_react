import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Paper';
import logo from './logo.svg';
class CountryLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [{ id: 1, name: 'United States' }, { id: 1, name: 'United Kingdom' }, { id: 1, name: 'Austrelia' }
                , { id: 1, name: 'Ireland' }, { id: 1, name: 'Canada' }]
        }
    }
    render() {
        return (
            <div>

                <Grid style={{ marginTop: 100 }} container>

                    {this.state.countries.map((country) =>
                        <Grid item xs={4} style={{ marginTop: 30, cursor:'pointer' }} align="center">
                            <div style={{
                                flexDirection: 'column',
                                cursor:'pointer',
                                justifyContent:'flex-start', 
                                display: 'flex',
                            }}>

                                <img alt="" style={{ width: 70, height:70 }}  src={logo} />

                                <Typography style={{ fontSize: 12, boxShadow: '0 0 0 0' }}>
                                    {country.name}
                                </Typography>
                            </div>
                        </Grid>)
                    }
                </Grid>
            </div >
        );
    }
}

export default CountryLanding;