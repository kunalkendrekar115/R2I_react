import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CHANGE_COUNTRY, CLOSE, DASH_LOGO } from './assets';
import { Carousel } from 'react-responsive-carousel';
import ExchangeCalculator from './ExchangeCalculator';
import React from 'react';

import EmailDialog from './EmailDialog';




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
        const { classes } = this.props;
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

                <EmailDialog
                    showDialog={this.state.showDialog}
                    submit={() => this.props.history.push('login')}
                    close={() => this.setState({ showDialog: false })}
                ></EmailDialog>
            </div>
        );
    }
}

export default CountryLanding