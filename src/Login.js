import { BACKGROUND, LOGO, PROFILE_ICON } from './assets';
import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const MPIN = "min"
const PASSWORD = "password"

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            SELECTED_MODE: PASSWORD
        }
    }


    render() {

        const { SELECTED_MODE } = this.state
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
                height: '100vh',
                paddingTop: 50

            }}>

                <img alt="" style={{ width: 170, height: 40 }} src={LOGO} />

                <img alt="" style={{ width: 100, height: 100, marginTop: 30 }} src={PROFILE_ICON} />


                <span style={{ marginTop: 30, fontSize: 14 }}>kunalkendrekar115@gmail.com</span>

                <div style={{
                    display: 'flex', flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20, width: '100%', height: 35
                }}>

                    <div style={{

                        display: 'flex', height: '100%', width: 110, border: '1px  solid #1074ac',
                        borderRadius: '20px 0px 0px 20px', justifyContent: 'center', alignItems: 'center',
                        background: SELECTED_MODE === PASSWORD ? '#1074ac' : 'white'

                    }} onClick={() => this.setState({ SELECTED_MODE: PASSWORD })}>

                        <span style={{ fontSize: 14, color: SELECTED_MODE === PASSWORD ? 'white' : 'black' }}>Password</span>

                    </div>
                    <div style={{
                        borderRadius: '0px 20px 20px 0px',
                        justifyContent: 'center', alignItems: 'center',
                        display: 'flex', height: '100%', width: 110, border: '1px solid #1074ac',
                        background: SELECTED_MODE === MPIN ? '#1074ac' : 'white'
                    }} onClick={() => this.setState({ SELECTED_MODE: MPIN })}>
                        <span style={{ fontSize: 14, color: SELECTED_MODE === MPIN ? 'white' : 'black' }}>MPIN</span>
                    </div>
                </div>

                {this.renderPassWordMPIN()}

            </div>
        )
    }

    renderPassWordMPIN() {
        if (this.state.SELECTED_MODE === PASSWORD) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%', margin: 20, justifyContent: 'center'
                }}>
                    <TextField
                        style={{ width: '80%' }}
                        id="standard-name"
                        label="Password"
                        margin="none" />
                    <Button style={{
                        marginTop: 30,
                        width: '80%', height: 50,
                        borderRadius: 25,
                        alignItems: 'center', justifyContent: 'center',
                        background: '#faa62a', display: 'flex'
                    }} >
                        <span style={{ fontSize: 20 }}>Submit</span>
                    </Button>
                    <span style={{ fontSize: 14, marginTop: 20 }}>Forgot Password</span>
                </div>
            )
        } else {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%', margin: 20, justifyContent: 'center'
                }}>
                    <TextField
                        type="number"
                        style={{ width: '80%' }}
                        id="standard-name"
                        label="MPIN"
                        margin="none" />
                    <Button style={{
                        marginTop: 30,
                        width: '80%', height: 50,
                        borderRadius: 25,
                        alignItems: 'center', justifyContent: 'center',
                        background: '#faa62a', display: 'flex'
                    }} >
                        <span style={{ fontSize: 20 }}>Submit</span>
                    </Button>
                    <span style={{ fontSize: 14, marginTop: 20 }}>Forgot MPIN</span>
                </div>
            )
        }
    }
}
