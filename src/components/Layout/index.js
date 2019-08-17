import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopNavbar from '../TopNavbar';
import TempSideNav from '../SideNav/TempSideNav';
import PermanentSideNav from '../SideNav/PermanentSideNav';
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

const Layout = (props) => {
    const classes = useStyles();
    const [tempSideNavOpen, setTempSideNavOpen] = useState(false);
    const [permanentSideNavOpen, setPermanentSideNavOpen] = useState(false);

    const handleTempSideNavToggle = () => {
        setTempSideNavOpen(!tempSideNavOpen)
    }
    const handlePermanentSideNavToggle = () => {
        setPermanentSideNavOpen(!permanentSideNavOpen);
    }

    return (
        <>
            <TopNavbar
                menuOnClick={handleTempSideNavToggle}
                permanentSideNavOpen={permanentSideNavOpen}
            />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <TempSideNav
                    open={tempSideNavOpen}
                    onClose={handleTempSideNavToggle}
                    classes={{ paper: classes.drawerPaper }}
                />
                <Hidden xsDown>
                    <PermanentSideNav
                        handleMouseEvent={handlePermanentSideNavToggle}
                        open={permanentSideNavOpen}
                    />
                </Hidden>
            </nav>
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout;