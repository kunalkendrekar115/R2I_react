import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CHANGE_COUNTRY, CLOSE, DASH_LOGO } from './assets';

import Button from '@material-ui/core/Button';
import { Carousel } from 'react-responsive-carousel';
import Dialog from '@material-ui/core/Dialog';
import ExchangeCalculator from './ExchangeCalculator';
import React from 'react';
import TextField from '@material-ui/core/TextField';

class CountryLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = { country: {}, showDialog: false }
    }

    componentDidMount() {
        console.log(this.props.location.state)
        this.setState({ country: this.props.location.state })
    }
    render() {
        return (
            <div style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                <div style={{
                    display: 'flex', width: '100%',
                    justifyContent: 'space-between',
                    height: 50, background: '#20bad2',
                }}>
                    <img alt="img" style={{
                        width: 130, height: 38,
                        objectFit: 'contain',
                        marginLeft: 10, marginTop: 5
                    }} src={DASH_LOGO}></img>

                    <div
                        style={{
                            float: 'right',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            paddingLeft: 20,
                            paddingTop: 5,
                            minWidth: 80,
                            textAlign: 'center',
                            paddingRight: 38,
                            backgroundImage: 'url(' + CHANGE_COUNTRY + ')'
                        }}
                        onClick={() => this.props.history.push('countryList')}
                    >
                        <span style={{ fontSize: 16, marginTop: 5 }}>{this.state.country.name}</span>
                    </div>
                </div>

                <div style={{ paddingTop: 20, paddingBottom: 20, background: '#20bad2', display: 'flex' }}>

                    <Carousel
                        infiniteLoop={true}
                        autoPlay
                        showArrows={false}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}>
                        <img alt="img1" style={{ width: '100%', height: '100%' }} src="http://test.remit2india.com/dynamicContent/TOML/Images/UK_01.png" />
                        <img alt="img1" style={{ width: '100%', height: '100%' }} src="http://test.remit2india.com/dynamicContent/TOML/Images/UK_02.png" />

                        <img alt="img1" style={{ width: '100%', height: '100%' }} src="http://test.remit2india.com/dynamicContent/TOML/Images/UK_03.png" />

                    </Carousel >
                </div>
                <ExchangeCalculator
                    onClick={() => this.setState({ showDialog: true })}
                ></ExchangeCalculator>

                <Dialog
                    fullWidth
                    onClick={() => this.setState({ showDialog: false })}
                    maxWidth={'lg'}
                    aria-labelledby="max-width-dialog-title"
                    autoScrollBodyContent={false}
                    open={this.state.showDialog}>
                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        backgroundColor: 'transparent'
                    }}>
                        <div style={{
                            padding: 20, display: 'flex',
                            width: '100%',
                            marginTop: 20,
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            flexDirection: 'column', backgroundColor: '#d1d1d1'
                        }}
                            onClick={(e) => e.stopPropagation()}>

                            <span>Get started with your e-mail</span>
                            <TextField
                                fullWidth
                                id="standard-name"
                                label="Email ID"
                                margin="dense" />

                            <Button style={{
                                marginTop: 20,
                                width: '100%', height: 40,
                                borderRadius: 25,
                                alignItems: 'center', justifyContent: 'center',
                                background: '#faa62a', display: 'flex'
                            }} onClick={() => { this.props.history.push('login') }}>
                                <span style={{ fontSize: 12 }}>Submit</span>
                            </Button>
                        </div>

                        <img alt="close" src={CLOSE} style={{
                            width: 40,
                            height: 40, marginTop: 40
                        }} onClick={() => this.setState({ showDialog: false })}></img>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default CountryLanding;