import './App.css'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Login from './Login';

const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#20bad2'
    },
};

class Dashboard extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div style={{ width: '100%' }}>


                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    style={{ width: '100%' }}
                    className={classes.stickToBottom}>

                    <BottomNavigationAction
                        style={{ width: '33%', color: '#1074ac', fontSize: 9 }}
                        icon={<HomeIcon></HomeIcon>}
                        label="Recents" />
                    <BottomNavigationAction
                        style={{ width: '33%', color: '#1074ac' }}
                        label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction
                        style={{ width: '33%', color: '#1074ac' }}
                        label="Nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction
                        style={{ width: '33%', color: '#1074ac' }}
                        label="Nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction
                        style={{ width: '33%', color: '#1074ac' }}
                        label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>

                <div style={{ marginBottom: 60 }}>
                    {this.state.value === 0 && <Login></Login>}
                </div>
            </div>

        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
