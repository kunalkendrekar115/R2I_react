import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import { EQUALS } from './assets';

export default class ExchangeCalculator extends Component {


  constructor(props) {
    super(props)
    this.state = { currentTab: 'indicative' }
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: 'auto', alignItems: 'center', padding: 16 }}>

        <span style={{ fontSize: 22, margin: 12 }}>Today's Exchange Rate</span>

        <div style={{ display: 'flex', width: '100%', height: 50 }}>

          <div style={{
            display: 'flex',
            flex: 1, width: '100%', height: '100%',
            position: 'relative',
            justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
          }} className={this.state.currentTab === 'indicative' ? 'activeTab' : 'inactiveTab'} onClick={() => this.setState({ currentTab: 'indicative' })}>
            <span style={{ fontSize: 14 }}>Indicative Rate</span>
            <span style={{ fontSize: 18 }}>INR 90.00</span>

            <div style={{
              width: '100%', background: this.state.currentTab === 'indicative' ? '#1074ac' : '#c5ecff',
              height: 2, position: 'absolute', bottom: 0
            }}></div>

          </div>

          <div style={{
            display: 'flex',
            flex: 1, width: '100%', height: '100%',
            position: 'relative',
            justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
          }} className={this.state.currentTab === 'guranteed' ? 'activeTab' : 'inactiveTab'} onClick={() => this.setState({ currentTab: 'guranteed' })}>
            <span style={{ fontSize: 14 }}>Guranteed Rate</span>
            <span style={{ fontSize: 18 }}>INR 90.00</span>

            <div style={{
              width: '100%', background: this.state.currentTab === 'guranteed' ? '#1074ac' : '#c5ecff',
              height: 2, position: 'absolute', bottom: 0
            }}></div>

          </div>

        </div>
        <span style={{ fontSize: 16, margin: 18 }}>Calculate the amount you wish to send</span>

        <div style={{
          display: 'flex', width: '100%', justifyContent: 'center',
          alignItems: 'center'
        }}>

          <div
            style={{ display: 'flex', flex: 1, height: 60, padding: 8 }}>

            <div
              style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
              <span style={{ fontSize: 12 }}>Sending Amount</span>

              <div style={{ display: 'flex', height: 30, alignItems: 'flex-end', marginTop: 10, }}>
                <span style={{ fontSize: 16, marginBottom: 2 }}>USD</span>
                <input type="number" style={{ marginLeft: 4, width: '100%', border: 'none', fontSize: 20 }}></input>
              </div>
              <div style={{ width: '100%', height: 2, marginTop: 2, background: '#20bad2' }}></div>
            </div>

          </div>
          <img alt="eq"
            style={{ width: 40, height: 40 }}
            src={EQUALS}></img>

          <div
            style={{ display: 'flex', flex: 1, height: 60, padding: 8 }}>

            <div
              style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: 12 }}>Receiving Amount</span>

              <div style={{ display: 'flex', height: 30, marginTop: 10, alignItems: 'flex-end' }}>
                <input type="number" style={{ marginLeft: 4, width: '100%', border: 'none', fontSize: 20 }}></input>
                <span style={{ fontSize: 16, marginBottom: 2 }}>INR</span>
              </div>
              <div style={{ width: '100%', height: 2, marginTop: 2, background: '#20bad2' }}></div>
            </div>
          </div>
        </div>

        <Button style={{
          marginTop: 30,
          width: '100%', height: 50,
          borderRadius: 25,
          alignItems: 'center', justifyContent: 'center',
          background: '#faa62a', display: 'flex'
        }} onClick={this.props.onClick}>
          <span style={{ fontSize: 20 }}>Submit</span>
        </Button>
      </div>
    )
  }
}
