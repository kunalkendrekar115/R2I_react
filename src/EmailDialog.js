import { CHANGE_COUNTRY, CLOSE, DASH_LOGO } from './assets';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './styles.css'


const styles = {
    paper: {
        backgroundColor: "transparent",
        boxShadow: 'none',
        margin: 20
    }
};


class EmailDialog extends React.Component {

    render() {

        const { classes } = this.props
        return (
            <Dialog
                fullWidth
                onClick={this.props.close}
                maxWidth={'lg'}
                PaperProps={{ classes: { root: classes.paper } }}
                autoScrollBodyContent={false}
                open={this.props.showDialog}>
                <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    backgroundColor: 'transparent'
                }}>
                    <div style={{
                        padding: 25, display: 'flex',
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
                        }}
                            onClick={this.props.submit}>
                            <span style={{ fontSize: 16 }}>Submit</span>
                        </Button>
                    </div>

                    <img alt="close" src={CLOSE} style={{
                        width: 40,
                        height: 40, marginTop: 40
                    }} onClick={this.props.close}></img>
                </div>
            </Dialog>
        );
    }
}

EmailDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailDialog);