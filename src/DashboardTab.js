import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { APP_ICON, CALL_US, CHANGE_COUNTRY, CLOSE, DASH_LOGO, NOTIFICATION, OFFERS, OFFERS_ACTIVE } from './assets';

import Button from '@material-ui/core/Button';
import { Carousel } from 'react-responsive-carousel';
import Dialog from '@material-ui/core/Dialog';
import ExchangeCalculator from './ExchangeCalculator';
import React from 'react';
import TextField from '@material-ui/core/TextField';

class DashboardTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { country: {}, showDialog: false, isBannerOpened: true }
    }

    componentDidMount() {

    }
    render() {

        const { isBannerOpened } = this.state
        return (
            <div style={{ flexDirection: 'column', width: 'auto' }}>
                <div style={{
                    display: 'flex', width: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: 12,
                    boxSizing: 'border-box',
                    height: 62, background: '#20bad2',
                }}>

                    <img alt="" style={{ width: 40, height: 40 }} src={APP_ICON}></img>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                        <span style={{ fontSize: 12 }}>Welcome</span>
                        <span style={{ fontSize: 16 }}>User Name</span>
                    </div>

                    <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 10 }}>
                        <img alt="" style={{
                            width: 25, height: 25,
                            marginRight: 25
                        }} src={isBannerOpened ? OFFERS_ACTIVE : OFFERS}
                            onClick={() => this.setState((prev) => { return { isBannerOpened: !prev.isBannerOpened } })}></img>
                        <img alt="" style={{ width: 25, height: 25, marginRight: 25 }} src={CALL_US}></img>
                        <img alt="" style={{ width: 25, height: 25 }} src={NOTIFICATION}></img>
                    </div>
                </div>

                <div style={{
                     marginTop: -2,
                    transition: 'height 0.5s ease-in-out',
                    background: '#20bad2', display: 'flex',
                    height: isBannerOpened ? 180 : 0,
                    overflow: 'hidden'
                }}>

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
                    onClick={() => { }}
                ></ExchangeCalculator>


            </div>
        );
    }
}

export default DashboardTab;