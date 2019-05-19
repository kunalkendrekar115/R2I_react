import './App.css'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardTab from './DashboardTab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Login from './Login';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#20bad2'

    },
    root: {
        color: '#1074ac',      
    },
    selected: {
        color: 'white  !important'
    }
};

class Dashboard extends React.Component {
    state = {
        value: 0
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
                        classes={{ selected: classes.selected, root: classes.root }}
                        icon={<HomeIcon></HomeIcon>}
                        label="Home" />
                    <BottomNavigationAction
                        classes={{ selected: classes.selected, root: classes.root }}
                        label="Send" icon={<FavoriteIcon />} />
                    <BottomNavigationAction
                        classes={{ selected: classes.selected, root: classes.root }}
                        label="Transactions" icon={<LocationOnIcon />} />
                    <BottomNavigationAction
                        classes={{ selected: classes.selected, root: classes.root }}
                        label="Profile" icon={<LocationOnIcon />} />
                </BottomNavigation>

                <div style={{ height: '93%', position: 'fixed', overflow: 'auto' }}>
                    {this.state.value === 0 && <DashboardTab></DashboardTab>}
                </div>
            </div>

        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
