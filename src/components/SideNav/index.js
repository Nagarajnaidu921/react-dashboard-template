import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TempSideNav from './TempSideNav';
import PermanentSideNav from './PermanentSideNav';
import { Hidden } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}))

const SideNav = (props) => {
    const classes = useStyles();


    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        <TempSideNav
            open={props.tempSideNavOpen}
            onClose={props.handleTempSideNavToggle}
            classes={{ paper: classes.drawerPaper }}
        />
        <Hidden xsDown>
            <PermanentSideNav
            handlePermanentSideNavOpen={props.handlePermanentSideNavOpen}/>
        </Hidden>
    </nav>
    );
}

export default SideNav